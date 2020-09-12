export enum SagaTypes {
    // base
    BASE_START = 'base/BASE_START',
    BASE_SUCCESS = 'base/BASE_SUCCESS',
    BASE_ERROR = 'base/BASE_ERROR',
    BASE_RESET = 'base/BASE_RESET',

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