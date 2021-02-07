import { _Axios_ } from '@Utils';

import {
    ServerDefaultResult,
    ServerNotice,
    AppBase,
    LoginCheck,
    // ServerBaseDataInterface,
    // ServerUserCheckInterface,
    // PostRequestInterface,
    // PostEditResultInterface,
    // ServerPostListResultInterface,
    // ServerPostDetailInterface,
    // ServerTagGoupListInterface,
    // ServerPostWaitingListInterface,
} from 'ServiceTypes';

/**
 * 서버 상태 체크 ( 사용 안함 )
 */
// export function checkServer(): Promise<ServerDefaultResult<any>> {
//     return _Axios_({ method: 'get', url: '/api/system/check-status', payload: { data: {} } });
// }

/**
 * 서버 공지 사항 체크
 */
export function checkServerNotice(): Promise<ServerDefaultResult<ServerNotice>> {
    return _Axios_({ method: 'get', url: '/api/system/check-notice', payload: { data: {} } });
}

/**
 * 사이트 기본 데이터 처리.
 */
export function getSiteBaseData(): Promise<ServerDefaultResult<AppBase>> {
    return _Axios_({ method: 'get', url: '/api/system/base-data', payload: { data: {} } });
}

// /**
//  * 로그인
//  * @param payload
//  */
export function login(payload: { email: string; password: string }): Promise<ServerDefaultResult<any>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/login', payload: payload });
}

/**
 * 로그아웃.
 */
export function logout(): Promise<ServerDefaultResult<any>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/logout', payload: { data: {} } });
}

// /**
//  * 로그인 유저 체크
//  */

export function loginCheck(): Promise<ServerDefaultResult<LoginCheck>> {
    return _Axios_({ method: 'get', url: '/api/v1/auth/login-check', payload: { data: {} } });
}

// /**
//  * 글 저장
//  * @param payload
//  */
// export function postCreate(
//     payload: PostRequestInterface
// ): Promise<
//     ServerReturnInterface<{
//         post_uuid: string;
//         slug_title: string;
//     }>
// > {
//     // return _Axios_.post('/api/v1/post', payload);
//     return _Axios_({ method: 'post', url: '/api/v1/post', payload: payload });
// }

// /**
//  * 글 보기 ( 수정용 )
//  * @param post_uuid
//  */
// export function postEdit(post_uuid: string): Promise<ServerReturnInterface<PostEditResultInterface>> {
//     return _Axios_({ method: 'get', url: `/api/v1/post/${post_uuid}/edit`, payload: { data: {} } });
// }

// /**
//  * 글 게시.
//  * @param post_uuid
//  */
// export function postPublish(post_uuid: string): Promise<ServerReturnInterface<any>> {
//     return _Axios_({ method: 'put', url: `/api/v1/post/${post_uuid}/publish`, payload: { data: {} } });
// }

// // 글 수정.
// export function postUpdate({
//     post_uuid,
//     payload,
// }: {
//     post_uuid: string;
//     payload: PostRequestInterface;
// }): Promise<
//     ServerReturnInterface<{
//         post_uuid: string;
//         payload: PostRequestInterface;
//     }>
// > {
//     return _Axios_({ method: 'put', url: `/api/v1/post/${post_uuid}/update`, payload: payload });
// }

// // 글 리스트
// export function getPostList({
//     pageNumber,
// }: {
//     pageNumber: number;
// }): Promise<ServerReturnInterface<ServerPostListResultInterface>> {
//     return _Axios_({ method: 'get', url: `/api/v1/post/${pageNumber}`, payload: { data: {} } });
// }

// // 글보기 Detail
// export const getPostDetail = ({
//     slugTitle,
// }: {
//     slugTitle: string;
// }): Promise<ServerReturnInterface<ServerPostDetailInterface>> => {
//     return _Axios_({ method: 'get', url: `/api/v1/post/${slugTitle}/detail`, payload: { data: {} } });
// };

// // 뷰카운트 증가.
// export const incrementViewCount = (post_uuid: string): Promise<ServerReturnInterface<any>> => {
//     return _Axios_({ method: 'put', url: `/api/v1/post/${post_uuid}/view-increment`, payload: { data: {} } });
// };

// // 검색
// export const postItemSearch = (searchItem: string): Promise<ServerReturnInterface<any>> => {
//     return _Axios_({ method: 'get', url: `/api/v1/post/${searchItem}/search`, payload: { data: {} } });
// };

// // 테그 그룹 리스트
// export const getTagGroups = (): Promise<ServerReturnInterface<ServerTagGoupListInterface>> => {
//     return _Axios_({ method: 'get', url: `/api/v1/post/tag/tag-list`, payload: { data: {} } });
// };

// // 테그 아이템 검색.
// export const tagItemSearch = (
//     search_tag_item: string
// ): Promise<ServerReturnInterface<ServerTagGoupListInterface[]>> => {
//     return _Axios_({ method: 'get', url: `/api/v1/post/tag/${search_tag_item}/tag-search`, payload: { data: {} } });
// };

// // 개시전 글 가지고 오기.
// export const postWaitingList = (): Promise<ServerReturnInterface<ServerPostWaitingListInterface[]>> => {
//     return _Axios_({ method: 'get', url: `/api/v1/post/write/waiting-list`, payload: { data: {} } });
// };
