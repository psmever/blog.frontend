import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';
import { CommonState, AppState, SpecialtyState } from 'StoreTypes';

import common from '@Store/Common';
import commonSagas from '@Store/Common/sagas';

import app from '@Store/App';
import appSagas from '@Store/App/sagas';

import specialty from '@Store/Specialty';
import specialtySaga from '@Store/Specialty/sagas';

// import postSagas from './redux/post/sagas';

export interface RootState {
    router: RouterState;
    common: CommonState;
    app: AppState;
    specialty: SpecialtyState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        common: common,
        app: app,
        specialty: specialty,
    });

export function* rootSaga() {
    yield all([...commonSagas, ...appSagas, ...specialtySaga]);
    // yield all([]);
}
