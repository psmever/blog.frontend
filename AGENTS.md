# Repository Guidelines

## Project Structure & Module Organization

- `src/app/` holds the Next.js App Router entrypoints (layouts, pages, routes).
- `src/components/` contains UI building blocks grouped by domain (`layout/`, `posts/`, `markdown/`, `ui/`).
- `src/services/` hosts API access modules (for example `auth.ts`), while `src/state/` contains Recoil state.
- `public/` is for static assets, and `docs/` captures project notes and checklists.
- Root config includes `next.config.ts`, `tailwind.config.ts`, `eslint.config.mjs`, and `prettier.config.mjs`.

## Build, Test, and Development Commands

- `yarn install` installs dependencies and sets up Husky hooks.
- `yarn dev` runs the local dev server at `http://localhost:3000` (Turbopack).
- `yarn build` creates a production build; `yarn start` serves it.
- `yarn lint` / `yarn lint:fix` run ESLint; `yarn format` / `yarn format:check` run Prettier.
- Docker workflow (via `blog.docker`): `make frontend-up`, `make frontend-logs`, `make frontend-down`.

## Coding Style & Naming Conventions

- TypeScript + React 19 with Tailwind CSS 4. Keep UI logic in components; API logic in `src/services/`.
- Prettier enforces 4-space indentation, semicolons, double quotes, and trailing commas.
- ESLint uses Next.js core-web-vitals + TypeScript rules. Fix lint errors before committing.
- File names are kebab-case (for example `post-card.tsx`); React components use PascalCase.

## Testing Guidelines

- Automated tests are not configured yet (no `test` script in `package.json`).
- If you add a test framework, include a script (for example `yarn test`) and document the conventions here.

## Commit & Pull Request Guidelines

- Commit messages are short and descriptive, typically plain phrases (often in Korean) without prefixes.
- Keep commits focused; prefer one topic per commit.
- PRs should include a concise summary, verification steps, and screenshots for UI changes.

## Security & Configuration Tips

- Configure `NEXT_PUBLIC_API_URL` in `.env.local` (copy from `.env.local.example`).
- Encrypted env files are available (`.env.local.enc`, `.env.production.enc`); use `scripts/env-decrypt.sh` when needed.
- Avoid committing secrets or local `.env` files.
