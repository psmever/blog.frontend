import { PostListSkeleton } from "@/components/posts/post-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";

export default function LoadingPosts() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">Posts</p>
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <Loader />
          불러오는 중입니다...
        </div>
      </header>

      <PostListSkeleton />

      <Card className="border-dashed border-foreground/20 bg-muted/60">
        <CardHeader>
          <CardTitle>데이터 준비 중</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-foreground/70">
          게시글을 가져오는 동안 잠시만 기다려 주세요.
        </CardContent>
      </Card>
    </div>
  );
}
