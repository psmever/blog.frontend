import { takeLatest, fork, call, put } from "redux-saga/effects";
import { SagaTypes } from 'modules/reduxActiontTypes';
import { loginRequestInterface } from 'commonTypes';
import { login } from 'modules/API';

function* loginActionSaga({payload} : {payload: loginRequestInterface}) {
    const response = yield call(login, payload);
    if(response.status === true) {
        yield put({ type: SagaTypes.LOGIN_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.LOGIN_REQUEST_ERROR, payload: response});
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.LOGIN_REQUEST_START as any, loginActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];