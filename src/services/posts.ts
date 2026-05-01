import { apiClient, apiRequest, type ApiResult } from "@/lib/apiClient";

export type CreatePostPayload = {
    title: string;
    tags: string[];
    body: string;
};

export type CreatedPostData = {
    uuid: string;
};

export type PostTag = {
    key: string;
    label: string;
};

export type PostDetailData = {
    uuid: string;
    title: string;
    slug: string;
    status: string;
    published_at: string | null;
    tags: PostTag[];
    body: string;
    created_at: string;
    updated_at: string;
};

export type PostListItem = {
    uuid: string;
    title: string;
    slug: string;
    status: PostStatus;
    published_at: string | null;
    updated_at: string;
};

export type PostStatus = "draft" | "published";

export type CreatePostResult = ApiResult<CreatedPostData>;
export type FetchPostResult = ApiResult<PostDetailData>;
export type FetchPostsResult = ApiResult<PostListItem[]>;

export async function createPost(payload: CreatePostPayload): Promise<CreatePostResult> {
    return apiRequest<CreatedPostData>(apiClient.post("/v1/posts", payload));
}

export async function fetchPost(uuid: string): Promise<FetchPostResult> {
    return apiRequest<PostDetailData>(apiClient.get(`/v1/posts/${uuid}`));
}

export async function fetchPostsByStatus(status: PostStatus, limit = 20): Promise<FetchPostsResult> {
    return apiRequest<PostListItem[]>(
        apiClient.get("/v1/posts", {
            params: {
                status,
                limit,
            },
        }),
    );
}

export async function fetchDraftPosts(limit = 20): Promise<FetchPostsResult> {
    return fetchPostsByStatus("draft", limit);
}

export async function fetchPublishedPosts(limit = 20): Promise<FetchPostsResult> {
    return fetchPostsByStatus("published", limit);
}
