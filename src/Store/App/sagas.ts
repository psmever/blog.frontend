import { takeLatest, fork, put, call } from 'redux-saga/effects';
import _Alert_ from '@_Alert_';
import { checkServerNotice, getSiteBaseData } from '@API';
import { ServerDefaultResult, ServerNotice, AppBase } from 'ServiceTypes';
import { SagaTypes } from '@Store/reduxActiontTypes';
import { COLORLOG } from '@Helper';
import { axiosDefaultHeader } from '@Util/_Axios_';
import axios from 'axios';

const { START_LOADING, END_LOADING, COMMON_CODES, CHECK_SERVER_START, APP_ERROR, CHECK_SERVER_END } = SagaTypes;

// 서버 통신 체크만 따로 뺴서..
const checkServerStatus = async () => {
    return axios.get('/api/system/check-status', axiosDefaultHeader);
};

function* checkServerSaga() {
    yield put({ type: START_LOADING }); // 공통 로딩 시작.

    try {
        // 서버 상태 체크.
        yield call(checkServerStatus);

        // 서버 공지 사항 유무.
        const serverNotice: ServerDefaultResult<ServerNotice> = yield call(checkServerNotice);
        if (serverNotice.status === true && serverNotice.payload && serverNotice.payload.notice_message) {
            _Alert_.default({ text: serverNotice.payload.notice_message });
        }

        // 기본 공통 데이터 조회.
        const serverBaseData: ServerDefaultResult<AppBase> = yield call(getSiteBaseData);
        const { codes } = serverBaseData.payload;

        // 공통 코드 데이터 전달.
        yield put({
            type: COMMON_CODES,
            payload: {
                codes: codes,
            },
        });

        // 서버 체크 종료 전달.
        yield put({ type: CHECK_SERVER_END });

        // 공통 로딩 종료.
        yield put({ type: END_LOADING });
    } catch (error) {
        COLORLOG(':: check Server Error :: ', 'error');
        yield put({
            type: APP_ERROR,
            payload: {
                message: '로딩중 문제가 발생했습니다.',
            },
        });
    }
}

function* onBaseSagaWatcher() {
    // yield takeLatest(CHECK_SERVER_START as any, getBaseDataActionSaga);
    yield takeLatest(CHECK_SERVER_START as any, checkServerSaga);
}

export default [fork(onBaseSagaWatcher)];
