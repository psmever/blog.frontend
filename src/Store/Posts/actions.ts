import { createAction } from 'typesafe-actions';

export const GET_POSTS = 'posts/GET_POSTS';
export const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE';

export const GET_POST_DETAIL = 'posts/GET_POST_DETAIL';
export const GET_POST_DETAIL_SUCCESS = 'posts/GET_POST_DETAIL_SUCCESS';
export const GET_POST_DETAIL_FAILURE = 'posts/GET_POST_DETAIL_FAILURE';

// 글 목록 가지고 오기.
export const getPostList = () => {
    return { type: GET_POSTS };
};

// 글 세부 정보 가지고 오기.

export const getPostDetail2 = ({ slug_title }: { slug_title: string }) => {
    return { type: GET_POST_DETAIL, payload: { slug_title: slug_title } };
};

export const getPostDetail = createAction(GET_POST_DETAIL, ({ slug_title }: { slug_title: string }) => ({
    slug_title,
}))();
