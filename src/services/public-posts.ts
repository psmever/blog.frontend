import type { AxiosError, AxiosResponse } from "axios";
import { apiClient, type ApiMeta, type ApiResponse } from "@/lib/apiClient";

const DEFAULT_PUBLIC_POST_LIMIT = 12;
const MAX_PUBLIC_POST_LIMIT = 50;

export type PublicPostImageData = {
    uuid: string;
    purpose: "body" | "cover";
    url: string;
    width: number;
    height: number;
    size: number;
};

export type PublicPostAuthor = {
    name: string;
};

export type PublicPostTag = {
    key: string;
    label: string;
};

export type PublicPostListItem = {
    slug: string;
    title: string;
    excerpt: string;
    published_at: string | null;
    cover_image: PublicPostImageData | null;
    author: PublicPostAuthor;
    primary_tag: PublicPostTag | null;
    view_count: number;
};

export type PublicPostDetailData = {
    uuid?: string;
    slug: string;
    title: string;
    excerpt: string;
    published_at: string | null;
    cover_image: PublicPostImageData | null;
    author: PublicPostAuthor;
    tags: PublicPostTag[];
    body: string;
    view_count: number;
    created_at: string;
    updated_at: string;
};

export type PublicPostListMeta = {
    limit: number;
    next_cursor: string | null;
    has_more: boolean;
};

export type PublicApiResult<T, M extends Record<string, unknown> = Record<string, never>> = {
    status: boolean;
    message: string;
    data: T | null;
    meta: (ApiMeta & Partial<M>) | null;
    statusCode: number | null;
};

export type PublicPostListResult = PublicApiResult<PublicPostListItem[], PublicPostListMeta>;
export type PublicPostDetailResult = PublicApiResult<PublicPostDetailData>;

type FetchPublicPostsParams = {
    limit?: number;
    cursor?: string | null;
};

const publicPostDetailRequestCache = new Map<string, Promise<PublicPostDetailResult>>();

function normalizeLimit(limit = DEFAULT_PUBLIC_POST_LIMIT) {
    return Math.min(Math.max(limit, 1), MAX_PUBLIC_POST_LIMIT);
}

async function publicApiRequest<T, M extends Record<string, unknown> = Record<string, never>>(
    request: Promise<AxiosResponse<ApiResponse<T, M>>>,
): Promise<PublicApiResult<T, M>> {
    try {
        const { data } = await request;

        return {
            status: true,
            message: data.message,
            data: data.data ?? null,
            meta: data.meta ?? null,
            statusCode: data.meta?.status ?? 200,
        };
    } catch (error) {
        const axiosError = error as AxiosError<ApiResponse<T, M>>;
        const responseData = axiosError.response?.data;

        return {
            status: false,
            message: responseData?.message ?? "요청 처리 중 오류가 발생했습니다.",
            data: responseData?.data ?? null,
            meta: responseData?.meta ?? null,
            statusCode: axiosError.response?.status ?? null,
        };
    }
}

export async function fetchPublicPosts(params: FetchPublicPostsParams = {}): Promise<PublicPostListResult> {
    const limit = normalizeLimit(params.limit);

    return publicApiRequest<PublicPostListItem[], PublicPostListMeta>(
        apiClient.get("/v1/public/posts", {
            params: {
                limit,
                ...(params.cursor ? { cursor: params.cursor } : {}),
            },
        }),
    );
}

export async function fetchPublicPostDetail(slug: string): Promise<PublicPostDetailResult> {
    return publicApiRequest<PublicPostDetailData>(apiClient.get(`/v1/public/posts/${encodeURIComponent(slug)}`));
}

export function fetchPublicPostDetailInBrowser(slug: string, options?: { force?: boolean }) {
    if (options?.force) {
        publicPostDetailRequestCache.delete(slug);
    }

    if (typeof window === "undefined") {
        return fetchPublicPostDetail(slug);
    }

    const cachedRequest = publicPostDetailRequestCache.get(slug);
    if (cachedRequest) {
        return cachedRequest;
    }

    const request = fetchPublicPostDetail(slug).then((result) => {
        if (!result.status || !result.data) {
            publicPostDetailRequestCache.delete(slug);
        }

        return result;
    });

    publicPostDetailRequestCache.set(slug, request);

    return request;
}
