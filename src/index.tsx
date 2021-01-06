import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
    // FIXME  React.Fragment 사용?
    <React.Fragment>
        <ToastProvider>
            <App />
        </ToastProvider>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
