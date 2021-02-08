import { SagaTypes } from '@Store/reduxActiontTypes';

const { APP_INIT_START, CHECK_LOGIN_START, LOGIN_SET_START, SET_LOGOUT } = SagaTypes;

// 서버 기본 체크.
export const appInitAction = () => {
    return { type: APP_INIT_START };
};

// 로그인 체크.
export const checkLoginAction = () => {
    return { type: CHECK_LOGIN_START };
};

// 로그인 정보 저장.
export const loginSetAction = () => {
    return { type: LOGIN_SET_START };
};

// 로그아웃시 store reset
export const logoutSetAction = () => {
    return { type: SET_LOGOUT };
};
