/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import type { PublicPostListItem } from "@/services/public-posts";
import { formatPublishedDate, resolveApiAssetUrl } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
    post: PublicPostListItem;
};

export function HomePostCard({ post }: Props) {
    const primaryTag = post.primary_tag?.label ?? "미분류";

    return (
        <Link href={`/posts/${post.slug}`} className="group block h-full outline-none transition duration-200 hover:-translate-y-1 focus-visible:-translate-y-1">
            <Card className="flex h-full flex-col overflow-hidden rounded-lg border border-foreground/10 bg-card shadow-sm transition duration-200 group-hover:border-cyan-600/35 group-hover:shadow-lg group-hover:shadow-cyan-950/10 group-focus-visible:border-cyan-600/45">
                <div className="relative aspect-[16/11] overflow-hidden bg-[linear-gradient(135deg,rgba(8,145,178,0.08),rgba(99,102,241,0.1))]">
                    {post.cover_image ? (
                        <img src={resolveApiAssetUrl(post.cover_image.url)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                    ) : (
                        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.18),transparent_55%),linear-gradient(135deg,rgba(20,184,166,0.12),rgba(99,102,241,0.14))] px-6 text-center text-sm font-semibold text-foreground/55">{primaryTag}</div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent px-4 pb-3 pt-10 text-white">
                        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold">
                            <span>{formatPublishedDate(post.published_at)}</span>
                            <span>조회 {post.view_count.toLocaleString("ko-KR")}</span>
                        </div>
                    </div>
                </div>

                <CardContent className="flex flex-1 flex-col p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="inline-flex max-w-full items-center rounded-md bg-cyan-50 px-2.5 py-1 text-[11px] font-bold text-cyan-800 dark:bg-cyan-950/45 dark:text-cyan-100">
                            <span className="truncate">{primaryTag}</span>
                        </span>
                        <span className="shrink-0 text-[11px] font-medium text-foreground/45">{post.author.name}</span>
                    </div>

                    <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-foreground transition group-hover:text-cyan-800 dark:group-hover:text-cyan-100">{post.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-foreground/68">{post.excerpt || "요약이 아직 등록되지 않았습니다."}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
