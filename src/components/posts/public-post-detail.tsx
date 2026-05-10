/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MarkdownViewer } from "@/components/markdown/markdown-viewer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { fetchPublicPostDetailInBrowser, type PublicPostDetailData } from "@/services/public-posts";
import { formatPublishedDate, resolveApiAssetUrl } from "@/lib/utils";

type PublicPostDetailProps = {
    slug: string;
};

type DetailState =
    | {
          status: "loading";
          post: null;
          message: null;
      }
    | {
          status: "success";
          post: PublicPostDetailData;
          message: null;
      }
    | {
          status: "error" | "not-found";
          post: null;
          message: string;
      };

const initialState: DetailState = {
    status: "loading",
    post: null,
    message: null,
};

export function PublicPostDetail({ slug }: PublicPostDetailProps) {
    const [detailState, setDetailState] = useState<DetailState>(initialState);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        let isDisposed = false;

        setDetailState(initialState);

        void (async () => {
            const result = await fetchPublicPostDetailInBrowser(slug, { force: retryCount > 0 });

            if (isDisposed) {
                return;
            }

            if (result.status && result.data) {
                setDetailState({
                    status: "success",
                    post: result.data,
                    message: null,
                });
                return;
            }

            if (result.statusCode === 404) {
                setDetailState({
                    status: "not-found",
                    post: null,
                    message: result.message ?? "게시글을 찾을 수 없습니다.",
                });
                return;
            }

            setDetailState({
                status: "error",
                post: null,
                message: result.message ?? "게시글을 불러오지 못했습니다.",
            });
        })();

        return () => {
            isDisposed = true;
        };
    }, [retryCount, slug]);

    if (detailState.status === "loading") {
        return (
            <div className="space-y-6">
                <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">Post</p>
                    <h1 className="text-3xl font-semibold leading-snug">게시글을 불러오는 중입니다</h1>
                    <p className="text-sm text-foreground/70">브라우저 세션 기준으로 공개 글 데이터를 요청하고 있습니다.</p>
                </div>

                <Card className="border-dashed border-foreground/20 bg-muted/60">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Loader className="h-4 w-4" />
                            본문을 준비하는 중입니다...
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="h-4 rounded-full bg-foreground/8" />
                        ))}
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (detailState.status === "not-found") {
        return (
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 rounded-2xl border border-foreground/10 bg-background p-8 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/60">404</p>
                <h1 className="text-2xl font-semibold">게시글을 찾을 수 없습니다</h1>
                <p className="text-sm text-foreground/70">{detailState.message}</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href="/posts" className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90">
                        글 목록으로 이동
                    </Link>
                </div>
            </div>
        );
    }

    if (detailState.status === "error") {
        return (
            <Card className="border-dashed border-red-500/30 bg-red-500/5">
                <CardHeader>
                    <CardTitle>게시글을 불러오지 못했습니다</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 text-sm text-foreground/75 sm:flex-row sm:items-center sm:justify-between">
                    <p>{detailState.message}</p>
                    <div className="flex items-center gap-2">
                        <Button type="button" variant="outline" onClick={() => setRetryCount((currentCount) => currentCount + 1)}>
                            다시 시도
                        </Button>
                        <Link href="/posts" className="rounded-lg border border-foreground/15 px-4 py-2 text-sm font-medium transition hover:border-foreground/30 hover:bg-foreground/5">
                            목록으로 이동
                        </Link>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (detailState.status !== "success") {
        return null;
    }

    const post = detailState.post;

    return (
        <article className="space-y-8">
            <header className="space-y-5">
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                        <span>{formatPublishedDate(post.published_at)}</span>
                        <span aria-hidden>•</span>
                        <span>{post.author.name}</span>
                        <span aria-hidden>•</span>
                        <span>조회 {post.view_count.toLocaleString("ko-KR")}</span>
                    </div>
                    <h1 className="text-3xl font-semibold leading-snug sm:text-4xl">{post.title}</h1>
                    <p className="max-w-3xl text-base leading-7 text-foreground/72">{post.excerpt || "요약이 아직 등록되지 않았습니다."}</p>
                </div>

                {post.tags.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag.key} className="rounded-full border border-foreground/12 px-3 py-1 text-xs font-semibold text-foreground/75">
                                {tag.label}
                            </span>
                        ))}
                    </div>
                ) : null}

                {post.cover_image ? (
                    <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-card shadow-sm">
                        <img src={resolveApiAssetUrl(post.cover_image.url)} alt={post.title} className="h-auto w-full object-cover" />
                    </div>
                ) : (
                    <div className="flex min-h-52 items-center justify-center rounded-3xl border border-dashed border-foreground/15 bg-[radial-gradient(circle_at_top_left,rgba(17,17,17,0.07),transparent_55%),linear-gradient(135deg,rgba(17,17,17,0.03),rgba(17,17,17,0.08))] px-6 text-center text-sm font-medium text-foreground/55">
                        등록된 커버 이미지가 없습니다.
                    </div>
                )}
            </header>

            <MarkdownViewer content={post.body} />

            <Card className="border-dashed border-foreground/20 bg-muted/60">
                <CardHeader>
                    <CardTitle>글 정보</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 text-sm text-foreground/75 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p>발행일 {formatPublishedDate(post.published_at)}</p>
                        <p>마지막 수정 {formatPublishedDate(post.updated_at)}</p>
                    </div>
                    <Link href="/posts" className="font-semibold text-foreground/85 underline-offset-4 transition hover:text-foreground hover:underline">
                        ← 글 목록으로 돌아가기
                    </Link>
                </CardContent>
            </Card>
        </article>
    );
}
