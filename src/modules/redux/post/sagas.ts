import { takeLatest, fork, call, put } from "redux-saga/effects";
import { SagaTypes } from 'modules/reduxActiontTypes';
import { postCreateInterface } from 'reduxTypes';
import { postCreate, postEdit } from 'modules/API';

// 글등록 Saga
function* postCreateActionSaga({payload} : {payload: postCreateInterface}) {
    const response = yield call(postCreate, payload);
    if(response.status === true) {
        yield put({ type: SagaTypes.POST_CREATE_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.POST_CREATE_REQUEST_ERROR, payload: response});
    }
}

// 글 수정용 정보 가지고 오기 Saga
function* postEditActionSaga({post_uuid} : {post_uuid: string}) {
    const response = yield call(postEdit, post_uuid);
    if(response.status === true) {
        yield put({ type: SagaTypes.POST_EDIT_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.POST_EDIT_REQUEST_ERROR, payload: response});
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.POST_CREATE_REQUEST_START as any, postCreateActionSaga);
    yield takeLatest(SagaTypes.POST_EDIT_REQUEST_START as any, postEditActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];