"use client";

import { usePathname } from "next/navigation";
import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";

type AppShellProps = {
    children: React.ReactNode;
};

const FULL_WIDTH_ROUTES = ["/posts/create"];

function isFullWidthRoute(pathname: string | null) {
    if (!pathname) return false;
    return FULL_WIDTH_ROUTES.some((route) => pathname.startsWith(route));
}

export function AppShell({ children }: AppShellProps) {
    const pathname = usePathname();
    const isFullWidth = isFullWidthRoute(pathname);

    return (
        <div className="flex min-h-screen flex-col">
            {!isFullWidth && <Header />}
            <main className={isFullWidth ? "flex-1 overflow-hidden" : "flex-1 py-10"}>{isFullWidth ? children : <Container>{children}</Container>}</main>
            {!isFullWidth && <Footer />}
        </div>
    );
}
