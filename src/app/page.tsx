import type { Metadata } from "next";
import Link from "next/link";

const highlights = [
  {
    title: "최신 기술 인사이트",
    description: "매주 업데이트되는 프론트엔드·백엔드 실험과 학습 기록을 공유합니다.",
  },
  {
    title: "프로젝트 기록",
    description: "MyProject가 어떻게 만들어지고 발전하는지 과정을 투명하게 남깁니다.",
  },
  {
    title: "가이드와 튜토리얼",
    description: "실무에서 바로 쓸 수 있는 설정, 패턴, 코드 스니펫을 정리합니다.",
  },
];

export const metadata: Metadata = {
  title: "홈",
};

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/60">
          MyProject Blog
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
          개발 여정을 기록하고,
          <br />더 나은 아키텍처를 함께 고민합니다.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-foreground/75">
          제품 개발에서 마주친 문제를 해결한 과정, 디자인 결정, 배포 팁까지 차곡차곡 쌓아
          두었습니다. 새로운 글은 `/posts`에서 가장 먼저 만나볼 수 있어요.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            글 보러가기
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-4 py-2.5 text-sm font-medium transition hover:border-foreground/40 hover:bg-foreground/5"
          >
            대시보드 로그인
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">지금 준비 중인 것들</h2>
          <Link
            href="/posts"
            className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
          >
            전체 글 목록 →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-foreground/10 bg-background p-4 shadow-sm"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-foreground/10 bg-background p-6 shadow-sm">
        <h2 className="text-lg font-semibold">릴리즈 노트 미리보기</h2>
        <p className="mt-2 text-sm text-foreground/70">
          정식 포스트 전, 실험 중인 기능과 다가오는 배포 소식을 짧게 공유합니다. 추후 게시글
          상세에서 더 풍부한 내용을 확인할 수 있어요.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-foreground/80">
          <li>• 블로그 UI 컴포넌트 라이브러리화 준비 중</li>
          <li>• API 연동 단계에서 상태 관리와 캐싱 전략 정리</li>
          <li>• 테마/다국어 지원을 위한 라우팅 구조 확정</li>
        </ul>
      </section>
    </div>
  );
}
