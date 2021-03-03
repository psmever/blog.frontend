import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { PostList } from 'ServiceTypes';
import { PostsState } from 'StoreTypes';
import { SagaTypes, SagaAction } from '@Store/reduxActiontTypes';
const { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } = SagaTypes;

// 스토어 init.
const initialState: PostsState = {
    list: {
        pageNumber: 1,
        state: 'idle',
        message: '',
        posts: [],
    },
};

export const PostsSagaReducer = createReducer<PostsState>(initialState, {
    [GET_POSTS]: (state: PostsState) => {
        return produce(state, draft => {
            draft.list.state = 'loading';
        });
    },
    [GET_POSTS_SUCCESS]: (state: PostsState, action: SagaAction<PostList>) => {
        return produce(state, draft => {
            draft.list.state = 'success';
            draft.list.pageNumber = action.payload.current_page;
            draft.list.posts = action.payload.posts;
        });
    },
    [GET_POSTS_FAILURE]: (state: PostsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.list.state = 'failure';
            draft.list.pageNumber = initialState.list.pageNumber;
            draft.list.posts = initialState.list.posts;
            draft.list.message = action.payload.message;
        });
    },
});
export default PostsSagaReducer;
