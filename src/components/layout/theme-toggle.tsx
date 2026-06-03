"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const frameId = window.requestAnimationFrame(() => {
            setMounted(true);
        });

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, []);

    const effectiveTheme = theme === "system" ? resolvedTheme : theme;
    const nextTheme = effectiveTheme === "dark" ? "light" : "dark";
    const label = mounted && effectiveTheme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";

    return (
        <Button type="button" variant="ghost" size="sm" aria-label={label} title={label} onClick={() => setTheme(nextTheme ?? "light")} className="h-10 w-10 rounded-full border-foreground/10 bg-background/90 px-0 shadow-lg shadow-foreground/10 backdrop-blur">
            {mounted && effectiveTheme === "dark" ? (
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
            ) : (
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6.75 6.75 0 0 0 8.9 8.9A8.5 8.5 0 1 1 12 3Z" />
                </svg>
            )}
        </Button>
    );
}
