import { Store, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'

import { RootState, rootSaga, createRootReducer } from 'modules';

export default function configureStore(history: History, initialState: RootState): Store<RootState> {

    let compose;

    const isDevelopment = process.env.REACT_APP_ENV === 'production';

    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();
    const useReduxLogger = false;

    if( isDevelopment ) {
        compose = applyMiddleware(routerMiddleware(history), sagaMiddleware);
    } else {
        if(useReduxLogger) {
            compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, createLogger()));
        } else {
            compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware));
        }
    }

    const store = createStore(
        createRootReducer(history),
        initialState,
        compose
    );
    sagaMiddleware.run(rootSaga);
    return store
}
