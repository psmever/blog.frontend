import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export type PostEditorState = {
    uuid: string | null;
    title: string;
    tags: string;
    content: string;
} | null;

type PostEditorSetter = Dispatch<SetStateAction<PostEditorState>>;

export const PostEditorStateContext = createContext<PostEditorState | undefined>(undefined);
export const PostEditorSetterContext = createContext<PostEditorSetter | null>(null);

export function usePostEditorState() {
    const state = useContext(PostEditorStateContext);
    if (typeof state === "undefined") {
        throw new Error("usePostEditorState must be used within AppStateProvider.");
    }
    return state;
}

export function useSetPostEditorState() {
    const setState = useContext(PostEditorSetterContext);
    if (!setState) {
        throw new Error("useSetPostEditorState must be used within AppStateProvider.");
    }
    return setState;
}
