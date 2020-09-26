declare module 'reduxTypes' {

    // saga start
    // 기본 사가 스테이트 Interface
    export type defaultSagaStatus = "idle" | "loading" | "success" | "failure";

    // base Code list Interface
    interface baseDataCodeListInterface {
        code_name? : {
            code_id: string,
        }
    }
    // 기본 스토어 스테이트
    export interface baseDataSagaState {
        status : defaultSagaStatus;
        codes : baseDataCodeListInterface | null;
        global_loading : defaultSagaStatus;
    }

    // 리덕스 인증 관련 스토어 Interface
    // FIXME localTokenInterface 이 그냥 써지는데 이러게 써도 괜찬은지?
    export interface authenticateSagaState {
        login : {
            status: defaultSagaStatus,
            data?: localTokenInterface
            message?: string
        }
    }

    export interface desultSagaState {
        status: defaultSagaStatus,
        data?: any
        message?: string
    }
    export interface postSagaState {
        create: desultSagaState
        edit: desultSagaState
        publish: desultSagaState
        update: desultSagaState
    }

    // 테스트용?
    export interface defaultSagaState<T> {
        status : defaultSagaStatus
        data: any
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
        title: string,
        tags: postTagsRequestInterface,
        contents: {
            html: string,
            text: string
        }
    }
}