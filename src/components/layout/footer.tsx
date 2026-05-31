import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function Footer() {
    return (
        <footer className="border-t border-foreground/10 bg-background/80">
            <Container className="flex flex-col gap-3 py-6 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
                <span>
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </span>
            </Container>
        </footer>
    );
}
