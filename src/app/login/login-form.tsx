"use client";

import { FormEvent, useEffect, useState } from "react";
import type { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAccessToken } from "@/lib/token-storage";
import { login, logout } from "@/services/auth";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(Boolean(getAccessToken()));
    }, []);

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
            <CardHeader>
                <CardTitle>이메일로 로그인</CardTitle>
                <CardDescription>입력 후 로그인하면 토큰이 저장되고 이후 요청에 자동으로 포함됩니다.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80" htmlFor="email">
                            이메일
                        </label>
                        <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80" htmlFor="password">
                            비밀번호
                        </label>
                        <input id="password" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20" />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "처리 중..." : "로그인"}
                    </Button>
                    {loggedIn ? <p className="text-center text-xs text-foreground/70">이미 로그인되어 있습니다. 아래 로그아웃을 사용할 수 있어요.</p> : <p className="text-center text-xs text-foreground/60">계정이 없으면 백엔드에서 계정을 생성한 후 이용해주세요.</p>}
                </form>

                <div className="mt-4 flex items-center justify-between rounded-lg border border-foreground/10 px-3 py-2">
                    <div className="text-xs text-foreground/70">
                        <p className="font-semibold text-foreground/85">세션 관리</p>
                        <p>accessToken은 로컬 스토리지에 저장되어 API 요청에 자동으로 포함됩니다.</p>
                    </div>
                    <Button type="button" variant="outline" size="sm" onClick={handleLogout} disabled={loading}>
                        로그아웃
                    </Button>
                </div>

                {message && <p className="mt-3 rounded-md bg-foreground/5 px-3 py-2 text-sm text-foreground/80">{message}</p>}
                {error && <p className="mt-3 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-600">{error}</p>}
            </CardContent>
        </Card>
    );
}
