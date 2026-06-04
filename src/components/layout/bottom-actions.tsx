"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth";
import { useAuthState, useSetAuthState } from "@/state";
import { ThemeToggle } from "./theme-toggle";

export function BottomActions() {
    const auth = useAuthState();
    const setAuth = useSetAuthState();
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        if (isLoggingOut) return;
        setIsLoggingOut(true);
        try {
            await logout();
        } finally {
            setAuth({ isLoggedIn: false, user: null });
            setIsLoggingOut(false);
            router.replace("/");
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 sm:bottom-6 sm:right-6">
            {auth.isLoggedIn && (
                <button type="button" onClick={handleLogout} disabled={isLoggingOut} className="inline-flex h-10 items-center justify-center rounded-full border border-foreground/10 bg-background/90 px-4 text-sm font-semibold shadow-lg shadow-foreground/10 backdrop-blur transition hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/15 disabled:cursor-not-allowed disabled:opacity-60">
                    {isLoggingOut ? "로그아웃 중..." : "로그아웃"}
                </button>
            )}
            <ThemeToggle />
        </div>
    );
}
