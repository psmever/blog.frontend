import { takeLatest, fork, call, put } from 'redux-saga/effects';
import { SagaTypes } from 'modules/reduxActiontTypes';
import { getPostList } from 'modules/API';

// 글 리스트 가지고 오기
function* postGetListActionSaga({ pageNumber }: { pageNumber: number }) {
    const response = yield call(getPostList, { pageNumber });
    if (response.status === true && response.payload) {
        yield put({ type: SagaTypes.POST_LIST_REQUEST_SUCCESS, payload: response.payload });
    } else {
        yield put({ type: SagaTypes.POST_LIST_REQUEST_ERROR, payload: response });
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.POST_LIST_REQUEST_START as any, postGetListActionSaga);
}

export default [fork(onBaseSagaWatcher)];
