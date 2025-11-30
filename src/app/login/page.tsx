import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
    title: "로그인",
    description: "관리자 전용 대시보드 로그인 페이지입니다.",
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md">
                <LoginForm />
            </div>
        </div>
    );
}
