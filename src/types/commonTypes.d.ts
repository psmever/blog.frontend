declare module 'commonTypes' {
    import AxiosError from 'axios'

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

    export interface axiosErrorInterface extends AxiosError<any> {
        _queued?: boolean,
        _retry?: boolean,
    }


    export interface localTokenInterface {
        access_token: string,
        refresh_token: string,
        expires_in: number,
    }

    export interface testCuError {
        _retry: boolean,
        _queued: boolean,
    }
    export interface axiosCuError {
        _queued : boolean,
        _retry : boolean,
        error_message: string,
    }

    // export interface AxiosResponse {
    //     data: any;
    //     status: number;
    //     statusText: string;
    //     headers: any;
    //     config: AxiosRequestConfig;
    //   }

    export interface axiosReturnInterface {
        status: boolean,
        message: string,
        payload: any
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