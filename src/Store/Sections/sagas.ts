import { takeLatest, fork, call, put } from 'redux-saga/effects';
import { getSectionDetail, getSectionHistory, getSectionHistoryDetail, getSectionTotalHistorys } from '@API';
import { SectionGubunItem, SectionGubunCode, SectionPostItem } from 'CommonTypes';
import { ServerDefaultResult, SectionHistoryResponse, SectionTotalHistoryResponse } from 'ServiceTypes';
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
    GET_TOTAL_HISTORYS,
    GET_TOTAL_HISTORYS_SUCCESS,
    GET_TOTAL_HISTORYS_FAILURE,
} from './actions';

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

function* getTotalHistorysSaga({
    payload: { section, page },
}: {
    payload: { section: SectionGubunCode; page: number };
}) {
    const response: ServerDefaultResult<SectionTotalHistoryResponse> = yield call(getSectionTotalHistorys, {
        section: section,
        page: page,
    });

    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_TOTAL_HISTORYS_SUCCESS,
            payload: payload,
        });
    } else {
        yield put({
            type: GET_TOTAL_HISTORYS_FAILURE,
            payload: message,
        });
    }
}

function* onSectionsSagaWatcher() {
    yield takeLatest(GET_SECTIONS_POST as any, getSectionsPostSaga);
    yield takeLatest(GET_SECTIONS_HISTORY as any, getSectionsHistorySaga);
    yield takeLatest(GET_HISTORY_DETAIL as any, getHistoryDetailSaga);
    yield takeLatest(GET_TOTAL_HISTORYS as any, getTotalHistorysSaga);
}

export default [fork(onSectionsSagaWatcher)];
