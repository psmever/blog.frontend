import axios from 'axios'
import * as Helper from 'lib/Helper';

/**
 * https://gist.github.com/Godofbrowser/bf118322301af3fc334437c683887c5f
 * Thank Original Source
 */

// TODO TypeScript 로 변환 해야 함.


const apiBaseURLL = process.env.REACT_APP_API_URL;
const axiosDefaultHeader = {
    baseURL: apiBaseURLL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "S01010",
        "Accept": "application/json",
    }
}
axiosDefaultHeader.headers.Authorization = 'Bearer '+Helper.getAccessToken();
export const _Axios_ = axios.create(axiosDefaultHeader);

const setTokenData = (tokenData = {}, axiosClient) => {
    Helper.saveRefreshToken(tokenData);
};

const handleTokenRefresh = () => {
    const refreshToken = Helper.getRefreshToken();
    return new Promise((resolve, reject) => {
        const _thisAxios_ = axios.create(axiosDefaultHeader);
        _thisAxios_.post(`${apiBaseURLL}/api/v1/auth/token-refresh`, { refresh_token: refreshToken })
            .then(({data}) => {
                const tokenData = {
                    access_token: data.access_token,
                    refresh_token: data.refresh_token,
                    expires_in: data.expires_in,
                };
                resolve(tokenData);
            })
            .catch((err) => {
                reject(err);
            })
    });
};

const attachTokenToRequest = (request, access_token) => {
    request.headers['Authorization'] = 'Bearer ' + access_token;
};

let isRefreshing = false;
let failedQueue = [];

const options = {
    attachTokenToRequest,
    setTokenData,
    handleTokenRefresh,
};

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

const errorInterceptor = (error) => {
    const originalRequest = error.config;

    if (isRefreshing) {
        console.debug('1');
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

    originalRequest._retry = true;
    isRefreshing = true;
    return new Promise((resolve, reject) => {
        options.handleTokenRefresh.call(options.handleTokenRefresh)
            .then((tokenData) => {
                options.setTokenData(tokenData, _Axios_);
                options.attachTokenToRequest(originalRequest, tokenData.access_token);
                processQueue(null, tokenData.access_token);
                resolve(_Axios_.request(originalRequest));
            })
            .catch((err) => {
                processQueue(err, null);
                reject(err);
            })
            .finally(() => {
                console.debug('finally');
                isRefreshing = false;
            })
    });
};

_Axios_.interceptors.response.use(undefined, errorInterceptor);

export default _Axios_;