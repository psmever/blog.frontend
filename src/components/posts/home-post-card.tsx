import Image from "next/image";
import { FeedPost } from "@/data/mock-feed";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
    post: FeedPost;
};

function Stat({ icon, value, label }: { icon: string; value: number; label: string }) {
    return (
        <span className="flex items-center gap-1 text-xs font-medium text-foreground/70">
            <span aria-hidden>{icon}</span>
            <span>{value}</span>
            <span className="sr-only">{label}</span>
        </span>
    );
}

export function HomePostCard({ post }: Props) {
    return (
        <Card className="group h-full overflow-hidden border border-foreground/10 bg-card shadow-sm transition hover:-translate-y-[2px] hover:border-foreground/25">
            <div className="relative aspect-[4/3] overflow-hidden bg-foreground/[0.04]">
                <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw" priority />
                {post.tag && <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">{post.tag}</span>}
            </div>

            <CardContent className="space-y-3 p-4">
                <div className="space-y-1">
                    <h3 className="line-clamp-2 text-base font-semibold leading-snug">{post.title}</h3>
                    <p className="line-clamp-2 text-sm text-foreground/70">{post.excerpt}</p>
                </div>

                <div className="flex items-center gap-3 text-xs text-foreground/60">
                    <span>{new Intl.DateTimeFormat("ko", { dateStyle: "medium" }).format(new Date(post.date))}</span>
                    <span aria-hidden>·</span>
                    <span className="font-semibold text-foreground/80">{post.author}</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Stat icon="💬" value={post.comments} label="댓글 수" />
                        <Stat icon="❤️" value={post.likes} label="좋아요 수" />
                    </div>
                    <span className={cn("rounded-full border border-foreground/10 px-3 py-1 text-xs font-semibold text-foreground/75 transition group-hover:border-foreground/30")}>자세히 보기</span>
                </div>
            </CardContent>
        </Card>
    );
}
