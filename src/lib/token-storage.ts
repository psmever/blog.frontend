const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export type AuthTokens = {
    accessToken: string;
    refreshToken?: string;
};

const isClient = typeof window !== "undefined";

export function setTokens(tokens: AuthTokens) {
    if (!isClient) return;
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    if (tokens.refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
    }
}

export function getAccessToken() {
    if (!isClient) return null;
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
    if (!isClient) return null;
    return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function clearTokens() {
    if (!isClient) return;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}
