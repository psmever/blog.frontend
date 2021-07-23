import { takeLatest, fork, call } from 'redux-saga/effects';
import { getSectionHistory } from '@API';
import { SectionGubunCode } from 'CommonTypes';
import { ServerDefaultResult, SectionHistoryResponse } from 'ServiceTypes';
import { GET_SECTIONS_POST } from './actions';

function* getSectionsPostSaga(gubun: SectionGubunCode) {
    const response: ServerDefaultResult<SectionHistoryResponse> = yield call(getSectionHistory, gubun);

    console.debug('saga: ', response);
}

function* onSectionsSagaWatcher() {
    yield takeLatest(GET_SECTIONS_POST as any, getSectionsPostSaga);
}

export default [fork(onSectionsSagaWatcher)];
