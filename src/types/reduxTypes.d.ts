declare module 'reduxTypes' {

    // saga start
    export type defaultSagaStatus = "idle" | "loading" | "success" | "failure";

    export interface baseSagaState {
        status : defaultSagaStatus
    }

    export interface authenticateSagaState {
        login : {
            status: defaultSagaStatus
        }
    }


    export interface defaultSagaState<T> {
        status : defaultSagaStatus
        data: any
    }


}