import _Axios_ from 'lib/_Axios_';
import { axiosReturnInterface } from 'commonTypes';

export function checkServer ():Promise<axiosReturnInterface> {
    return _Axios_.get('/api/system/check-notice');
};


export function login ():Promise<axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login', {
        "email": "psmever@gmail.com",
        "password": "alsrns78"
    });
};

export function loginCheck (): Promise<axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {});
};


export function testCheck (): Promise<axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {});
};