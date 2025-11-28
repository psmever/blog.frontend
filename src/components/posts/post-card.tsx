import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type PostPreview = {
    title: string;
    slug: string;
    summary: string;
    date: string;
};

function formatDate(date: string) {
    return new Intl.DateTimeFormat("ko", { dateStyle: "medium" }).format(new Date(date));
}

export function PostCard({ post }: { post: PostPreview }) {
    return (
        <Link href={`/posts/${post.slug}`} className="group block transition hover:-translate-y-[2px]">
            <Card className="h-full border border-foreground/10 bg-card transition group-hover:border-foreground/25">
                <CardHeader>
                    <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">{formatDate(post.date)}</p>
                    <CardTitle className="group-hover:underline">{post.title}</CardTitle>
                    <CardDescription>{post.summary}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-sm font-medium text-foreground/80">자세히 보기 →</CardContent>
            </Card>
        </Link>
    );
}
