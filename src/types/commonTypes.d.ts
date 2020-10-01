declare module 'commonTypes' {
    import AxiosError from 'axios'

    export type ProcessEnvType = string | undefined;
    export type AccessTokenType = string;

    // saga start
    // 기본 사가 스테이트 Interface
    export type defaultSagaStatus = idle | loading | success | failure;
    export type defaultYesNo = 'Y' | 'N'

    // 통신 관련 타입.
    // 토큰 저장 인터페이스
    export interface localTokenInterface {
        access_token: string,
        refresh_token: string,
        expires_in: number,
    }

    // 서버 공지 사항
    export interface apiNoticeResultInterface {
        notice_message : string
    }
    // 서버 사이트 기본 데이터
    export interface apiSiteBaseDataInterface {
        codes : baseDataCodeListInterface
    }

    // 글 저장
    export interface apiPostCreateResultInterface {
        post_uuid: string
        slug_title: string
    }
    // 글 에디트
    export interface apiPostEditResultInterface {
        post_uuid: string
        user: {
            user_uuid: string
            user_type: basicCodeItem
            user_level: basicCodeItem
            name: string
            nickname: string
            email: string
            active: defaultYesNo
        },
        post_title: string
        slug_title: string
        category_thumb: basicCodeItem
        contents_html: string
        contents_text: string
        markdown: defaultYesNo
        tags: editorTagInterfaceItem[]
        post_active: defaultYesNo
        post_publish: defaultYesNo
        created: string
        updated: string
    }

    // 기본 api 리턴 인테페이스
    export interface axiosReturnInterface<T> {
        status: boolean,
        message: string,
        payload: T
    }

    export interface loginRequestInterface {
        email: string,
        password: string
    }

    /**
     * Markdown Editor 인터페이스
     */
    export interface editorContentsInterface {
        html: string,
        text: string,
    }

    /**
     * Markdown Editor Tag 인터페이스
     */
    export interface editorTagInterfaceItem {
        id: string;
        text: string;
    }
    export interface editorTagInterface extends Array<editorTagInterfaceItem> {}

    export interface defaultSelectBoxItems {
        value: string | undefined
        label: string | undefined
    }
    export interface defaultSelectBoxInterface extends Array<defaultSelectBoxItems> {}

    // 글등록 페이지 버튼 인터페이스
    export interface PublishButtonPropsInterface {
        buttonType: 'Home' | 'Save' | 'Publish';
    }

    // 얼럿창 클래스 인터페이스.
    export interface alertTypeInterface {
        title?: string,
        text: string,
        footer?: string,
        push_router?: string,
    }


    // base Code list Interface
    export interface basicCodeItem {
        code_id: string,
        code_name: string
    }
    export interface baseDataCodeListInterface {
        code_name : any
        code_group: {
            S01 : basicCodeItem[],
            S02 : basicCodeItem[],
            S03 : basicCodeItem[],
            S04 : basicCodeItem[],
            S05 : basicCodeItem[],
        }
    }
    // 기본 스토어 스테이트
    export interface baseDataSagaState {
        status : defaultSagaStatus;
        codes : baseDataCodeListInterface | any;
        global_loading : defaultSagaStatus;
    }

    // 리덕스 인증 관련 스토어 Interface
    export interface authenticateSagaState {
        login : {
            status: defaultSagaStatus,
            data?: localTokenInterface
            message?: string
        }
    }

    export interface desultSagaState<T> {
        status: defaultSagaStatus,
        data?: T
        message?: string
    }

    export interface postSagaState {
        create: desultSagaState
        edit: desultSagaState<apiPostEditResultInterface>
        publish: desultSagaState<any>
        update: desultSagaState
    }

    export interface postCreateContentsItemInterface {
        html: string,
        text: string,
    }

    // 테그 인터페이스.
    // 배열이기 떄문에 2개로 처리.
    export interface editorTagsInterfaceItem {
        tag_id: string;
        tag_text: string;
    }
    export interface postTagsRequestInterface extends Array<editorTagsInterfaceItem> {}

    // 글등록 인터페이스.
    export interface postRequestInterface {
        title: string | undefined
        category_thumb: string | undefined
        tags: postTagsRequestInterface | undefined
        contents: {
            html: string | undefined
            text: string | undefined
        }
    }
}