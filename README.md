# Bread Cooperative Landing

The marketing site for [Bread Cooperative](https://bread.coop) — a worker collective building solidarity-focused financial tools, including the Solidarity Fund, Stacks, and Services pages, all powered by [Next.js](https://nextjs.org).

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analytics measurement ID |
| `DUNE_API_KEY` | API key for querying Dune Analytics |
| `BREAD_TVL_QUERY_ID` | Dune query ID used by `/api/bread-tvl` |
| `BREADCHAIN_PROJECTS_QUERY_ID` | Dune query ID used by `/api/breadchain-projects` |
| `TOTAL_BREAD_QUERY_ID` | Dune query ID used by `/api/total-bread` |

## Project structure

- `src/app` — Next.js App Router pages: the homepage, `services`, `solidarity-fund`, `stacks`, and API routes under `src/app/api` that proxy Dune Analytics queries.
- `src/components` — Shared UI components (Navbar, Footer, Subscribe, SolidarityTools, CooperativeServices, etc.).
- `src/hooks`, `src/lib`, `src/util`, `src/providers`, `src/constants` — Shared hooks, data-fetching helpers, utilities, providers, and constants.
- `src/stories` — Storybook stories for shared components.
- `public/funding.json` and `.well-known/funding-manifest-urls` — [funding.json](https://fundingjson.org) manifest describing how to support the cooperative's projects.

This project also depends on [`@breadcoop/ui`](https://www.npmjs.com/package/@breadcoop/ui), Bread Cooperative's shared component library.

## Storybook

Component stories live alongside their components (e.g. `src/components/Navbar/Navbar.stories.tsx`). To browse and develop them in isolation:

```bash
pnpm storybook
```

This starts Storybook at [http://localhost:6006](http://localhost:6006).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm storybook` | Start Storybook |
| `pnpm build-storybook` | Build a static Storybook site |

## Tech stack

- [Next.js](https://nextjs.org) 15 (App Router) with [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [TanStack Query](https://tanstack.com/query) for data fetching
- [Storybook](https://storybook.js.org) for component development, with [Vitest](https://vitest.dev) + Playwright for interaction testing
