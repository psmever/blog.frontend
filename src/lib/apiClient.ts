import axios from "axios";
import { clearTokens, getAccessToken } from "./token-storage";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";
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
