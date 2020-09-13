import _Axios_ from 'lib/_Axios_';
import * as commonTypes from 'commonTypes';

/**
 * 서버 상태 체크
 */
export function checkServer() : Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.get('/api/system/check-status', {data: {}});
};

/**
 * 서버 공지 사항 체크
 */
export function checkServerNotice() : Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.get('/api/system/check-notice', {data: {}});
};

export function getSiteBaseData() : Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.get('/api/system/base-data', {data: {}});
}

/**
 * 로그인
 * @param payload
 */
export function login(payload: commonTypes.loginRequestInterface) : Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login', payload);
};

/**
 * 로그인 유저 체크
 */
export function loginCheck() : Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {data: {}});
};

/**
 * 테스트용?
 */
export function testCheck() : Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {data: {}});
};

export function postCreate(payload: any) : Promise<commonTypes.axiosReturnInterface> {
    return _Axios_.post('/api/v1/post', payload);
};