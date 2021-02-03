import { takeLatest, fork } from 'redux-saga/effects';
import { SagaTypes } from '@Module/reduxActiontTypes';
// 사이트 기본 데이터.
function* getBaseDataActionSaga() {
    console.log('getBaseDataActionSaga');
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.BASE_REQUEST_START as any, getBaseDataActionSaga);
}

export default [fork(onBaseSagaWatcher)];
