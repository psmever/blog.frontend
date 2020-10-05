import { takeLatest, fork, call, put } from "redux-saga/effects";
import { SagaTypes } from 'modules/reduxActiontTypes';
import { loginRequestInterface } from 'commonTypes';
import { login, logout } from 'modules/API';
import * as Helper from 'lib/Helper';
import * as _ from "lodash";

// 로그인 Saga
function* loginActionSaga({payload} : {payload: loginRequestInterface}) {
    const response = yield call(login, payload);
    if(response.status === true) {
        Helper.saveLoginToken(response.payload);
        yield put({ type: SagaTypes.LOGIN_REQUEST_SUCCESS, payload: response.payload });
    } else {
        yield put({ type: SagaTypes.LOGIN_REQUEST_ERROR, payload: response });
    }
}

// 로컬 토큰 처리 Saga
function* localTokenActionSaga() {
    const localToken = Helper.getLocalToken();
    if( !_.isNull(localToken.login_expires_in) && !_.isNull(localToken.login_access_token) && !_.isNull(localToken.login_refresh_token) ) {
        yield put({ type: SagaTypes.LOCAL_TOKEN_CHECK_SUCCESS, payload: localToken});
    } else {
        Helper.removeLoginToken();
        yield put({ type: SagaTypes.LOCAL_TOKEN_CHECK_RESET});
    }
}

// 로그아웃 saga
function* logoutActionSaga() {
    const localToken = Helper.getLocalToken();
    if(localToken.login_state === true) {
        const response = yield call(logout);
        if(response !== undefined && response.status === true) {
            Helper.removeLoginToken();
            yield put({ type: SagaTypes.LOGOUT_REQUEST_SUCCESS, payload: response.payload });
        } else {
            Helper.removeLoginToken();
            yield put({ type: SagaTypes.LOGOUT_REQUEST_ERROR, payload: response });
        }
    }
    yield put({ type: SagaTypes.LOGOUT_REQUEST_SUCCESS});
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.LOGIN_REQUEST_START as any, loginActionSaga);
    yield takeLatest(SagaTypes.LOGOUT_REQUEST_START as any, logoutActionSaga);
    yield takeLatest(SagaTypes.LOCAL_TOKEN_CHECK_START as any, localTokenActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];