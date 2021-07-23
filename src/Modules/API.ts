import { _Axios_ } from '@Utils';
import {
    DefaultPostSaveResult,
    WaitingPostResultItem,
    SectionGubunItem,
    SectionPostItem,
    SectionGubunCode,
} from 'CommonTypes';
import {
    ServerDefaultResult,
    ServerNotice,
    AppBase,
    LoginCheck,
    PostList,
    WeatherResult,
    CovidResult,
    PostDetailResult,
    PostRequest,
    SectionPostRequest,
    SectionSaveResult,
    GetTagGroupResult,
    SectionHistoryResponse,
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

/**
 * 로그인
 * @param payload
 */
export function login(payload: { email: string; password: string }): Promise<ServerDefaultResult<any>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/login', payload: payload });
}

/**
 * 로그아웃.
 */
export function logout(): Promise<ServerDefaultResult<any>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/logout', payload: { data: {} } });
}

/**
 * 로그인 유저 체크
 */
export function loginCheck(): Promise<ServerDefaultResult<LoginCheck>> {
    return _Axios_({ method: 'get', url: '/api/v1/auth/login-check', payload: { data: {} } });
}

// 글 리스트
export function getPostList({ pageNumber }: { pageNumber: number }): Promise<ServerDefaultResult<PostList>> {
    return _Axios_({ method: 'get', url: `/api/v1/post/${pageNumber}`, payload: { data: {} } });
}

// post 정보 가지고 오기.
export const getPostDetail = ({ slugTitle }: { slugTitle: string }): Promise<ServerDefaultResult<PostDetailResult>> => {
    return _Axios_({ method: 'get', url: `/api/v1/post/${slugTitle}/detail`, payload: { data: {} } });
};

/**
 * 글 저장
 * @param payload
 */
export function postCreate(payload: PostRequest): Promise<ServerDefaultResult<DefaultPostSaveResult>> {
    return _Axios_({ method: 'post', url: '/api/v1/post', payload: payload });
}

// 글 수정.
export function postUpdate({ post_uuid, payload }: { post_uuid: string; payload: PostRequest }): Promise<
    ServerDefaultResult<{
        post_uuid: string;
        payload: DefaultPostSaveResult;
    }>
> {
    return _Axios_({ method: 'put', url: `/api/v1/post/${post_uuid}/update`, payload: payload });
}

/**
 * 글 보기 ( 수정용 )
 * @param post_uuid
 */
export function postEdit({ post_uuid }: { post_uuid: string }): Promise<ServerDefaultResult<PostDetailResult>> {
    return _Axios_({ method: 'get', url: `/api/v1/post/${post_uuid}/edit`, payload: { data: {} } });
}

/**
 * 글 게시.
 * @param post_uuid
 */
export function postPublish(post_uuid: string): Promise<ServerDefaultResult<DefaultPostSaveResult>> {
    return _Axios_({ method: 'put', url: `/api/v1/post/${post_uuid}/publish`, payload: { data: {} } });
}

/**
 * 글 숨김.
 * @param post_uuid
 */
export function postHide(post_uuid: string): Promise<ServerDefaultResult<DefaultPostSaveResult>> {
    return _Axios_({ method: 'put', url: `/api/v1/post/${post_uuid}/hide`, payload: { data: {} } });
}

// // 개시전 글 가지고 오기.
export const postWaitingList = (): Promise<ServerDefaultResult<WaitingPostResultItem[]>> => {
    return _Axios_({ method: 'get', url: `/api/v1/post/write/waiting-list`, payload: { data: {} } });
};

// 섹션 메뉴 내용 저장.
export function postSectionCreate({
    section,
    payload,
}: {
    section: SectionGubunItem;
    payload: SectionPostRequest;
}): Promise<ServerDefaultResult<SectionSaveResult>> {
    return _Axios_({ method: 'post', url: `/api/v1/section-post/${section}`, payload: payload });
}

// 섹션 정보 가지고 오기.
export function getSectionDetail({
    section,
}: {
    section: SectionGubunItem;
}): Promise<ServerDefaultResult<SectionPostItem>> {
    return _Axios_({ method: 'get', url: `/api/v1/section-post/${section}`, payload: {} });
}

// 테그 그룹 리스트
export const getTagGroups = (): Promise<ServerDefaultResult<GetTagGroupResult>> => {
    return _Axios_({ method: 'get', url: `/api/v1/post/tag/tag-list`, payload: { data: {} } });
};

// 검색
export const postSearch = (searchItem: string): Promise<ServerDefaultResult<PostList>> => {
    return _Axios_({ method: 'get', url: `/api/v1/post/${searchItem}/search`, payload: { data: {} } });
};

// 테그 아이템 검색.
export const tagItemSearch = (search_tag_item: string): Promise<ServerDefaultResult<PostList>> => {
    return _Axios_({ method: 'get', url: `/api/v1/post/tag/${search_tag_item}/tag-search`, payload: { data: {} } });
};

// 뷰카운트 증가.
export const incrementViewCount = (post_uuid: string): Promise<ServerDefaultResult<any>> => {
    return _Axios_({ method: 'put', url: `/api/v1/post/${post_uuid}/view-increment`, payload: { data: {} } });
};

// 날씨 정보.
export const weathers = (): Promise<ServerDefaultResult<WeatherResult>> => {
    return _Axios_({ method: 'get', url: `/api/v1/specialty/weather`, payload: { data: {} } });
};

// 코로나 현황.
export const covides = (): Promise<ServerDefaultResult<CovidResult>> => {
    return _Axios_({ method: 'get', url: `/api/v1/specialty/covid`, payload: { data: {} } });
};

// 섹션 포스트 히스토리
export const getSectionHistory = (gubun: SectionGubunCode): Promise<ServerDefaultResult<SectionHistoryResponse>> => {
    return _Axios_({ method: 'get', url: `/api/v1/section-post/${gubun}/history`, payload: { data: {} } });
};

// 섹션 포스트 히스토리 상세.
export const getSectionHistoryDetail = ({
    gubun,
    post_uuid,
}: {
    gubun: SectionGubunCode;
    post_uuid: string;
}): Promise<ServerDefaultResult<SectionPostItem>> => {
    return _Axios_({
        method: 'get',
        url: `/api/v1/section-post/${gubun}/${post_uuid}/history`,
        payload: { data: {} },
    });
};

// // 글보기 Detail
// export const getPostDetail = ({
//     slugTitle,
// }: {
//     slugTitle: string;
// }): Promise<ServerReturnInterface<ServerPostDetailInterface>> => {
//     return _Axios_({ method: 'get', url: `/api/v1/post/${slugTitle}/detail`, payload: { data: {} } });
// };
