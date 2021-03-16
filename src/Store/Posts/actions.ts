import { PostsGubunItem, EditorData, PostButtonAction } from 'CommonTypes';
import { createAction } from 'typesafe-actions';

export const GET_POSTS = 'posts/GET_POSTS';
export const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'posts/GET_POSTS_FAILURE';

export const GET_POST_DETAIL = 'posts/GET_POST_DETAIL';
export const GET_POST_DETAIL_SUCCESS = 'posts/GET_POST_DETAIL_SUCCESS';
export const GET_POST_DETAIL_FAILURE = 'posts/GET_POST_DETAIL_FAILURE';

export const CLEAR_POST_CONTENTS = 'posts/CLEAR_POST_CONTENTS';
export const CLEAR_POST_BUTTON_ACTION = 'posts/CLEAR_POST_BUTTON_ACTION';
export const CHANGE_POST_GUBUN = 'posts/CHANGE_POST_GUBUN';
export const CHANGE_POST_CONTENTS = 'posts/CHANGE_POST_CONTENTS';
export const CHANGE_POST_BUTTON_ACTION = 'posts/CHANGE_POST_BUTTON_ACTION';
export const CHANGE_POST_CONTENTS_GUBUN = 'posts/CHANGE_POST_CONTENTS_GUBUN';

// 글 목록 가지고 오기.
export const getPostList = createAction(GET_POSTS)();

// 글 세부 정보 가지고 오기.
export const getPostDetail = createAction(GET_POST_DETAIL, ({ slug_title }: { slug_title: string }) => ({
    slug_title,
}))();

// 버튼 엑션 초기화.
export const clearPostButtonAction = createAction(CLEAR_POST_BUTTON_ACTION)();

/**
 * 글 등록.
 */
// 초기화
export const clearPostContents = createAction(CLEAR_POST_CONTENTS)();

// 글 구분.
export const changePostGubun = createAction(CHANGE_POST_GUBUN, ({ gubun }: { gubun: PostsGubunItem }) => ({
    gubun,
}))();

// 글 정보.
export const changePostContents = createAction(CHANGE_POST_CONTENTS, ({ title, tags, content }: EditorData) => ({
    title,
    tags,
    content,
}))();

// 버튼 액션 처리.
export const changePostButtonAction = createAction(
    CHANGE_POST_BUTTON_ACTION,
    ({ buttonAction }: { buttonAction: PostButtonAction }) => ({
        buttonAction,
    })
)();

export const changePostContentsGubun = createAction(
    CHANGE_POST_CONTENTS_GUBUN,
    ({ post_uuid, slug_title }: { post_uuid: string; slug_title: string }) => ({
        post_uuid,
        slug_title,
    })
)();
