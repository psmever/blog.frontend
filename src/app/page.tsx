import type { Metadata } from "next";
import { InfinitePostGrid } from "@/components/posts/infinite-post-grid";

export const metadata: Metadata = {
    title: "홈",
};

export default function Home() {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">Latest</p>
                <h1 className="text-2xl font-semibold">최신 글을 둘러보세요</h1>
                <p className="text-sm text-foreground/70">카드형 피드로 구성된 글 목록입니다. 스크롤하면 더 많은 글이 자동으로 로드됩니다.</p>
            </div>

            <InfinitePostGrid />
        </div>
    );
}
