import { takeLatest, fork } from "redux-saga/effects";
import { SagaTypes } from 'modules/reduxActiontTypes';

function* baseActionSaga() {

}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.BASE_START as any, baseActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];