import { SagaTypes }  from 'modules/reduxActiontTypes';
// import {  loginRequestInterface } from 'commonTypes';
import {postCreateInterface} from 'reduxTypes';

// 로그인.
export const postCreateAction = (payload: postCreateInterface) => {
    return {
        type: SagaTypes.POST_CREATE_REQUEST_START,
        payload
    }
}