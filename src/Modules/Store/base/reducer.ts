import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { BaseDataSagaState } from 'commonTypes';
import { SagaTypes } from '@Module/reduxActiontTypes';

const { BASE_REQUEST_START } = SagaTypes;

const initialState: BaseDataSagaState = {
    status: 'idle',
    codes: [],
    global_loading: 'idle',
};

export const baseSagaReducer = createReducer<BaseDataSagaState>(initialState, {
    [BASE_REQUEST_START]: (state: BaseDataSagaState) => {
        return produce(state, draft => {
            draft.status = 'loading';
        });
    },
});
export default baseSagaReducer;
