import { takeLatest, fork, put } from "redux-saga/effects";
import { SagaTypes } from 'modules/reduxActiontTypes';
import { getSiteBaseData } from 'modules/API';

function* getBaseDataActionSaga() {
    const response = yield getSiteBaseData();
    if(response.status === true) {
        yield put({ type: SagaTypes.BASE_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.BASE_REQUEST_ERROR, payload: response});
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.BASE_REQUEST_START as any, getBaseDataActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];