import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { weathers, covides } from '@API';
import { ServerDefaultResult, WeatherResult, CovidResult } from 'ServiceTypes';
import {
    GET_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE,
    GET_COVID,
    GET_COVID_SUCCESS,
    GET_COVID_FAILURE,
} from './actions';

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

function* getCovidSaga() {
    const response: ServerDefaultResult<CovidResult> = yield call(covides);
    const { message, status, payload } = response;

    if (status) {
        yield put({
            type: GET_COVID_SUCCESS,
            payload: {
                covids: payload,
            },
        });
    } else {
        yield put({
            type: GET_COVID_FAILURE,
            payload: {
                message: message,
            },
        });
    }
}

function* onSpecialtySagaWatcher() {
    yield takeLatest(GET_WEATHER as any, getWeatherSaga);
    yield takeLatest(GET_COVID as any, getCovidSaga);
}

export default [fork(onSpecialtySagaWatcher)];
