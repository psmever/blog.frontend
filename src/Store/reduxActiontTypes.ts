/**
 * 기본 액션 인터페이스.
 */
export interface SagaAction<T> {
    type: SagaTypes;
    payload: T;
}

export enum SagaTypes {
    //  APP
    START_LOADING = 'app/START_LOADING',
    END_LOADING = 'app/END_LOADING',

    APP_ERROR = 'app/APP_ERROR',

    APP_INIT_START = 'app/APP_INIT_START',
    APP_INIT_END = 'app/APP_INIT_END',

    SERVER_CHECK_START = 'app/SERVER_CHECK_START',
    SERVER_CHECK_END = 'app/SERVER_CHECK_END',

    CHECK_LOGIN = 'app/CHECK_LOGIN',

    COMMON_CODES = 'common/COMMON_CODES',

    // Common
}
