export type defaultSagaStatus = "idle" | "loading" | "success" | "failure";

export interface baseSagaState {
    status : defaultSagaStatus
}

/**
 * 기본 액션 타입.
 */
export interface Action<A,T>  {
    type: A;
    payload: T;
}