import { apiClient, apiRequest, type ApiResult } from "@/lib/apiClient";
import { clearTokens, getRefreshToken, setTokens, type AuthTokens } from "@/lib/token-storage";

export type LoginPayload = {
    email: string;
    password: string;
};

export type AuthUser = {
    id: number;
    name: string;
    email: string;
};

export type LoginData = {
    token_type: string;
    access_token: string;
    access_token_expires_at: string;
    refresh_token: string;
    refresh_token_expires_at: string;
    user: AuthUser;
};

export type LoginResult = ApiResult<LoginData>;
export type CurrentUserData = {
    user: AuthUser;
};
export type CurrentUserResult = ApiResult<CurrentUserData>;

export async function login(payload: LoginPayload): Promise<LoginResult> {
    const result = await apiRequest<LoginData>(apiClient.post("/auth/login", payload));
    if (result.status && result.data) {
        const tokens: AuthTokens = { accessToken: result.data.access_token, refreshToken: result.data.refresh_token };
        setTokens(tokens);
    }
    return result;
}

export async function fetchCurrentUser(): Promise<CurrentUserResult> {
    return apiRequest<CurrentUserData>(apiClient.get("/auth/me"));
}

export async function logout(): Promise<ApiResult<null>> {
    const refreshToken = getRefreshToken();
    try {
        return await apiRequest<null>(apiClient.post("/auth/logout", { refreshToken }));
    } finally {
        clearTokens();
    }
}
