export const siteConfig = {
  name: "MyProject Blog",
  description:
    "개발 과정과 기술 인사이트를 공유하는 MyProject 블로그입니다. 새로운 소식과 학습 노트를 가장 먼저 확인하세요.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  localeDefault: "ko",
  locales: ["ko", "en"] as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];
