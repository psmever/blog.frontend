"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useAuthState } from "@/state";
import { Container } from "./container";

const navLinks = [
    { href: "/", label: "홈" },
    { href: "/posts", label: "블로그" },
];

export function Header() {
    const auth = useAuthState();

    return (
        <header className="border-b border-foreground/10 bg-background/80 backdrop-blur">
            <Container className="flex items-center justify-between py-4">
                <Link href="/" className="text-lg font-semibold tracking-tight transition hover:opacity-80">
                    {siteConfig.name}
                </Link>
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
                </nav>
            </Container>
        </header>
    );
}
