declare module 'CommonTypes' {
    export type DefaultStatus = 'idle' | 'loading' | 'success' | 'failure';
    export type PostsGubunItem = 'posts' | 'scribble' | 'blog' | 'mingun';
    export type SectionGubunItem = 'scribble' | 'blog' | 'mingun';
    export type PostButtonAction = 'idle' | 'exit' | 'save' | 'update' | 'publish' | 'hide';
    export type defaultYesNo = 'Y' | 'N';

    export interface editorTagsItem {
        id: string;
        text: string;
    }

    export interface DimensionsResult {
        state: 'loading' | 'success' | 'error';
        data: {
            width: number;
            height: number;
        };
    }

    // 사가 기본 타입.
    export interface SagaAction<T> {
        type: SagaTypes;
        payload: T;
    }

    export type AccessTokenType = string;
    export interface LayouTypes {
        layoutColor: 'main' | 'view';
        menuActive?: 'true' | 'false';
        mobileMenuOpen?: 'true' | 'false';
    }

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
        tag_id: string;
        tag_text: string;
    }

    export interface PostListItem {
        post_id: number;
        post_uuid: string;
        user: {
            user_uuid: string;
            user_type: CodeItem;
            user_level: CodeItem;
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
        post_uuid: string;
        list_contents: string;
        tags: TagItem[];
        slug_title: string;
        thumb_url: string;
        list_created: string;
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
        post_active: defaultYesNo;
        post_publish: defaultYesNo;
        detail_created: string;
        detail_updated: string;
    }

    export interface EditorTagsItem {
        id: string;
        text: string;
    }
    export interface EditorTag extends Array<EditorTagsItem> {}

    export interface EditorData {
        title: string;
        tags: editorTagItem[];
        content: string;
    }

    export interface DefaultPostSaveResult {
        post_uuid: string;
        slug_title: string;
        post_active: defaultYesNo;
        post_publish: defaultYesNo;
    }

    // 기시전 글 아이템.
    export interface WaitingPostResultItem {
        post_uuid: string;
        post_title: string;
    }

    export interface SectionPostItem {
        post_uuid: string;
        contents_html: string;
        contents_text: string;
        markdown: defaultYesNo;
        created: string;
    }

    export interface TagGroupItem {
        value: string;
        count: number;
    }

    export interface PostSearchAction {
        state: DefaultStatus;
        payload: PostListItem[] | null;
        message: string;
        error: Error | null;
    }
}
