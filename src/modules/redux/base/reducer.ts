import { createReducer } from "typesafe-actions";
import * as _commonTypes_ from 'modules/commonTypes';
import { Types } from 'modules/reduxActiontTypes';

const initialState: _commonTypes_.baseSagaState = {
    status: "idle"
}

export const baseSagaReducer = createReducer<_commonTypes_.baseSagaState>(initialState, {
    [Types.BASE_START]: (state: _commonTypes_.baseSagaState) => {
        return {
            ...state,
            status: "loading",
        };
    },
    [Types.BASE_SUCCESS]: (state: _commonTypes_.baseSagaState, action: _commonTypes_.Action<_commonTypes_.baseSagaState>) => {
        return {
            ...state,
            status: "success",
        };
    },
    [Types.BASE_ERROR]: (state: _commonTypes_.baseSagaState, action: _commonTypes_.Action<_commonTypes_.baseSagaState>) => {
        return {
            ...state,
            status: "failure",
        };
    },
    [Types.BASE_RESET]: (state: _commonTypes_.baseSagaState) => {
        return {
            ...state,
            status: "idle",
        };
    },
});
export default baseSagaReducer;