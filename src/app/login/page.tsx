import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
    title: "로그인",
    description: "관리자 전용 대시보드 로그인 페이지입니다.",
};

export default function LoginPage() {
    const nodeEnv = process.env.NODE_ENV as string | undefined;
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV;
    const shouldPrefillCredentials = nodeEnv === "development" || nodeEnv === "local" || appEnv === "local";

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md">
                <LoginForm defaultEmail={shouldPrefillCredentials ? process.env.LOCAL_LOGIN_EMAIL : undefined} defaultPassword={shouldPrefillCredentials ? process.env.LOCAL_LOGIN_PASSWORD : undefined} />
            </div>
        </div>
    );
}
