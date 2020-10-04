import { takeLatest, fork, call, put } from "redux-saga/effects";
import { SagaTypes } from 'modules/reduxActiontTypes';
import { postRequestInterface } from 'commonTypes';
import { postCreate, postEdit, postPublish, postUpdate, getPostList, getPostDetail } from 'modules/API';


// 글등록 Saga
function* postCreateActionSaga({payload} : {payload: postRequestInterface}) {
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

// 글 수정용 정보 가지고 오기 Saga
function* postPublishActionSaga({post_uuid} : {post_uuid: string}) {
    const response = yield call(postPublish, post_uuid);
    if(response.status === true) {
        yield put({ type: SagaTypes.POST_PUBLISH_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.POST_PUBLISH_REQUEST_ERROR, payload: response});
    }
}

// 글내용 업데이트
function* postUpdateActionSaga({post_uuid , payload} : {post_uuid: string, payload: postRequestInterface}) {
    const response = yield call(postUpdate, {post_uuid, payload});
    if(response.status === true) {
        yield put({ type: SagaTypes.POST_UPDATE_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.POST_UPDATE_REQUEST_ERROR, payload: response});
    }
}

// 글 리스트 가지고 오기
function* postGetListActionSaga( { pageNumber } : {pageNumber: number} ) {
    const response = yield call(getPostList, {pageNumber});
    if(response.status === true) {
        yield put({ type: SagaTypes.POST_LIST_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.POST_LIST_REQUEST_ERROR, payload: response});
    }
}

// 글 상세 정보 가지고 오기
function* postDetailActionSaga( { slugTitle } : {slugTitle: string} ) {
    const response = yield call(getPostDetail, {slugTitle});
    if(response.status === true) {
        yield put({ type: SagaTypes.POST_DETAIL_REQUEST_SUCCESS, payload: response.payload});
    } else {
        yield put({ type: SagaTypes.POST_DETAIL_REQUEST_ERROR, payload: response});
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(SagaTypes.POST_CREATE_REQUEST_START as any, postCreateActionSaga);
    yield takeLatest(SagaTypes.POST_EDIT_REQUEST_START as any, postEditActionSaga);
    yield takeLatest(SagaTypes.POST_PUBLISH_REQUEST_START as any, postPublishActionSaga);
    yield takeLatest(SagaTypes.POST_UPDATE_REQUEST_START as any, postUpdateActionSaga);
    yield takeLatest(SagaTypes.POST_LIST_REQUEST_START as any, postGetListActionSaga);
    yield takeLatest(SagaTypes.POST_DETAIL_REQUEST_START as any, postDetailActionSaga);
}

export default [
    fork(onBaseSagaWatcher),
];