import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownViewer } from "@/components/markdown/markdown-viewer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Post = {
  title: string;
  summary: string;
  publishedAt: string;
  content: string;
};

const mockPosts: Record<string, Post> = {
  "routing-basics": {
    title: "블로그 라우팅과 기본 UI 정비",
    summary: "App Router를 활용한 페이지 구조와 i18n 대비 전략을 설계한 내용의 프리뷰입니다.",
    publishedAt: "2025-11-22",
    content: `
Next.js 15 App Router 기반으로 홈, 포스트 목록, 상세, 로그인 페이지를 마련했습니다.

### 이번 글에서 정리한 내용

- 라우팅 구조 설계와 i18n 기본값 적용
- 메타데이터 API를 활용한 canonical/language alternates 구성
- 에러/404 페이지 처리 방식

> 이 글은 API 연동 이후 실제 데이터로 교체될 예정입니다. 구조만 먼저 확인해 주세요.
`,
  },
  "design-tokens": {
    title: "UI 토큰과 Tailwind 4 정리",
    summary: "색상, 폰트, 간격 토큰을 활용해 일관된 스타일을 유지하는 방법을 다룬 글의 초안입니다.",
    publishedAt: "2025-11-18",
    content: `
Tailwind CSS 4 기반 토큰 구성을 실험하며, 다크모드 대응 전략을 함께 정리했습니다.

현재는 글로벌 토큰과 카드/버튼 같은 베이스 컴포넌트를 준비했고, 곧 다크모드에서도 동일한 사용자 경험을 제공하도록 추가 보정할 예정입니다.

- 색상 토큰과 배경/테두리 대비 확인
- 타이포그래피 리듬과 컴포넌트 간 간격 규칙
- 다크모드 시뮬레이션과 실제 스크린샷 비교
`,
  },
  "api-layer-outline": {
    title: "API 레이어 설계 초안",
    summary: "Axios 인스턴스와 인터셉터 구성 방향성을 미리 공유하는 포스트를 준비하고 있습니다.",
    publishedAt: "2025-11-15",
    content: `
API 에러 처리 정책과 인증 토큰 주입 방식을 문서화하는 중입니다.

곧 axios 인스턴스, 응답/에러 인터셉터, 그리고 재시도/토큰 리프레시 전략을 코드 예제와 함께 공유할 예정입니다.

- 에러 메시지 포맷과 로깅 정책
- 인증 만료 시 처리 흐름
- 테스트 전략(모킹/통합) 초안
`,
  },
};

type PostPageProps = {
  params: { slug: string };
};

export const dynamic = "force-dynamic";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko", { dateStyle: "medium" }).format(new Date(date));
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = mockPosts[params.slug];

  return {
    title: post ? post.title : "포스트 미리보기",
    description: post?.summary,
  };
}

export default function PostDetailPage({ params }: PostPageProps) {
  const post = mockPosts[params.slug];

  if (!post) {
    return notFound();
  }

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">
          {formatDate(post.publishedAt)}
        </p>
        <h1 className="text-3xl font-semibold leading-snug">{post.title}</h1>
        <p className="text-sm text-foreground/70">{post.summary}</p>
      </header>

      <MarkdownViewer content={post.content} />

      <Card className="border-dashed border-foreground/20 bg-muted/60">
        <CardHeader>
          <CardTitle>앞으로 추가될 내용</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm text-foreground/75 sm:flex-row sm:items-center sm:justify-between">
          <span>
            실제 데이터 연동 시 자동으로 최신 내용이 노출됩니다. 초안/비공개 상태는 관리자만 볼 수
            있게 처리할 예정입니다.
          </span>
          <Link
            href="/posts"
            className="font-semibold text-foreground/85 underline-offset-4 transition hover:text-foreground hover:underline"
          >
            ← 글 목록으로 돌아가기
          </Link>
        </CardContent>
      </Card>
    </article>
  );
}
