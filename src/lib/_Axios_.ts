import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AccessTokenType, localTokenInterface, } from 'commonTypes';
import * as Helper from 'lib/Helper';
import * as _ from "lodash";

/**
 * https://gist.github.com/Godofbrowser/bf118322301af3fc334437c683887c5f
 * Thank Original Source
 */

// TODO TypeScript 로 변환 해야 함.
const apiBaseURLL: string | undefined = _.isUndefined(process.env.REACT_APP_API_URL) ? 'http://localhost' : process.env.REACT_APP_API_URL;
const axiosDefaultHeader : AxiosRequestConfig = {
    baseURL: apiBaseURLL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "S01010",
        "Accept": "application/json",
        "Authorization": '',
    }
}

const defaultHeaderToken: AccessTokenType = Helper.getAccessToken() ? 'Bearer '+Helper.getAccessToken() : '';
axiosDefaultHeader.headers.Authorization = defaultHeaderToken;

export const _Axios_: AxiosInstance = axios.create(axiosDefaultHeader);

const setTokenData = (tokenData: AccessTokenType, axiosClient: AxiosInstance): void  => {
    Helper.saveRefreshToken(tokenData);
};

/**
 * refresh Token.
 */
const handleTokenRefresh = (): Promise<localTokenInterface> => {
    Helper.COLORLOG(':: Try Token Refresh :: ', 'warning');
    const refreshToken = Helper.getRefreshToken();
    return new Promise((resolve, reject) => {
        const _thisAxios_: AxiosInstance = axios.create(axiosDefaultHeader);
        _thisAxios_.post<localTokenInterface>(`${apiBaseURLL}/api/v1/auth/token-refresh`, { refresh_token: refreshToken })
            .then(({data}) => {
                Helper.COLORLOG(':: Success Token Refresh :: ', 'success');
                resolve({
                    access_token: data.access_token,
                    refresh_token: data.refresh_token,
                    expires_in: data.expires_in,
                });
            })
            .catch((error) => {
                Helper.COLORLOG(':: Error Token Refresh :: ', 'error');
                reject({
                    access_token: '',
                    refresh_token: '',
                    expires_in: '',
                });
            })
    });
};

/**
 * axios Request 에 토큰 추가.
 * @param request
 * @param access_token
 */
const attachTokenToRequest = (request : AxiosRequestConfig, access_token: any) => {
    request.headers['Authorization'] = 'Bearer ' + access_token;
};

// TODO error AxiosError 로 처리 가능하게 해야..
const shouldIntercept = (error: AxiosError) => {
    try {
        return error.response.status === 401
    } catch (e) {
        return false;
    }
};

let isRefreshing = false;
let failedQueue: any = [];

const options = {
    attachTokenToRequest,
    setTokenData,
    handleTokenRefresh,
    shouldIntercept,
};

const processQueue = (error : any, token : any = null) => {
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
    const { config: { headers:{ Authorization } }, response: { status }} = error;

    // TODO 인증 관련 에러 말고 에러났을때.어떻게 할껀지?
    if (options.shouldIntercept(error) === false) {
        // TODO 503 에러 일때 어떻게 할껀지?
        if(status === 503) {
            alert(error.response.data.error_message);
        } else {
            return Promise.resolve({
                status: false,
                message: error.response.data.error_message
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
            failedQueue.push({resolve, reject})
        }).then(token => {
            originalRequest._queued = true;
            options.attachTokenToRequest(originalRequest, token);
            return _Axios_.request(originalRequest);
        }).catch(err => {
            return Promise.reject(error); // Ignore refresh token request's "err" and return actual "error" for the original request
        })
    }

    if(status === 401 && Authorization.length > 0) {
        originalRequest._retry = true;
        isRefreshing = true;
        return new Promise((resolve, reject) => {
            options.handleTokenRefresh.call(options.handleTokenRefresh)
                .then((tokenData : any) => {
                    options.setTokenData(tokenData, _Axios_);
                    options.attachTokenToRequest(originalRequest, tokenData.access_token);
                    processQueue(null, tokenData.access_token);
                    resolve(_Axios_.request(originalRequest));
                })
                .catch((err) => {
                    // 토큰 Refresh Error
                    Helper.COLORLOG(':: Fail Token Refresh :: ', 'error');
                    Helper.removeLoginToken();
                    processQueue(err, null);
                    reject(err);
                })
                .finally(() => {
                    // console.debug('finally');
                    isRefreshing = false;
                })
        });
    }

};

/**
 * 정상 리턴.
 * @param response
 */
const successInterceptor = (response: AxiosResponse): Promise<any> => {
    return Promise.resolve({
        status : true,
        message : response.data.message,
        payload: response.data.result
    });
}

_Axios_.interceptors.response.use(response => successInterceptor(response), error => errorInterceptor(error));

export default _Axios_;