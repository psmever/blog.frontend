declare module 'commonTypes' {
    import AxiosError from 'axios'

    export type ProcessEnvType = string | undefined;
    export type AccessTokenType = string;

    // 통신 관련 타입.
    // 토큰 저장 인터페이스
    export interface localTokenInterface {
        access_token: string,
        refresh_token: string,
        expires_in: number,
    }

    // 기본 api 리턴 인테페이스
    export interface axiosReturnInterface {
        status: boolean,
        message: string,
        payload: any
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
        value: string
        label: string
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
}