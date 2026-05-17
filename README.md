# Blog Frontend

Next.js 15 (App Router) + React 19 + Tailwind CSS 4 based blog UI that consumes the `blog.backend` API.

## Quick start

1. Install deps: `yarn install`
2. Env: `cp .env.local.example .env.local` and set `NEXT_PUBLIC_API_URL` (or decrypt `.env.local.enc` with `BLOG_ENV_SECRET` via `make frontend-up`)
3. Dev server: `yarn dev` → http://localhost:3000 (Turbopack enabled)

## Scripts

- `yarn dev` / `yarn build` / `yarn start`
- production build is based on standard `next build`
- `yarn lint` (Next.js lint) / `yarn lint:fix`
- `yarn format` / `yarn format:check`

Husky + lint-staged run on `pre-commit` (install hooks via `yarn install` or `yarn prepare`).

## Docker (via blog.workspace)

- Start frontend container: `make frontend-up`
- Tail frontend logs: `make frontend-logs`
- Stop local stack: `make frontend-down`

Targets wrap `../blog.workspace/docker-compose.local.yml` and expect `.env` in this folder (generated from `.env.local.example` or decrypted from `.env.local.enc`).
