import { SagaTypes } from '@Store/reduxActiontTypes';

const { APP_INIT_START, CHECK_LOGIN } = SagaTypes;

// 서버 기본 체크.
export const appInitAction = () => {
    return { type: APP_INIT_START };
};

export const checkLoginAction = () => {
    return { type: CHECK_LOGIN };
};
