import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { AccessTokenType, LocalTokenInterface } from 'CommonTypes';
import * as Helper from '@Util/Helper';
import { _Alert_ } from '@Utils';
import * as _ from 'lodash';

// FIXME: 2021-02-09 00:04  console 에 에러 메시지 안보이게 처리...
interface serviceInterface {
    method: 'get' | 'post' | 'delete' | 'put';
    url: string;
    payload: any;
}

const apiBaseURLL: string | undefined = _.isUndefined(process.env.REACT_APP_API_URL)
    ? 'http://localhost'
    : process.env.REACT_APP_API_URL;

export const axiosDefaultHeader: AxiosRequestConfig = {
    baseURL: apiBaseURLL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Request-Client-Type': 'S01010',
        Accept: 'application/json',
        Authorization: '',
    },
};

// const setTokenData = (tokenData: AccessTokenType, axiosClient: AxiosInstance): void => {
const setTokenData = ({ expires_in, access_token, refresh_token }: LocalTokenInterface): void => {
    Helper.saveRefreshToken({
        expires_in,
        access_token,
        refresh_token,
    });
};

/**
 * refresh Token.
 * 토큰 리프레쉬
 */
const handleTokenRefresh = (): Promise<LocalTokenInterface> => {
    Helper.COLORLOG(':: Try Token Refresh :: ', 'warning');
    const refreshToken = Helper.getRefreshToken();
    return new Promise((resolve, reject) => {
        const _thisAxios_: AxiosInstance = axios.create(axiosDefaultHeader);
        _thisAxios_
            .post<LocalTokenInterface>(`${apiBaseURLL}/api/v1/auth/token-refresh`, { refresh_token: refreshToken })
            .then(({ data }) => {
                Helper.COLORLOG(':: Success Token Refresh :: ', 'success');
                resolve({
                    access_token: data.access_token,
                    refresh_token: data.refresh_token,
                    expires_in: data.expires_in,
                });
            })
            .catch(() => {
                Helper.COLORLOG(':: Error Token Refresh :: ', 'error');
                reject({
                    access_token: '',
                    refresh_token: '',
                    expires_in: '',
                });
            });
    });
};

/**
 * axios Request 에 토큰 추가.
 * @param request
 * @param access_token
 */
const attachTokenToRequest = (request: AxiosRequestConfig, access_token: any) => {
    request.headers['Authorization'] = 'Bearer ' + access_token;
};

const shouldIntercept = (error: AxiosError) => {
    try {
        return error.response?.status === 401;
    } catch (e) {
        return false;
    }
};

export default ({ method = 'post', url, payload }: serviceInterface): any => {
    let isRefreshing = false;
    let failedQueue: any = [];

    const options = {
        attachTokenToRequest,
        setTokenData,
        handleTokenRefresh,
        shouldIntercept,
    };

    const processQueue = (error: AxiosError | null, token: string | null = null) => {
        failedQueue.forEach((prom: any) => {
            if (error) {
                prom.reject(error);
            } else {
                prom.resolve(token);
            }
        });

        failedQueue = [];
    };

    /**
     * axios Error Interceptor
     * @param error
     */
    const errorInterceptor = (error: any) => {
        const {
            config: {
                headers: { Authorization },
            },
        } = error;
        const status = error.response?.status;

        // FIXME 서버 상태, 인증 외에 401 에러 처리 어떻게 할껀지?
        if (options.shouldIntercept(error) === false) {
            if (status === 503) {
                // 서버 에러
                _Alert_.serverStatusError({
                    text: error.response.data.error.error_message,
                });
                return Promise.resolve({
                    status: false,
                    message: error.response?.data.error.error_message,
                });
            } else if (status === 412) {
                // 헤더 체크 에러.
                _Alert_.error({
                    text: error.response.data.error.error_message,
                });
                return Promise.resolve({
                    status: false,
                    message: error.response?.data.error.error_message,
                });
            } else if (status === 429) {
                // 너무 많은 요청 일때.
                _Alert_.serverStatusError({
                    text: error.response.data.error.error_message,
                });
                return Promise.resolve({
                    status: false,
                    message: error.response?.data.error.error_message,
                });
            } else {
                return Promise.resolve({
                    status: false,
                    message: error.response?.data.error.error_message,
                });
            }
        }

        if (error.config._retry || error.config._queued) {
            return Promise.reject(error);
        }

        const originalRequest = error.config;

        // FIXME  이거 뭐하는 소스 코드 인지?
        if (isRefreshing) {
            return new Promise(function (resolve, reject) {
                failedQueue.push({ resolve, reject });
            })
                .then(token => {
                    originalRequest._queued = true;
                    options.attachTokenToRequest(originalRequest, token);
                    return _Axios_.request(originalRequest);
                })
                .catch(() => {
                    return Promise.reject(error); // Ignore refresh token request's "err" and return actual "error" for the original request
                });
        }

        // 인증 에러시 토큰 리프레쉬 시도.
        if (originalRequest.url !== `/api/v1/auth/login-check` && status === 401 && Authorization.length > 0) {
            originalRequest._retry = true;
            isRefreshing = true;
            return new Promise(resolve => {
                options.handleTokenRefresh
                    .call(options.handleTokenRefresh)
                    .then((tokenData: any) => {
                        options.setTokenData(tokenData);
                        options.attachTokenToRequest(originalRequest, tokenData.access_token);
                        processQueue(null, tokenData.access_token);
                        resolve(_Axios_.request(originalRequest));
                    })
                    .catch(() => {
                        // 토큰 Refresh Error
                        Helper.COLORLOG(':: Fail Token Refresh :: ', 'error');
                        Helper.removeLoginToken();
                        // processQueue(err, '');
                        // reject(err);
                        _Alert_.thenGoHome({
                            text: '로그인 유지 시간이 만료되었습니다.',
                        });
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        } else if (status === 401) {
            return Promise.resolve({
                status: false,
                message: error.response?.data.error.error_message,
            });
        }
    };

    /**
     * 정상 리턴.
     * @param response
     */
    const successInterceptor = (response: AxiosResponse): Promise<any> => {
        if (response.status === 204) {
            return Promise.resolve({
                status: true,
                payload: null,
            });
        } else {
            return Promise.resolve({
                status: true,
                payload: response.data.result ? response.data.result : response.data,
            });
        }
    };

    const defaultHeaderToken: AccessTokenType = Helper.getAccessToken() ? 'Bearer ' + Helper.getAccessToken() : '';
    axiosDefaultHeader.headers.Authorization = defaultHeaderToken;

    const _Axios_: AxiosInstance = axios.create(axiosDefaultHeader);

    _Axios_.interceptors.response.use(
        response => successInterceptor(response),
        error => errorInterceptor(error)
    );
    return _Axios_({
        url: url,
        method: method,
        data: payload,
    });
};
