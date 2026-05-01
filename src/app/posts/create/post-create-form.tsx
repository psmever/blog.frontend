"use client";

import { startTransition, type ChangeEvent, type DragEvent, type KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { fetchDraftPosts, fetchPost, issuePostUuid, publishPost, savePost, uploadPostImage, type PostListItem, type PostTag } from "@/services/posts";
import { useAuthState, usePostEditorState, useSetPostEditorState } from "@/state";
import ReactMarkdown from "react-markdown";

const TITLE_INPUT_CLASS = "w-full bg-transparent text-4xl font-semibold text-foreground placeholder:text-foreground/30 outline-none sm:text-[2.75rem]";
const INLINE_INPUT_CLASS = "w-full bg-transparent text-sm text-foreground/60 placeholder:text-foreground/40 outline-none";
const TOOLBAR_BUTTON_CLASS = "flex h-8 min-w-[2rem] items-center justify-center rounded-lg border border-foreground/10 bg-background/70 px-2 text-[11px] font-semibold text-foreground/70 transition hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground";
const TOOLBAR_GROUP_CLASS = "flex items-center gap-1";
const TOOLBAR_DIVIDER_CLASS = "mx-2 h-5 w-px bg-foreground/10";
const TAB_CHARACTER = "\t";
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"]);

type ToolbarItem = {
    label: string;
    title: string;
    className?: string;
};

const TOOLBAR_ITEMS: ToolbarItem[][] = [
    [
        { label: "H1", title: "Heading 1" },
        { label: "H2", title: "Heading 2" },
    ],
    [
        { label: "B", title: "Bold", className: "font-bold" },
        { label: "I", title: "Italic", className: "italic" },
        { label: "U", title: "Underline", className: "underline" },
        { label: "S", title: "Strikethrough", className: "line-through" },
    ],
    [
        { label: '"', title: "Quote", className: "text-xs font-mono" },
        { label: "</>", title: "Code", className: "text-[10px] font-mono" },
        { label: "Link", title: "Link", className: "text-[10px]" },
        { label: "Img", title: "Image", className: "text-[10px]" },
    ],
];

function parseTags(value: string) {
    return Array.from(
        new Set(
            value
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean),
        ),
    );
}

function formatTags(tags: PostTag[]) {
    return tags.map((tag) => tag.label).join(", ");
}

function getImageFiles(files: FileList | File[]) {
    return Array.from(files).filter((file) => file.type.startsWith("image/"));
}

function hasImageDragItems(items: DataTransferItemList) {
    return Array.from(items).some((item) => item.kind === "file" && item.type.startsWith("image/"));
}

function validateImageFile(file: File) {
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
        return "jpeg, jpg, png, webp, gif 이미지만 업로드할 수 있습니다.";
    }

    if (file.size > MAX_IMAGE_SIZE) {
        return "이미지는 5MB 이하만 업로드할 수 있습니다.";
    }

    return null;
}

function formatImageMarkdown(fileName: string, url: string) {
    return `![${fileName}](${url})`;
}

type PostCreateFormProps = {
    initialContent?: string;
    mode?: "create" | "update";
    postUuid?: string;
};

