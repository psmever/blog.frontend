import { createReducer } from 'typesafe-actions';
import { axiosReturnInterface, postSagaState, apiPostListResultInterface } from 'commonTypes';
import { SagaTypes } from 'modules/reduxActiontTypes';

const initialState: postSagaState = {
    lists: {
        status: 'idle',
        per_page: 0,
        current_page: 0,
        hasmore: true,
        posts: [],
    },
};

export const postagaReducer = createReducer<postSagaState>(initialState, {
    [SagaTypes.POST_LIST_REQUEST_START]: (state: postSagaState) => {
        return {
            ...state,
            lists: {
                status: 'idle',
                per_page: state.lists.per_page,
                current_page: state.lists.current_page,
                hasmore: true,
                posts: Object.assign([], state.lists.posts, state.lists.posts),
            },
        };
    },
    [SagaTypes.POST_LIST_REQUEST_SUCCESS]: (
        state: postSagaState,
        action: axiosReturnInterface<apiPostListResultInterface>
    ) => {
        return {
            ...state,
            lists: {
                status: 'success',
                per_page: action.payload.per_page,
                current_page: action.payload.current_page,
                hasmore: action.payload.hasmore,
                posts: state.lists.posts.concat(action.payload.posts),
            },
        };
    },
    [SagaTypes.POST_LIST_REQUEST_ERROR]: (
        state: postSagaState,
        action: axiosReturnInterface<apiPostListResultInterface>
    ) => {
        return {
            ...state,
            lists: {
                status: 'idle',
                per_page: state.lists.per_page,
                current_page: state.lists.current_page,
                hasmore: action.payload.hasmore,
                posts: Object.assign([], state.lists.posts, state.lists.posts),
            },
        };
    },
    [SagaTypes.POST_LIST_REQUEST_RESET]: (state: postSagaState) => {
        return {
            ...state,
            lists: {
                status: 'idle',
                per_page: 0,
                current_page: 0,
                hasmore: true,
                posts: [],
            },
        };
    },
});
export default postagaReducer;
