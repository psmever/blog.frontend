import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';
import { baseDataSagaState } from 'commonTypes';

import base from './Store/base';
import baseSagas from './Store/base/sagas';

// import postSagas from './redux/post/sagas';

export interface RootState {
    router: RouterState;
    base: baseDataSagaState;
    // post: postSagaState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        base: base,
        // post: post,
    });

export function* rootSaga() {
    yield all([...baseSagas]);
    // yield all([]);
}
