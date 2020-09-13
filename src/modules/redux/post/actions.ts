import { SagaTypes }  from 'modules/reduxActiontTypes';
// import {  loginRequestInterface } from 'commonTypes';

// 로그인.
export const postCreateAction = (payload: any) => {
    return {
        type: SagaTypes.POST_CREATE_REQUEST_START,
        payload
    }
}