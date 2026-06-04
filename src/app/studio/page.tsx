import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
    title: "Studio",
    description: "관리자 전용 스튜디오 페이지입니다.",
};

export default function StudioPage() {
    const nodeEnv = process.env.NODE_ENV as string | undefined;
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV;
    const shouldPrefillCredentials = nodeEnv === "development" || nodeEnv === "local" || appEnv === "local";
    const shouldRelaxEmailValidation = nodeEnv === "local" || appEnv === "local";

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md">
                <LoginForm defaultEmail={shouldPrefillCredentials ? process.env.LOCAL_LOGIN_EMAIL : undefined} defaultPassword={shouldPrefillCredentials ? process.env.LOCAL_LOGIN_PASSWORD : undefined} relaxEmailValidation={shouldRelaxEmailValidation} />
            </div>
        </div>
    );
}
