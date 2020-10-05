import { createReducer } from "typesafe-actions";

import {
    axiosReturnInterface,
    authenticateSagaState,
    localTokenInterface
} from 'commonTypes';
import { SagaTypes, SagaAction } from 'modules/reduxActiontTypes';

const initialState: authenticateSagaState = {
    login: {
        status: 'idle',
    },
    logout: {
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
    [SagaTypes.LOGIN_REQUEST_SUCCESS]: (state: authenticateSagaState, action: SagaAction<localTokenInterface>) => {
        return {
            ...state,
            login: {
                status: 'success',
                data: action.payload,
            }
        };
    },
    [SagaTypes.LOGIN_REQUEST_ERROR]: (state: authenticateSagaState, action: SagaAction<axiosReturnInterface<localTokenInterface>>) => {
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
    [SagaTypes.LOCAL_TOKEN_CHECK_SUCCESS]: (state: authenticateSagaState, action: SagaAction<localTokenInterface>) => {
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

    [SagaTypes.LOGOUT_REQUEST_START]: (state: authenticateSagaState) => {
        return {
            ...state,
            logout: {
                status: 'loading',
            }
        }
    },
    [SagaTypes.LOGOUT_REQUEST_SUCCESS]: (state: authenticateSagaState, action: SagaAction<localTokenInterface>) => {
        return {
            ...state,
            logout: {
                status: 'success',
            }
        };
    },
    [SagaTypes.LOGOUT_REQUEST_ERROR]: (state: authenticateSagaState) => {
        return {
            ...state,
            logout: {
                status: 'idle',
            }
        };
    },
    [SagaTypes.LOGOUT_REQUEST_RESET]: (state: authenticateSagaState) => {
        return {
            ...state,
            logout: {
                status: 'idle',
            }
        };
    },
});
export default authSagaReducer;