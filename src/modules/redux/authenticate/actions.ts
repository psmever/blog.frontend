import { SagaTypes }  from 'modules/reduxActiontTypes';
import {  loginRequestInterface } from 'commonTypes';

export const attemptLoginAction = (payload: loginRequestInterface) => {
    return {
        type: SagaTypes.LOGIN_REQUEST_START,
        payload
    }
}