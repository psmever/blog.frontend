import { createReducer } from "typesafe-actions";
import {
    axiosReturnInterface,
    postSagaState,
    apiPostCreateResultInterface,
    apiPostEditResultInterface,
    apiPostDetailResultInterface,
    apiResultErrorInterface,
    apiPostListResultInterface,
} from 'commonTypes';
import { SagaTypes, SagaAction } from 'modules/reduxActiontTypes';

const initialState: postSagaState = {
    create: {
        status: 'idle',
    },
    edit: {
        status: 'idle',
    },
    publish: {
        status: 'idle',
    },
    update: {
        status: 'idle',
    },
    lists: {
        status: 'idle',
        per_page: 0,
        current_page: 0,
        posts: [],
    },
    detail: {
        status: 'idle',
    }
}

export const postagaReducer = createReducer<postSagaState>(initialState, {
    [SagaTypes.POST_CREATE_REQUEST_START]: (state: postSagaState) => {
        return {
            ...state,
            create: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.POST_CREATE_REQUEST_SUCCESS]: (state: postSagaState, action: axiosReturnInterface<apiPostCreateResultInterface>) => {
        return {
            ...state,
            create: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.POST_CREATE_REQUEST_ERROR]: (state: postSagaState, action: axiosReturnInterface<apiResultErrorInterface>) => {
        return {
            ...state,
            create: {
                status: 'failure',
                message: action.payload.message,
            }
        };
    },
    [SagaTypes.POST_CREATE_REQUEST_RESET]: (state: postSagaState) => {
        return {
            ...state,
            create: {
                status: 'idle',
            }
        };
    },

    [SagaTypes.POST_EDIT_REQUEST_START]: (state: postSagaState) => {
        return {
            ...state,
            edit: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.POST_EDIT_REQUEST_SUCCESS]: (state: postSagaState, action: SagaAction<apiPostEditResultInterface>) => {
        return {
            ...state,
            edit: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.POST_EDIT_REQUEST_ERROR]: (state: postSagaState, action: axiosReturnInterface<apiPostEditResultInterface>) => {
        return {
            ...state,
            edit: {
                status: 'failure',
                message: action.message,
            }
        };
    },
    [SagaTypes.POST_EDIT_REQUEST_RESET]: (state: postSagaState) => {
        return {
            ...state,
            edit: {
                status: 'idle',
            }
        };
    },

    [SagaTypes.POST_PUBLISH_REQUEST_START]: (state: postSagaState) => {
        return {
            ...state,
            publish: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.POST_PUBLISH_REQUEST_SUCCESS]: (state: postSagaState, action: SagaAction<axiosReturnInterface<any>>) => {
        return {
            ...state,
            publish: {
                status: 'success',
            }
        };
    },
    [SagaTypes.POST_PUBLISH_REQUEST_ERROR]: (state: postSagaState, action: axiosReturnInterface<any>) => {
        return {
            ...state,
            publish: {
                status: 'failure',
                message: action.message,
            }
        };
    },
    [SagaTypes.POST_PUBLISH_REQUEST_RESET]: (state: postSagaState) => {
        return {
            ...state,
            publish: {
                status: 'idle',
            }
        };
    },

    [SagaTypes.POST_UPDATE_REQUEST_START]: (state: postSagaState) => {
        return {
            ...state,
            update: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.POST_UPDATE_REQUEST_SUCCESS]: (state: postSagaState, action: axiosReturnInterface<any>) => {
        return {
            ...state,
            update: {
                status: 'success',
            }
        };
    },
    [SagaTypes.POST_UPDATE_REQUEST_ERROR]: (state: postSagaState, action: axiosReturnInterface<any>) => {
        return {
            ...state,
            update: {
                status: 'failure',
                message: action.message,
            }
        };
    },
    [SagaTypes.POST_UPDATE_REQUEST_RESET]: (state: postSagaState) => {
        return {
            ...state,
            update: {
                status: 'idle',
            }
        };
    },

    [SagaTypes.POST_LIST_REQUEST_START]: (state: postSagaState) => {
        return {
            ...state,
            lists: {
                status: 'idle',
                per_page: 0,
                current_page: 0,
                posts: Object.assign([], state.lists.posts, state.lists.posts)
            }
        }
    },
    [SagaTypes.POST_LIST_REQUEST_SUCCESS]: (state: postSagaState, action: axiosReturnInterface<apiPostListResultInterface>) => {
        // return {
        //     ...state,
        //     lists: {
        //         status: 'success',
        //         data: {
        //             per_page: action.payload.per_page,
        //             current_page: action.payload.current_page,
        //             posts: action.payload.posts
        //         }
        //     }
        // };

/*
        Object.assign({}, state.users.user_list, {
            state: 'success',
            list: action.payload
        })

                    data: Object.assign({}, state.lists.data, {
                        per_page: action.payload.per_page,
                        current_page: action.payload.current_page,
                        posts: action.payload.posts
                    })
*/
// console.debug(state.lists.posts);
console.debug(
    Object.assign({}, state.lists, {
        status: 'success',
        per_page: action.payload.per_page,
        current_page: action.payload.current_page,
        posts: action.payload.posts
    })
);

/*
        return {
            ...state,
            users: {
                ...state.users,
                user_list : Object.assign({}, state.users.user_list, {
                    state: 'success',
                    list: action.payload
                })
            }
        };
*/
// TODO 2020-10-15 18:26 기존거에 추가 해야 하는데 암댐.
        return {
            ...state,
            lists:{
                status: 'success',
                per_page: action.payload.per_page,
                current_page: action.payload.current_page,
                posts: action.payload.posts
            }


        };
    },
    [SagaTypes.POST_LIST_REQUEST_RESET]: (state: postSagaState) => {
        return {
            ...state,
            lists: {
                status: 'idle',
                per_page: 0,
                current_page: 0,
                posts: [],
            }
        };
    },

    [SagaTypes.POST_DETAIL_REQUEST_START]: (state: postSagaState) => {
        return {
            ...state,
            detail: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.POST_DETAIL_REQUEST_SUCCESS]: (state: postSagaState, action: axiosReturnInterface<apiPostDetailResultInterface>) => {
        return {
            ...state,
            detail: {
                status: 'success',
                data: action.payload
            }
        };
    },
    [SagaTypes.POST_DETAIL_REQUEST_ERROR]: (state: postSagaState, action: axiosReturnInterface<apiPostDetailResultInterface>) => {
        return {
            ...state,
            detail: {
                status: 'failure',
                message: action.message,
            }
        };
    },
    [SagaTypes.POST_DETAIL_REQUEST_RESET]: (state: postSagaState) => {
        return {
            ...state,
            detail: {
                status: 'idle',
            }
        };
    },
});
export default postagaReducer;