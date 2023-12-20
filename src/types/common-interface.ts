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
