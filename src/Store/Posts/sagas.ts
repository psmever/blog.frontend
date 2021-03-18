import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getPostList, getPostDetail, postEdit } from '@API';
import { ServerDefaultResult, PostList, PostDetailResult } from 'ServiceTypes';
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    GET_POST_DETAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAILURE,
    GET_POST_EDIT,
    GET_POST_EDIT_SUCCESS,
    GET_POST_EDIT_FAILURE,
} from './actions';

// 글 목록 가지고 오기.
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

// 글 상세 정보 가지고 오기 ( 보기 )
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

// 글정보 가지고 오기 (수정)
function* getPostEditSaga({ payload: { post_uuid } }: { payload: { post_uuid: string } }) {
    const response: ServerDefaultResult<PostDetailResult> = yield call(postEdit, { post_uuid: post_uuid });
    const { message, status, payload } = response;
    if (status) {
        yield put({
            type: GET_POST_EDIT_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: GET_POST_EDIT_FAILURE,
            payload: {
                message: message,
            },
        });
    }
}

function* onPostsSagaWatcher() {
    yield takeLatest(GET_POSTS as any, getPostsSaga);
    yield takeLatest(GET_POST_DETAIL as any, getPostDetailSaga);
    yield takeLatest(GET_POST_EDIT as any, getPostEditSaga);
}

export default [fork(onPostsSagaWatcher)];
