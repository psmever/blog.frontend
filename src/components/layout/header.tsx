"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useAuthState, useSetAuthState } from "@/state";
import { logout } from "@/services/auth";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { href: "/", label: "홈" },
    { href: "/posts", label: "블로그" },
];

export function Header() {
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
            router.replace("/login");
        }
    };

    return (
        <header className="border-b border-foreground/10 bg-background/80 backdrop-blur">
            <Container className="flex items-center justify-between py-4">
                <Link href="/" className="text-lg font-semibold tracking-tight transition hover:opacity-80">
                    {siteConfig.name}
                </Link>
                <div className="flex items-center gap-2 sm:gap-3">
                    <nav className="flex items-center gap-1 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 transition hover:bg-foreground/5">
                                {link.label}
                            </Link>
                        ))}
                        {auth.isLoggedIn && (
                            <Link href="/posts/create" className="rounded-md px-3 py-2 transition hover:bg-foreground/5">
                                글쓰기
                            </Link>
                        )}
                        {auth.isLoggedIn ? (
                            <button type="button" onClick={handleLogout} disabled={isLoggingOut} className="rounded-md px-3 py-2 transition hover:bg-foreground/5 disabled:cursor-not-allowed disabled:opacity-60">
                                {isLoggingOut ? "로그아웃 중..." : "로그아웃"}
                            </button>
                        ) : (
                            <Link href="/login" className="rounded-md px-3 py-2 transition hover:bg-foreground/5">
                                로그인
                            </Link>
                        )}
                    </nav>
                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}
