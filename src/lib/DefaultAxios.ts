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
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "S01010",
        "Accept": "application/json",
    }
});

_Axios_.interceptors.request.use(function (config) {
    const login_access_token = ""
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
    console.debug(response.data);
    return Promise.resolve({
        state: true,
        data: response.data
    });
}, function (error) {
    const { config, config: { headers:{ Authorization } }, response: { status, data }} = error;

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