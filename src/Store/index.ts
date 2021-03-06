import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';

import app from '@Store/App';
import common from '@Store/Common';
import specialty from '@Store/Specialty';
import posts from '@Store/Posts';

import appSagas from '@Store/App/sagas';
import commonSagas from '@Store/Common/sagas';
import specialtySaga from '@Store/Specialty/sagas';
import PostSaga from '@Store/Posts/sagas';

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        common: common,
        app: app,
        specialty: specialty,
        posts: posts,
    });

export function* rootSaga() {
    yield all([...commonSagas, ...appSagas, ...specialtySaga, ...PostSaga]);
}
