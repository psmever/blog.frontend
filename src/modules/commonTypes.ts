import { Types } from "./reduxActiontTypes";

export type defaultSagaStatus = "idle" | "loading" | "success" | "failure";

// saga start
export interface baseSagaState {
    status : defaultSagaStatus
}
// saga end

/**
 * 기본 액션 타입.
 */
export interface Action<T>  {
    type: Types;
    payload: T;
}

// 마크다운 에디터 contents
export interface editorContentsInterface {
    html: string,
    text: string,
}


export interface editorTagInterfaceItem {
    id: string;
    text: string;
}
export interface editorTagInterface extends Array<editorTagInterfaceItem> {}

export interface PublishButtonPropsInterface {
    buttonType: 'Home' | 'Save' | 'Publish';
}