import { takeLatest, fork } from "redux-saga/effects";
import { Types } from 'modules/reduxActiontTypes';

function* baseActionSaga() {

}

function* onBaseSagaWatcher() {
    yield takeLatest(Types.BASE_START as any, baseActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];