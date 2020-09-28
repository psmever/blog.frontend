import { createReducer } from "typesafe-actions";
import { baseDataSagaState } from 'reduxTypes';
import {SagaTypes, SagaAction} from 'modules/reduxActiontTypes';

const initialState: baseDataSagaState = {
    status: "idle",
    codes: [],
    global_loading: "idle"
}

export const baseSagaReducer = createReducer<baseDataSagaState>(initialState, {
    [SagaTypes.BASE_REQUEST_START]: (state: baseDataSagaState) => {
        return {
            ...state,
            status: "loading",
        };
    },
    [SagaTypes.BASE_REQUEST_SUCCESS]: (state: baseDataSagaState, action: SagaAction<baseDataSagaState>) => {
        return {
            ...state,
            status: "success",
            codes: action.payload.codes
        };
    },
    [SagaTypes.BASE_REQUEST_ERROR]: (state: baseDataSagaState, action: SagaAction<baseDataSagaState>) => {
        return {
            ...state,
            status: "failure",
        };
    },
    [SagaTypes.BASE_REQUEST_RESET]: (state: baseDataSagaState) => {
        return {
            ...state,
            status: "idle",
        };
    },

    [SagaTypes.BASE_GLOBAL_LOADING_START]: (state: baseDataSagaState) => {
        return {
            ...state,
            global_loading: "loading",
        };
    },
    [SagaTypes.BASE_GLOBAL_LOADING_END]: (state: baseDataSagaState) => {
        return {
            ...state,
            global_loading: "idle",
        };
    },
});
export default baseSagaReducer;