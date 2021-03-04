import { SagaTypes } from '@Store/reduxActiontTypes';

const { GET_POSTS, GET_POST_DETAIL } = SagaTypes;

// 글 목록 가지고 오기.
export const getPostList = () => {
    return { type: GET_POSTS };
};

// 글 세부 정보 가지고 오기.

export const getPostDetail = ({ slug_title }: { slug_title: string }) => {
    return { type: GET_POST_DETAIL, payload: { slug_title: slug_title } };
};
