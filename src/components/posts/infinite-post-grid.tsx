"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { fetchPublicPosts, type PublicPostListItem } from "@/services/public-posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { HomePostCard } from "./home-post-card";
import { Skeleton } from "@/components/ui/skeleton";

const CHUNK_SIZE = 12;

type InfinitePostGridProps = {
    initialPosts: PublicPostListItem[];
    initialNextCursor: string | null;
    initialHasMore: boolean;
    initialErrorMessage?: string | null;
};

function mergePosts(currentPosts: PublicPostListItem[], nextPosts: PublicPostListItem[]) {
    const postMap = new Map(currentPosts.map((post) => [post.slug, post]));

    nextPosts.forEach((post) => {
        postMap.set(post.slug, post);
    });

    return Array.from(postMap.values());
}

export function InfinitePostGrid({ initialPosts, initialNextCursor, initialHasMore, initialErrorMessage = null }: InfinitePostGridProps) {
    const [items, setItems] = useState<PublicPostListItem[]>(initialPosts);
    const [nextCursor, setNextCursor] = useState<string | null>(initialNextCursor);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [initialError, setInitialError] = useState<string | null>(initialErrorMessage);
    const [loadMoreError, setLoadMoreError] = useState<string | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(initialPosts.length === 0);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const requestModeRef = useRef<"replace" | "append" | null>(null);
    const didBootstrapInitialLoadRef = useRef(false);

    const loadPosts = useCallback(async (cursor: string | null, mode: "replace" | "append") => {
        if (mode === "replace") {
            if (requestModeRef.current) {
                return;
            }

            requestModeRef.current = "replace";
            setIsLoadingInitial(true);
            setInitialError(null);
            setLoadMoreError(null);
        } else {
            if (requestModeRef.current || !cursor) {
                return;
            }

            requestModeRef.current = "append";
            setIsLoadingMore(true);
            setLoadMoreError(null);
        }

        const result = await fetchPublicPosts({
            limit: CHUNK_SIZE,
            cursor,
        });

        if (!result.status) {
            if (mode === "replace") {
                requestModeRef.current = null;
                setInitialError(result.message ?? "게시글 목록을 불러오지 못했습니다.");
                setIsLoadingInitial(false);
                return;
            }

            requestModeRef.current = null;
            setLoadMoreError(result.message ?? "다음 글을 불러오지 못했습니다.");
            setIsLoadingMore(false);
            return;
        }

        const nextPosts = result.data ?? [];

        setItems((currentItems) => (mode === "replace" ? nextPosts : mergePosts(currentItems, nextPosts)));
        setNextCursor(typeof result.meta?.next_cursor === "string" && result.meta.next_cursor.length > 0 ? result.meta.next_cursor : null);
        setHasMore(Boolean(result.meta?.has_more));
        setInitialError(null);
        setLoadMoreError(null);
        requestModeRef.current = null;
        setIsLoadingInitial(false);
        setIsLoadingMore(false);
    }, []);

    useEffect(() => {
        if (initialPosts.length > 0 || didBootstrapInitialLoadRef.current) {
            return;
        }

        didBootstrapInitialLoadRef.current = true;
        void loadPosts(null, "replace");
    }, [initialPosts.length, loadPosts]);

    useEffect(() => {
        if (!hasMore || !nextCursor || isLoadingInitial || isLoadingMore || loadMoreError) {
            return;
        }

        const node = sentinelRef.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry.isIntersecting) return;

                void loadPosts(nextCursor, "append");
            },
            { rootMargin: "400px 0px" },
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [hasMore, isLoadingInitial, isLoadingMore, loadMoreError, loadPosts, nextCursor]);

    const handleRetryInitialLoad = () => {
        void loadPosts(null, "replace");
    };

    const handleRetryLoadMore = () => {
        if (!nextCursor) {
            return;
        }

        void loadPosts(nextCursor, "append");
    };

    if (isLoadingInitial && items.length === 0) {
        return (
            <Card className="border-dashed border-foreground/20 bg-muted/60">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                        <Loader className="h-4 w-4" />
                        게시글을 불러오는 중입니다...
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 wide:grid-cols-4">
                        {Array.from({ length: CHUNK_SIZE }).map((_, index) => (
                            <div key={index} className="overflow-hidden rounded-2xl border border-foreground/10 bg-card">
                                <Skeleton className="aspect-[4/3] w-full rounded-none" />
                                <div className="space-y-3 p-4">
                                    <Skeleton className="h-3 w-28" />
                                    <Skeleton className="h-5 w-4/5" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (initialError && items.length === 0) {
        return (
            <Card className="border-dashed border-red-500/30 bg-red-500/5">
                <CardHeader>
                    <CardTitle>게시글 목록을 불러오지 못했습니다</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 text-sm text-foreground/75 sm:flex-row sm:items-center sm:justify-between">
                    <p>{initialError}</p>
                    <Button type="button" variant="outline" onClick={handleRetryInitialLoad}>
                        다시 시도
                    </Button>
                </CardContent>
            </Card>
        );
    }

    if (items.length === 0) {
        return <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-foreground/20 bg-background/80 p-8 text-center text-sm text-foreground/70">아직 공개된 게시글이 없습니다.</div>;
    }

    return (
        <div className="flex flex-1 flex-col gap-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 wide:grid-cols-4">
                {items.map((post) => (
                    <HomePostCard key={post.slug} post={post} />
                ))}
            </div>

            {hasMore ? (
                <div ref={sentinelRef} className="flex items-center justify-center py-6">
                    {loadMoreError ? (
                        <div className="flex flex-col items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-center text-sm text-foreground/75">
                            <p>{loadMoreError}</p>
                            <Button type="button" variant="outline" size="sm" onClick={handleRetryLoadMore}>
                                다음 글 다시 불러오기
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 rounded-full border border-foreground/10 px-4 py-2 text-sm text-foreground/70">
                            <Skeleton className="h-5 w-5 rounded-full" />
                            {isLoadingMore ? "더 불러오는 중입니다..." : "다음 글을 준비하고 있습니다..."}
                        </div>
                    )}
                </div>
            ) : (
                <div className="mt-auto py-2 text-center text-sm text-foreground/60">마지막 글까지 모두 확인했습니다.</div>
            )}
        </div>
    );
}
