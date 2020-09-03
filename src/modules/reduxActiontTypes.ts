export enum Types {
    // base
    BASE_START = 'base/BASE_START',
    BASE_SUCCESS = 'base/BASE_SUCCESS',
    BASE_ERROR = 'base/BASE_ERROR',
    BASE_RESET = 'base/BASE_RESET'
}


/**
 * 기본 액션 인터페이스.
 */
export interface Action<T>  {
    type: Types;
    payload: T;
}