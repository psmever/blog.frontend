import { createReducer } from "typesafe-actions";
import { baseSagaState } from 'reduxTypes';
import {SagaTypes, SagaAction} from 'modules/reduxActiontTypes';

const initialState: baseSagaState = {
    status: "idle"
}

export const baseSagaReducer = createReducer<baseSagaState>(initialState, {
    [SagaTypes.BASE_START]: (state: baseSagaState) => {
        return {
            ...state,
            status: "loading",
        };
    },
    [SagaTypes.BASE_SUCCESS]: (state: baseSagaState, action: SagaAction<baseSagaState>) => {
        return {
            ...state,
            status: "success",
        };
    },
    [SagaTypes.BASE_ERROR]: (state: baseSagaState, action: SagaAction<baseSagaState>) => {
        return {
            ...state,
            status: "failure",
        };
    },
    [SagaTypes.BASE_RESET]: (state: baseSagaState) => {
        return {
            ...state,
            status: "idle",
        };
    },
});
export default baseSagaReducer;