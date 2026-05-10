import type { Metadata } from "next";
import { PublicPostDetail } from "@/components/posts/public-post-detail";

type PostPageProps = {
    params: { slug: string };
};

export function generateMetadata({ params }: PostPageProps): Metadata {
    return {
        title: params.slug ? "글 상세" : "블로그",
        description: "공개 블로그 글을 불러오는 중입니다.",
    };
}

export default function PostDetailPage({ params }: PostPageProps) {
    return <PublicPostDetail slug={params.slug} />;
}
