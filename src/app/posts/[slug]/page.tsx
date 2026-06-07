import type { Metadata } from "next";
import { PublicPostDetail } from "@/components/posts/public-post-detail";
import { fetchMetadataByPath } from "@/services/page-meta";

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;

    return fetchMetadataByPath(`/posts/${slug}`);
}

export default async function PostDetailPage({ params }: PostPageProps) {
    const { slug } = await params;

    return <PublicPostDetail slug={slug} />;
}
