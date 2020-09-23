import { createReducer } from "typesafe-actions";
import { postSagaState } from 'reduxTypes';
import { axiosReturnInterface } from 'commonTypes';
import { SagaTypes, SagaAction } from 'modules/reduxActiontTypes';

const initialState: postSagaState = {
    create: {
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
});
export default postagaReducer;