import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { COMMON_TAGS, COMMON_TAGS_SUCCESS, COMMON_TAGS_FAILURE } from './actions';
import { getTagGroups } from '@API';
import { ServerDefaultResult, GetTagGroupResult } from 'ServiceTypes';

function* commonTagsSaga() {
    const response: ServerDefaultResult<GetTagGroupResult> = yield call(getTagGroups);
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: COMMON_TAGS_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: COMMON_TAGS_FAILURE,
            payload: {
                message: message,
            },
        });
    }
}

function* onCommonSagaWatcher() {
    // yield takeLatest(CHECK_SERVER_START as any, getBaseDataActionSaga);
    yield takeLatest(COMMON_TAGS as any, commonTagsSaga);
}

export default [fork(onCommonSagaWatcher)];
