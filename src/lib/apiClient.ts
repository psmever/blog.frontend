import axios, { type AxiosError, type AxiosResponse } from "axios";
import { clearTokens, getAccessToken } from "./token-storage";

const rawBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
const baseURL = rawBaseURL.endsWith("/api") ? rawBaseURL : `${rawBaseURL.replace(/\/$/, "")}/api`;
const baseClientHeaderCode = process.env.NEXT_PUBLIC_API_BASE_CLIENT_HEADER_CODE ?? "0000";

export type ApiResponse<T> = {
    message: string;
    data: T;
    errors?: unknown;
    meta: {
        status: number;
        timestamp: string;
    };
};

export type ApiResult<T> = {
    status: boolean;
    message: string;
    data: T | null;
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
        };
    } catch (error) {
        const axiosError = error as AxiosError<ApiResponse<T>>;
        const responseData = axiosError.response?.data;
        return {
            status: false,
            message: responseData?.message ?? "요청 처리 중 오류가 발생했습니다.",
            data: responseData?.data ?? null,
        };
    }
}
