import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from '@Store/configureStore';
import History from '@Module/History';
import Routes from '@Module/Routes';
import RootComponent from '@Src/Components/RootComponent';

const history = createBrowserHistory();

declare let window: any;
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

function App() {
    const [AppSpinner, setAppSpinner] = useState<boolean>(true);

    // 스피너 페이지.
    const handleAppSpinner = () => {
        if (AppSpinner === false) {
            setAppSpinner(true);
        } else {
            setAppSpinner(false);
        }
    };

    return (
        <React.StrictMode>
            <Provider store={store}>
                {(function () {
                    if (AppSpinner === true) {
                        return <RootComponent handleAppSpinner={handleAppSpinner} />;
                    } else {
                        return <Routes Routerhistory={History} />;
                    }
                })()}
            </Provider>
        </React.StrictMode>
    );
}

export default App;
