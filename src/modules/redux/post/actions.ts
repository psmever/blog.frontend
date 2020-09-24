import { SagaTypes }  from 'modules/reduxActiontTypes';
// import {  loginRequestInterface } from 'commonTypes';
import {postCreateInterface} from 'reduxTypes';

// 글 등록.
export const postCreateAction = (payload: postCreateInterface) => {
    return {
        type: SagaTypes.POST_CREATE_REQUEST_START,
        payload
    }
}

export const postStateResetAction = () => {
    return {
        type: SagaTypes.POST_CREATE_REQUEST_RESET,
    }
}

export const postEditAction = ({post_uuid} : {post_uuid: string}) => {
    return {
        type: SagaTypes.POST_EDIT_REQUEST_START,
        post_uuid
    }
}