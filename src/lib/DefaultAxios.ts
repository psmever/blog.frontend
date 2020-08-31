import axios from 'axios';

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
    // baseURL: "http://blog.backend.test",
    baseURL: "http://psmever.iptime.org:8081",
    timeout: 20000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "S01010",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

_Axios_.interceptors.request.use(function (config) {
    const login_access_token = ""

    console.debug(config.headers);

    if(login_access_token) {
        config.headers.Authorization = 'Bearer ' + login_access_token;
    } else {
        config.headers.Authorization = '';
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

_Axios_.interceptors.response.use(function (response) : any {
    return Promise.resolve({
        state: true,
        data: response.data
    });
}, function (error) {
    const { config, config: { headers:{ Authorization } }, response: { status, data }} = error;

    if(status === 401 && Authorization.length === 0) {

    }

    if(status === 500 && Authorization.length > 0) {

    }

    if(status === 401 && Authorization.length > 0) {
        console.debug(':: try token refresh ::');
        const originalRequest = config;
        return new Promise((resolve, reject) => {
            _Axios_.post('/api/justgram/v1/token/refresh', { refresh_token:"" }).then(
                (e) => {
                    console.debug(':: token refresh success::');
                    resolve(retryOriginalRequest(originalRequest));
                },
                (error) => {
                    console.debug(':: token refresh fail::');
                    reject({state: false});
                }
            )
        });
    }

    // return Promise.reject(error);
    return Promise.reject({
        state: false,
        data: data
    });
});

const retryOriginalRequest = (originalRequest: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_Axios_(originalRequest)), 1000);
    });
};