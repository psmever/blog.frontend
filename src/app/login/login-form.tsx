"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAccessToken } from "@/lib/token-storage";
import { login, logout } from "@/services/auth";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loggedIn, setLoggedIn] = useState(() => Boolean(getAccessToken()));
    const router = useRouter();

    useEffect(() => {
        if (loggedIn && !loading) {
            router.replace("/");
        }
    }, [loggedIn, loading, router]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        setMessage(null);
        setLoading(true);

        try {
            const response = await login({ email, password });
            setLoggedIn(true);
            setMessage(response.message ?? "로그인에 성공했어요. 대시보드로 이동하거나 새로고침해주세요.");
        } catch (error) {
            const axiosError = error as AxiosError<{ message?: string }>;
            const backendMessage = axiosError.response?.data?.message;
            setError(backendMessage ?? "로그인에 실패했습니다. 계정 정보를 다시 확인해주세요.");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        setError(null);
        setMessage(null);
        try {
            await logout();
            setLoggedIn(false);
            setMessage("로그아웃 되었습니다.");
        } catch {
            setError("로그아웃 처리 중 문제가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle>{loggedIn ? "로그아웃" : "로그인"}</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80" htmlFor="email">
                            이메일
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            disabled={loggedIn}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20 disabled:cursor-not-allowed disabled:bg-foreground/5"
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
                            required
                            disabled={loggedIn}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20 disabled:cursor-not-allowed disabled:bg-foreground/5"
                        />
                    </div>
                    <Button type={loggedIn ? "button" : "submit"} className="w-full" disabled={loading} onClick={loggedIn ? handleLogout : undefined}>
                        {loading ? "처리 중..." : loggedIn ? "로그아웃" : "로그인"}
                    </Button>
                    {loggedIn ? <p className="text-center text-xs text-foreground/70">로그인된 상태입니다. 메인으로 이동할게요.</p> : <p className="text-center text-xs text-foreground/60">계정이 없으면 백엔드에서 계정을 생성한 후 이용해주세요.</p>}
                </form>

                {message && <p className="mt-3 rounded-md bg-foreground/5 px-3 py-2 text-sm text-foreground/80">{message}</p>}
                {error && <p className="mt-3 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-600">{error}</p>}
            </CardContent>
        </Card>
    );
}
