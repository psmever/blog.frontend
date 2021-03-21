import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// const { APP_INIT_START, CHECK_LOGIN_START, LOGIN_SET_START, SET_LOGOUT } = SagaTypes;
export const START_LOADING = 'app/START_LOADING';
export const END_LOADING = 'app/END_LOADING';

export const APP_ERROR = 'app/APP_ERROR';

export const APP_INIT_START = 'app/APP_INIT_START';
export const APP_INIT_END = 'app/APP_INIT_END';

export const SERVER_CHECK_START = 'app/SERVER_CHECK_START';
export const SERVER_CHECK_END = 'app/SERVER_CHECK_END';

export const CHECK_LOGIN_START = 'app/CHECK_LOGIN';
export const CHECK_LOGIN_SUCCESS = 'app/CHECK_LOGIN_SUCCESS';
export const CHECK_LOGIN_FAILURE = 'app/CHECK_LOGIN_FAILURE';

export const LOGIN_SET_START = 'app/LOGIN_SET_START';
export const LOGIN_SET_END = 'app/LOGIN_SET_END';

export const SET_LOGOUT = 'app/SET_LOGOUT';

// 서버 기본 체크.
// export const appInitAction = () => {
//     return { type: APP_INIT_START };
// };

export const appInitAction = createStandardAction(APP_INIT_START)();

// 로그인 체크.
export const checkLoginAction = createStandardAction(CHECK_LOGIN_START)();

// 로그인 정보 저장.
export const loginSetAction = createStandardAction(LOGIN_SET_START)();

// 로그아웃시 store reset
export const logoutSetAction = createStandardAction(SET_LOGOUT)();
