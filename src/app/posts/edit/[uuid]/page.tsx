import type { Metadata } from "next";
import { PostCreateForm } from "../../create/post-create-form";

export const metadata: Metadata = {
    title: "글 수정",
    description: "기존 포스트를 수정합니다.",
};

type PostEditPageProps = {
    params: Promise<{
        uuid: string;
    }>;
};

export default async function PostEditPage({ params }: PostEditPageProps) {
    const { uuid } = await params;

    return <PostCreateForm mode="update" postUuid={uuid} />;
}
