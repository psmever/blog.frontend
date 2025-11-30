"use client";

import { RecoilRoot } from "recoil";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function AppProviders({ children, ...props }: ThemeProviderProps) {
    return (
        <RecoilRoot>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
                {children}
            </NextThemesProvider>
        </RecoilRoot>
    );
}

// Legacy export 이름을 유지해 기존 사용처를 지원합니다.
export const ThemeProvider = AppProviders;
