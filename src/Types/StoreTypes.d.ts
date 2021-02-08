declare module 'StoreTypes' {
    import { DefaultStatus, Codes } from 'CommonTypes';

    export interface ErrorMessage {
        message: string;
    }

    export interface CommonState {
        codes: any;
    }

    export interface AppState {
        loading: boolean;
        serverCheck: boolean;
        loginState: boolean;
        appInit: boolean;
        loginUser: {
            access_token: string;
            refresh_token: string;
        };
        error: {
            status: boolean;
            message: string;
        };
    }
}
