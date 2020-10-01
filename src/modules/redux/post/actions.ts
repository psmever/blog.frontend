import { SagaTypes }  from 'modules/reduxActiontTypes';
import { postRequestInterface } from 'commonTypes';

// 글 등록.
export const postCreateAction = (payload: postRequestInterface) => {
    return {
        type: SagaTypes.POST_CREATE_REQUEST_START,
        payload
    }
}

// 글 등록 스테리트 리셋
export const postStateResetAction = () => {
    return {
        type: SagaTypes.POST_CREATE_REQUEST_RESET,
    }
}

// 글 내용 보기 ( 수정. )
export const postEditAction = ({post_uuid} : {post_uuid: string}) => {
    return {
        type: SagaTypes.POST_EDIT_REQUEST_START,
        post_uuid
    }
}

// 글 내용 보기 스테이트 리셋.
export const postEditResetAction = () => {
    return {
        type: SagaTypes.POST_EDIT_REQUEST_RESET,
    }
}

// 글 게시.
export const postPublishAction = ({post_uuid} : {post_uuid: string}) => {
    return {
        type: SagaTypes.POST_PUBLISH_REQUEST_START,
        post_uuid
    }
}

// 글 게시 스테이트 리셋.
export const postPublishResetAction = () => {
    return {
        type: SagaTypes.POST_PUBLISH_REQUEST_RESET
    }
}

// 글 게시.
export const postUpdateAction = ({post_uuid, payload} : {post_uuid: string, payload: postRequestInterface}) => {
    return {
        type: SagaTypes.POST_UPDATE_REQUEST_START,
        post_uuid: post_uuid,
        payload: payload
    }
}

// 글 게시 스테이트 리셋.
export const postUpdateResetAction = () => {
    return {
        type: SagaTypes.POST_UPDATE_REQUEST_RESET
    }
}