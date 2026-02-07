"use client";

import { useCallback, useState } from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";
import { Loader } from "@/components/ui/loader";
import { AppStateProvider } from "@/state";
import { AppStateInitializer } from "./app-state-initializer";

export function AppProviders({ children, ...props }: ThemeProviderProps) {
    const [isReady, setIsReady] = useState(false);
    const handleReady = useCallback(() => {
        setIsReady(true);
    }, []);

    return (
        <AppStateProvider>
            <AppStateInitializer onReady={handleReady} />
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
                {isReady ? (
                    children
                ) : (
                    <div className="flex min-h-screen items-center justify-center px-6">
                        <div className="flex items-center gap-3 text-sm text-foreground/70">
                            <Loader className="h-4 w-4" />
                            앱을 준비하는 중입니다...
                        </div>
                    </div>
                )}
            </NextThemesProvider>
        </AppStateProvider>
    );
}

// Legacy export 이름을 유지해 기존 사용처를 지원합니다.
export const ThemeProvider = AppProviders;
