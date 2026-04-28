"use client";

import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthState } from "@/state";
import ReactMarkdown from "react-markdown";

const TITLE_INPUT_CLASS = "w-full bg-transparent text-4xl font-semibold text-foreground placeholder:text-foreground/30 outline-none sm:text-[2.75rem]";
const INLINE_INPUT_CLASS = "w-full bg-transparent text-sm text-foreground/60 placeholder:text-foreground/40 outline-none";
const TOOLBAR_BUTTON_CLASS = "flex h-8 min-w-[2rem] items-center justify-center rounded-lg border border-foreground/10 bg-background/70 px-2 text-[11px] font-semibold text-foreground/70 transition hover:border-foreground/20 hover:bg-foreground/5 hover:text-foreground";
const TOOLBAR_GROUP_CLASS = "flex items-center gap-1";
const TOOLBAR_DIVIDER_CLASS = "mx-2 h-5 w-px bg-foreground/10";
const TAB_CHARACTER = "\t";

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

type PostCreateFormProps = {
    initialContent?: string;
};

export function PostCreateForm({ initialContent = "" }: PostCreateFormProps) {
    const auth = useAuthState();
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState(initialContent);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
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

    const handleSave = async (mode: "draft" | "publish") => {
        setError(null);
        setMessage(null);

        if (!title.trim() || !content.trim()) {
            setError("제목과 본문은 필수입니다.");
            scheduleErrorClear();
            return;
        }

        setLoading(true);
        try {
            if (mode === "draft") {
                setMessage("임시저장 기능은 준비 중입니다. 작성한 내용은 아직 저장되지 않아요.");
            } else {
                setMessage("출간 기능은 준비 중입니다. 작성한 내용은 아직 저장되지 않아요.");
            }
            scheduleMessageClear();
        } finally {
            setLoading(false);
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

    return (
        <div className="relative min-h-screen bg-background lg:h-[100dvh] lg:overflow-hidden">
            <div className="grid min-h-screen grid-cols-1 gap-0 lg:h-full lg:grid-cols-2">
                <section className="flex min-h-0 flex-col gap-6 px-6 pt-10 lg:h-full lg:overflow-hidden lg:px-12">
                    <div className="space-y-3">
                        <input id="title" name="title" type="text" required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="제목을 입력하세요" className={TITLE_INPUT_CLASS} />
                        <div className="h-px w-10 bg-foreground/20" />
                        <input id="tags" name="tags" type="text" value={tags} onChange={(event) => setTags(event.target.value)} placeholder="태그를 입력하세요" className={INLINE_INPUT_CLASS} />
                    </div>

                    <div className="flex flex-wrap items-center text-xs text-foreground/60">
                        {TOOLBAR_ITEMS.map((group, groupIndex) => (
                            <div key={`group-${groupIndex}`} className={TOOLBAR_GROUP_CLASS}>
                                {group.map((item) => (
                                    <button key={item.title} type="button" className={`${TOOLBAR_BUTTON_CLASS} ${item.className ?? ""}`} title={item.title} aria-label={item.title}>
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
                            onScroll={() => syncScroll("editor")}
                            placeholder="당신의 이야기를 적어보세요..."
                            className="flex-1 min-h-0 w-full resize-none overflow-y-auto bg-transparent text-base leading-relaxed text-foreground placeholder:text-foreground/30 outline-none"
                            ref={editorRef}
                        />

                        {message && <p className="rounded-md bg-foreground/5 px-3 py-2 text-sm text-foreground/80">{message}</p>}
                        {error && <p className="rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-600">{error}</p>}
                    </div>

                    <div className="mt-auto border-t border-foreground/10 py-4">
                        <div className="flex items-center justify-between">
                            <button type="button" className="text-sm text-foreground/70 transition hover:text-foreground" onClick={() => router.push("/")}>
                                ← 나가기
                            </button>
                            <div className="flex items-center gap-3">
                                <Button type="button" size="md" className="w-24 cursor-pointer hover:bg-foreground/70" onClick={() => void handleSave("draft")} disabled={loading}>
                                    임시 저장
                                </Button>
                                <Button type="button" size="md" className="w-24 cursor-pointer hover:bg-foreground/70" onClick={() => void handleSave("publish")} disabled={loading}>
                                    {loading ? "처리 중..." : "게시하기"}
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
