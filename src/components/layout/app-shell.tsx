"use client";

import { usePathname } from "next/navigation";
import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";

type AppShellProps = {
    children: React.ReactNode;
};

const FULL_WIDTH_ROUTES = ["/posts/create", "/posts/edit"];

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
            <main className={isFullWidth ? "flex-1 overflow-hidden" : "flex flex-1 flex-col py-10"}>{isFullWidth ? children : <Container className="flex flex-1 flex-col">{children}</Container>}</main>
            {!isFullWidth && <Footer />}
        </div>
    );
}
