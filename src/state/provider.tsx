"use client";

import { useMemo, useState, type ReactNode } from "react";
import { authInitialState, AuthStateContext, AuthStateSetterContext, type AuthState } from "./auth";
import { BaseDataSetterContext, BaseDataStateContext, type BaseDataState } from "./app";
import { PostEditorSetterContext, PostEditorStateContext, type PostEditorState } from "./post-editor";

type AppStateProviderProps = {
    children: ReactNode;
};

export function AppStateProvider({ children }: AppStateProviderProps) {
    const [authState, setAuthState] = useState<AuthState>(authInitialState);
    const [baseDataState, setBaseDataState] = useState<BaseDataState>(null);
    const [postEditorState, setPostEditorState] = useState<PostEditorState>(null);

    const authValue = useMemo(() => authState, [authState]);
    const baseDataValue = useMemo(() => baseDataState, [baseDataState]);
    const postEditorValue = useMemo(() => postEditorState, [postEditorState]);

    return (
        <AuthStateContext.Provider value={authValue}>
            <AuthStateSetterContext.Provider value={setAuthState}>
                <BaseDataStateContext.Provider value={baseDataValue}>
                    <BaseDataSetterContext.Provider value={setBaseDataState}>
                        <PostEditorStateContext.Provider value={postEditorValue}>
                            <PostEditorSetterContext.Provider value={setPostEditorState}>{children}</PostEditorSetterContext.Provider>
                        </PostEditorStateContext.Provider>
                    </BaseDataSetterContext.Provider>
                </BaseDataStateContext.Provider>
            </AuthStateSetterContext.Provider>
        </AuthStateContext.Provider>
    );
}
