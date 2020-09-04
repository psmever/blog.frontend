declare module 'commonTypes' {
    // saga start
    export type defaultSagaStatus = "idle" | "loading" | "success" | "failure";
    export type ProcessEnvType = string | undefined;
    export type AccessTokenType = string;

    export interface baseSagaState {
        status : defaultSagaStatus
    }
    // saga end

    // 통신 관련 타입.
    export interface serverTokenInterface {
        token_type?: string
        expires_in?: number
        access_token: string
        refresh_token: string
    }

    export interface defaultServerResponse {
        token_type?: string
        expires_in?: number
        access_token: string
        refresh_token: string
    }

    export interface serverResponse<T> {
        message: string
        result: T
    }

    export interface localTokenInterface {
        access_token: string,
        refresh_token: string,
        expires_in: number,
    }

    export interface axiosReturnInterface {
        state: boolean;
        data: any
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

    export interface PublishButtonPropsInterface {
        buttonType: 'Home' | 'Save' | 'Publish';
    }
}