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
    CHECK_SERVER_START = 'app/CHECK_SERVER_START',
    CHECK_SERVER_END = 'app/CHECK_SERVER_END',
    APP_ERROR = 'app/APP_ERROR',

    COMMON_CODES = 'common/COMMON_CODES',

    // Common
}
