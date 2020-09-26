export enum SagaTypes {
    // base
    BASE_REQUEST_START = 'base/BASE_REQUEST_START',
    BASE_REQUEST_SUCCESS = 'base/BASE_REQUEST_SUCCESS',
    BASE_REQUEST_ERROR = 'base/BASE_REQUEST_ERROR',
    BASE_REQUEST_RESET = 'base/BASE_REQUEST_RESET',

    // 전체 페이지 로딩
    BASE_GLOBAL_LOADING_START = 'base/BASE_GLOBAL_LOADING_START',
    BASE_GLOBAL_LOADING_END = 'base/BASE_GLOBAL_LOADING_END',

    // 로그인 시도.
    LOGIN_REQUEST_START = 'login/LOGIN_REQUEST_START',
    LOGIN_REQUEST_SUCCESS = 'login/LOGIN_REQUEST_SUCCESS',
    LOGIN_REQUEST_ERROR = 'login/LOGIN_REQUEST_ERROR',
    LOGIN_REQUEST_RESET = 'login/LOGIN_REQUEST_RESET',

    // 로컬 토큰 처리.
    LOCAL_TOKEN_CHECK_START = 'login/LOCAL_TOKEN_CHECK_START',
    LOCAL_TOKEN_CHECK_SUCCESS = 'login/LOCAL_TOKEN_CHECK_SUCCESS',
    LOCAL_TOKEN_CHECK_ERROR = 'login/LOCAL_TOKEN_CHECK_ERROR',
    LOCAL_TOKEN_CHECK_RESET = 'login/LOCAL_TOKEN_CHECK_RESET',

    // 글 등록 처리.
    POST_CREATE_REQUEST_START = 'post/POST_CREATE_REQUEST_START',
    POST_CREATE_REQUEST_SUCCESS = 'post/POST_CREATE_REQUEST_SUCCESS',
    POST_CREATE_REQUEST_ERROR = 'post/POST_CREATE_REQUEST_ERROR',
    POST_CREATE_REQUEST_RESET = 'post/POST_CREATE_REQUEST_RESET',

    // 글 수정 보기.
    POST_EDIT_REQUEST_START = 'post/POST_EDIT_REQUEST_START',
    POST_EDIT_REQUEST_SUCCESS = 'post/POST_EDIT_REQUEST_SUCCESS',
    POST_EDIT_REQUEST_ERROR = 'post/POST_EDIT_REQUEST_ERROR',
    POST_EDIT_REQUEST_RESET = 'post/POST_EDIT_REQUEST_RESET',

    // 글 내용 업데이트 처리.
    POST_UPDATE_REQUEST_START = 'post/POST_UPDATE_REQUEST_START',
    POST_UPDATE_REQUEST_SUCCESS = 'post/POST_UPDATE_REQUEST_SUCCESS',
    POST_UPDATE_REQUEST_ERROR = 'post/POST_UPDATE_REQUEST_ERROR',
    POST_UPDATE_REQUEST_RESET = 'post/POST_UPDATE_REQUEST_RESET',

    // 글 게시.
    POST_PUBLISH_REQUEST_START = 'post/POST_PUBLISH_REQUEST_START',
    POST_PUBLISH_REQUEST_SUCCESS = 'post/POST_PUBLISH_REQUEST_SUCCESS',
    POST_PUBLISH_REQUEST_ERROR = 'post/POST_PUBLISH_REQUEST_ERROR',
    POST_PUBLISH_REQUEST_RESET = 'post/POST_PUBLISH_REQUEST_RESET',
}

/**
 * 기본 액션 인터페이스.
 */
export interface SagaAction<T>  {
    type: SagaTypes;
    payload: T;
}