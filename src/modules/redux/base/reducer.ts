import { createReducer } from "typesafe-actions";
import {baseSagaState } from 'commonTypes';
import * as reduxActiontTypes from 'modules/reduxActiontTypes';

const initialState: baseSagaState = {
    status: "idle"
}

export const baseSagaReducer = createReducer<baseSagaState>(initialState, {
    [reduxActiontTypes.Types.BASE_START]: (state: baseSagaState) => {
        return {
            ...state,
            status: "loading",
        };
    },
    [reduxActiontTypes.Types.BASE_SUCCESS]: (state: baseSagaState, action: reduxActiontTypes.Action<baseSagaState>) => {
        return {
            ...state,
            status: "success",
        };
    },
    [reduxActiontTypes.Types.BASE_ERROR]: (state: baseSagaState, action: reduxActiontTypes.Action<baseSagaState>) => {
        return {
            ...state,
            status: "failure",
        };
    },
    [reduxActiontTypes.Types.BASE_RESET]: (state: baseSagaState) => {
        return {
            ...state,
            status: "idle",
        };
    },
});
export default baseSagaReducer;