import { createReducer } from 'typesafe-actions';
import { SagaAction, EditorData } from 'CommonTypes';
import produce from 'immer';
import { PostList } from 'ServiceTypes';
import { PostDetailItem, PostButtonAction } from 'CommonTypes';
import { PostsState } from 'StoreTypes';
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    GET_POST_DETAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAILURE,
    CHANGE_POST_GUBUN,
    CHANGE_POST_CONTENTS,
    CLEAR_POST_CONTENTS,
    CHANGE_POST_BUTTON_ACTION,
    CLEAR_POST_BUTTON_ACTION,
    CHANGE_POST_CONTENTS_GUBUN,
} from './actions';

// 스토어 init.
const initialState: PostsState = {
    list: {
        pageNumber: 1,
        state: 'idle',
        message: '',
        posts: [],
    },
    detail: {
        slug_title: '',
        state: 'idle',
        message: '',
        info: {},
    },
    contents: {
        state: 'idle',
        gubun: '',
        info: {
            title: '',
            tags: [],
            content: '',
        },
        contentsGubun: {
            post_uuid: '',
            slug_title: '',
        },
        buttonAction: 'idle',
    },
};

export const PostsSagaReducer = createReducer<PostsState>(initialState, {
    // 글목록 가지고 오기.
    [GET_POSTS]: (state: PostsState) => {
        return produce(state, draft => {
            draft.list.state = 'loading';
        });
    },
    // 글목록 가지고 오기 성공.
    [GET_POSTS_SUCCESS]: (state: PostsState, action: SagaAction<PostList>) => {
        return produce(state, draft => {
            draft.list.state = 'success';
            draft.list.pageNumber = action.payload.current_page;
            draft.list.posts = action.payload.posts;
        });
    },
    // 글목록 가지고 오기 실패.
    [GET_POSTS_FAILURE]: (state: PostsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.list.state = 'failure';
            draft.list.pageNumber = initialState.list.pageNumber;
            draft.list.posts = initialState.list.posts;
            draft.list.message = action.payload.message;
        });
    },
    // 글 내용 가지고 오기
    [GET_POST_DETAIL]: (state: PostsState) => {
        return produce(state, draft => {
            draft.detail.state = 'loading';
        });
    },
    // 글 내용 가지고 오기 성공.
    [GET_POST_DETAIL_SUCCESS]: (state: PostsState, action: SagaAction<PostDetailItem>) => {
        return produce(state, draft => {
            draft.detail.state = 'success';
            draft.detail.info = action.payload;
        });
    },
    // 글 내용 가지고 오기 실패.
    [GET_POST_DETAIL_FAILURE]: (state: PostsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.detail.state = 'failure';
            draft.detail.info = initialState.detail.info;
            draft.detail.message = action.payload.message;
        });
    },

    // 글 구분 처리.
    [CLEAR_POST_CONTENTS]: (state: PostsState) => {
        return produce(state, draft => {
            draft.contents = initialState.contents;
        });
    },
    // 글 구분 값 처리.
    [CHANGE_POST_GUBUN]: (state: PostsState, action: SagaAction<{ gubun: string }>) => {
        return produce(state, draft => {
            draft.contents.state = 'ready';
            draft.contents.gubun = action.payload.gubun;
        });
    },
    // 글 정보 변경 처리.
    [CHANGE_POST_CONTENTS]: (state: PostsState, action: SagaAction<EditorData>) => {
        return produce(state, draft => {
            draft.contents.info = action.payload;
        });
    },
    // 글 등록 버튼 액션 구분.
    [CHANGE_POST_BUTTON_ACTION]: (state: PostsState, action: SagaAction<{ buttonAction: PostButtonAction }>) => {
        return produce(state, draft => {
            draft.contents.buttonAction = action.payload.buttonAction;
        });
    },
    [CLEAR_POST_BUTTON_ACTION]: (state: PostsState) => {
        return produce(state, draft => {
            draft.contents.buttonAction = initialState.contents.buttonAction;
        });
    },
    [CHANGE_POST_CONTENTS_GUBUN]: (
        state: PostsState,
        action: SagaAction<{ post_uuid: string; slug_title: string }>
    ) => {
        return produce(state, draft => {
            draft.contents.contentsGubun.post_uuid = action.payload.post_uuid;
            draft.contents.contentsGubun.slug_title = action.payload.slug_title;
        });
    },
});
export default PostsSagaReducer;
