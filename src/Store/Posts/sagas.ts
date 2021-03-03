import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getPostList } from '@API';
import { ServerDefaultResult, PostList } from 'ServiceTypes';
import { SagaTypes } from '@Store/reduxActiontTypes';

const { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } = SagaTypes;

function* getPostsSaga() {
    const response: ServerDefaultResult<PostList> = yield call(getPostList, { pageNumber: 1 });
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_POSTS_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: GET_POSTS_FAILURE,
            payload: {
                message: message,
            },
        });
    }
}

function* onPostsSagaWatcher() {
    yield takeLatest(GET_POSTS as any, getPostsSaga);
}

export default [fork(onPostsSagaWatcher)];
