import { createReducer } from "typesafe-actions";
import { postSagaState } from 'reduxTypes';
import { axiosReturnInterface } from 'commonTypes';
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
    [SagaTypes.POST_CREATE_REQUEST_SUCCESS]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            create: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.POST_CREATE_REQUEST_ERROR]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
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
    [SagaTypes.POST_EDIT_REQUEST_SUCCESS]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            edit: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.POST_EDIT_REQUEST_ERROR]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            edit: {
                status: 'failure',
                message: action.payload.message,
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
    [SagaTypes.POST_PUBLISH_REQUEST_SUCCESS]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            publish: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.POST_PUBLISH_REQUEST_ERROR]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            publish: {
                status: 'failure',
                message: action.payload.message,
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
    [SagaTypes.POST_UPDATE_REQUEST_SUCCESS]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            update: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.POST_UPDATE_REQUEST_ERROR]: (state: postSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            update: {
                status: 'failure',
                message: action.payload.message,
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
});
export default postagaReducer;