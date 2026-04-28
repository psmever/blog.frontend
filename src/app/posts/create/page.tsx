import type { Metadata } from "next";
import { PostCreateForm } from "./post-create-form";

export const metadata: Metadata = {
    title: "글쓰기",
    description: "새로운 포스트를 작성합니다.",
};

export default function PostCreatePage() {
    return <PostCreateForm />;
}
