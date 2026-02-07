"use client";

import { useMemo, useState, type ReactNode } from "react";
import { authInitialState, AuthStateContext, AuthStateSetterContext, type AuthState } from "./auth";
import { BaseDataSetterContext, BaseDataStateContext, type BaseDataState } from "./app";

type AppStateProviderProps = {
    children: ReactNode;
};

export function AppStateProvider({ children }: AppStateProviderProps) {
    const [authState, setAuthState] = useState<AuthState>(authInitialState);
    const [baseDataState, setBaseDataState] = useState<BaseDataState>(null);

    const authValue = useMemo(() => authState, [authState]);
    const baseDataValue = useMemo(() => baseDataState, [baseDataState]);

    return (
        <AuthStateContext.Provider value={authValue}>
            <AuthStateSetterContext.Provider value={setAuthState}>
                <BaseDataStateContext.Provider value={baseDataValue}>
                    <BaseDataSetterContext.Provider value={setBaseDataState}>{children}</BaseDataSetterContext.Provider>
                </BaseDataStateContext.Provider>
            </AuthStateSetterContext.Provider>
        </AuthStateContext.Provider>
    );
}
