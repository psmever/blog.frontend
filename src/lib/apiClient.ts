import axios, { type AxiosError, type AxiosResponse } from "axios";
import { clearTokens, getAccessToken } from "./token-storage";

function readEnv(...keys: string[]) {
    for (const key of keys) {
        const value = process.env[key]?.trim();
        if (value) {
            return value;
        }
    }

    return null;
}

const publicApiBaseURL = readEnv("NEXT_PUBLIC_API_BASE_URL", "NEXT_PUBLIC_API_URL") ?? "http://localhost:4000/api";
const rawBaseURL = typeof window === "undefined" ? (readEnv("API_INTERNAL_BASE_URL") ?? publicApiBaseURL) : publicApiBaseURL;
const baseURL = rawBaseURL.endsWith("/api") ? rawBaseURL : `${rawBaseURL.replace(/\/$/, "")}/api`;
const baseClientHeaderCode = process.env.NEXT_PUBLIC_API_BASE_CLIENT_HEADER_CODE ?? "CT04P";

export type ApiMeta = {
    status: number;
    timestamp: string;
};

export type ApiResponse<T, M extends Record<string, unknown> = Record<string, never>> = {
    message: string;
    data: T;
    errors?: unknown;
    meta: ApiMeta & M;
};

export type ApiResult<T> = {
    status: boolean;
    message: string;
    data: T | null;
    statusCode?: number | null;
};

export const apiClient = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Client-Type": `${baseClientHeaderCode}`,
    },
});

apiClient.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            clearTokens();
        }
        return Promise.reject(error);
    },
);

export async function apiRequest<T>(request: Promise<AxiosResponse<ApiResponse<T>>>): Promise<ApiResult<T>> {
    try {
        const { data } = await request;
        return {
            status: true,
            message: data.message,
            data: data.data ?? null,
            statusCode: data.meta?.status ?? 200,
        };
    } catch (error) {
        const axiosError = error as AxiosError<ApiResponse<T>>;
        const responseData = axiosError.response?.data;
        return {
            status: false,
            message: responseData?.message ?? "요청 처리 중 오류가 발생했습니다.",
            data: responseData?.data ?? null,
            statusCode: axiosError.response?.status ?? null,
        };
    }
}
