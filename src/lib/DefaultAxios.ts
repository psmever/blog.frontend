import axios from 'axios';
import * as Helper from 'lib/Helper';

export interface tokenRefreshInterface {
    state: boolean;
    data?: {
        token_type?: string;
        expires_in?: number;
        access_token?: string;
        refresh_token?: string;
        user_name?: string;
    }
    message?: string;
}

export interface apiRequest {
    authType: boolean;
    method: 'get'|'post'|'delete'|'put';
    endpoint: string;
    payload: any
}

export const _Axios_ = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 20000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "S01010",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

let isRefreshing = false;
let failedQueue = [];


_Axios_.interceptors.request.use(function (config) {
    const login_access_token = Helper.getAccessToken();
    if(login_access_token) {
        config.headers.Authorization = 'Bearer ' + login_access_token;
    } else {
        config.headers.Authorization = '';
    }
    return config;
}, function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          // If I'm refreshing the token I send request to a queue
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(() => {
              originalRequest.headers.Authorization = Helper.getAccessToken();
              return axios(originalRequest);
            })
            .catch(err => err);
        }
        // If header of the request has changed, it means I've refreshed the token
        if (originalRequest.headers.Authorization !== Helper.getAccessToken()) {
          originalRequest.headers.Authorization = Helper.getAccessToken();
          return Promise.resolve(axios(originalRequest));
        }

        originalRequest._retry = true; // mark request a retry
        isRefreshing = true; // set the refreshing var to true

        // If none of the above, refresh the token and process the queue
        return new Promise((resolve, reject) => {
          console.log('REFRESH');

        });
      }

    return Promise.reject(error);
});

_Axios_.interceptors.response.use(function (response) : any {
    // console.debug(response.data);
    return Promise.resolve({
        state: true,
        data: response.data
    });
}, function (error) {
    const originalRequest = error.config;
    const { config, config: { headers:{ Authorization } }, response: { status, data }} = error;

    // TODO 2020-09-01 23:44  test.js 와 비교후 코딩.. getAuth()????
    if (error.response.status === 401 && !originalRequest._retry) {
        console.debug('401 error');
        if (isRefreshing) {
            // If I'm refreshing the token I send request to a queue
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            })
                .then(() => {
                    originalRequest.headers.Authorization = Helper.getAccessToken();
                    return axios(originalRequest);
                })
                .catch(err => {
                    console.debug({error: err});
                });
        }

    }


    return Promise.resolve({
        state: false
    });
});

const retryOriginalRequest = (originalRequest: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_Axios_(originalRequest)), 1000);
    });
};