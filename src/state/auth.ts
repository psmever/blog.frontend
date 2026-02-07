import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import { getAccessToken } from "@/lib/token-storage";
import type { AuthUser } from "@/services/auth";

export type AuthState = {
    isLoggedIn: boolean;
    user: AuthUser | null;
};

export const authInitialState: AuthState = {
    isLoggedIn: Boolean(getAccessToken()),
    user: null,
};

type AuthStateSetter = Dispatch<SetStateAction<AuthState>>;

export const AuthStateContext = createContext<AuthState | null>(null);
export const AuthStateSetterContext = createContext<AuthStateSetter | null>(null);

export function useAuthState() {
    const state = useContext(AuthStateContext);
    if (!state) {
        throw new Error("useAuthState must be used within AppStateProvider.");
    }
    return state;
}

export function useSetAuthState() {
    const setState = useContext(AuthStateSetterContext);
    if (!setState) {
        throw new Error("useSetAuthState must be used within AppStateProvider.");
    }
    return setState;
}
