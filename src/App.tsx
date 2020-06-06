import React from 'react';
import { Provider } from 'react-redux';
import History from "./routes/History";
import { createBrowserHistory } from 'history'
import configureStore from 'configureStore'

import Root from "./routes/Root";

const history = createBrowserHistory();

declare var window: any;
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

const App = () => (
    <Provider store={ store }>
        <Root Routerhistory={ History }/>
    </Provider>
)

export default App;
