import type { Metadata } from "next";
import Link from "next/link";
import { PostList, type PostPreview } from "@/components/posts/post-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mockPosts: PostPreview[] = [
    {
        title: "블로그 라우팅과 기본 UI 정비",
        slug: "routing-basics",
        summary: "App Router 기반 페이지 구조와 i18n 대응을 위한 뼈대를 세웠습니다.",
        date: "2025-11-22",
    },
    {
        title: "UI 토큰과 Tailwind 4 정리",
        slug: "design-tokens",
        summary: "다크모드와 색상 토큰을 고려한 글로벌 스타일 가이드를 준비 중입니다.",
        date: "2025-11-18",
    },
    {
        title: "API 레이어 설계 초안",
        slug: "api-layer-outline",
        summary: "Axios 인스턴스와 인터셉터 구성 아이디어를 문서로 정리했습니다.",
        date: "2025-11-15",
    },
];

export const metadata: Metadata = {
    title: "블로그 글 목록",
    description: "최근 작성 중이거나 준비 중인 블로그 글을 한눈에 확인하세요.",
};

export const dynamic = "force-dynamic";

export default function PostsPage() {
    return (
        <div className="space-y-8">
            <header className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">Posts</p>
                <h1 className="text-2xl font-semibold">블로그 글 목록</h1>
                <p className="text-sm text-foreground/70">API 연동 전까지는 샘플 데이터로 구성됩니다. 새 글이 준비되면 여기에서 바로 확인하실 수 있어요.</p>
            </header>

            <PostList posts={mockPosts} />

            <Card className="border-dashed border-foreground/20 bg-muted/60">
                <CardHeader>
                    <CardTitle>블로그 준비 안내</CardTitle>
                    <CardDescription>실제 게시글은 API 연동이 완료되는 대로 자동으로 표시됩니다.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-foreground/75">
                    <p>• 관리자는 로그인 후 새 글을 작성하고 공개 여부를 설정할 수 있습니다.</p>
                    <p>• 초안 상태의 글은 `/posts` 목록에는 보이지 않으며, `/login` 경유 대시보드에서 관리됩니다.</p>
                    <p>• RSS, 태그/카테고리, 검색 기능은 API 스펙이 확정되면 함께 추가할 예정입니다.</p>
                    <Link href="/login" className="inline-flex items-center font-semibold text-foreground/85 underline-offset-4 transition hover:text-foreground hover:underline">
                        관리자 로그인 바로가기 →
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
