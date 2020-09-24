import _Axios_ from 'lib/_Axios_';
import {
    axiosReturnInterface,
    loginRequestInterface
} from 'commonTypes';

/**
 * 서버 상태 체크
 */
export function checkServer() : Promise<axiosReturnInterface> {
    return _Axios_.get('/api/system/check-status', {data: {}});
};

/**
 * 서버 공지 사항 체크
 */
export function checkServerNotice() : Promise<axiosReturnInterface> {
    return _Axios_.get('/api/system/check-notice', {data: {}});
};

export function getSiteBaseData() : Promise<axiosReturnInterface> {
    return _Axios_.get('/api/system/base-data', {data: {}});
}

/**
 * 로그인
 * @param payload
 */
export function login(payload: loginRequestInterface) : Promise<axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login', payload);
};

/**
 * 로그인 유저 체크
 */
export function loginCheck() : Promise<axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {data: {}});
};

/**
 * 테스트용?
 */
export function testCheck() : Promise<axiosReturnInterface> {
    return _Axios_.post('/api/v1/auth/login-check', {data: {}});
};

/**
 * 글 저장
 * @param payload
 */
export function postCreate(payload: any) : Promise<axiosReturnInterface> {
    return _Axios_.post('/api/v1/post', payload);
};

/**
 * 글 보기 ( 수정용 )
 * @param post_uuid
 */
export function postEdit(post_uuid: string) : Promise<axiosReturnInterface> {
    return _Axios_.get(`/api/v1/post/${post_uuid}/edit`, {data: {}});
};