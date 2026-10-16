# TradeBoard marketing review build

This repository builds a static marketing website. The TradeBoard application is
separate. Account registration and checkout remain closed.

## Run

```bash
npm run dev
```

Vite binds to loopback. The default entry is `src/web/public-app.tsx`; it imports
only release-candidate pages. Prior full-screen reviews remain in `src/web/app.tsx`.
For local editorial review only, run `npm run dev -- --mode review`. Browser flags
in that review UI are convenience controls, not authentication. Do not host it.

## Typecheck and build

```bash
npm run build
node scripts/test-public-output.mjs
python -m http.server 4183 --bind 127.0.0.1 --directory dist
```

`npm run build` typechecks and builds only `dist`. `vite.config.ts` deliberately
allowlists public assets and emits physical HTML documents for `/features/`,
`/pricing/`, `/waitlist/` and `/legal-status/`. A root `404.html` excludes unknown
and review routes from Cloudflare's automatic SPA fallback. No catch-all rewrite
is needed. The local Python server tests physical paths, not Cloudflare rules.

`npx --no-install vite build --mode review` can build the preserved review into
ignored `review-dist/`; never use that mode or directory in hosting settings.
No installation or cloud call is needed for either build. Existing concept images
stay in source, but are excluded from the default artifact.

Prior hosting evidence records `bun install && bun run build`, output `dist`.
This batch used installed npm dependencies only. Provider settings, Bun behavior,
edge-injected analytics and hosted route normalization were not reverified.
Production remains a separate approval boundary; no push or deployment is authorized.

See [the focused hardening report](docs/RELEASE_HARDENING_2026-10-16.md).
