declare module 'commonTypes' {
    export type defaultSagaStatus = idle | loading | success | failure;

    // base Code list Interface
    export interface basicCodeItem {
        code_id: string;
        code_name: string;
    }
    export interface baseDataCodeListInterface {
        code_name: any;
        code_group: {
            S01: basicCodeItem[];
            S02: basicCodeItem[];
            S03: basicCodeItem[];
            S04: basicCodeItem[];
            S05: basicCodeItem[];
        };
    }

    // 기본 스토어 스테이트
    export interface baseDataSagaState {
        status: defaultSagaStatus;
        codes: baseDataCodeListInterface | any;
        global_loading: defaultSagaStatus;
    }
}
