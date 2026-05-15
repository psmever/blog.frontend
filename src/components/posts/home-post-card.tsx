/* eslint-disable @next/next/no-img-element */

import type { ReactNode } from "react";
import Link from "next/link";
import type { PublicPostListItem } from "@/services/public-posts";
import { cn, formatPublishedDate, resolveApiAssetUrl } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
    post: PublicPostListItem;
};

function MetaBadge({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <span className={cn("inline-flex items-center rounded-full border border-foreground/10 px-3 py-1 text-xs font-semibold text-foreground/75", className)}>
            {children}
        </span>
    );
}

export function HomePostCard({ post }: Props) {
    return (
        <Link href={`/posts/${post.slug}`} className="group block h-full transition hover:-translate-y-[2px]">
            <Card className="h-full overflow-hidden border border-foreground/10 bg-card shadow-sm transition group-hover:border-foreground/25">
                <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(17,17,17,0.04),rgba(17,17,17,0.08))]">
                    {post.cover_image ? (
                        <img
                            src={resolveApiAssetUrl(post.cover_image.url)}
                            alt={post.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(17,17,17,0.08),transparent_55%),linear-gradient(135deg,rgba(17,17,17,0.06),rgba(17,17,17,0.12))] px-6 text-center text-sm font-medium text-foreground/55">
                            커버 이미지 없음
                        </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent px-4 py-3 text-white">
                        <div className="flex items-center justify-between gap-3 text-xs font-medium">
                            <span>{formatPublishedDate(post.published_at)}</span>
                            <span>조회 {post.view_count.toLocaleString("ko-KR")}</span>
                        </div>
                    </div>
                </div>

                <CardContent className="flex flex-col gap-4 p-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                            <span className="font-semibold text-foreground/80">{post.author.name}</span>
                            <span aria-hidden>·</span>
                            <span>{post.primary_tag?.label ?? "미분류"}</span>
                        </div>
                        <h3 className="line-clamp-2 text-base font-semibold leading-snug">{post.title}</h3>
                        <p className="line-clamp-3 text-sm leading-6 text-foreground/70">{post.excerpt || "요약이 아직 등록되지 않았습니다."}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3">
                        <MetaBadge>{post.primary_tag?.label ?? "미분류"}</MetaBadge>
                        <MetaBadge className="transition group-hover:border-foreground/30">자세히 보기</MetaBadge>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
