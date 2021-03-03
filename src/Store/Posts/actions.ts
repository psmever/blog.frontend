import { SagaTypes } from '@Store/reduxActiontTypes';

const { GET_POSTS } = SagaTypes;

// 글 목록 가지고 오기.
export const getPostList = () => {
    return { type: GET_POSTS };
};
