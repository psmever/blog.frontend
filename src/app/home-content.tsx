import { fetchPublicPosts } from "@/services/public-posts";
import { InfinitePostGrid } from "@/components/posts/infinite-post-grid";

const INITIAL_POST_LIMIT = 12;

export async function HomeContent() {
    const initialPostsResult = await fetchPublicPosts({ limit: INITIAL_POST_LIMIT });

    const initialPosts = initialPostsResult.status ? (initialPostsResult.data ?? []) : [];
    const initialNextCursor = initialPostsResult.status && typeof initialPostsResult.meta?.next_cursor === "string" && initialPostsResult.meta.next_cursor.length > 0 ? initialPostsResult.meta.next_cursor : null;
    const initialHasMore = initialPostsResult.status ? Boolean(initialPostsResult.meta?.has_more) : false;
    const initialErrorMessage = initialPostsResult.status ? null : initialPostsResult.message;

    return <InfinitePostGrid initialPosts={initialPosts} initialNextCursor={initialNextCursor} initialHasMore={initialHasMore} initialErrorMessage={initialErrorMessage} />;
}
