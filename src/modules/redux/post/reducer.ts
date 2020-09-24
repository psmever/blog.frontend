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
});
export default postagaReducer;