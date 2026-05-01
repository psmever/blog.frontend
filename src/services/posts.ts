import { apiClient, apiRequest, type ApiResult } from "@/lib/apiClient";

export type CreatePostPayload = {
    title: string;
    tags: string[];
    body: string;
};

export type CreatedPostData = {
    uuid: string;
};

export type SavePostPayload = {
    title: string;
    tags: string[];
    body: string;
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
    cover_image: PostImageData | null;
    tags: PostTag[];
    body: string;
    created_at: string;
    updated_at: string;
};

export type PostImageData = {
    uuid: string;
    purpose: "body" | "cover";
    url: string;
    width: number;
    height: number;
    size: number;
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
export type SavePostResult = ApiResult<CreatedPostData>;
export type FetchPostResult = ApiResult<PostDetailData>;
export type FetchPostsResult = ApiResult<PostListItem[]>;
export type UploadPostImageResult = ApiResult<PostImageData>;

export async function createPost(payload: CreatePostPayload): Promise<CreatePostResult> {
    return apiRequest<CreatedPostData>(apiClient.post("/v1/posts", payload));
}

export async function issuePostUuid(): Promise<CreatePostResult> {
    return apiRequest<CreatedPostData>(apiClient.post("/v1/posts/uuid"));
}

export async function savePost(uuid: string, payload: SavePostPayload): Promise<SavePostResult> {
    return apiRequest<CreatedPostData>(apiClient.post(`/v1/posts/${uuid}/save`, payload));
}

export async function publishPost(uuid: string): Promise<SavePostResult> {
    return apiRequest<CreatedPostData>(apiClient.post(`/v1/posts/${uuid}/publish`));
}

export async function fetchPost(uuid: string): Promise<FetchPostResult> {
    return apiRequest<PostDetailData>(apiClient.get(`/v1/posts/${uuid}`));
}

export async function uploadPostImage(uuid: string, file: File, purpose: PostImageData["purpose"] = "body"): Promise<UploadPostImageResult> {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("purpose", purpose);

    return apiRequest<PostImageData>(
        apiClient.post(`/v1/posts/${uuid}/images`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }),
    );
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
