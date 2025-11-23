import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "로그인",
  description: "관리자 전용 대시보드 로그인 페이지입니다.",
};

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
          Dashboard
        </p>
        <h1 className="text-2xl font-semibold">로그인</h1>
        <p className="text-sm text-foreground/70">
          게시글 작성 및 관리 기능은 로그인 후 이용할 수 있습니다.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>이메일로 로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80" htmlFor="email">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80" htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            <Button type="button" className="w-full">
              로그인
            </Button>
            <p className="text-center text-xs text-foreground/60">
              실제 인증 연동은 API 연결 이후 적용됩니다.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
