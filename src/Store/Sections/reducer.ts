import { createReducer } from 'typesafe-actions';
import { SectionsState } from 'StoreTypes';
import { SectionHistoryResponse } from 'ServiceTypes';
import { SagaAction, SectionPostItem } from 'CommonTypes';
import { isEmpty } from '@Helper';
import {
    RESET_SECTIONS_POST,
    GET_SECTIONS_POST,
    GET_SECTIONS_POST_FAILURE,
    GET_SECTIONS_POST_SUCCESS,
    GET_SECTIONS_HISTORY_SUCCESS,
    GET_SECTIONS_HISTORY_FAILURE,
    GET_HISTORY_DETAIL_SUCCESS,
    GET_HISTORY_DETAIL_FAILURE,
} from './actions';
import produce from 'immer';

// 스토어 init.
const initialState: SectionsState = {
    section: {
        state: 'failure',
        message: '',
        detail: {
            post_uuid: '',
            contents_html: '',
            contents_text: '',
            markdown: 'Y',
            created: '',
        },
        history: {
            per_page: '',
            current_page: 0,
            hasmore: false,
            historys: [],
        },
    },
};

export const SectionsSagaReducer = createReducer<SectionsState>(initialState, {
    //섹션 스테이트 리셋.
    [RESET_SECTIONS_POST]: (state: SectionsState) => {
        return produce(state, draft => {
            draft.section = initialState.section;
        });
    },

    // 섹션 정보 가지고 오기.
    [GET_SECTIONS_POST]: (state: SectionsState) => {
        return produce(state, draft => {
            draft.section.state = 'loading';
        });
    },
    // 섹션 정보 가지고 오기 성공.
    [GET_SECTIONS_POST_SUCCESS]: (state: SectionsState, action: SagaAction<SectionPostItem>) => {
        return produce(state, draft => {
            draft.section.state = 'success';
            draft.section.detail = action.payload;
        });
    },
    // 섹션 정보 가지고 오기 실패.
    [GET_SECTIONS_POST_FAILURE]: (state: SectionsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.section.state = 'failure';
            draft.section.message = action.payload.message;
        });
    },
    [GET_SECTIONS_HISTORY_SUCCESS]: (state: SectionsState, action: SagaAction<SectionHistoryResponse>) => {
        return produce(state, draft => {
            draft.section.history = isEmpty(action.payload) ? initialState.section.history : action.payload;
        });
    },
    [GET_SECTIONS_HISTORY_FAILURE]: (state: SectionsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.section.state = 'failure';
            draft.section.message = action.payload.message;
        });
    },
    // 섹션 히스토리 정보 가지고 오기 성공.
    [GET_HISTORY_DETAIL_SUCCESS]: (state: SectionsState, action: SagaAction<SectionPostItem>) => {
        return produce(state, draft => {
            draft.section.state = 'success';
            draft.section.detail = action.payload;
        });
    },
    // 섹션 히스토리 정보 가지고 오기 실패.
    [GET_HISTORY_DETAIL_FAILURE]: (state: SectionsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.section.state = 'failure';
            draft.section.message = action.payload.message;
        });
    },
});
export default SectionsSagaReducer;
