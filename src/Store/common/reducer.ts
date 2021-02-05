import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { CommonStoreState } from 'commonTypes';
import { SagaTypes } from '@Module/reduxActiontTypes';

const { START_LOADING, END_LOADING } = SagaTypes;

const initialState: CommonStoreState = {
    loading: false,
    check: false,
    status: false,
    codes: [],
};

export const CommonSagaReducer = createReducer<CommonStoreState>(initialState, {
    [START_LOADING]: (state: CommonStoreState) => {
        return produce(state, draft => {
            draft.loading = true;
        });
    },
    [END_LOADING]: (state: CommonStoreState) => {
        return produce(state, draft => {
            draft.loading = initialState.loading;
        });
    },
});
export default CommonSagaReducer;
