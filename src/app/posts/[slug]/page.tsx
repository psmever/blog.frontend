import type { Metadata } from "next";
import { PublicPostDetail } from "@/components/posts/public-post-detail";
import { siteConfig } from "@/config/site";
import { resolveApiAssetUrl } from "@/lib/utils";
import { fetchPublicPostDetail } from "@/services/public-posts";

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

function defaultMetadata(): Metadata {
    return {
        title: {
            absolute: siteConfig.name,
        },
        description: siteConfig.description,
    };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    if (!slug) {
        return defaultMetadata();
    }

    const result = await fetchPublicPostDetail(slug);
    if (!result.status || !result.data) {
        return defaultMetadata();
    }

    const post = result.data;
    const canonical = `/posts/${encodeURIComponent(post.slug)}`;
    const description = post.excerpt || siteConfig.description;
    const image = post.cover_image
        ? {
              url: resolveApiAssetUrl(post.cover_image.url),
              width: post.cover_image.width,
              height: post.cover_image.height,
              alt: post.title,
          }
        : null;

    return {
        title: post.title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title: post.title,
            description,
            url: canonical,
            siteName: siteConfig.name,
            locale: "ko_KR",
            type: "article",
            publishedTime: post.published_at ?? undefined,
            images: image ? [image] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description,
            images: image ? [image.url] : undefined,
        },
    };
}

export default async function PostDetailPage({ params }: PostPageProps) {
    const { slug } = await params;

    return <PublicPostDetail slug={slug} />;
}
