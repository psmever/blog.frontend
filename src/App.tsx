import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'modules/configureStore';
import Routes from './modules/Routes';
import History from './modules/History';

const history = createBrowserHistory();

declare let window: any;

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

const App = () => (
    <Provider store={store}>
        <Routes Routerhistory={History} />
    </Provider>
);

export default App;
