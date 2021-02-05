import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';
import { CommonStoreState } from 'commonTypes';

import common from '@Store/common';
import commonSagas from '@Store/common/sagas';

// import postSagas from './redux/post/sagas';

export interface RootState {
    router: RouterState;
    common: CommonStoreState;
    // post: postSagaState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        common: common,
        // post: post,
    });

export function* rootSaga() {
    yield all([...commonSagas]);
    // yield all([]);
}
