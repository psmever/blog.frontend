import { PostCard, type PostPreview } from "./post-card";
import { Skeleton } from "@/components/ui/skeleton";

type PostListProps = {
  posts: PostPreview[];
  emptyText?: string;
};

export function PostList({ posts, emptyText }: PostListProps) {
  if (!posts.length) {
    return (
      <div className="rounded-xl border border-dashed border-foreground/20 bg-background/80 p-6 text-sm text-foreground/70">
        {emptyText ?? "아직 게시글이 없습니다. 새로운 글을 준비 중이에요."}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export function PostListSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-2xl border border-foreground/10 bg-card p-5 shadow-sm">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mt-3 h-5 w-3/4" />
          <Skeleton className="mt-2 h-4 w-full" />
          <Skeleton className="mt-1 h-4 w-5/6" />
          <Skeleton className="mt-4 h-4 w-24" />
        </div>
      ))}
    </div>
  );
}
