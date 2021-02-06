declare module 'ServiceTypes' {
    import { CodeItems } from 'CommonTypes';

    // 기본 api 리턴 인테페이스
    export interface ServerDefaultResult<T> {
        status: boolean;
        message: string;
        payload: T;
    }

    // 서버 공지 사항.
    export interface ServerNotice {
        notice_message: string;
    }

    // 서버 공통 데이터.
    export interface AppBase {
        codes: CodeItems[];
    }
}
