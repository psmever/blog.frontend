declare module 'StoreTypes' {
    import { DefaultStatus, Codes, WeatherItem, CovidItem } from 'CommonTypes';
    import { covides } from '../Modules/API';

    export interface ErrorMessage {
        message: string;
    }

    export interface CommonState {
        codes: any;
    }

    // 앱 스토어.
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

    // 스페셜 스토어.
    export interface SpecialtyState {
        weathers: {
            state: DefaultStatus;
            message: string;
            weathers: WeatherItem[];
        };
        covides: {
            state: DefaultStatus;
            message: string;
            covides: CovidItem[];
        };
    }
}
