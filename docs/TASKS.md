# ✅ Blog Frontend Development Checklist

> Next.js 15 기반 Blog Frontend 개발 진행표
> Last Updated: 2025-11-30

---

## 🧱 1. 환경 구성

- [x] Next.js 15 (TypeScript) 프로젝트 초기화
- [x] TailwindCSS + PostCSS 설정
- [x] ESLint + Prettier + Husky pre-commit hook 적용
- [x] `.env.local` 환경 변수 구조 정의 (`NEXT_PUBLIC_API_URL`)
- [x] Docker 환경 연결 (`blog.workspace`)
- [x] Makefile 명령 (`make frontend-up`, `make frontend-logs`) 구성
- [x] VSCode 설정 공유 (`.vscode/settings.json`)

---

## 🌐 2. 라우팅 및 기본 페이지 구조

- [x] `app/` 디렉토리 구조 설계 (`app/layout.tsx`, `app/page.tsx`)
- [x] 기본 라우팅 `/`, `/posts`, `/posts/[slug]`, `/login` 설정
- [x] 글로벌 메타데이터 관리 (`metadata` API)
- [x] 다국어(i18n) 라우팅 준비
- [x] 404 / 500 에러 페이지 추가

---

## 🎨 3. UI 및 컴포넌트

- [x] 공통 레이아웃 (`Header`, `Footer`, `Container`) 구성
- [x] `PostCard`, `PostList`, `MarkdownViewer` 컴포넌트 설계
- [x] 다크모드 지원 (`next-themes`)
- [x] 반응형 레이아웃 (모바일/태블릿 대응)
- [x] Shadcn/UI 컴포넌트 일부 도입 (Button, Card 등)
- [x] 공통 로딩 컴포넌트 (`<Loader />`, `<Skeleton />`) 추가

---

## 🔌 4. API 연동

- [x] Axios 인스턴스 생성 (`apiClient.ts`)
- [x] 인터셉터 구성 (accessToken 자동 주입, 에러 공통 처리)
- [ ] `/api/health` 연결 확인
- [x] 로그인 / 로그아웃 API 연동
- [ ] 게시글 목록 조회 (`/api/posts`)
- [ ] 게시글 상세 (`/api/posts/[slug]`)
- [ ] 게시글 작성 / 수정 / 삭제 (관리자 전용)
- [x] Recoil or Zustand 상태 관리 도입

---

## 🔐 5. 인증 (Auth)

- [x] 로그인 폼 UI
- [x] JWT 기반 로그인 처리
- [ ] Refresh Token 로직 구성
- [ ] 세션 만료 처리 / 자동 로그아웃
- [ ] 사용자 정보 저장 (전역 상태)
- [ ] 로그인 유지 (localStorage / cookies)

---

## ⚙️ 6. 기능 고도화

- [ ] 검색 기능 추가 (`/search?q=`)
- [ ] 태그 / 카테고리 필터링
- [ ] Pagination (infinite scroll)
- [ ] 댓글 기능 (API 연동 후)
- [ ] 즐겨찾기 / 북마크 기능
- [ ] 이미지 최적화 (Next Image / blur placeholder)

---

## 🧪 7. 테스트 & 품질 관리

- [ ] ESLint + Prettier 자동 포맷 확인
- [ ] Jest + React Testing Library 설정
- [ ] 기본 렌더링 테스트 (홈, 포스트 페이지)
- [ ] Lighthouse 퍼포먼스 점검
- [ ] Storybook 도입 검토

---

## 🚀 8. 빌드 및 배포

- [ ] Dockerfile 구성 (multi-stage build)
- [ ] Nginx Reverse Proxy 연동 준비
- [ ] `.env.production` 작성 및 확인
- [ ] `make build` / `make deploy` 배포 스크립트 작성
- [ ] CI/CD 파이프라인 추가 (GitHub Actions)
- [ ] 캐시 / 정적 자원 최적화 (`next build --analyze`)

---

## 📊 진행 현황

> ✅ 완료: 24 / 36 항목
> 🔄 진행률: **67%**

---

## 🗓️ 변경 로그

| 날짜       | 내용                                       |
| ---------- | ------------------------------------------ |
| 2025-11-30 | Recoil 기반 전역 상태관리 베이스 적용      |
| 2025-11-22 | 1단계 환경 구성 완료 (도커 연동, 훅, 설정) |
| 2025-10-13 | 체크리스트 초기 작성 (진행 전 상태)        |

---

## 📁 참고

- **Backend API 문서:** `/blog.backend/docs/api-spec.md`
- **Docker 설정:** `/blog.workspace/docker-compose.yml`
- **환경 관리:** `.env.local`, `.env.production`
- **디자인 가이드:** `/docs/ui-guide.md`
