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
    export interface axiosHeadersInterface {
        'Content-Type': string;
        "Access-Control-Allow-Origin": string;
        "Request-Client-Type": string;
        "Accept": string;
        "Authorization": AccessTokenType;
    }
    export interface axiosHeaderInterface {
        baseURL: ProcessEnvType;
        timeout: number;
        headers: axiosHeadersInterface;
    }

    export interface serverTokenInterface {

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