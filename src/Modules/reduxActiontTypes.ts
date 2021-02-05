/**
 * 기본 액션 인터페이스.
 */
export interface SagaAction<T> {
    type: SagaTypes;
    payload: T;
}

export enum SagaTypes {
    // Common
    START_LOADING = 'common/START_LOADING',
    END_LOADING = 'common/END_LOADING',

    CHECK_SERVER_START = 'common/CHECK_SERVER_START',
}
