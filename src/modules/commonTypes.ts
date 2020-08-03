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

export interface editorContentsInterface {
    html: string,
    text: string,
}