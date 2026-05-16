"use client";

import { useEffect, useRef } from "react";
import { getAccessToken } from "@/lib/token-storage";
import { useSetAuthState, useSetBaseDataState } from "@/state";
import { fetchBaseData } from "@/services/app";
import { fetchCurrentUser } from "@/services/auth";

type AppStateInitializerProps = {
    onReady?: () => void;
};

export function AppStateInitializer({ onReady }: AppStateInitializerProps) {
    const setBaseData = useSetBaseDataState();
    const setAuth = useSetAuthState();
    const initializedRef = useRef(false);
    const readyRef = useRef(false);

    useEffect(() => {
        if (initializedRef.current) {
            return;
        }
        initializedRef.current = true;
        let active = true;

        const loadBaseData = async () => {
            try {
                const response = await fetchBaseData();
                if (active) {
                    setBaseData(response.status ? response.data : null);
                }
            } catch {
                if (active) {
                    setBaseData(null);
                }
            }
        };

        const loadAuth = async () => {
            if (!getAccessToken()) {
                if (active) {
                    setAuth({ isLoggedIn: false, user: null });
                }
                return;
            }

            setAuth({ isLoggedIn: true, user: null });

            try {
                const response = await fetchCurrentUser();
                if (!active) return;
                if (response.status && response.data?.user) {
                    setAuth({ isLoggedIn: true, user: response.data.user });
                } else {
                    setAuth({ isLoggedIn: Boolean(getAccessToken()), user: null });
                }
            } catch {
                if (active) {
                    setAuth({ isLoggedIn: Boolean(getAccessToken()), user: null });
                }
            }
        };

        const initialize = async () => {
            await Promise.all([loadBaseData(), loadAuth()]);
            if (!active || readyRef.current) {
                return;
            }
            readyRef.current = true;
            onReady?.();
        };

        void initialize();

        return () => {
            active = false;
        };
    }, [onReady, setAuth, setBaseData]);

    return null;
}
