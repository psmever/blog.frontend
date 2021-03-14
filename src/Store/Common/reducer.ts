import { createReducer } from 'typesafe-actions';
import { SagaAction } from 'CommonTypes';
import produce from 'immer';
import { AppBase } from 'ServiceTypes';
import { CommonState } from 'StoreTypes';

import { COMMON_CODES } from './actions';

const initialState: CommonState = {
    codes: [],
};

export const CommonSagaReducer = createReducer<CommonState>(initialState, {
    // 공통 코드.
    [COMMON_CODES]: (state: CommonState, action: SagaAction<AppBase>) => {
        const {
            payload: { codes },
        } = action;
        return produce(state, draft => {
            draft.codes = codes;
        });
    },
});
export default CommonSagaReducer;
