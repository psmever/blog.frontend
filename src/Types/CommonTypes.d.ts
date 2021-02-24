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

    export interface WeatherItem {
        vilage: {
            area_code: string;
            step1: string;
            step2: string;
            step3: string;
            vilage_name: string;
            vilage_short_name: string;
        };
        fcst: {
            fcstdate: string;
            fcstdate_time: string;
            fcstdate_string: string;
            fcsttime: string;
            fcsttime_time: string;
            fcsttime_string: string;
        };
        T1H: string;
        RN1: string;
        SKY: string;
        UUU: string;
        VVV: string;
        REH: string;
        PTY: string;
        LGT: string;
        VEC: string;
        WSD: string;
        created: string;
        updated: string;
    }
}
