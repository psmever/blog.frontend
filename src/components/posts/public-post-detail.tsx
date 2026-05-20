"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MarkdownViewer } from "@/components/markdown/markdown-viewer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { getAccessToken } from "@/lib/token-storage";
import { findPublishedPostBySlug } from "@/services/posts";
import { fetchPublicPostDetailInBrowser, type PublicPostDetailData } from "@/services/public-posts";
import { useAuthState } from "@/state";
import { formatPublishedDate } from "@/lib/utils";

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

type EditLookupState = {
    slug: string | null;
    postUuid: string | null;
    message: string | null;
};

const initialState: DetailState = {
    status: "loading",
    post: null,
    message: null,
};

const initialEditLookupState: EditLookupState = {
    slug: null,
    postUuid: null,
    message: null,
};

const PRIMARY_LINK_CLASS = "inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-cyan-950/10 transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/30";
const SECONDARY_LINK_CLASS = "inline-flex items-center justify-center rounded-lg border border-cyan-600/25 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900 transition hover:border-cyan-600/40 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:bg-cyan-950/35 dark:text-cyan-100 dark:hover:bg-cyan-900/45";

const UUID_PATTERN = /\/posts\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})(?:\/|$)/i;

function extractPostUuidFromUrl(url: string | null | undefined) {
    if (!url) {
        return null;
    }

    return UUID_PATTERN.exec(url)?.[1] ?? null;
}

function resolveEditablePostUuid(post: PublicPostDetailData) {
    return post.uuid ?? extractPostUuidFromUrl(post.cover_image?.url) ?? extractPostUuidFromUrl(post.body);
}

export function PublicPostDetail({ slug }: PublicPostDetailProps) {
    const auth = useAuthState();
    const canEditPost = auth.isLoggedIn || Boolean(getAccessToken());
    const [detailState, setDetailState] = useState<DetailState>(initialState);
    const [retryCount, setRetryCount] = useState(0);
    const [editLookupState, setEditLookupState] = useState<EditLookupState>(initialEditLookupState);
    const resolvedEditPostUuid = detailState.status === "success" ? resolveEditablePostUuid(detailState.post) : null;

    useEffect(() => {
        let isDisposed = false;

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

    useEffect(() => {
        if (!canEditPost || detailState.status !== "success" || resolvedEditPostUuid) {
            return;
        }

        let isDisposed = false;
        const postSlug = detailState.post.slug;

        void (async () => {
            const result = await findPublishedPostBySlug(postSlug);

            if (isDisposed) {
                return;
            }

            const postUuid = result.status ? (result.data?.uuid ?? null) : null;
            setEditLookupState({
                slug: postSlug,
                postUuid,
                message: postUuid ? null : result.message || "수정할 게시글 정보를 찾지 못했습니다.",
            });
        })();

        return () => {
            isDisposed = true;
        };
    }, [canEditPost, detailState, resolvedEditPostUuid]);

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
                    <Link href="/posts" className={PRIMARY_LINK_CLASS}>
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
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                setDetailState(initialState);
                                setEditLookupState(initialEditLookupState);
                                setRetryCount((currentCount) => currentCount + 1);
                            }}
                        >
                            다시 시도
                        </Button>
                        <Link href="/posts" className={SECONDARY_LINK_CLASS}>
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
    const editPostUuid = resolvedEditPostUuid ?? (editLookupState.slug === post.slug ? editLookupState.postUuid : null);
    const editTargetMessage = editLookupState.slug === post.slug ? editLookupState.message : null;

    return (
        <>
            <article className="mx-auto w-full max-w-5xl space-y-8">
                <header className="mx-auto w-full max-w-4xl space-y-5">
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
                </header>

                <section className="flex min-h-[32rem] flex-col overflow-hidden rounded-xl border border-foreground/10 bg-card shadow-sm lg:min-h-[calc(100dvh-18rem)]">
                    <div className="flex-1">
                        <MarkdownViewer content={post.body} surface={false} className="mx-auto h-full w-full max-w-[72ch] p-6 sm:p-8 lg:px-10" />
                    </div>

                    <div className="mt-auto border-t border-dashed border-foreground/20 bg-muted/60">
                        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-6 text-sm text-foreground/75 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                            <div className="space-y-1">
                                <p>발행일 {formatPublishedDate(post.published_at)}</p>
                                <p>마지막 수정 {formatPublishedDate(post.updated_at)}</p>
                            </div>
                            <Link href="/posts" className={SECONDARY_LINK_CLASS}>
                                ← 글 목록으로 돌아가기
                            </Link>
                        </div>
                    </div>
                </section>
            </article>

            {canEditPost ? (
                <div className="pointer-events-none fixed bottom-6 right-6 z-40">
                    {editPostUuid ? (
                        <Link href={`/posts/edit/${editPostUuid}`} className="pointer-events-auto inline-flex h-12 items-center justify-center rounded-full bg-cyan-600 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-700">
                            수정
                        </Link>
                    ) : editTargetMessage ? (
                        <div className="inline-flex h-12 items-center justify-center rounded-full border border-amber-500/30 bg-background/92 px-5 text-sm font-semibold text-foreground/65 shadow-lg shadow-black/10 backdrop-blur">{editTargetMessage}</div>
                    ) : (
                        <div className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/12 bg-background/92 px-5 text-sm font-semibold text-foreground/65 shadow-lg shadow-black/10 backdrop-blur">수정 경로 확인 중...</div>
                    )}
                </div>
            ) : null}
        </>
    );
}
