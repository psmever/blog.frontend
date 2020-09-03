import { Types } from "./reduxActiontTypes";

// saga start
export type defaultSagaStatus = "idle" | "loading" | "success" | "failure";

export interface baseSagaState {
    status : defaultSagaStatus
}
// saga end

/**
 * 기본 액션 인터페이스.
 */
export interface Action<T>  {
    type: Types;
    payload: T;
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


interface ServerResponse {
    data: ServerData
}

interface ServerData {
    foo: string
    bar: number
}