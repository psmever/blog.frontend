import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { apiClient, apiRequest, type ApiResult } from "@/lib/apiClient";
import { resolveApiAssetUrl } from "@/lib/utils";

export type PageMetaRobots = {
    index: boolean;
    follow: boolean;
};

export type PageMetaData = {
    url: string;
    resolved_url: string;
    canonical_url: string;
    title: string;
    description: string;
    image_url: string | null;
    type: "article" | "website" | string;
    site_name?: string | null;
    locale?: string | null;
    published_time?: string | null;
    modified_time?: string | null;
    robots: PageMetaRobots;
};

export type FetchPageMetaResult = ApiResult<PageMetaData>;

export async function fetchPageMeta(url: string): Promise<FetchPageMetaResult> {
    return apiRequest<PageMetaData>(
        apiClient.get("/v1/meta", {
            params: {
                url,
            },
        }),
    );
}

export function defaultPageMetadata(): Metadata {
    return {
        title: {
            absolute: siteConfig.name,
        },
        description: siteConfig.description,
    };
}

export function buildPageMetadata(meta: PageMetaData): Metadata {
    const imageUrl = meta.image_url ? resolveApiAssetUrl(meta.image_url) : undefined;
    const title = meta.title || siteConfig.name;
    const description = meta.description || siteConfig.description;
    const siteName = meta.site_name || siteConfig.name;
    const locale = meta.locale || "ko_KR";
    const metadata: Metadata = {
        title,
        description,
        alternates: {
            canonical: meta.canonical_url,
        },
        robots: {
            index: meta.robots.index,
            follow: meta.robots.follow,
        },
        openGraph: {
            title,
            description,
            url: meta.url,
            siteName,
            locale,
            type: meta.type === "article" ? "article" : "website",
            images: imageUrl ? [imageUrl] : undefined,
            publishedTime: meta.type === "article" ? (meta.published_time ?? undefined) : undefined,
            modifiedTime: meta.type === "article" ? (meta.modified_time ?? undefined) : undefined,
        },
        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            title,
            description,
            images: imageUrl ? [imageUrl] : undefined,
        },
    };

    return metadata;
}

export async function fetchMetadataByPath(path: string): Promise<Metadata> {
    const result = await fetchPageMeta(path);

    if (!result.status || !result.data) {
        return defaultPageMetadata();
    }

    return buildPageMetadata(result.data);
}
