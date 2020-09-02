import * as DefaultAxios from 'lib/DefaultAxios';
import * as AxiosClient from 'lib/AxiosClient';
import * as DefaultAxios2 from 'lib/DefaultAxios2';


export function checkServer ():Promise<any> {
    return DefaultAxios._Axios_.get('/api/system/check-notice');
};


export function login ():Promise<any> {
    return DefaultAxios._Axios_.post('/api/v1/auth/login', {
        "email": "psmever@gmail.com",
        "password": "alsrns78"
    });
};

export function loginCheck ():Promise<any> {
    return DefaultAxios._Axios_.post('/api/v1/auth/login-check', {});
};


export function testCheck () {
    return DefaultAxios2.instance.post('/api/v1/auth/login-check', {});
};