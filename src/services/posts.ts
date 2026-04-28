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

export type CreatePostResult = ApiResult<CreatedPostData>;
export type FetchPostResult = ApiResult<PostDetailData>;

export async function createPost(payload: CreatePostPayload): Promise<CreatePostResult> {
    return apiRequest<CreatedPostData>(apiClient.post("/v1/posts", payload));
}

export async function fetchPost(uuid: string): Promise<FetchPostResult> {
    return apiRequest<PostDetailData>(apiClient.get(`/v1/posts/${uuid}`));
}
