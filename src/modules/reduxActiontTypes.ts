export enum SagaTypes {
    // base
    BASE_REQUEST_START = 'base/BASE_REQUEST_START',
    BASE_REQUEST_SUCCESS = 'base/BASE_REQUEST_SUCCESS',
    BASE_REQUEST_ERROR = 'base/BASE_REQUEST_ERROR',
    BASE_REQUEST_RESET = 'base/BASE_REQUEST_RESET',

    // 로그인 시도.
    LOGIN_REQUEST_START = 'login/LOGIN_REQUEST_START',
    LOGIN_REQUEST_SUCCESS = 'login/LOGIN_REQUEST_SUCCESS',
    LOGIN_REQUEST_ERROR = 'login/LOGIN_REQUEST_ERROR',
    LOGIN_REQUEST_RESET = 'login/LOGIN_REQUEST_RESET',
}


/**
 * 기본 액션 인터페이스.
 */
export interface SagaAction<T>  {
    type: SagaTypes;
    payload: T;
}