declare module 'StoreTypes' {
    import { covides } from '@API';
    import { RouterState } from 'connected-react-router';
    import { PostDetailItem, defaultYesNo, TagGroupItem, DefaultStatus, WeatherItem } from 'CommonTypes';

    export interface ErrorMessage {
        message: string;
    }

    // 스토어 init.
    export interface AppState {
        loading: boolean;
        serverCheck: boolean;
        loginState: boolean;
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
            covides: CovidItem[];
        };
    }

    export interface RootState {
        router: RouterState;
        common: CommonState;
        app: AppState;
        specialty: SpecialtyState;
        posts: PostsState;
    }
}
