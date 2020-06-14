import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import configureStore from 'modules/configureStore'
import Routes from "./modules/Routes";
import History from "./modules/History";
import GlobalStyle from "styles/GlobalStyle";

import initFontAwesome from "utils/initFontAwesome";
initFontAwesome();

const history = createBrowserHistory();


declare var window: any;
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

const App = () => (
    <Provider store={ store }>
        <GlobalStyle/>
        <Routes Routerhistory={ History }/>
    </Provider>
)

export default App;
