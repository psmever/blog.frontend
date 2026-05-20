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

    return (
        <Button type="button" variant="ghost" size="sm" aria-label="테마 전환" onClick={() => setTheme(nextTheme ?? "light")} className="px-2 sm:px-3">
            {mounted && effectiveTheme === "dark" ? "라이트 모드" : "다크 모드"}
        </Button>
    );
}
