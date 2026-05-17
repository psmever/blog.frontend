import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import type { BaseData } from "@/services/app";

export type BaseDataState = BaseData | null;
type BaseDataSetter = Dispatch<SetStateAction<BaseDataState>>;

export const BaseDataStateContext = createContext<BaseDataState | undefined>(undefined);
export const BaseDataSetterContext = createContext<BaseDataSetter | null>(null);

export function useBaseDataState() {
    const state = useContext(BaseDataStateContext);
    if (typeof state === "undefined") {
        throw new Error("useBaseDataState must be used within AppStateProvider.");
    }
    return state;
}

export function useSetBaseDataState() {
    const setState = useContext(BaseDataSetterContext);
    if (!setState) {
        throw new Error("useSetBaseDataState must be used within AppStateProvider.");
    }
    return setState;
}
