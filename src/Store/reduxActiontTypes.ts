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

    CHECK_LOGIN_START = 'app/CHECK_LOGIN',
    CHECK_LOGIN_SUCCESS = 'app/CHECK_LOGIN_SUCCESS',
    CHECK_LOGIN_FAILURE = 'app/CHECK_LOGIN_FAILURE',

    LOGIN_SET_START = 'app/LOGIN_SET_START',
    LOGIN_SET_END = 'app/LOGIN_SET_END',

    SET_LOGOUT = 'app/SET_LOGOUT',

    // Common
    COMMON_CODES = 'common/COMMON_CODES',

    // Specialty
    GET_WEATHER = 'specialty/GET_WEATHER',
    GET_WEATHER_SUCCESS = 'specialty/GET_WEATHER_SUCCESS',
    GET_WEATHER_FAILURE = 'specialty/GET_WEATHER_FAILURE',

    GET_COVID = 'specialty/GET_COVID',
    GET_COVID_SUCCESS = 'specialty/GET_COVID_SUCCESS',
    GET_COVID_FAILURE = 'specialty/GET_COVID_FAILURE',
}
