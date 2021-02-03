import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { baseDataSagaState } from 'commonTypes';
import { SagaTypes } from '@Module/reduxActiontTypes';

const { BASE_REQUEST_START } = SagaTypes;

const initialState: baseDataSagaState = {
    status: 'idle',
    codes: [],
    global_loading: 'idle',
};

export const baseSagaReducer = createReducer<baseDataSagaState>(initialState, {
    [BASE_REQUEST_START]: (state: baseDataSagaState) => {
        return produce(state, draft => {
            draft.status = 'loading';
        });
    },
});
export default baseSagaReducer;
