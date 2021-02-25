declare module 'ServiceTypes' {
    import { CodeItem, Codes, WeatherItem, CovidItem } from 'CommonTypes';
    import { WeatherBox } from '../Styles/RightWeatherBoxStyles';

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

    // 로그인 체크 결과.
    export interface LoginCheck {
        user_uuid: string;
        user_type: CodeItem;
        user_level: CodeItem;
    }

    // 글 리스트 아이템
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

    // 글 리스트 결과.
    export interface PostList {
        per_page: number;
        current_page: number;
        hasmore: boolean;
        posts: PostListItem[];
    }

    // 날씨 결과.
    export type WeatherResult = WeatherItem[];

    // Covid 결과.
    export type CovidResult = CovidItem[];
}
