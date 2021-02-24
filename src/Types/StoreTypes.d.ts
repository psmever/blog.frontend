declare module 'StoreTypes' {
    import { DefaultStatus, Codes, WeatherItem } from 'CommonTypes';

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
        weather: {
            state: DefaultStatus;
            message: string;
            weathers: WeatherItem[];
        };
    }
}
