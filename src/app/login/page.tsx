import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
    title: "로그인",
    description: "관리자 전용 대시보드 로그인 페이지입니다.",
};

export default function LoginPage() {
    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">Dashboard</p>
                <h1 className="text-2xl font-semibold">로그인</h1>
                <p className="text-sm text-foreground/70">게시글 작성 및 관리 기능은 로그인 후 이용할 수 있습니다.</p>
            </div>

            <LoginForm />
        </div>
    );
}
