import service from 'lib/Services';

import {
    axiosReturnInterface,
    loginRequestInterface,
    postRequestInterface,
    apiNoticeResultInterface,
    apiSiteBaseDataInterface,
    apiPostCreateResultInterface,
    apiPostEditResultInterface,
    apiPostListResultInterface,
    apiPostDetailResultInterface,
    apiLoginCheckResultInterface,
    apiTagGoupListInterface,
} from 'commonTypes';

/**
 * 서버 상태 체크
 */
export function checkServer() : Promise<axiosReturnInterface<any>> {
    return service({ method: "get", url: '/api/system/check-status', payload: {data: {}}});
};

/**
 * 서버 공지 사항 체크
 */
export function checkServerNotice() : Promise<axiosReturnInterface<apiNoticeResultInterface>> {
    return service({ method: "get", url: '/api/system/check-notice', payload: {data: {}}});
};

/**
 * 사이트 기본 데이터 처리.
 */
export function getSiteBaseData() : Promise<axiosReturnInterface<apiSiteBaseDataInterface>> {
    return service({ method: "get", url: '/api/system/base-data', payload: {data: {}}});
}

/**
 * 로그인
 * @param payload
 */
export function login(payload: loginRequestInterface) : Promise<axiosReturnInterface<any>> {
    return service({ method: "post", url: '/api/v1/auth/login', payload: payload});
};

/**
 * 로그아웃.
 */
export function logout() : Promise<axiosReturnInterface<any>> {
    return service({ method: "post", url: '/api/v1/auth/logout', payload: {data: {}}});
}

/**
 * 로그인 유저 체크
 */
export function loginCheck() : Promise<axiosReturnInterface<apiLoginCheckResultInterface>> {
    return service({ method: "get", url: '/api/v1/auth/login-check', payload: {data: {}}});
};

/**
 * 글 저장
 * @param payload
 */
export function postCreate(payload: postRequestInterface) : Promise<axiosReturnInterface<apiPostCreateResultInterface>> {
    // return _Axios_.post('/api/v1/post', payload);
    return service({ method: "post", url: '/api/v1/post', payload: payload});
};

/**
 * 글 보기 ( 수정용 )
 * @param post_uuid
 */
export function postEdit(post_uuid: string) : Promise<axiosReturnInterface<apiPostEditResultInterface>> {
    return service({ method: "get", url: `/api/v1/post/${post_uuid}/edit`, payload: {data: {}}});
};

/**
 * 글 게시.
 * @param post_uuid
 */
export function postPublish(post_uuid: string) : Promise<axiosReturnInterface<any>> {
    return service({ method: "put", url: `/api/v1/post/${post_uuid}/publish`, payload: {data: {}}});
};

// 글 수정.
export function postUpdate({post_uuid, payload} : {post_uuid: string, payload: postRequestInterface}) : Promise<axiosReturnInterface<apiPostCreateResultInterface>> {
    return service({ method: "put", url: `/api/v1/post/${post_uuid}/update`, payload: payload});
};

// 글 리스트
export function getPostList({pageNumber} : {pageNumber : number}) : Promise<axiosReturnInterface<apiPostListResultInterface>> {
    return service({ method: "get", url: `/api/v1/post/${pageNumber}`, payload: {data: {}}});
}

// 글보기 Detail
export const getPostDetail = ({slugTitle} : {slugTitle: string}) : Promise<axiosReturnInterface<apiPostDetailResultInterface>> => {
    return service({ method: "get", url: `/api/v1/post/${slugTitle}/detail`, payload: {data: {}}});
}

// 뷰카운트 증가.
export const incrementViewCount = (post_uuid: string) : Promise<axiosReturnInterface<any>> => {
    return service({ method: "put", url: `/api/v1/post/${post_uuid}/view-increment`, payload: {data: {}}});
}

// 검색
export const postItemSearch = (searchItem: string) : Promise<axiosReturnInterface<any>> => {
    return service({ method: "get", url: `/api/v1/post/${searchItem}/search`, payload: {data: {}}});
}

// 테그 그룹 리스트
export const getTagGroups = () : Promise<axiosReturnInterface<apiTagGoupListInterface>> => {
    return service({ method: 'get', url: `/api/v1/post/tag/tag-list`, payload: {data: {}}});
}
// 테그 아이템 검색.
export const tagItemSearch = (search_tag_item: string) : Promise<axiosReturnInterface<apiTagGoupListInterface>> => {
    return service({ method: 'get', url: `/api/v1/post/tag/${search_tag_item}/tag-search`, payload: {data: {}}});
}