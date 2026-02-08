import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { PostCreateForm } from "./post-create-form";

export const metadata: Metadata = {
    title: "글쓰기",
    description: "새로운 포스트를 작성합니다.",
};

async function loadMockMarkdown() {
    try {
        const filePath = join(process.cwd(), "src/data/mock-markdown.md");
        return await readFile(filePath, "utf-8");
    } catch {
        return "";
    }
}

export default async function PostCreatePage() {
    const initialContent = await loadMockMarkdown();
    return <PostCreateForm initialContent={initialContent} />;
}
