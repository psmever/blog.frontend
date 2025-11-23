"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-lg flex-col items-center justify-center gap-4 rounded-2xl border border-foreground/10 bg-background p-8 text-center shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-red-500">500</p>
      <h1 className="text-2xl font-semibold">알 수 없는 오류가 발생했습니다</h1>
      <p className="text-sm text-foreground/70">
        잠시 후 다시 시도해주세요. 문제가 지속되면 로그를 확인해 주세요.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90"
        >
          다시 시도
        </button>
        <Link
          href="/"
          className="rounded-lg border border-foreground/15 px-4 py-2 text-sm font-medium transition hover:border-foreground/30 hover:bg-foreground/5"
        >
          홈으로 이동
        </Link>
      </div>
    </div>
  );
}
