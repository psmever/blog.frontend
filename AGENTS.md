# Frontend 저장소 가이드

## 기본 원칙

- 모든 대화와 작업 보고는 한글로 작성한다.
- 이 저장소는 Next.js 프런트엔드 애플리케이션 전용이다.
- API 구현 수정은 `../blog.backend`에서, Docker/배포/공용 스크립트 수정은 `../blog.workspace`에서 진행한다.

## 작업 범위

- 수정 대상:
    - `src/app/`
    - `src/components/`
    - `src/services/`
    - `src/state/`
    - `public/`
    - 설정 파일 (`next.config.ts`, `eslint.config.mjs`, `prettier.config.mjs` 등)
- 기본적으로 수정하지 않는 대상:
    - `../blog.backend`
    - `../blog.workspace`

## 자주 쓰는 명령

- 개발 서버: `yarn dev`
- 프로덕션 빌드: `yarn build`
- 린트: `yarn lint`
- 린트 자동 수정: `yarn lint:fix`
- 포맷 검사: `yarn format:check`
- 포맷 적용: `yarn format`
- Docker 환경에서 Yarn 실행: `cd ../blog.workspace && ./scripts/yarn.sh lint`

## 코딩 규칙

- TypeScript, React, Next.js App Router 기준으로 작업한다.
- UI 로직은 컴포넌트에, API 호출은 `src/services/`에 둔다.
- 파일명은 kebab-case, React 컴포넌트명은 PascalCase를 사용한다.
- Prettier 규칙(4칸 들여쓰기, 세미콜론, 더블 쿼트, trailing comma)을 따른다.

## 테스트와 검증

- 자동화 테스트 스크립트는 아직 없으므로 기본 검증은 `yarn lint`와 필요 시 `yarn build`다.
- UI 변경이 있으면 관련 화면 흐름과 API 연결 지점을 함께 확인한다.
- 큰 화면 수정은 가능하면 스크린샷 또는 재현 절차를 남긴다.

## 안전 규칙

- `.env.local`, `.env.*`, `*.enc` 파일은 꼭 필요한 경우에만 열람하거나 수정한다.
- 백엔드 API 계약 변경이 필요하면 프런트 저장소에서 임시 우회하지 말고 `../blog.backend` 변경 여부를 먼저 판단한다.
- 한 요청이 여러 저장소에 걸치면 각 저장소의 소스 수정 작업 자체를 분리해서 진행하고, 한 저장소의 변경을 다른 저장소 작업과 섞어서 처리하지 않는다.
- `git commit`과 `git push`도 저장소별로 각각 따로 진행하며, 여러 저장소 변경을 한 번에 묶어서 처리하지 않는다.
- 새 브랜치가 필요해 보여도 임의로 생성하지 말고, 반드시 먼저 사용자에게 확인을 받은 뒤 진행한다.

## 커밋 규칙

- 커밋 메시지는 짧은 한 줄 한국어 요약을 우선한다.
- 프런트엔드 변경만 담긴 커밋을 유지하고, 백엔드/워크스페이스 변경과 섞지 않는다.
