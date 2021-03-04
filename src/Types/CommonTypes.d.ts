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

    export interface TagItem {
        id: string;
        text: string;
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
        tags: TagItem[];
        view_count: number;
        post_active: defaultYesNo;
        post_publish: defaultYesNo;
        list_created: string;
    }

    export interface PostCardItem {
        post_title: string;
        list_contents: string;
        tags: TagItem[];
        slug_title: string;
        thumb_url: string;
    }

    export interface PostDetailItem {
        post_uuid: string;
        user: {
            user_uuid: string;
            user_type: {
                code_id: string;
                code_name: string;
            };
            user_level: {
                code_id: string;
                code_name: string;
            };
            name: string;
            nickname: string;
            email: string;
            active: defaultYesNo;
        };
        post_title: string;
        slug_title: string;
        contents_html: string;
        contents_text: string;
        markdown: defaultYesNo;
        tags: TagItem[];
        view_count: number;
        detail_created: string;
        detail_updated: string;
    }
}
