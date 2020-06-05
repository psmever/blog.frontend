import { takeLatest, fork } from "redux-saga/effects";
import { Types }  from './types';

function* baseActionSaga() {
}

function* onBaseSagaWatcher() {
    yield takeLatest(Types.BASE_START as any, baseActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];