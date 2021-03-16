declare module 'ServiceTypes' {
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

    export type PostDetailResult = PostDetailItem;

    // 글등록 인터페이스.
    export interface PostRequest {
        title: string;
        tags: EditorTagsItem[];
        contents: {
            html: string;
            text: string;
        };
    }
}
