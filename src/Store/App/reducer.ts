import { createReducer } from 'typesafe-actions';
import { SagaAction } from 'CommonTypes';
import produce from 'immer';
// import { ErrorMessage } from 'CommonTypes';
import { AppState, ErrorMessage } from 'StoreTypes';
import { SagaTypes } from '@Store/reduxActiontTypes';
const {
    START_LOADING,
    END_LOADING,
    APP_ERROR,
    SERVER_CHECK_END,
    APP_INIT_END,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAILURE,
    LOGIN_SET_START,
    LOGIN_SET_END,
    SET_LOGOUT,
} = SagaTypes;

// 스토어 init.
const initialState: AppState = {
    loading: false,
    serverCheck: false,
    loginState: false,
    appInit: false,
    loginUser: {
        access_token: '',
        refresh_token: '',
    },
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
    // 로그인 체크 성공
    [CHECK_LOGIN_SUCCESS]: (state: AppState, action: SagaAction<{ access_token: string; refresh_token: string }>) => {
        return produce(state, draft => {
            draft.loginState = true;
            draft.loginUser.access_token = action.payload.access_token;
            draft.loginUser.refresh_token = action.payload.refresh_token;
        });
    },
    // 로그인 정보 저장시 우선 초기화.
    [LOGIN_SET_START]: (state: AppState) => {
        return produce(state, draft => {
            draft.loginState = false;
            draft.loginUser = initialState.loginUser;
        });
    },
    // 로그인 체크후 로그인 정보 저장.
    [LOGIN_SET_END]: (state: AppState, action: SagaAction<{ access_token: string; refresh_token: string }>) => {
        return produce(state, draft => {
            draft.loginState = true;
            draft.loginUser.access_token = action.payload.access_token;
            draft.loginUser.refresh_token = action.payload.refresh_token;
        });
    },
    // 로그인 체크 실패시 초기화.
    [CHECK_LOGIN_FAILURE]: (state: AppState) => {
        return produce(state, draft => {
            draft.loginState = false;
            draft.loginUser = initialState.loginUser;
        });
    },
    // 로그아웃 처리.
    [SET_LOGOUT]: (state: AppState) => {
        return produce(state, draft => {
            draft.loginState = false;
            draft.loginUser = initialState.loginUser;
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
