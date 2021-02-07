import { createReducer } from 'typesafe-actions';
import produce from 'immer';
// import { ErrorMessage } from 'CommonTypes';
import { AppState, ErrorMessage } from 'StoreTypes';
import { SagaTypes, SagaAction } from '@Store/reduxActiontTypes';
const { START_LOADING, END_LOADING, APP_ERROR, SERVER_CHECK_END, APP_INIT_END } = SagaTypes;

const initialState: AppState = {
    loading: false,
    appInit: false,
    serverCheck: false,
    error: {
        status: false,
        message: '',
    },
};

export const CommonSagaReducer = createReducer<AppState>(initialState, {
    // app 로딩 시작.
    [START_LOADING]: (state: AppState) => {
        return produce(state, draft => {
            draft.loading = true;
        });
    },
    // app 로딩 종료.
    [END_LOADING]: (state: AppState) => {
        return produce(state, draft => {
            draft.loading = initialState.loading;
        });
    },
    // 서버 체크 종료.
    [SERVER_CHECK_END]: (state: AppState) => {
        return produce(state, draft => {
            draft.serverCheck = true;
        });
    },
    // App Init 종료.
    [APP_INIT_END]: (state: AppState) => {
        return produce(state, draft => {
            draft.appInit = true;
        });
    },
    // APP 에러.
    [APP_ERROR]: (state: AppState, action: SagaAction<ErrorMessage>) => {
        const {
            payload: { message },
        } = action;
        return produce(state, draft => {
            draft.error.status = true;
            draft.error.message = message;
        });
    },
});
export default CommonSagaReducer;
