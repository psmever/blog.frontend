import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { CommonState } from 'StoreTypes';
import { AppBase } from 'ServiceTypes';
import { SagaTypes, SagaAction } from '@Store/reduxActiontTypes';

const { COMMON_CODES } = SagaTypes;

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
