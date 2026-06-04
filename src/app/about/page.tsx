import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "소개",
    description: "개발하면서 겪었던 일들과 기록해두고 싶은 내용을 정리하는 블로그입니다.",
};

const backendRepositoryUrl = "https://github.com/psmever/blog.backend";
const frontendRepositoryUrl = "https://github.com/psmever/blog.frontend";
const blogUrl = "https://blog.jaubi.co.kr";

const topics = ["Node.js", "PHP", "MySQL", "Redis", "AWS", "운영 기록", "성능 개선", "개인 프로젝트"];

export default function AboutPage() {
    return (
        <div className="mx-auto w-full max-w-4xl py-6 sm:py-10">
            <article className="relative overflow-hidden rounded-lg border border-foreground/10 bg-card px-6 py-8 shadow-sm sm:px-10 sm:py-12">
                <div className="absolute inset-x-0 top-0 h-1 bg-cyan-600" />
                <header className="border-b border-foreground/10 pb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">About Blog</p>
                    <h1 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-3xl">안녕하세요.</h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/75">이곳은 개발하면서 알게 된 내용이나 해결했던 문제들을 기록하기 위해 만든 개인 블로그입니다.</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {topics.map((topic) => (
                            <span key={topic} className="rounded-md border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1 text-xs font-medium text-foreground/70">
                                {topic}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="mt-8 space-y-5 text-base leading-8 text-foreground/78">
                    <p>업무를 하거나 개인 프로젝트를 진행하다 보면 분명 한 번 해결했던 문제인데도 시간이 지나면 다시 찾아보게 되는 경우가 많았습니다. 검색하고, 해결하고, 또 잊어버리는 일을 반복하다 보니 직접 기록을 남길 공간이 있으면 좋겠다는 생각으로 시작하게 되었습니다.</p>
                    <p>주로 Node.js, PHP, MySQL, Redis, AWS와 같은 백엔드 개발 관련 내용을 다룰 예정이며, 실제 서비스 운영 과정에서 겪었던 문제와 해결 방법, 개발 환경 구성, 성능 개선, 그리고 개인 프로젝트 개발 과정도 함께 기록하려고 합니다.</p>
                    <p className="border-l-4 border-cyan-600 pl-5 text-foreground">특별한 기술을 소개하거나 정답을 공유하는 공간이라기보다는 개발하면서 경험한 내용들을 정리해두는 기록장에 가깝습니다. 그래서 어떤 글은 자세한 정리글이 될 수도 있고, 어떤 글은 짧은 메모 형식으로 남겨질 수도 있습니다.</p>
                    <p>이 블로그에 남겨진 기록들이 시간이 지나 다시 같은 문제를 만났을 때 저에게 도움이 되고, 비슷한 고민을 하고 있는 다른 개발자분들에게도 작은 참고가 되었으면 좋겠습니다.</p>
                    <p>현재 이 블로그는 직접 설계하고 개발 및 운영하고 있으며, 프론트엔드와 백엔드 소스는 GitHub를 통해 공개하고 있습니다.</p>
                </div>

                <footer className="mt-10 border-t border-foreground/10 pt-8">
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">Blog</p>
                            <Link href={blogUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-xs font-semibold text-cyan-700 underline underline-offset-4 transition hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200">
                                blog.jaubi.co.kr
                            </Link>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">GitHub</p>
                            <p className="mt-2 text-xs text-foreground/75">
                                Backend:{" "}
                                <Link href={backendRepositoryUrl} target="_blank" rel="noreferrer" className="font-semibold text-cyan-700 underline underline-offset-4 transition hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200">
                                    blog.backend
                                </Link>
                            </p>
                            <p className="text-xs text-foreground/75">
                                Frontend:{" "}
                                <Link href={frontendRepositoryUrl} target="_blank" rel="noreferrer" className="font-semibold text-cyan-700 underline underline-offset-4 transition hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200">
                                    blog.frontend
                                </Link>
                            </p>
                        </div>
                    </div>
                    <p className="mt-8 text-sm font-medium text-foreground">방문해 주셔서 감사합니다.</p>
                </footer>
            </article>
        </div>
    );
}
