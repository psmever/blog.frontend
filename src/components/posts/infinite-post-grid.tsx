"use client";

import { useEffect, useRef, useState } from "react";
import { mockFeedPosts, type FeedPost } from "@/data/mock-feed";
import { HomePostCard } from "./home-post-card";
import { Skeleton } from "@/components/ui/skeleton";

const CHUNK_SIZE = 12;

function getNextPosts(start: number, size: number): FeedPost[] {
    const extended = [...mockFeedPosts, ...mockFeedPosts];
    return extended.slice(start, start + size);
}

export function InfinitePostGrid() {
    const [items, setItems] = useState<FeedPost[]>(() => mockFeedPosts.slice(0, CHUNK_SIZE));
    const cursorRef = useRef(CHUNK_SIZE);
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry.isIntersecting) return;

                const start = cursorRef.current % mockFeedPosts.length;
                const next = getNextPosts(start, CHUNK_SIZE);
                cursorRef.current = start + CHUNK_SIZE;
                setItems((prev) => [...prev, ...next]);
            },
            { rootMargin: "400px 0px" },
        );

        const node = sentinelRef.current;
        if (node) {
            observer.observe(node);
            // defer flag to avoid flash of loading state
            setInitializing(false);
        }

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    return (
        <div className="space-y-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 wide:grid-cols-4">
                {items.map((post) => (
                    <HomePostCard key={`${post.id}-${post.title}`} post={post} />
                ))}
            </div>

            <div ref={sentinelRef} className="flex items-center justify-center py-6">
                {initializing ? null : (
                    <div className="flex items-center gap-3 rounded-full border border-foreground/10 px-4 py-2 text-sm text-foreground/70">
                        <Skeleton className="h-5 w-5 rounded-full" />더 불러오는 중입니다...
                    </div>
                )}
            </div>
        </div>
    );
}
