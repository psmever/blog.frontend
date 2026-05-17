import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 rounded-2xl border border-foreground/10 bg-background p-8 text-center shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/60">404</p>
            <h1 className="text-2xl font-semibold">페이지를 찾을 수 없습니다</h1>
            <p className="text-sm text-foreground/70">주소가 잘못되었거나, 작성 중인 페이지일 수 있어요. 홈 또는 글 목록으로 이동해 주세요.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/" className="rounded-lg border border-foreground/15 px-4 py-2 text-sm font-medium transition hover:border-foreground/30 hover:bg-foreground/5">
                    홈으로 가기
                </Link>
                <Link href="/posts" className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90">
                    글 목록 보기
                </Link>
            </div>
        </div>
    );
}
