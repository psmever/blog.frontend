import type { Metadata } from "next";
import { PublicPostDetail } from "@/components/posts/public-post-detail";

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;

    return {
        title: slug ? "글 상세" : "블로그",
        description: "공개 블로그 글을 불러오는 중입니다.",
    };
}

export default async function PostDetailPage({ params }: PostPageProps) {
    const { slug } = await params;

    return <PublicPostDetail slug={slug} />;
}