export function PostCreateForm({ initialContent = "", mode = "create", postUuid }: PostCreateFormProps) {
    const auth = useAuthState();
    const postEditorState = usePostEditorState();
    const setPostEditorState = useSetPostEditorState();
    const router = useRouter();
    const isUpdateMode = mode === "update" && Boolean(postUuid);
    const cachedEditorState = isUpdateMode && postEditorState?.uuid === postUuid ? postEditorState : null;
    const [title, setTitle] = useState(cachedEditorState?.title ?? "");
    const [tags, setTags] = useState(cachedEditorState?.tags ?? "");
    const [content, setContent] = useState(cachedEditorState?.content ?? initialContent);
    const [issuedPostUuid, setIssuedPostUuid] = useState<string | null>(isUpdateMode ? (postUuid ?? null) : null);
    const activePostUuid = isUpdateMode ? (postUuid ?? null) : issuedPostUuid;
    const [isPublishing, setIsPublishing] = useState(false);
    const [isIssuingPostUuid, setIsIssuingPostUuid] = useState(!isUpdateMode);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [isLoadingPost, setIsLoadingPost] = useState(isUpdateMode);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [draftPosts, setDraftPosts] = useState<PostListItem[]>([]);
    const [selectedPostUuid, setSelectedPostUuid] = useState("");
    const [isDraftPostModalOpen, setIsDraftPostModalOpen] = useState(false);
    const [isLoadingDraftPosts, setIsLoadingDraftPosts] = useState(false);
    const [draftPostsError, setDraftPostsError] = useState<string | null>(null);
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const previewRef = useRef<HTMLDivElement | null>(null);
    const isSyncingRef = useRef<"editor" | "preview" | null>(null);
    const messageTimerRef = useRef<number | null>(null);

    const syncScroll = useCallback((source: "editor" | "preview") => {
        const editor = editorRef.current;
        const preview = previewRef.current;
        if (!editor || !preview) return;

        if (isSyncingRef.current && isSyncingRef.current !== source) {
            return;
        }

        const sourceEl = source === "editor" ? editor : preview;
        const targetEl = source === "editor" ? preview : editor;

        const sourceMax = sourceEl.scrollHeight - sourceEl.clientHeight;
        const targetMax = targetEl.scrollHeight - targetEl.clientHeight;

        if (sourceMax <= 0 || targetMax <= 0) {
            return;
        }

        const ratio = sourceEl.scrollTop / sourceMax;
        isSyncingRef.current = source;
        targetEl.scrollTop = ratio * targetMax;

        requestAnimationFrame(() => {
            if (isSyncingRef.current === source) {
                isSyncingRef.current = null;
            }
        });
    }, []);

    const clearMessageTimer = useCallback(() => {
        if (messageTimerRef.current !== null) {
            window.clearTimeout(messageTimerRef.current);
            messageTimerRef.current = null;
        }
    }, []);

    const scheduleMessageClear = useCallback(() => {
        clearMessageTimer();
        messageTimerRef.current = window.setTimeout(() => {
            setMessage(null);
            messageTimerRef.current = null;
        }, 2000);
    }, [clearMessageTimer]);

    const scheduleErrorClear = useCallback(() => {
        clearMessageTimer();
        messageTimerRef.current = window.setTimeout(() => {
            setError(null);
            messageTimerRef.current = null;
        }, 2000);
    }, [clearMessageTimer]);

    const restoreEditorSelection = useCallback((selectionStart: number, selectionEnd: number) => {
        requestAnimationFrame(() => {
            const editor = editorRef.current;
            if (!editor) return;

            editor.selectionStart = selectionStart;
            editor.selectionEnd = selectionEnd;
        });
    }, []);

    const handleContentKeyDown = useCallback(
        (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if (event.key !== "Tab") return;

            event.preventDefault();

            const { selectionStart, selectionEnd, value } = event.currentTarget;
            const hasMultilineSelection = selectionStart !== selectionEnd && value.slice(selectionStart, selectionEnd).includes("\n");

            if (!hasMultilineSelection && !event.shiftKey) {
                const nextContent = `${value.slice(0, selectionStart)}${TAB_CHARACTER}${value.slice(selectionEnd)}`;
                const nextSelection = selectionStart + TAB_CHARACTER.length;

                setContent(nextContent);
                restoreEditorSelection(nextSelection, nextSelection);
                return;
            }

            const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
            const currentLineEnd = value.indexOf("\n", selectionEnd);
            const selectionEndsAtLineStart = selectionEnd > selectionStart && value[selectionEnd - 1] === "\n";
            const lineEnd = selectionEndsAtLineStart ? selectionEnd - 1 : currentLineEnd === -1 ? value.length : currentLineEnd;
            const selectedLines = value.slice(lineStart, lineEnd);

            if (!event.shiftKey) {
                const lineCount = selectedLines.split("\n").length;
                const nextContent = `${value.slice(0, lineStart)}${selectedLines.replace(/^/gm, TAB_CHARACTER)}${value.slice(lineEnd)}`;

                setContent(nextContent);
                restoreEditorSelection(selectionStart + TAB_CHARACTER.length, selectionEnd + lineCount * TAB_CHARACTER.length);
                return;
            }

            let nextSelectionStart = selectionStart;
            let nextSelectionEnd = selectionEnd;
            let lineOffset = 0;
            const outdentedLines = selectedLines
                .split("\n")
                .map((line) => {
                    const absoluteLineStart = lineStart + lineOffset;
                    const leadingSpaces = line.match(/^ {1,4}/)?.[0].length ?? 0;
                    const removeCount = line.startsWith(TAB_CHARACTER) ? TAB_CHARACTER.length : leadingSpaces;

                    if (removeCount > 0) {
                        if (selectionStart > absoluteLineStart) {
                            nextSelectionStart -= Math.min(removeCount, selectionStart - absoluteLineStart);
                        }

                        if (selectionEnd > absoluteLineStart) {
                            nextSelectionEnd -= Math.min(removeCount, selectionEnd - absoluteLineStart);
                        }
                    }

                    lineOffset += line.length + 1;
                    return line.slice(removeCount);
                })
                .join("\n");
            const nextContent = `${value.slice(0, lineStart)}${outdentedLines}${value.slice(lineEnd)}`;

            setContent(nextContent);
            restoreEditorSelection(nextSelectionStart, nextSelectionEnd);
        },
        [restoreEditorSelection],
    );

    useEffect(() => {
        return () => {
            clearMessageTimer();
        };
    }, [clearMessageTimer]);

    useEffect(() => {
        if (isUpdateMode) {
            setIsIssuingPostUuid(false);
            return;
        }

        if (!auth.isLoggedIn) {
            setIsIssuingPostUuid(false);
            return;
        }

        if (issuedPostUuid) {
            setIsIssuingPostUuid(false);
            return;
        }

        let isCancelled = false;

        async function loadPostUuid() {
            setIsIssuingPostUuid(true);
            setError(null);

            const result = await issuePostUuid();
            if (isCancelled) {
                return;
            }

            if (!result.status || !result.data?.uuid) {
                setError(result.message);
                setIsIssuingPostUuid(false);
                return;
            }

            setIssuedPostUuid(result.data.uuid);
            setIsIssuingPostUuid(false);
        }

        void loadPostUuid();

        return () => {
            isCancelled = true;
        };
    }, [auth.isLoggedIn, isUpdateMode, issuedPostUuid]);

    useEffect(() => {
        if (!isUpdateMode || !postUuid) {
            setIsLoadingPost(false);
            return;
        }

        const uuid = postUuid;
        let isCancelled = false;

        async function loadPost() {
            setIsLoadingPost(true);
            setError(null);

            const result = await fetchPost(uuid);
            if (isCancelled) {
                return;
            }

            if (!result.status || !result.data) {
                setError(result.message);
                setIsLoadingPost(false);
                return;
            }

            const nextTags = formatTags(result.data.tags);

            setTitle(result.data.title);
            setTags(nextTags);
            setContent(result.data.body);
            setPostEditorState({
                uuid: result.data.uuid,
                title: result.data.title,
                tags: nextTags,
                content: result.data.body,
            });
            setIsLoadingPost(false);
        }

        void loadPost();

        return () => {
            isCancelled = true;
        };
    }, [isUpdateMode, postUuid, setPostEditorState]);

    useEffect(() => {
        if (isUpdateMode || !auth.isLoggedIn) {
            return;
        }

        let isCancelled = false;

        async function loadDraftPosts() {
            setIsLoadingDraftPosts(true);
            setDraftPostsError(null);

            const result = await fetchDraftPosts(20);
            if (isCancelled) {
                return;
            }

            if (!result.status) {
                setDraftPostsError(result.message);
                setIsLoadingDraftPosts(false);
                return;
            }

            const posts = result.data ?? [];
            setDraftPosts(posts);
            setSelectedPostUuid(posts[0]?.uuid ?? "");
            setIsDraftPostModalOpen(posts.length > 0);
            setIsLoadingDraftPosts(false);
        }

        void loadDraftPosts();

        return () => {
            isCancelled = true;
        };
    }, [auth.isLoggedIn, isUpdateMode]);

    const handleMoveToSelectedPost = () => {
        if (!selectedPostUuid) {
            return;
        }

        router.push(`/posts/edit/${selectedPostUuid}`);
    };

    const insertContentAtSelection = useCallback(
        (markdown: string, selectionStart: number, selectionEnd: number) => {
            setContent((currentContent) => {
                const safeSelectionStart = Math.min(selectionStart, currentContent.length);
                const safeSelectionEnd = Math.min(Math.max(selectionEnd, safeSelectionStart), currentContent.length);
                const prefix = currentContent.slice(0, safeSelectionStart);
                const suffix = currentContent.slice(safeSelectionEnd);
                const before = prefix && !prefix.endsWith("\n") ? "\n" : "";
                const after = suffix && !suffix.startsWith("\n") ? "\n" : "";
                const nextContent = `${prefix}${before}${markdown}${after}${suffix}`;
                const nextSelection = prefix.length + before.length + markdown.length;

                restoreEditorSelection(nextSelection, nextSelection);

                return nextContent;
            });
        },
        [restoreEditorSelection],
    );

    const handleImageFiles = useCallback(
        async (files: File[], selectionStart: number, selectionEnd: number) => {
            if (isUploadingImage) {
                return;
            }

            if (!activePostUuid) {
                setError("이미지 업로드를 위한 글 UUID를 발급받는 중입니다.");
                scheduleErrorClear();
                return;
            }

            const imageFiles = getImageFiles(files);
            if (imageFiles.length === 0) {
                setError("업로드할 이미지 파일을 선택해주세요.");
                scheduleErrorClear();
                return;
            }

            const invalidMessage = imageFiles.map(validateImageFile).find(Boolean);
            if (invalidMessage) {
                setError(invalidMessage);
                scheduleErrorClear();
                return;
            }

            setError(null);
            setMessage("이미지를 업로드하는 중입니다.");
            setIsUploadingImage(true);

            try {
                const markdownItems: string[] = [];

                for (const file of imageFiles) {
                    const result = await uploadPostImage(activePostUuid, file, "body");
                    if (!result.status || !result.data?.url) {
                        setError(result.message);
                        scheduleErrorClear();
                        return;
                    }

                    markdownItems.push(formatImageMarkdown(file.name, result.data.url));
                }

                insertContentAtSelection(markdownItems.join("\n\n"), selectionStart, selectionEnd);
                setMessage("이미지를 업로드했습니다.");
                scheduleMessageClear();
            } finally {
                setIsUploadingImage(false);
            }
        },
        [activePostUuid, insertContentAtSelection, isUploadingImage, scheduleErrorClear, scheduleMessageClear],
    );

    const handleContentDrop = useCallback(
        (event: DragEvent<HTMLTextAreaElement>) => {
            const files = getImageFiles(event.dataTransfer.files);
            if (files.length === 0) {
                return;
            }

            event.preventDefault();
            void handleImageFiles(files, event.currentTarget.selectionStart, event.currentTarget.selectionEnd);
        },
        [handleImageFiles],
    );

    const handleContentDragOver = useCallback((event: DragEvent<HTMLTextAreaElement>) => {
        if (hasImageDragItems(event.dataTransfer.items)) {
            event.preventDefault();
        }
    }, []);

    const handleImageInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const files = event.currentTarget.files;
            const editor = editorRef.current;
            if (!files || !editor) {
                return;
            }

            void handleImageFiles(Array.from(files), editor.selectionStart, editor.selectionEnd);
            event.currentTarget.value = "";
        },
        [handleImageFiles],
    );

    const handleImageButtonClick = useCallback(() => {
        imageInputRef.current?.click();
    }, []);

    const handleSave = async (action: "draft" | "publish") => {
        setError(null);
        setMessage(null);

        if (isLoadingPost || isIssuingPostUuid || isUploadingImage) {
            return;
        }

        if (!activePostUuid) {
            setError("글 UUID를 발급받지 못했습니다. 잠시 후 다시 시도해주세요.");
            scheduleErrorClear();
            return;
        }

        if (!title.trim() || !content.trim()) {
            setError("제목과 본문은 필수입니다.");
            scheduleErrorClear();
            return;
        }

        setIsPublishing(true);
        try {
            const result = await savePost(activePostUuid, {
                title: title.trim(),
                tags: parseTags(tags),
                body: content,
            });

            if (!result.status) {
                setError(result.message);
                scheduleErrorClear();
                return;
            }

            if (action === "publish") {
                const publishResult = await publishPost(activePostUuid);

                if (!publishResult.status) {
                    setError(`임시 저장은 완료됐지만 게시에 실패했습니다. ${publishResult.message}`);
                    scheduleErrorClear();
                    return;
                }
            }

            setPostEditorState({
                uuid: result.data?.uuid ?? activePostUuid,
                title: title.trim(),
                tags,
                content,
            });

            setMessage(action === "draft" ? "임시 저장했습니다. 수정 모드로 전환합니다." : "게시했습니다. 수정 모드로 전환합니다.");
            scheduleMessageClear();
            startTransition(() => {
                router.replace(`/posts/edit/${result.data?.uuid ?? activePostUuid}`);
            });
        } finally {
            setIsPublishing(false);
        }
    };

    if (!auth.isLoggedIn) {
        return (
            <div className="flex min-h-screen items-center justify-center px-6">
                <div className="w-full max-w-md rounded-2xl border border-foreground/10 bg-card p-6 shadow-sm">
                    <h2 className="text-lg font-semibold">로그인이 필요합니다</h2>
                    <p className="mt-2 text-sm text-foreground/70">포스트를 작성하려면 먼저 로그인해야 합니다.</p>
                    <Button type="button" className="mt-4" onClick={() => router.push("/login")}>
                        로그인하러 가기
                    </Button>
                </div>
            </div>
        );
    }

    const isActionDisabled = isPublishing || isLoadingPost || isIssuingPostUuid || isUploadingImage || !activePostUuid;

    return (
        <div className="relative min-h-screen bg-background lg:h-[100dvh] lg:overflow-hidden">
            <Modal
                open={isDraftPostModalOpen}
                title="미게시 글 수정"
                description="최근 미게시 글 목록에서 수정할 글을 선택하세요."
                onClose={() => setIsDraftPostModalOpen(false)}
                footer={
                    <>
                        <Button type="button" variant="ghost" size="sm" onClick={() => setIsDraftPostModalOpen(false)}>
                            새 글 작성
                        </Button>
                        <Button type="button" size="sm" onClick={handleMoveToSelectedPost} disabled={!selectedPostUuid}>
                            수정 페이지로 이동
                        </Button>
                    </>
                }
            >
                <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground/80" htmlFor="draft-post-select">
                        미게시 글
                    </label>
                    <select id="draft-post-select" value={selectedPostUuid} onChange={(event) => setSelectedPostUuid(event.target.value)} className="h-11 w-full rounded-lg border border-foreground/20 bg-background px-3 text-sm text-foreground outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20">
                        {draftPosts.map((post) => (
                            <option key={post.uuid} value={post.uuid}>
                                {post.title} ({post.slug})
                            </option>
                        ))}
                    </select>
                    <p className="text-xs text-foreground/60">선택한 글의 수정 페이지로 이동합니다.</p>
                </div>
            </Modal>

            {isLoadingDraftPosts && <p className="absolute right-6 top-6 z-10 rounded-md bg-card px-3 py-2 text-xs text-foreground/60 shadow-sm">미게시 글 목록을 확인하는 중입니다.</p>}
            {draftPostsError && <p className="absolute right-6 top-6 z-10 rounded-md bg-red-500/10 px-3 py-2 text-xs text-red-600 shadow-sm">{draftPostsError}</p>}

            <div className="grid min-h-screen grid-cols-1 gap-0 lg:h-full lg:grid-cols-2">
                <section className="flex min-h-0 flex-col gap-6 px-6 pt-10 lg:h-full lg:overflow-hidden lg:px-12">
                    <div className="space-y-3">
                        <input id="title" name="title" type="text" required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="제목을 입력하세요" className={TITLE_INPUT_CLASS} />
                        <div className="h-px w-10 bg-foreground/20" />
                        <input id="tags" name="tags" type="text" value={tags} onChange={(event) => setTags(event.target.value)} placeholder="태그를 쉼표로 구분해 입력하세요" className={INLINE_INPUT_CLASS} />
                        {isUpdateMode && postUuid && <p className="text-xs text-foreground/50">수정 중인 글 UUID: {postUuid}</p>}
                        {isUpdateMode && isLoadingPost && <p className="text-xs text-foreground/50">저장된 글을 불러오는 중입니다.</p>}
                        {!isUpdateMode && isIssuingPostUuid && <p className="text-xs text-foreground/50">이미지 업로드 준비 중입니다.</p>}
                    </div>

                    <div className="flex flex-wrap items-center text-xs text-foreground/60">
                        {TOOLBAR_ITEMS.map((group, groupIndex) => (
                            <div key={`group-${groupIndex}`} className={TOOLBAR_GROUP_CLASS}>
                                {group.map((item) => (
                                    <button key={item.title} type="button" className={`${TOOLBAR_BUTTON_CLASS} ${item.className ?? ""}`} title={item.title} aria-label={item.title} onClick={item.title === "Image" ? handleImageButtonClick : undefined} disabled={item.title === "Image" && (isUploadingImage || isIssuingPostUuid || !activePostUuid)}>
                                        {item.label}
                                    </button>
                                ))}
                                {groupIndex < TOOLBAR_ITEMS.length - 1 && <span className={TOOLBAR_DIVIDER_CLASS} aria-hidden />}
                            </div>
                        ))}
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col gap-4">
                        <textarea
                            id="content"
                            name="content"
                            required
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            onKeyDown={handleContentKeyDown}
                            onDragOver={handleContentDragOver}
                            onDrop={handleContentDrop}
                            onScroll={() => syncScroll("editor")}
                            placeholder="당신의 이야기를 적어보세요..."
                            className="flex-1 min-h-0 w-full resize-none overflow-y-auto bg-transparent text-base leading-relaxed text-foreground placeholder:text-foreground/30 outline-none"
                            disabled={isLoadingPost}
                            ref={editorRef}
                        />
                        <input ref={imageInputRef} type="file" accept="image/jpeg,image/jpg,image/png,image/webp,image/gif" multiple className="hidden" onChange={handleImageInputChange} />

                        {message && <p className="rounded-md bg-foreground/5 px-3 py-2 text-sm text-foreground/80">{message}</p>}
                        {error && <p className="rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-600">{error}</p>}
                    </div>

                    <div className="mt-auto border-t border-foreground/10 py-4">
                        <div className="flex items-center justify-between">
                            <button type="button" className="text-sm text-foreground/70 transition hover:text-foreground" onClick={() => router.push("/")}>
                                ← 나가기
                            </button>
                            <div className="flex items-center gap-3">
                                <Button type="button" size="md" className="w-24 cursor-pointer hover:bg-foreground/70" onClick={() => void handleSave("draft")} disabled={isActionDisabled}>
                                    임시 저장
                                </Button>
                                <Button type="button" size="md" className="w-24 cursor-pointer hover:bg-foreground/70" onClick={() => void handleSave("publish")} disabled={isActionDisabled}>
                                    {isLoadingPost ? "불러오는 중..." : isIssuingPostUuid ? "준비 중..." : isUploadingImage ? "업로드 중..." : isPublishing ? "처리 중..." : "게시하기"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="min-h-0 border-t border-foreground/10 bg-foreground/5 pb-10 pt-10 lg:h-full lg:overflow-y-auto lg:border-l lg:border-t-0" onScroll={() => syncScroll("preview")} ref={previewRef}>
                    <div className="space-y-3">
                        <div className="px-6 lg:px-12">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">Preview</p>
                        </div>
                        <div className="border-y border-foreground/10 bg-card px-6 py-6 lg:px-12">
                            {content.trim() ? (
                                <div className="markdown leading-relaxed">
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </div>
                            ) : (
                                <p className="text-sm text-foreground/60">미리보기할 내용이 없습니다.</p>
                            )}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
