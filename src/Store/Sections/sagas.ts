import { takeLatest, fork, call, put } from 'redux-saga/effects';
import { getSectionDetail, getSectionHistory, getSectionHistoryDetail } from '@API';
import { SectionGubunItem, SectionGubunCode, SectionPostItem } from 'CommonTypes';
import { ServerDefaultResult, SectionHistoryResponse } from 'ServiceTypes';
import {
    RESET_SECTIONS_POST,
    GET_SECTIONS_POST,
    GET_SECTIONS_POST_SUCCESS,
    GET_SECTIONS_POST_FAILURE,
    // RESET_SECTIONS_HISTORYS,
    GET_SECTIONS_HISTORY,
    GET_SECTIONS_HISTORY_SUCCESS,
    GET_SECTIONS_HISTORY_FAILURE,
    GET_HISTORY_DETAIL,
    GET_HISTORY_DETAIL_SUCCESS,
    GET_HISTORY_DETAIL_FAILURE,
} from './actions';

// function* getPostDetailSaga({ payload: { slug_title } }: { payload: { slug_title: string } }) {
function* getSectionsPostSaga({ payload: { section } }: { payload: { section: SectionGubunItem } }) {
    // 가지고 오기 전에 리셋.
    yield put({
        type: RESET_SECTIONS_POST,
    });

    const response: ServerDefaultResult<SectionPostItem> = yield call(getSectionDetail, { section: section });
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_SECTIONS_POST_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: GET_SECTIONS_POST_FAILURE,
            payload: message,
        });
    }
}

function* getSectionsHistorySaga({ payload: { section } }: { payload: { section: SectionGubunCode } }) {
    const response: ServerDefaultResult<SectionHistoryResponse> = yield call(getSectionHistory, { gubun: section });
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_SECTIONS_HISTORY_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: GET_SECTIONS_HISTORY_FAILURE,
            payload: message,
        });
    }
}

function* getHistoryDetailSaga({
    payload: { section, post_uuid },
}: {
    payload: { section: SectionGubunCode; post_uuid: string };
}) {
    yield put({
        type: RESET_SECTIONS_POST,
    });

    const response: ServerDefaultResult<SectionPostItem> = yield call(getSectionHistoryDetail, {
        section: section,
        post_uuid: post_uuid,
    });
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_HISTORY_DETAIL_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: GET_HISTORY_DETAIL_FAILURE,
            payload: message,
        });
    }
}

function* onSectionsSagaWatcher() {
    yield takeLatest(GET_SECTIONS_POST as any, getSectionsPostSaga);
    yield takeLatest(GET_SECTIONS_HISTORY as any, getSectionsHistorySaga);
    yield takeLatest(GET_HISTORY_DETAIL as any, getHistoryDetailSaga);
}

export default [fork(onSectionsSagaWatcher)];
