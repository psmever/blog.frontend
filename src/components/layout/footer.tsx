import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/80">
      <Container className="flex flex-col gap-3 py-6 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} MyProject. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/posts"
            className="font-medium text-foreground/80 transition hover:text-foreground"
          >
            최신 글 보기 →
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-foreground/15 px-3 py-1.5 font-medium text-foreground/80 transition hover:border-foreground/30 hover:bg-foreground/5"
          >
            대시보드
          </Link>
        </div>
      </Container>
    </footer>
  );
}
