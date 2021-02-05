import { takeLatest, fork, put, call } from 'redux-saga/effects';
import _Alert_ from '@_Alert_';
import { checkServer, checkServerNotice } from '@API';
import { SagaTypes } from '@Module/reduxActiontTypes';
const { START_LOADING, END_LOADING } = SagaTypes;

const { CHECK_SERVER_START } = SagaTypes;

// TODO : 2021-02-05 00:58  서버 상태 체크 saga 생성 작업.

// 사이트 기본 데이터.
function* getBaseDataActionSaga() {
    yield put({ type: START_LOADING });

    try {
        // 서버 상태 체크.
        const serverStatus = yield checkServer();

        if (serverStatus.status === false) {
            _Alert_.error({ text: serverStatus.message });
            yield put({ type: END_LOADING });
            return;
        }

        // const test = yield call(checkServerNotice);
        // console.log(test.);

        // console.log(test.);
    } catch (error) {
        // yield put(fetchNotices.fail({ error }))
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(CHECK_SERVER_START as any, getBaseDataActionSaga);
}

export default [fork(onBaseSagaWatcher)];
