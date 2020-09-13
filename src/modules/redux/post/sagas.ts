import { takeLatest, fork, call, put } from "redux-saga/effects";
import { SagaTypes } from 'modules/reduxActiontTypes';
import { loginRequestInterface } from 'commonTypes';
import { postCreate } from 'modules/API';
import * as Helper from 'lib/Helper';
import * as _ from "lodash";

// 글등록 Saga
function* postCreateActionSaga({payload} : {payload: any}) {
    const response = yield call(postCreate, payload);
    if(response.status === true) {
        yield put({ type: SagaTypes.POST_CREATE_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.POST_CREATE_REQUEST_ERROR, payload: response});
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.POST_CREATE_REQUEST_START as any, postCreateActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];