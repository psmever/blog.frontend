import { Store, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';

import { RootState } from 'StoreTypes';
import { rootSaga, createRootReducer } from '@Stores';

export default function configureStore(history: History, initialState: any): Store<RootState> {
    let compose;

    const isDevelopment = process.env.REACT_APP_ENV === 'production' ? false : true;
    const useReduxLogger = process.env.REACT_APP_USE_REDUX_LOGGER === 'TRUE' ? true : false;

    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    if (isDevelopment) {
        if (useReduxLogger) {
            compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, createLogger()));
        } else {
            compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware));
        }
    } else {
        compose = applyMiddleware(routerMiddleware(history), sagaMiddleware);
    }

    const store = createStore(createRootReducer(history), initialState, compose);
    sagaMiddleware.run(rootSaga);

    return store;
}
