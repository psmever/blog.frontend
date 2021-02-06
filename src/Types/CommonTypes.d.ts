declare module 'CommonTypes' {
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
            S01: basicCodeItem[];
            S02: basicCodeItem[];
            S03: basicCodeItem[];
            S04: basicCodeItem[];
            S05: basicCodeItem[];
        };
    }
}
