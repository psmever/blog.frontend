import _Axios_ from 'lib/_Axios_';
import * as commonTypes from 'commonTypes';

export function checkServer ():Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.get('/api/system/check-notice');
};


export function login(payload: commonTypes.loginRequestInterface):Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login', payload);
};

export function loginCheck (): Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {});
};


export function testCheck (): Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {});
};