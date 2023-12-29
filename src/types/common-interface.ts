//style 관련
export type StyleSizeType = `tiny` | `little` | `xs` | `sm` | `base` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` | `6xl` | `7xl` | `8xl` | `9xl`;
export type StyleFontWeightType = `thin` | `extralight` | `light` | `normal` | `medium` | `semibold` | `bold` | `extrabold` | `black`;

// api 기본 결과
export interface ServicesResult<T> {
    status: boolean;
    message: string;
    payload: T;
}

// 공통 코드 아이템
export interface CodeItemInterface {
    code: string;
    name: string;
}

// app root data 인터페이스
export interface AppRootDataInterface {
    code: {
        step1: Array<CodeItemInterface>;
        step2: {
            [index: string]: Array<CodeItemInterface>;
        };
    };
}

// 로그인 결과
export interface LoginPayloadInterface {
    access_token: string;
    refresh_token: string;
}
