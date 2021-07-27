declare module 'StoreTypes' {
    import { covides } from '@API';
    import { RouterState } from 'connected-react-router';
    import {
        PostDetailItem,
        defaultYesNo,
        TagGroupItem,
        DefaultStatus,
        WeatherItem,
        SectionPostItem,
        SectionsTotalHistoryItem,
    } from 'CommonTypes';

    export interface ErrorMessage {
        message: string;
    }

    // 스토어 init.
    export interface AppState {
        loading: boolean;
        serverCheck: boolean;
        loginState: DefaultStatus;
        appInit: boolean;
        loginUser: {
            access_token: string;
            refresh_token: string;
        };
        error: {
            status: boolean;
            message: string;
        };
    }

    export interface CommonState {
        codes: any;
        tagsGroup: {
            state: DefaultStatus;
            tags: TagGroupItem[];
            message: string;
        };
    }

    export interface PostsState {
        list: {
            pageNumber: number;
            hasMore: boolean;
            state: DefaultStatus;
            message: string;
            posts: PostListItem[];
        };
        detail: {
            slug_title: string;
            state: DefaultStatus;
            message: string;
            info: PostDetailItem;
        };
        contents: {
            state: 'idle' | 'loading' | 'ready';
            info: {
                title: string;
                tags: [] | editorTagsItem[];
                content: string;
            };
            contentsGubun: {
                post_uuid: string;
                slug_title: string;
                post_active: defaultYesNo;
                post_publish: defaultYesNo;
            };
            buttonAction: PostButtonAction;
        };
    }

    export interface SpecialtyState {
        weathers: {
            state: DefaultStatus;
            message: string;
            weathers: WeatherItem[];
        };
        covides: {
            state: DefaultStatus;
            message: string;
            covides: CovidItem;
        };
    }

    export interface SectionHistoryItem {
        post_uuid: string;
        gubun: CodeItem;
        smal_content: string;
        created_at: string;
        created_time: string;
    }

    export interface SectionsState {
        section: {
            state: DefaultStatus;
            message: string;
            detail: SectionPostItem;
            history: {
                per_page: string;
                current_page: number;
                hasmore: boolean;
                historys: SectionHistoryItem[];
            };
        };
        total_historys: {
            state: DefaultStatus;
            message: string;
            per_page: string;
            current_page: number;
            hasmore: boolean;
            historys: SectionsTotalHistoryItem[];
        };
    }

    export interface RootState {
        router: RouterState;
        common: CommonState;
        app: AppState;
        specialty: SpecialtyState;
        posts: PostsState;
        sections: SectionsState;
    }
}
