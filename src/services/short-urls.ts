import { apiClient, apiRequest, type ApiResult } from "@/lib/apiClient";

export type ShortUrlData = {
    code: string;
    short_url: string;
    original_url: string;
};

export type CreateShortUrlPayload = {
    original_url: string;
};

export type CreateShortUrlResult = ApiResult<ShortUrlData>;
export type ResolveShortUrlResult = ApiResult<ShortUrlData>;

export async function createShortUrl(payload: CreateShortUrlPayload): Promise<CreateShortUrlResult> {
    return apiRequest<ShortUrlData>(apiClient.post("/v1/short-urls", payload));
}

export async function resolveShortUrl(code: string): Promise<ResolveShortUrlResult> {
    return apiRequest<ShortUrlData>(apiClient.get(`/v1/short-urls/${encodeURIComponent(code)}`));
}
