import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { fetchMetadataByPath } from "@/services/page-meta";
import { resolveShortUrl } from "@/services/short-urls";

type ShortUrlPageProps = {
    params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: ShortUrlPageProps): Promise<Metadata> {
    const { code } = await params;

    return fetchMetadataByPath(`/s/${code}`);
}

export default async function ShortUrlPage({ params }: ShortUrlPageProps) {
    const { code } = await params;

    const result = await resolveShortUrl(code);

    if (!result.status || !result.data?.original_url) {
        notFound();
    }

    redirect(result.data.original_url);
}
