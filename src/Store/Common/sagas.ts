import { fork } from 'redux-saga/effects';

function* onBaseSagaWatcher() {
    // yield takeLatest(CHECK_SERVER_START as any, getBaseDataActionSaga);
}

export default [fork(onBaseSagaWatcher)];
