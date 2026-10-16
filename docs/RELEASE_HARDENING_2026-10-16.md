# TradeBoard marketing — local release hardening, 2026-10-16

**Recommendation: CONDITIONAL PASS for independent source review. Production release remains blocked by the approvals below.**

Baseline: `8605bf76f233b7e6fff5fe2a7e129d927a82e61f` on `marketing/20261016-release-truth`.
Existing draft: https://github.com/greghaydel-arch/tradeboard-website/pull/1

## Corrections delivered

- `src/web/main.tsx` now selects `public-app.tsx`, a bounded public home/product/plans/
  waitlist journey using the existing logo, palette and typography. It never imports
  the preview gate or full review pages. Existing `app.tsx`, draft legal source and
  concept images are retained for local review via `review-main.tsx` and Vite review mode.
- `vite.config.ts` disables broad public-directory copying, explicitly emits eight
  allowed static assets and creates physical HTML route documents with canonical/title
  metadata. The default artifact contains 15 files, no concept screenshots, preview
  entry, draft policies, source maps or internal docs. Review mode writes only to
  ignored `review-dist` and must never be a hosting build mode.
- Public `404.html` disables implicit SPA fallback. `_redirects` has no broad
  rewrite; unknown/review routes do not become successful public pages. `_headers`
  retains a prelaunch noindex hold and limits referrer leakage.
- `components/waitlist.tsx` supplies one direct Zoho link, accurate vendor/approval
  messaging, keyboard-accessible optional embed and persistent blank-form guidance.
  A static HTML noscript fallback also links directly to Zoho.
- `public.css` preserves the existing visual identity and makes public navigation,
  four planned tiers and mobile layouts usable. Visual testing caught and fixed a
  clipped mobile headline. `public-routes.ts` shares build/runtime titles.
- `pages/legal-status.tsx` is a nonbinding status page; the draft legal component is
  not imported. Duplicate remote-font CSS loading was removed. Legacy tracked `dist`
  is regenerated; removed illustrations remain intact in source `public/` for review.

## Reproduce locally

```text
npm run build
node scripts/test-public-output.mjs
python -m http.server 4183 --bind 127.0.0.1 --directory dist
```

**PASS:** TypeScript and Vite production build, 44 transformed modules; artifact
contract checks validate all 15 files, excluded preview/draft markers, one Zoho
destination, route canonicals/noindex/noscript and asset links. The preserved review
build also passed (2260 modules), writing to a separate ignored directory. No packages
were installed. A loopback review development server also returned the review entry
and preserved concept image successfully. The public entry no longer mounts an unused
query client. Full focused HTTP/HTML evidence is in the accompanying ZIP.

Prior hosting evidence records `bun install && bun run build`, output `dist`. This
batch validates installed npm tooling locally, not the provider's Bun environment.
Physical directory routes and custom 404 behavior follow documented Pages conventions,
but hosted redirects/headers and current provider configuration require a separately
approved check. No cloud build was requested.

## Focused certification

| Check | Result | Evidence / limit |
|---|---|---|
| Artifact HTML, JavaScript syntax, internal links, anchors, images, route documents and metadata | PASS | 95 combined filesystem/HTTP checks in the accompanying review ZIP; no failed checks. Includes HTML structural/accessibility rules. |
| Internal source, private previews and legal drafts absent from public output | PASS | Exact artifact inventories, negative-content assertions and HTTP 404 checks. Legal compatibility links on Cajun AI redirect only to the status page. |
| Desktop and mobile journeys | PASS | Chrome at 1516×900 and 390×844: public home/product/plans/waitlist paths, no horizontal page overflow; new controls have accessible names and visible keyboard focus. Cajun mobile menu opens with Enter and closes with Escape. |
| Direct Zoho waitlist | PASS | Existing form renders its email input and Submit button. No values entered or registrations submitted. Both websites use the same destination. |
| Final direct and optional embedded paths | PASS | TradeBoard has no iframe before activation; its optional embed rendered the actual input and Submit button on desktop and mobile. Earlier attempts remained blank. Cajun AI now uses direct-only access after its optional embed failed to render reliably in this environment. Direct links remain available; no local success state is invented. Third-party availability is not guaranteed. |
| Privacy before embed activation | PASS | No Zoho frame/resource observed before activation. Optional analytics scripts absent from built artifacts. Google Fonts remains an external request and is disclosed. Duplicate Google Fonts CSS import removed from TradeBoard. This does not certify third-party form internals or hosting-injected scripts. |
| Console/runtime errors | PASS | No warnings/errors observed in final tested first-party pages. Browser automation encountered screenshot/input timeouts; viewport captures and keyboard checks were used. These are not presented as successful embed rendering. |
| Secret/sensitive-data review | PASS | Final staged source, generated artifacts and reports scanned locally with Gitleaks plus private-data/filename checks; review package is separately scanned. Prior full-history evidence is preserved; the entire legacy dependency history was not rescanned. |
| Cloudflare configuration / hosted behavior | NOT VERIFIED in this batch | No provider access or changes. Prior evidence records preview deployments None, production main with automatic deployments enabled. These are historical assumptions, not fresh verification. |
| Submission delivery, email processing, account registration and billing | NOT VERIFIED | Intentionally not exercised or activated. |
| Complete WCAG certification, other browsers and live application acceptance | NOT VERIFIED | Focused website checks only; not a full repeat audit or an application certification. |

