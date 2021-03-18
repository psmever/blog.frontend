import { createReducer } from 'typesafe-actions';
import { SagaAction, EditorData, DefaultPostSaveResult } from 'CommonTypes';
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
    CHANGE_POST_CONTENTS,
    CLEAR_POST_CONTENTS,
    CLEAR_POST_DETAIL,
    CHANGE_POST_BUTTON_ACTION,
    CLEAR_POST_BUTTON_ACTION,
    CHANGE_POST_CONTENTS_GUBUN,
    GET_POST_EDIT,
    GET_POST_EDIT_SUCCESS,
    GET_POST_EDIT_FAILURE,
    CLEAR_POST_CONTENTS_INFO,
    CLEAR_POST_CONTENTS_STATE,
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
        info: {
            post_uuid: '',
            user: {
                user_uuid: '',
                user_type: {
                    code_id: '',
                    code_name: '',
                },
                user_level: {
                    code_id: '',
                    code_name: '',
                },
                name: '',
                nickname: '',
                email: '',
                active: 'N',
            },
            post_title: '',
            slug_title: '',
            contents_html: '',
            contents_text: '',
            markdown: 'N',
            tags: [
                {
                    tag_id: '',
                    tag_text: '',
                },
            ],
            view_count: 0,
            post_active: 'N',
            post_publish: 'N',
            detail_created: '',
            detail_updated: '',
        },
    },
    contents: {
        state: 'idle',
        info: {
            title: '',
            tags: [],
            content: '',
        },
        contentsGubun: {
            post_uuid: '',
            slug_title: '',
            post_active: 'N',
            post_publish: 'N',
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
    [CLEAR_POST_DETAIL]: (state: PostsState) => {
        return produce(state, draft => {
            draft.detail = initialState.detail;
        });
    },
    [CLEAR_POST_CONTENTS_INFO]: (state: PostsState) => {
        return produce(state, draft => {
            draft.contents.info = initialState.contents.info;
        });
    },
    // 글 정보 변경 처리.
    [CLEAR_POST_CONTENTS_STATE]: (state: PostsState, action: SagaAction<{ state: 'idle' | 'loading' | 'ready' }>) => {
        return produce(state, draft => {
            draft.contents.state = action.payload.state;
        });
    },
    // 글 정보 변경 처리.
    [CHANGE_POST_CONTENTS]: (state: PostsState, action: SagaAction<EditorData>) => {
        return produce(state, draft => {
            draft.contents.info = action.payload;
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
    // 버튼 모드 클리어.
    [CLEAR_POST_BUTTON_ACTION]: (state: PostsState) => {
        return produce(state, draft => {
            draft.contents.buttonAction = initialState.contents.buttonAction;
        });
    },
    // 글쓰기 모드에서 저장 눌렀을 경우 수정모드 처리 위해.
    [CHANGE_POST_CONTENTS_GUBUN]: (state: PostsState, action: SagaAction<DefaultPostSaveResult>) => {
        return produce(state, draft => {
            draft.contents.contentsGubun = action.payload;
        });
    },
    // 글 상세 정보 가지고 오기 로딩 처리.
    [GET_POST_EDIT]: (state: PostsState) => {
        return produce(state, draft => {
            draft.detail.state = 'loading';
        });
    },
    // 수정 모드 일때 각 Store 정보들 업데이트 처리.
    [GET_POST_EDIT_SUCCESS]: (state: PostsState, action: SagaAction<PostDetailItem>) => {
        return produce(state, draft => {
            draft.detail.state = 'success';
            draft.contents.state = 'ready';

            draft.detail.info = action.payload;

            draft.contents.contentsGubun.post_uuid = action.payload.post_uuid;
            draft.contents.contentsGubun.slug_title = action.payload.slug_title;
            draft.contents.contentsGubun.post_active = action.payload.post_active;
            draft.contents.contentsGubun.post_publish = action.payload.post_publish;

            draft.contents.info.title = action.payload.post_title;
            draft.contents.info.tags = action.payload.tags;
            draft.contents.info.content = action.payload.contents_text;
        });
    },
    // 수정 모드 일때 정보 가지고 오기 실패.
    [GET_POST_EDIT_FAILURE]: (state: PostsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.detail.state = 'failure';
            draft.detail.info = initialState.detail.info;
            draft.detail.message = action.payload.message;
        });
    },
});
export default PostsSagaReducer;
