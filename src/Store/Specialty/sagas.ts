import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { weathers } from '@API';
import { ServerDefaultResult, WeatherResult } from 'ServiceTypes';
import { SagaTypes } from '@Store/reduxActiontTypes';

const { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } = SagaTypes;

function* getWeatherSaga() {
    const response: ServerDefaultResult<WeatherResult> = yield call(weathers);
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_WEATHER_SUCCESS,
            payload: {
                weathers: payload,
            },
        });
    } else {
        yield put({
            type: GET_WEATHER_FAILURE,
            payload: {
                message: message,
            },
        });
    }
}

function* onSpecialtySagaWatcher() {
    yield takeLatest(GET_WEATHER as any, getWeatherSaga);
}

export default [fork(onSpecialtySagaWatcher)];
