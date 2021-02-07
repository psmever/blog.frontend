declare module 'ServiceTypes' {
    import { CodeItem, Codes } from 'CommonTypes';

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
        codes: Codes[];
    }

    export interface LoginCheck {
        user_uuid: string;
        user_type: CodeItem;
        user_level: CodeItem;
    }
}
