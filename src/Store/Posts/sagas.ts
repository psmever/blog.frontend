import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getPostList, getPostDetail } from '@API';
import { ServerDefaultResult, PostList, PostDetailResult } from 'ServiceTypes';
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    GET_POST_DETAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAILURE,
} from './actions';

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

function* getPostDetailSaga({ payload: { slug_title } }: { payload: { slug_title: string } }) {
    const response: ServerDefaultResult<PostDetailResult> = yield call(getPostDetail, { slugTitle: slug_title });
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_POST_DETAIL_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: GET_POST_DETAIL_FAILURE,
            payload: {
                message: message,
            },
        });
    }
}

function* onPostsSagaWatcher() {
    yield takeLatest(GET_POSTS as any, getPostsSaga);
    yield takeLatest(GET_POST_DETAIL as any, getPostDetailSaga);
}

export default [fork(onPostsSagaWatcher)];
