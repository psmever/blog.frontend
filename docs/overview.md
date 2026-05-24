# Blog Frontend Overview

## 프로젝트 역할

- Next.js 15(App Router) 기반의 SPA로, `blog.backend` Laravel API를 소비하여 블로그 콘텐츠를 노출합니다.
- `blog.workspace` 환경에서 Node 컨테이너로 실행되며, 단독으로도 개발/빌드/테스트가 가능합니다.
- React 19, TypeScript, Tailwind CSS 4를 사용하며 Turbopack을 기본 빌드 도구로 활용합니다.

## 개발 워크플로

1. 의존성 설치: `yarn install`
2. 개발 서버: `yarn dev` → <http://localhost:3000>
3. 프로덕션 빌드: `yarn build` 후 `yarn start`
4. 품질 점검: `yarn lint`

> Turbopack(NEXT_TELEMETRY_DISABLED 가능)을 사용하므로 첫 빌드 후에는 빠른 HMR을 기대할 수 있습니다.

## 환경 변수 관리

- `.env.local.example`을 참고해 루트의 `.env`를 직접 작성합니다.
- 값이 변경될 때마다 실제 `.env`를 수동으로 수정합니다.
- `.env`는 Git에 커밋하지 않습니다.
- 프런트엔드는 `NEXT_PUBLIC_API_URL`로 백엔드 엔드포인트를 지정합니다. (예: `http://localhost:4000`)

## 디렉터리 길잡이

```text
blog.frontend/
 ├── src/app/            # App Router 엔트리, 레이아웃, 페이지
 ├── public/             # 정적 에셋 (아이콘, 이미지 등)
 ├── docs/               # 프로젝트 문서 (본 파일 포함)
 ├── next.config.ts      # Next.js 설정
 ├── eslint.config.mjs   # ESLint 설정
 └── tsconfig.json       # TypeScript 컴파일러 설정
```

## 상호 의존 구성 요소

- `../blog.backend`: RESTful API를 제공하며, 프런트엔드는 `.env` 설정을 통해 백엔드 엔드포인트를 가리킵니다.
- `../blog.workspace`: 로컬 개발/테스트를 위한 Docker Compose 오케스트레이션을 제공합니다. 필요 시 프런트엔드용 Node 컨테이너를 통해 빌드/실행합니다.
