import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'

import { History } from 'history'
import { all } from 'redux-saga/effects';
import {
    baseDataSagaState,
    postSagaState
} from 'commonTypes';

import base from './redux/base';
import baseSagas from './redux/base/sagas';

import post from './redux/post';
import postSagas from './redux/post/sagas';

export interface RootState {
    router: RouterState
    base: baseDataSagaState
    post: postSagaState
}

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    base: base,
    post: post,
});

export function* rootSaga() {
    yield all([
        ...baseSagas,
        ...postSagas,
    ]);
}