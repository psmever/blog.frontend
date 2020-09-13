import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'

import { History } from 'history'
import { all } from 'redux-saga/effects';
import { baseDataSagaState, authenticateSagaState, postSagaState } from 'reduxTypes';

import base from './redux/base';
import baseSagas from './redux/base/sagas';

import authenticate from './redux/authenticate';
import authenticateSagas from './redux/authenticate/sagas';

import post from './redux/post';
import postSagas from './redux/post/sagas';

export interface RootState {
    router: RouterState
    base: baseDataSagaState
    authenticate: authenticateSagaState
    post: postSagaState
}

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    base: base,
    authenticate: authenticate,
    post: post,
});

export function* rootSaga() {
    yield all([
        ...baseSagas,
        ...authenticateSagas,
        ...postSagas,
    ]);
}