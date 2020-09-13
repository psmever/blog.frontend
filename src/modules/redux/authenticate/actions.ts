import { SagaTypes }  from 'modules/reduxActiontTypes';
import {  loginRequestInterface } from 'commonTypes';

// 로그인.
export const attemptLoginAction = (payload: loginRequestInterface) => {
    return {
        type: SagaTypes.LOGIN_REQUEST_START,
        payload
    }
}

// 로컬 토큰 체크.
export const attemptLocalTokenAction = () => {
    return {
        type: SagaTypes.LOCAL_TOKEN_CHECK_START
    }
}