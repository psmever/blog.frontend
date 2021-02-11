import { takeLatest, fork, put, call } from 'redux-saga/effects';
import _Alert_ from '@_Alert_';
import { checkServerNotice, getSiteBaseData, loginCheck } from '@API';
import { ServerDefaultResult, ServerNotice, AppBase } from 'ServiceTypes';
import { SagaTypes } from '@Store/reduxActiontTypes';
import { COLORLOG, getLocalToken, isEmpty, removeLoginToken } from '@Helper';
import { axiosDefaultHeader } from '@Util/_Axios_';
import axios from 'axios';

const {
    START_LOADING,
    END_LOADING,
    COMMON_CODES,
    APP_ERROR,
    APP_INIT_START,
    APP_INIT_END,
    CHECK_LOGIN_START,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAILURE,
    LOGIN_SET_START,
    LOGIN_SET_END,
    SERVER_CHECK_START,
    SERVER_CHECK_END,
} = SagaTypes;

// 서버 통신 체크만 따로 뺴서..
const checkServerStatus = async () => {
    return axios.get('/api/system/check-status', axiosDefaultHeader);
};

function* appInitSaga() {
    yield put({ type: START_LOADING }); // 공통 로딩 시작.

    try {
        // 서버 체크 종료 전달.
        yield put({ type: SERVER_CHECK_START });

        // 서버 상태 체크.
        yield call(checkServerStatus);

        // 서버 공지 사항 유무.
        const serverNotice: ServerDefaultResult<ServerNotice> = yield call(checkServerNotice);
        if (serverNotice.status === true && serverNotice.payload && serverNotice.payload.notice_message) {
            _Alert_.default({ text: serverNotice.payload.notice_message });
        }

        // 기본 공통 데이터 조회.
        const serverBaseData: ServerDefaultResult<AppBase> = yield call(getSiteBaseData);
        const { codes } = serverBaseData.payload;

        // 공통 코드 데이터 전달.
        yield put({
            type: COMMON_CODES,
            payload: {
                codes: codes,
            },
        });

        // 서버 체크 종료 전달.
        yield put({ type: SERVER_CHECK_END });

        // 로그인 체크
        yield put({ type: CHECK_LOGIN_START });

        // APP INIT
        yield put({ type: APP_INIT_END });

        // 공통 로딩 종료.
        yield put({ type: END_LOADING });
    } catch (error) {
        COLORLOG(':: check Server Error :: ', 'error');
        yield put({
            type: APP_ERROR,
            payload: {
                message: '로딩중 문제가 발생했습니다.',
            },
        });
    }
}

function* checkLoginSaga() {
    const localToken = getLocalToken();
    const { login_access_token, login_expires_in, login_refresh_token, login_state } = localToken;

    // 로컬 토큰이 없으면 다시 한번 초기화 하고 있으면 로그인 체크.
    // 로그인 체크시 에러가 발생하면 로컬 토큰 초기화.
    if (
        !isEmpty(login_access_token) &&
        !isEmpty(login_expires_in) &&
        !isEmpty(login_refresh_token) &&
        !isEmpty(login_state)
    ) {
        const { status } = yield call(loginCheck);
        if (status === false) {
            removeLoginToken();
            yield put({ type: CHECK_LOGIN_FAILURE });
        } else {
            yield put({
                type: CHECK_LOGIN_SUCCESS,
                payload: {
                    access_token: login_access_token,
                    refresh_token: login_refresh_token,
                },
            });
        }
    } else {
        removeLoginToken();
        yield put({ type: CHECK_LOGIN_FAILURE });
    }
}

function* loginSetSaga() {
    const localToken = getLocalToken();
    const { login_access_token, login_refresh_token } = localToken;

    yield put({
        type: LOGIN_SET_END,
        payload: {
            access_token: login_access_token,
            refresh_token: login_refresh_token,
        },
    });
}

function* onBaseSagaWatcher() {
    // yield takeLatest(CHECK_SERVER_START as any, getBaseDataActionSaga);
    yield takeLatest(APP_INIT_START as any, appInitSaga);
    yield takeLatest(CHECK_LOGIN_START as any, checkLoginSaga);
    yield takeLatest(LOGIN_SET_START as any, loginSetSaga);
}

export default [fork(onBaseSagaWatcher)];
