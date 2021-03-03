declare module 'CommonTypes' {
    export type DefaultStatus = 'idle' | 'loading' | 'success' | 'failure';

    export type AccessTokenType = string;

    export interface LocalTokenInterface {
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }

    // 공통 코드 item.
    export interface CodeItem {
        code_id: string;
        code_name: string;
    }

    // 공통 코드들.
    export interface Codes {
        code_name: any;
        code_group: {
            S01: CodeItem[];
            S02: CodeItem[];
            S03: CodeItem[];
            S04: CodeItem[];
            S05: CodeItem[];
        };
    }

    // 날짜 아이템.
    export interface WeatherItem {
        time: string;
        vilage_name: string;
        sky_icon: string;
        temperature: string;
        sky: string;
        wind: string;
        humidity: string;
    }

    export interface CovidItem {
        defcnt: string;
        isolclearcnt: string;
        deathcnt: string;
        incdec: string;
    }
}
