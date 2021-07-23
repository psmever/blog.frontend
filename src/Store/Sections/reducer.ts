import { createReducer } from 'typesafe-actions';
import { SectionsState } from 'StoreTypes';

// 스토어 init.
const initialState: SectionsState = {
    section: {
        state: 'failure',
        message: '',
        gubun: '',
        post_uuid: '',
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
            historys: [
                {
                    post_uuid: '',
                    gubun: {
                        code_id: '',
                        code_name: '',
                    },
                    smal_content: '',
                    created_at: '',
                    created_time: '',
                },
            ],
        },
    },
};

export const SectionsSagaReducer = createReducer<SectionsState>(initialState, {});
export default SectionsSagaReducer;
