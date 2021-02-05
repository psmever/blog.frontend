declare module 'commonTypes' {
    export type DefaultSagaStatus = idle | loading | success | failure;

    // base Code list Interface
    export interface BasicCodeItem {
        code_id: string;
        code_name: string;
    }
    // 사이트 기본 데이터 정보 결과.
    export interface BaseCodeListInterface {
        code_name: any;
        code_group: {
            S01: BasicCodeItem[];
            S02: BasicCodeItem[];
            S03: BasicCodeItem[];
            S04: BasicCodeItem[];
            S05: BasicCodeItem[];
        };
    }

    // 기본 스토어 스테이트
    export interface CommonStoreState {
        loading: boolean;
        check: boolean;
        status: boolean;
        codes: BaseCodeListInterface | any;
    }

    // 통신 관련 타입.
    // 토큰 저장 인터페이스
    export interface LocalTokenInterface {
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }

    export type AccessTokenType = string;

    // 기본 api 리턴 인테페이스
    export interface ServerReturnInterface<T> {
        status: boolean;
        message: string;
        payload: T;
    }

    // 서버 사이트 기본 데이터
    export interface ServerBaseDataInterface {
        codes: baseDataCodeListInterface;
    }

    // 기본 서버 에러.
    export interface ServerErrorResponse {
        error?: {
            error_message: string;
        };
    }

    // 사용자 체크 결과.
    export interface ServerUserCheckInterface {
        user_uuid: string;
        user_type: basicCodeItem;
        user_level: basicCodeItem;
    }

    // 테그 인터페이스.
    // 배열이기 떄문에 2개로 처리.
    export interface EditorTagsInterfaceItem {
        tag_id: string;
        tag_text: string;
    }
    // 테그 등록 인터페이스.
    export interface PostTagsRequestInterface extends Array<EditorTagsInterfaceItem> {}

    // 글등록 인터페이스.
    export interface PostRequestInterface {
        title: string | undefined;
        tags: PostTagsRequestInterface | undefined;
        contents: {
            html: string | undefined;
            text: string | undefined;
        };
    }

    // 에디터 테그.
    export interface EditorTagInterfaceItem {
        id: string;
        text: string;
    }

    // 글 에디트
    export interface PostEditResultInterface {
        post_uuid: string;
        user: {
            user_uuid: string;
            user_type: BasicCodeItem;
            user_level: BasicCodeItem;
            name: string;
            nickname: string;
            email: string;
            active: defaultYesNo;
        };
        post_title: string;
        slug_title: string;
        category_thumb: BasicCodeItem;
        contents_html: string;
        contents_text: string;
        markdown: defaultYesNo;
        tags: EditorTagInterfaceItem[];
        post_active: defaultYesNo;
        post_publish: defaultYesNo;
        created: string;
        updated: string;
    }

    // 포스트 리스트 인터페이스
    export interface ServerPostListResultInterface {
        per_page: number;
        current_page: number;
        hasmore: boolean;
        posts: PostEditResultInterface[];
    }

    // 글정보
    export interface ServerPostDetailInterface {
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
        tags: EditorTagInterfaceItem[];
        view_count: number;
        detail_created: string;
        detail_updated: string;
    }

    // 테그 그룹 리스트 아이템.
    interface ServerTagGroupListItem {
        value: string;
        count: number;
    }
    // 테그 그룹 리스트.
    export interface ServerTagGoupListInterface extends array<ServerTagGroupListItem> {}

    // 작성 대기중인글 결과 인터페이스.
    export interface ServerPostWaitingListInterface {
        post_uuid: string;
        post_title: string;
    }
}
