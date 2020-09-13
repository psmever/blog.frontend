import { createReducer } from "typesafe-actions";
import { authenticateSagaState } from 'reduxTypes';
import { axiosReturnInterface } from 'commonTypes';
import { SagaTypes, SagaAction } from 'modules/reduxActiontTypes';

const initialState: authenticateSagaState = {
    login: {
        status: 'idle',
    },
}

export const authSagaReducer = createReducer<authenticateSagaState>(initialState, {
    [SagaTypes.LOGIN_REQUEST_START]: (state: authenticateSagaState) => {
        return {
            ...state,
            login: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.LOGIN_REQUEST_SUCCESS]: (state: authenticateSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            login: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.LOGIN_REQUEST_ERROR]: (state: authenticateSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            login: {
                status: 'failure',
                message: action.payload.message,
            }
        };
    },
    [SagaTypes.LOGIN_REQUEST_RESET]: (state: authenticateSagaState) => {
        return {
            ...state,
            login: {
                status: 'idle',
            }
        };
    },

    [SagaTypes.LOCAL_TOKEN_CHECK_START]: (state: authenticateSagaState) => {
        return {
            ...state,
            login: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.LOCAL_TOKEN_CHECK_SUCCESS]: (state: authenticateSagaState, action: SagaAction<axiosReturnInterface>) => {
        return {
            ...state,
            login: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.LOCAL_TOKEN_CHECK_RESET]: (state: authenticateSagaState) => {
        return {
            ...state,
            login: {
                status: 'idle',
            }
        };
    },
});
export default authSagaReducer;