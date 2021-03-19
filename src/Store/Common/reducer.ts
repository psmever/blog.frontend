import { createReducer } from 'typesafe-actions';
import { SagaAction, TagGroupItem } from 'CommonTypes';
import produce from 'immer';
import { AppBase } from 'ServiceTypes';
import { CommonState } from 'StoreTypes';

import { COMMON_CODES, COMMON_TAGS, COMMON_TAGS_SUCCESS, COMMON_TAGS_FAILURE } from './actions';

const initialState: CommonState = {
    codes: [],
    tagsGroup: {
        state: 'idle',
        tags: [],
        message: '',
    },
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
    [COMMON_TAGS]: (state: CommonState) => {
        return produce(state, draft => {
            draft.tagsGroup = initialState.tagsGroup;
        });
    },
    [COMMON_TAGS_SUCCESS]: (state: CommonState, action: SagaAction<TagGroupItem[]>) => {
        return produce(state, draft => {
            draft.tagsGroup.state = 'success';
            draft.tagsGroup.tags = action.payload;
            draft.tagsGroup.message = '';
        });
    },
    [COMMON_TAGS_FAILURE]: (state: CommonState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.tagsGroup.state = 'failure';
            draft.tagsGroup.tags = initialState.tagsGroup.tags;
            draft.tagsGroup.message = action.payload.message;
        });
    },
});
export default CommonSagaReducer;
