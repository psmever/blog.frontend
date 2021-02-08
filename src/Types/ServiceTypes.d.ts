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

    export interface PostListItem {
        post_id: number;
        post_uuid: string;
        user: {
            user_uuid: string;
            user_type: basicCodeItem;
            user_level: basicCodeItem;
            name: string;
            nickname: string;
            email: string;
            active: defaultYesNo;
        };
        post_title: string;
        slug_title: string;
        thumb_url: string;
        list_contents: string;
        markdown: defaultYesNo;
        tags: editorTagInterfaceItem[];
        view_count: number;
        post_active: defaultYesNo;
        post_publish: defaultYesNo;
        list_created: string;
    }

    export interface PostList {
        per_page: number;
        current_page: number;
        hasmore: boolean;
        posts: PostListItem[];
    }
}
