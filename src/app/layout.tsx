import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";
import { AppProviders } from "./providers";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const languageAlternates = Object.fromEntries(siteConfig.locales.map((locale) => [locale, locale === siteConfig.localeDefault ? "/" : `/${locale}`]));

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: ["blog", "tech", "frontend", "backend", "MyProject"],
    authors: [{ name: "MyProject" }],
    creator: "MyProject Team",
    publisher: "MyProject",
    alternates: {
        canonical: "/",
        languages: languageAlternates,
    },
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={siteConfig.localeDefault} suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}>
                <AppProviders>
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="flex-1 py-10">
                            <Container>{children}</Container>
                        </main>
                        <Footer />
                    </div>
                </AppProviders>
            </body>
        </html>
    );
}
