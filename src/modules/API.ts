import * as GlobalService from 'lib/DefaultAxios';


export function checkServer ():Promise<any> {
    return GlobalService._Axios_.get('/api/system/check-notice');
};


export function login ():Promise<any> {
    return GlobalService._Axios_.post('/api/v1/auth/login', {
        "email": "psmever@gmail.com",
        "password": "alsrns78"
    });
};