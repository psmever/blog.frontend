import _Axios_ from 'lib/_Axios_';
import {
    axiosReturnInterface,
    loginRequestInterface,
    postRequestInterface,
    apiNoticeResultInterface,
    apiSiteBaseDataInterface,
    apiPostCreateResultInterface,
    apiPostEditResultInterface,
    apiPostListResultInterface,
} from 'commonTypes';


/**
 * 서버 상태 체크
 */
export function checkServer() : Promise<axiosReturnInterface<any>> {
    return _Axios_.get('/api/system/check-status', {data: {}});
};

/**
 * 서버 공지 사항 체크
 */
export function checkServerNotice() : Promise<axiosReturnInterface<apiNoticeResultInterface>> {
    return _Axios_.get('/api/system/check-notice', {data: {}});
};

/**
 * 사이트 기본 데이터 처리.
 */
export function getSiteBaseData() : Promise<axiosReturnInterface<apiSiteBaseDataInterface>> {
    return _Axios_.get('/api/system/base-data', {data: {}});
}

/**
 * 로그인
 * @param payload
 */
export function login(payload: loginRequestInterface) : Promise<axiosReturnInterface<any>> {
    return _Axios_.post('/api/v1/auth/login', payload);
};

/**
 * 로그인 유저 체크
 */
export function loginCheck() : Promise<axiosReturnInterface<any>> {
    return _Axios_.post('/api/v1/auth/login-check', {data: {}});
};

/**
 * 글 저장
 * @param payload
 */
export function postCreate(payload: postRequestInterface) : Promise<axiosReturnInterface<apiPostCreateResultInterface>> {
    return _Axios_.post('/api/v1/post', payload);
};

/**
 * 글 보기 ( 수정용 )
 * @param post_uuid
 */
export function postEdit(post_uuid: string) : Promise<axiosReturnInterface<apiPostEditResultInterface>> {
    return _Axios_.get(`/api/v1/post/${post_uuid}/edit`, {data: {}});
};

/**
 * 글 게시.
 * @param post_uuid
 */
export function postPublish(post_uuid: string) : Promise<axiosReturnInterface<any>> {
    return _Axios_.post(`/api/v1/post/${post_uuid}/publish`, {data: {}});
};


// 글 수정.
export function postUpdate({post_uuid, payload} : {post_uuid: string, payload: postRequestInterface}) : Promise<axiosReturnInterface<any>> {
    return _Axios_.post(`/api/v1/post/${post_uuid}/update`, payload);
};

// 글 리스트
export function getPostList({pageNumber} : {pageNumber : number}) : Promise<axiosReturnInterface<apiPostListResultInterface>> {
    return _Axios_.get(`/api/v1/post/${pageNumber}`, {data: {}});
}