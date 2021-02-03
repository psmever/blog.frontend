import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from '@Module/configureStore';
import History from '@Module/History';
import Routes from '@Module/Routes';
import GlobalStyles from '@Style/GlobalStyles';
import RootComponent from '@Src/Components/RootComponent';

const history = createBrowserHistory();

declare let window: any;
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

function App() {
    const [AppSpinner, setAppSpinner] = useState<boolean>(true);

    const handleAppSpinner = () => {
        if (AppSpinner === false) {
            setAppSpinner(true);
        } else {
            setAppSpinner(false);
        }
    };

    return (
        <Provider store={store}>
            <GlobalStyles />

            {(function () {
                if (AppSpinner === true) {
                    return <RootComponent handleAppSpinner={handleAppSpinner} />;
                } else {
                    return <Routes Routerhistory={History} />;
                }
            })()}
        </Provider>
    );
}

export default App;
