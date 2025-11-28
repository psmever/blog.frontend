import { apiClient, type ApiResponse } from "@/lib/apiClient";
import { clearTokens, getRefreshToken, setTokens, type AuthTokens } from "@/lib/token-storage";

export type LoginPayload = {
    email: string;
    password: string;
};

export type LoginResponse = ApiResponse<{
    token_type: string;
    access_token: string;
    access_token_expires_at: string;
    refresh_token: string;
    refresh_token_expires_at: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}>;

export async function login(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await apiClient.post<LoginResponse>("/auth/login", payload);
    const tokens: AuthTokens = { accessToken: data.data.access_token, refreshToken: data.data.refresh_token };
    setTokens(tokens);
    return data;
}

export async function logout() {
    const refreshToken = getRefreshToken();
    try {
        await apiClient.post("/auth/logout", { refreshToken });
    } finally {
        clearTokens();
    }
}
