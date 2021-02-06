declare module 'StoreTypes' {
    import { Codes } from 'CommonTypes';

    export interface ErrorMessage {
        message: string;
    }

    export interface CommonState {
        codes: any;
    }

    export interface AppState {
        loading: boolean;
        serverCheck: boolean;
        error: {
            status: boolean;
            message: string;
        };
    }
}
