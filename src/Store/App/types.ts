import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AppAction = ActionType<typeof actions>;

// 스토어 init.
export type App = {
    loading: false;
    serverCheck: false;
    loginState: false;
    appInit: false;
    loginUser: {
        access_token: '';
        refresh_token: '';
    };
    error: {
        status: false;
        message: '';
    };
};

export type AppState = App;
