import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';
import { CommonState, AppState } from 'StoreTypes';

import common from '@Store/Common';
import commonSagas from '@Store/Common/sagas';

import app from '@Store/App';
import appSagas from '@Store/App/sagas';

// import postSagas from './redux/post/sagas';

export interface RootState {
    router: RouterState;
    common: CommonState;
    app: AppState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        common: common,
        app: app,
    });

export function* rootSaga() {
    yield all([...commonSagas, ...appSagas]);
    // yield all([]);
}