## Product truth and privacy boundaries

Read-only application reference: commit `91cedab72c90e591d849c327f7bbcc776b44c005`,
`backend/src/config/firstRcReleaseManifest.js` and `backend/src/services/batch2ImportService.js`.
The supported initial format is `webull-csv-v1`: USD STK/EQUITY BUY/SELL FILLED rows,
with preview and confirmation. Initial historical FIFO review and private text journaling
do not establish support for all Webull exports, broker sync, live balances, AI, mobile
apps, advanced reports or execution. No application code or data was changed.

Both journeys preserve a planned permanent useful Free tier, planned Pro and Pro+
upgrades, and the first 100 successfully paid Founding Members at $199/year.
Waitlist entries never reserve slots. There is no checkout, account registration,
remaining-spots counter, new testimonial, invented product screenshot or video.
The Cajun AI tutorial hub remains the single channel destination; actual channel
ownership/ID and recordings are not verified and were not invented.

Public status wording is nonbinding and explicitly pending approval. Draft legal
documents remain source-only. The earlier legal discrepancy report in
`WEBSITE_RELEASE_VALIDATION_2026-10-16.md` remains applicable; this batch does not
approve processor contracts, retention/deletion commitments, security guarantees,
refunds or subscription terms. Zoho receives submitted information; its resources
can contact additional processors. Google Fonts is still loaded remotely. Cajun's
existing contact form opens a mail draft; it does not verify delivery.

## SEO recommendation — owner decision, not activated indexing

Keep this candidate's HTML robots meta and `_headers` noindex hold until legal,
hosting and independent source review gates pass. Do not use robots disallow as
privacy protection. After approval, index only useful reviewed marketing/editorial
pages; keep waitlist/status/404 and unfinished category pages noindex. Generate an
allowlisted sitemap only then. Verify search rendering before requesting indexing.
Canonical destinations are Cajun AI's apex domain with extensionless HTML paths,
and TradeBoard's apex domain with physical directory routes. Cross-site product
and tutorial links retain their respective canonical brands. A future owner-approved
host review must verify www/apex and pages.dev handling, direct deep links, real
404 responses, noindex headers and any analytics injected at the edge.

Cloudflare's [documented route and 404 behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/)
is the design basis: `.html` paths normalize to extensionless URLs, and a root
`404.html` prevents implicit SPA fallback. Local HTTP evidence is not provider certification.

## Decisions still required

1. **Before collecting visitor data through this candidate:** owner/counsel approval
   of the Zoho waitlist notice, purposes, retention/deletion process and processor
   disclosures, including the Google Fonts decision. A form's generic abuse warning
   is not a substitute for the operator's approved notice.
2. **Before release:** independent ChatGPT source review, separate authorization
   for any push, and a separately approved hosting/output/route validation. Existing
   public preview protection and old deployments remain unchanged and outside this batch.
3. **Before paid launch:** confirm Free limits, Pro/Pro+ entitlements/prices, Founding
   Member eligibility, renewals, refunds and cancellation, and separately approve
   payment/application release gates. These are not activated by this website.

Approved real UI screenshots and the Cajun AI channel ID/recordings are later media
gates; clearly labeled pending media need not block a narrowly approved waitlist-only launch.

No pushes, PR updates, CI, Cloudflare mutations, deployment, payment/API activation,
video publication, subscription, DOT or monitoring occurred. Existing PRs were not
modified; their last verified state was OPEN/DRAFT. Prior validation evidence is preserved.

## Review handoff

The local checkpoint containing this report is the review target; the accompanying
ZIP manifest records its exact SHA and baseline. The ZIP contains full Git diffs,
this report, focused test evidence and before/after screenshots, excluding account
screenshots, credentials, raw private QA and dependency trees. Inspect the changes
and reproduce local checks before authorizing a separate GitHub handoff.

**REVIEW_PENDING_CHATGPT — no website release authorized.**
