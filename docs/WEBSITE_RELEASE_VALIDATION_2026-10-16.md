# TradeBoard marketing website completion and release validation

**Date:** October 16, 2026 (America/Chicago)  
**Status:** `REVIEW_PENDING_CHATGPT` — release not authorized; unresolved integration/legal/access gates remain.

## Executive summary and Git handoff

Preserved the existing TradeBoard design; aligned claims and plan previews with the verified invited scope, replaced inert login with access status, added real-product capture/tutorial slots, corrected waitlist layout/navigation, repaired the actual TypeScript gate, removed the production analytics debug overlay and staged a documented SPA redirect correction. Legal drafts remain unrouted.

- Repository: `greghaydel-arch/tradeboard-website`; existing draft [PR #1](https://github.com/greghaydel-arch/tradeboard-website/pull/1).
- Branch: `marketing/20261016-release-truth`. Implementation through commit: `7ee7bf6269a8fb0f96334bea1cc348f6bbed5def` (all task commits prefixed `[CF-Pages-Skip]`). This report is a subsequent documentation-only commit; its exact final head is recorded in the PR description and normal Git history.
- Companion implementation: Cajun AI `66f88a2cdc88cec53b42117480d263143ca1f6d4`; TradeBoard marketing `7ee7bf6269a8fb0f96334bea1cc348f6bbed5def`. Both PRs must remain open drafts and unmerged.
- No independent-review PASS or production-ready verdict is issued. Earlier preview deployments predate this work; no new deploy is authorized.

## Tests performed

Environment: Windows PowerShell, Node 24.17.0, npm 11.13.0; isolated checkout; Vite 7.3.6 production build/preview on `127.0.0.1:4173`; real Chrome, desktop 1440×900 and mobile 390×844. Existing repository dependencies used; no dependency upgrade, application database, backend provider or customer data involved.

| Test | Result | Evidence / limit |
| --- | --- | --- |
| TypeScript typecheck | PASS | `npm run typecheck` now runs `tsc -b`, covering referenced browser/server/Vite projects. The old root `tsc --noEmit` command did not actually check the referenced application files. Removed a discovered unused import. |
| Production build | PASS | `npm run build` runs the actual typecheck then `vite build`; 2,275 modules transformed. Final assets committed because this repository already tracks `dist`. |
| Route/navigation | PASS | `/`, `/features`, `/pricing`, `/charts`, `/login`, `/waitlist`, `/legal-status`, `/preview` tested at both viewport sizes. Public root and locked-preview redirect also inspected; cosmetic flags only used locally, with no account credentials entered. |
| Local HTTP/assets | PASS | 23 route/build-resource GETs, nonempty HTTP 200 and asset MIME checks; images/icons/CSS/JS load. |
| Desktop/mobile layout/images | PASS | No horizontal overflow on tested routes; image paths decoded/rendered; footer no longer overlaps waitlist content. |
| Basic accessibility | PASS | Main/heading/skip target, iframe title, labeled controls, menu expanded state/Escape, accessible tutorial placeholders and nonempty links. |
| Full screen-reader, contrast audit, Firefox/Safari | NOT VERIFIED | Basic Chrome checks are not WCAG conformance or cross-browser certification. |
| Broken local links | PASS | Rendered destinations match actual route definitions, image requests succeed, footer `#` placeholders replaced by a real legal-status route. |
| Tutorial links | PASS locally / FAIL live anchor | All target the shared canonical Cajun AI hub section. Current live destination lacks the anchor; local corrected Cajun AI source has it. |
| Form URL/fallback | PASS | Existing Zoho destination and direct labeled form verified; no placeholder Formspree endpoint or fake account-login form. |
| Embedded-form rendering/time-to-ready | PASS rendering / NOT VERIFIED consistency | Actual fields rendered in the final root and a static isolation page; repeat visits also showed blank frames before later population. Eager loading, static wrapper and larger height do not prove a stable timing bound. |
| Actual form submission/receipt | NOT VERIFIED | No fake customer registration and no external account changes. |
| Pricing/signup semantics | PASS | Only planned Free and first-100 $199/year strategy retained; other prices TBD. No lifetime, AI-quota, storage entitlement, checkout, fabricated counter or reserved-place claim. |
| Showcase/tutorial structure | PASS | Five capture slots, primary demo slot and six tutorial topics; no asset URLs/video IDs populated or invented. |
| Console/runtime | PASS | No warning/error entries surfaced in captured Chrome local-route logs. Production build no longer enables the analytics debug overlay. Provider iframe issue remains separate. |
| SEO metadata | PASS | Title/description, verified-domain canonical/OG URL, OG text/image, Twitter card and viewport inspected. Preview build remains noindex; indexing/ranking not tested. |
| Legal navigation/publication | PASS | Legal-status route works; draft legal components remain unrouted. No approved Terms/Privacy are falsely published or accepted. |
| Cloudflare SPA redirect fix | PASS source/local; NOT VERIFIED hosted | Existing provider log rejected `/* /index.html 200` as a loop. Replaced it with comments; Pages native SPA fallback is documented and no root `404.html` exists. Hosted acceptance awaits a separately authorized deployment. |
| Preview authentication | FAIL | Editable localStorage flag gates navigation only; no server-side authentication installed. |
| Host-to-repo mapping | PASS | Existing dashboard/settings/logs read; root Bun build → `dist` and domain verified. |
| New-head Cloudflare build / Bun provider command | NOT VERIFIED | Not run because it publishes; local npm/Vite build is not a hosted deployment test. No GitHub Actions workflow exists in this repo. |
| Git whitespace | PASS | `git diff --cached --check` passed. |

The route/image checks used real rendered DOM/screenshots, not just a source scan. A temporary loopback-only fixture set cosmetic preview flags to inspect previews without entering exposed comparison values; it was never committed and was removed. The TradeBoard test flag was cleared afterwards. The application runtime, import API and database were not tested or altered by this marketing assignment.

Cloudflare SPA fallback basis: [official serving-pages documentation](https://developers.cloudflare.com/pages/configuration/serving-pages/#single-page-application-spa-rendering). Tracking remains present; only the production debug overlay was removed. Privacy/processor review is still required.

## Scope and source of truth

Owner-authorized website completion only. Existing visual systems and review branches retained. No TradeBoard application source was edited, and no production/database/billing/DNS/credential/channel setting was changed. No signup, mail delivery, video upload, playlist creation, deployment or DOT job was initiated. This is implementation-agent validation, **not independent ChatGPT approval or release authorization**.

Read both existing PRs and their changes, `docs/VIDEO_CHANNEL_HANDOFF.md`, the original Windows continuation/readiness documents, and application release evidence. GitHub read-only verification confirms current application `main` is `91cedab72c90e591d849c327f7bbcc776b44c005`. The release-document blob also matches the local canonical reference. The working application checkout is older and was not used as current implementation truth.

Application evidence at that immutable commit:

- `backend/src/config/firstRcReleaseManifest.js`: first-release exclusions include broker synchronization, live positions/portfolio, billing, AI/credits, replay, psychology, screenshots, backtesting, tax and advanced analytics/reports.
- `backend/src/services/batch2ImportService.js`: `webull-csv-v1`, one schema; BUY/SELL, FILLED records, STK/EQUITY, USD; preview/confirmation and deduplication. This does **not** establish support for every Webull export, other broker formats, options, currencies, OAuth or automatic sync. App runtime acceptance was not rerun in this website task.
- `backend/src/services/firstRcIdentityProvider.js`, `batch1IdentityService.js`, `backend/src/config/runtimeConfig.js`, `secureSessionStore.js`: provider-backed email identity and server-owned sessions; not the websites' cosmetic preview gates.
- `backend/src/services/batch4bJournalService.js`, `batch5aExportService.js`, `batch5bAccountDeletionService.js` and `docs/release/PRODUCTION-READINESS.md`: private journal, exports/deletion, retention and provider limitations.

## Factual legal/privacy discrepancy report — owner and counsel review required

These are source observations and editorial corrections, not legal advice or approved policies. Website drafts must not be released as effective Terms/Privacy. Reconcile the separately held September 28 legal draft; it was not available here. Business registration, regulatory status, age limits, governing law, liability, notice/assent rules, contact ownership and rights language require owner/counsel confirmation.

| Topic | Discrepancy and supported implementation facts | Required decision/evidence |
| --- | --- | --- |
| Authentication/session | Old local-password and brokerage-OAuth descriptions do not describe the invited flow. Current source selects Auth0 email identity with OIDC/PKCE and server PostgreSQL sessions. Source cookie policy is HttpOnly, SameSite=Lax and Secure in managed environments; idle/absolute session limits are implemented. | Actual enabled provider/tenant, cookie behavior and attended login acceptance remain environment-specific and unverified here. An unmerged AWS alternative is not a deployed fact. |
| Collection/storage | Imported execution fields, source-row facts, account/profile/identity/acceptance records, FIFO generations, journal text/tags/drafts and operational/privacy records exist. A bare “trade history only” policy is incomplete. | Approve categories, purpose, access, regions, rights and enabled-vendor inventory; avoid blanket anonymity or no-sharing promises. |
| Import processing | Parser handles raw CSV bytes in memory; normalized execution/source facts and batch/preview metadata persist in PostgreSQL. No broker login is required by this import path. | Do not promise that nothing from an upload is stored or that every logging/crash path creates no copy. Provider/log verification is separate. |
| Third parties | Marketing uses Cloudflare Pages, Google Fonts and Zoho Forms. TradeBoard marketing injects Runable/OneDollarStats analytics (`/runable.js`, events destination `r.lilstts.com`). App source selects Auth0/Zoho transactional delivery and references DigitalOcean PostgreSQL/object storage. | Verify actual vendors, contracts/DPAs, locations, identifiers, consent basis, cookies, access and deletion. Zoho Forms waitlist retention is distinct from Zoho transactional-email retention. |
| AI processing | AI endpoints are disabled in the first invited release. Old GPT-4o quota/inclusion promises were inaccurate. | Before future enablement, approve actual provider, transmitted fields, retention/training terms, user choices and educational-only behavior. No model-behavior guarantee is established. |
| Security | Authorization/session/role controls in source are not a universal encryption or operational-security certification. No field-encryption or instant independent psychology-erasure promise is established. Website preview flags are editable client state. | Verify hosting controls, real tenant/bucket encryption, logs, tests and access protection. Never place private material behind these browser flags. |
| Retention/deletion | Account deletion is asynchronous with retries/receipts and restore suppression. Journal drafts have expiry/cleanup logic. Provider copies, backups, object versions and suppression evidence have separate lifecycles; instant universal erasure is unproven. | Approve a category-specific schedule and exceptions. Release evidence records a category-specific Zoho transactional-log amendment of 60 days; it is not a waitlist, all-record, backup or Auth0 deletion promise. Provider settings and restoration proof remain separate gates. |
| Billing/refunds/cancellation | First-release billing routes are disabled. Marketing's local forms cannot create a paid subscription. Lifetime rates, plan quotas, unrestricted storage, exact cancellation rights and refund guarantees were unapproved. | Preserve planned permanent Free and first-100 Founding Member strategy at $199/year. Final eligibility, renewal, refunds, cancellation and entitlements must be approved and shown before payment. Waitlist entries do not reserve places. |
| Education/advice boundary | Historical analytics/journaling/education only. No execution, personalized buy/sell/hold advice, live signals or predictive entries/exits/stops. | Retain this boundary in future claims, actual recordings and any AI review. Source presence does not establish general release availability. |

## Video and product-media handoff

One Cajun AI channel; no separate TradeBoard channel. Four planned series: How Technology Works; AI Tools, News & Reviews; Software How-To Guides; TradeBoard Tutorials. The legacy handle was not reintroduced. **Channel ownership/URL/stable ID, playlist IDs and approved video IDs: NOT VERIFIED.** No account access was attempted. The historical handoff's monetization figures were not revalidated or repeated as marketing promises.

The hub retains `#tradeboard` and lists all six requested topics: What is TradeBoard?; Getting started; Importing trade history; Understanding the analytics dashboard; Using the trading journal; Reviewing historical trading performance. No card claims a completed video.

The TradeBoard `ProductShowcase` uses static typed capture/tutorial lists and existing card styling. Five screenshot slots cover dashboard, analytics, journal, historical performance and validated import; a sixth slot reserves the short primary demo. All asset/video fields are empty. Existing concept images remain labeled illustrative. Add only captures from approved real application UI, recorded against a stated release SHA using synthetic/redacted data. Confirm visible workflow/claims, readable zooms and annotations, captions, professional narration, and owner approval. Then add verified video IDs/approved image paths to the existing component and hub; no video CMS is needed. No application UI changes were made.

## Waitlist and conversion

Both sites use the same existing Zoho URL whose public title is **TradeBoard Waitlist**:

`https://forms.zohopublic.com/greghaydelgm1/form/TradeBoardWaitlist/formperma/ZesK-fk6NxQJBtB0a818KwRQSZhoyC8ThdQ-Co-J8Wc`

Direct destination GET/render: **PASS** (labeled email field and Submit button observed; no submission). Form identity matches pre-existing source, but Zoho account ownership, receiver delivery, retention and success behavior were not verified through the external account. Direct fallback links remain available. Primary iframes load eagerly and have 520px height. Labels and copy distinguish a waitlist entry from account creation, payment and a founding-place reservation.

Embedded form rendering was observed successfully in both sites during browser checks. Repeat visits also showed blank frames with no surfaced console error; later observations populated the fields. **Rendering consistency/time-to-ready: NOT VERIFIED**; do not turn an earlier successful render into an unconditional integration PASS. A plain static iframe isolation check and the final TradeBoard root both eventually rendered the actual email field. Eager loading is enabled and the primary React iframe now sits outside an animated container, but no stable rendering-time bound was measured. The same provider URL works directly, and the fallback is essential. Resolve repeat rendering/performance acceptance before release; no external form account was modified, and no fake registration was sent.

## External links and live cross-site dependency

GET checks initially covered 71 unique external destinations: 54 PASS, 3 FAIL, 14 NOT VERIFIED. Two 404 article references were replaced with verified official pages and retested HTTP 200: [Anthropic system cards](https://www.anthropic.com/system-cards) and [AMA augmented intelligence](https://www.ama-assn.org/practice-management/digital-health/augmented-intelligence-medicine). The remaining FAIL is `https://cajun-ai.com/pages/youtube.html#tradeboard`: HTTP 200, but the **current production page lacks that anchor**. Corrected local source has the anchor and tutorials. Coordinate a separately authorized Cajun AI release before claiming TradeBoard's canonical cross-site deep link works publicly. Do not substitute an unverified channel or a preview host.

NOT VERIFIED destinations returned anti-bot/payment responses or a fetch failure; these are not proven broken links: `chat.lmsys.org` (fetch failure); `jamanetwork.com`, `midjourney.com`, `openai.com`, `openai.com/index/gpt-4o-system-card/`, `perplexity.ai`, `www.cmegroup.com/education`, `www.mckinsey.com`, the linked McKinsey generative-AI article (403); five linked Investopedia articles (402). They require a normal authorized-browser recheck. Other editorial article assertions were not certified as current product facts by a successful URL response.

## Hosting and no-deployment control

Read-only inspection of the existing Cloudflare dashboard established both repository mappings, production branch `main`, automatic deployments enabled, and **public preview deployments of the existing review branches before this task**. The old handoff's blanket “not deployed” wording was inaccurate for previews. Production heads were unchanged at the observed baselines: Cajun AI `66e49c49b851fcfa9fa5a510ced483714eb3822d`; TradeBoard website `3d5d94481326cb5625e64736130675ee578bb519`.

| Project | Domain/source/build | Existing review preview before this task |
| --- | --- | --- |
| Cajun AI | `cajun-ai.com`, `www.cajun-ai.com`; `greghaydel-arch/cajun-ai-production`; root static output, no build command/functions | `d51eb552-a473-4eb9-8c62-fe6ecc6a6e27`, source `2e295e128c3279d6c2e1687de797a7ff4b728da4` |
| TradeBoard marketing | `trade-board.net`; `greghaydel-arch/tradeboard-website`; root, `bun install && bun run build`, output `dist`, no Pages Functions | `e03944ca-435d-42e8-859f-153938d8bb75`, source `1a8b93f3dd9bec74f6dab92035eb7c65f1854ff0` |

Dashboard settings displayed no deploy hooks. No repository GitHub Actions workflows were found; Cloudflare checks publish assets and therefore cannot be used as a no-deployment test gate here. **Hosted build/canonical Cloudflare execution for the new commits: NOT VERIFIED / intentionally not run.** Local build success is not release permission.

Every task commit starts with `[CF-Pages-Skip]`, Cloudflare's documented deployment-omission prefix; it targets Pages and does not skip local validation. See [official GitHub integration documentation](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/#skipping-a-build-via-a-commit-message). Preserve this prefix for review-only follow-up commits. Hosting settings were not changed. Verify deployed source identities remain at the baselines after each push; record final confirmation in the PR body.

Both repositories are currently **public** according to GitHub metadata; existing PRs cannot provide private review merely by being drafts. No visibility change was made. Do not add private screenshots, customer records, real credentials or confidential review material. Both preview gates ship their comparison logic/browser flags; source is retrievable without authentication. **Private preview protection: FAIL.** Server/hosting authentication requires a separately authorized owner/security decision. Root static Cajun AI publishing can also expose repository documentation; exclude internal review documents from the future public artifact or protect that environment before release.

## Remaining gates and exact next steps

1. ChatGPT independently reviews the final combined diffs and this report; retain `REVIEW_PENDING_CHATGPT` until that review is complete. This task does not sign off its own work.
2. Resolve repeat iframe blank rendering; then, with an owner-designated real submission and appropriate authorization, verify external waitlist receipt/confirmation. Keep direct fallback links.
3. Owner verifies the selected Cajun AI stable channel ID/ownership in the correct YouTube Studio channel. Add links/embeds only after actual video approval; create no separate TradeBoard channel.
4. Approve final UI and capture the real application showcase/tutorials with synthetic/redacted records. No currently missing asset is represented as complete.
5. Reconcile the September 28 draft, processor/cookie/analytics inventory, category-specific retention, payment terms and preview access with owner/counsel/security review. Public signup and billing remain closed.
6. Recheck blocked external links, broader browser/assistive-technology coverage, and hosted route/build behavior under separately authorized controlled-release testing. For a future release, Cajun AI's canonical hub must exist before TradeBoard points users to its live section. Obtain explicit merge/deployment approval separately; none follows from local PASS results.

## Files changed in the implementation commits

- `.gitignore`
- `dist/_redirects`
- `dist/assets/index-DS6Pq93p.js`
- `dist/assets/index-LfY05PQf.css`
- `dist/assets/index-RYhxyKo6.css`
- `dist/assets/index-Y_8sWHSG.js`
- `dist/index.html`
- `index.html`
- `package.json`
- `public/_redirects`
- `src/web/app.tsx`
- `src/web/components/footer.tsx`
- `src/web/components/nav.tsx`
- `src/web/components/product-showcase.tsx`
- `src/web/pages/charts.tsx`
- `src/web/pages/coming-soon.tsx`
- `src/web/pages/features.tsx`
- `src/web/pages/index.tsx`
- `src/web/pages/legal-status.tsx`
- `src/web/pages/legal.tsx`
- `src/web/pages/login.tsx`
- `src/web/pages/preview-gate.tsx`
- `src/web/pages/pricing.tsx`
- `vite/plugins/runable-analytics-plugin.ts`

This handoff also adds this report.
