# No-credit-card preview review and retirement proposal

Status: `REVIEW_PENDING_CHATGPT`. Inspection only; no provider setting or deployment was changed. Zero Trust billing onboarding is stopped. No payment information was entered, no plan or overage consent was accepted, and no new subscription, paid feature, Worker, recurring job, credential, or deployment was created. No pushes, PR writes, merges, DNS, or DOT actions occurred. Local implementation commits and previous reports remain intact.

This supersedes any earlier suggestion to complete Zero Trust enrollment. The owner's current requirement is local development, no new payment method, no new recurring charges, and no uncapped spending authorization. An existing account payment method and annual registrar renewals were observed in the previous billing review; this task neither removes nor changes them. A claim that the whole existing account has no payment method would be false. No-card preview work must not be confused with changing those existing registrar arrangements.

## Verified current protection and limits

At 2026-10-16T17:02:31.940Z, cookie-free HTTPS GETs with redirects disabled checked all 38 hosted preview URLs and both branch aliases. All 40 returned HTTP 302 to the existing Cloudflare Access login domain, with only a small redirect body, not website content. Five production URLs returned HTTP 200 and their website titles: `cajun-ai-production.pages.dev`, `tradeboard-website.pages.dev`, `cajun-ai.com`, `www.cajun-ai.com`, and `trade-board.net`.

The two existing Access applications were re-read: each protects only `*.<project>.pages.dev`, with one Allow Members email rule matching the signed-in owner, and no bypass/Everyone rule. Policy IDs and destination details are in the main website validation report. Production roots and custom domains are not included. Cloudflare One Settings still says no plan has been chosen and warns of possible disruptions. This is a real anonymous-denial PASS **now**, not a certified ongoing no-card Access service. Authenticated owner access, non-owner authenticated rejection, and future Access availability remain NOT VERIFIED. This review intentionally did not resume email-code login or billing setup.

Both branch-control dialogs were inspected without saving: production `main`, automatic production deployments enabled, preview Custom branches, include `*`, exclude exact `marketing/20261016-release-truth`. The `None (Disable automatic branch deployments)` option exists. It is **not selected or applied** by this task.

## No-credit-card options and exact recommendation

| Option | Verified behavior / security implication | Recommendation |
| --- | --- | --- |
| Local builds and browser tests on loopback only | No new cloud deployment or billing enrollment; keep dev servers bound to loopback and use synthetic/redacted data | Preferred development workflow; no tunnels or new hosting services |
| Preview branches = None on both projects | Existing dashboard offers this without checkout; official docs say it stops automatic preview builds. It does not revoke old hashes, stop manual deployments, or change production automatic deployments | Prepare now; apply only after owner approves the settings change |
| Retain existing Access, no enrollment | All 40 preview endpoints deny anonymous website content now; no ongoing availability guarantee because no plan is selected | Preserve as the current guard; do not disable/delete the applications or broaden policies |
| Retire published preview artifacts | Removes hosted review copies rather than relying on a billing-dependent login flow; deletion loses the hosted artifact/history and requires explicit approval | Propose exact Preview-only UUID allowlist below; never delete a project or Production record |

Exact proposed settings operation for **each** of `cajun-ai-production` and `tradeboard-website`: Workers & Pages > project > Settings > Build > Branch control > Edit; select `None (Disable automatic branch deployments)` under Preview branch; keep Production branch `main` and the checked `Enable automatic production branch deployments` box unchanged; Save. Reopen and verify None, main, and the unchanged checkbox. Keep Preview access restricted. Do not disconnect GitHub, alter production controls, DNS/custom domains, builds, runtime, bindings, or billing. Expected incremental recurring fee for this setting is $0; it creates no service or resource and consumes no build allowance. A test push/build is neither needed nor authorized.

## Safe retirement proposal — not executed

1. First obtain approval for the reversible None setting and apply/read it back. No manual preview build is proposed.
2. Preserve all local commits/reports and re-read live project/environment/UUID/alias before any approved deletion. The inventory below is an explicit list, not authorization. If history has changed, stop and reconcile it.
3. There are 36 older hosted previews (29 Cajun AI, 7 TradeBoard) without the current branch alias, plus two current aliased previews. Older artifacts are the first retirement candidates after owner approval; skip 21 records with no hosted artifact. Preserve all 27 Production history records, including both current production UUIDs, without exception.
4. Dashboard deployment details expose Manage deployment > Delete deployment (observed on the latest TradeBoard preview), but Delete was not clicked and no deletion behavior was tested. Use an approved, exact Preview UUID, never project deletion or a broad age-based sweep. Keep Access in place throughout. After each approved deletion, request that hash without cookies and require unavailable content (normally 404), not a different preview. An Access redirect alone does not prove deletion; also verify the record is removed from the dashboard. Recheck public production after a bounded batch.
5. Current aliased previews need special handling. The [current API reference](https://developers.cloudflare.com/api/resources/pages/subresources/projects/subresources/deployments/methods/delete/) documents `force` for a **non-production** deployment with an active alias, and [Wrangler](https://developers.cloudflare.com/workers/wrangler/commands/pages/#deployment-delete) documents alias-aware deletion. However, the [Pages preview guide](https://developers.cloudflare.com/pages/configuration/preview-deployments/#delete-preview-deployments) still says the latest branch deployment cannot be deleted. This discrepancy is unresolved; do not promise that all aliases can be retired. Obtain owner approval and clarify provider-supported behavior before attempting either current aliased UUID. Do not deploy a blank replacement, change production, or remove Access to work around it.
6. After any future approved full preview retirement, verify every old hash and both aliases no longer serve review material and production remains public. Keep Access until this is proven, including direct asset/document routes where applicable. Deleting artifacts cannot revoke any copies downloaded while they were previously public. Public GitHub repositories also remain separate from hosting Access; do not push private material.

The exact two aliased UUIDs requiring separate handling are Cajun `d51eb552-a473-4eb9-8c62-fe6ecc6a6e27` and TradeBoard `e03944ca-435d-42e8-859f-153938d8bb75`. Both aliases are `marketing-20261016-release-t.<project>.pages.dev`; both were directly tested. Do not remove Access to avoid onboarding. No verified ongoing no-card hosted authentication alternative has been established; local-only review plus approved preview retirement is the preferred path.

Reference: [branch deployment controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/) describe None; [preview aliases](https://developers.cloudflare.com/pages/configuration/preview-deployments/#preview-aliases) explain why older hash URLs persist. `noindex`, browser storage flags, or removing a navigation link are not authentication or artifact retirement.

## Tests and evidence

- PASS: all seven dashboard history pages inventoried (Cajun 5, TradeBoard 2); 62 + 24 unique records reconciled with displayed totals. A transient pagination snapshot retained old rows; deduplication exposed it, and the missing page was re-read before accepting the inventory.
- PASS: 38 historical preview hash URLs + 2 aliases returned Access redirects; no billing completion was performed.
- PASS: 5 production roots/custom domains returned public 200 responses.
- PASS: both Access applications and exact owner-email rules re-read; both current branch-control dialogs inspected, then canceled.
- NOT VERIFIED / not run: actual None save, any deletion, post-deletion behavior, alias-aware forced deletion, owner authentication, ongoing Access availability or guaranteed $0 cap for enrollment.
- Local raw evidence: `C:/webull-dashboard/.website-review/qa/cloudflare-deployment-inventory-2026-10-16.json`, `historical-preview-access-results-2026-10-16.json`, and `check-historical-previews.cjs`. Query strings with transient Access metadata are omitted. No authentication secrets or account payment details are included in this report.

## Complete inventory for `tradeboard-website`

24 records: 8 hosted previews, 2 skipped/no-artifact preview records, 14 Production records. All Preview records use `marketing/20261016-release-truth`. Current production UUID: `3b3f3ab1-3985-4d89-b55b-fce199866bc0`.

### Hosted previews

| Full deployment UUID | URL | Source commit | Current anonymous test | Retirement proposal |
| --- | --- | --- | --- | --- |
| `e03944ca-435d-42e8-859f-153938d8bb75` | https://e03944ca.tradeboard-website.pages.dev | `1a8b93f3dd9bec74f6dab92035eb7c65f1854ff0` | PASS: 302 to Access | HOLD: current branch alias; provider/owner handling required |
| `826b2b86-d4fa-4fc4-b913-172abd44ca14` | https://826b2b86.tradeboard-website.pages.dev | `d9ae54d898b3ca497359e945742991d49a179dac` | PASS: 302 to Access | Older candidate; delete only after explicit approval |
| `557a4742-62a9-48f4-aed3-1e0bef19d2b6` | https://557a4742.tradeboard-website.pages.dev | `b30536ff507a3917abda0e5060d4df6651f7df21` | PASS: 302 to Access | Older candidate; delete only after explicit approval |
| `21a8e385-7741-40cd-9678-67c07ce0da42` | https://21a8e385.tradeboard-website.pages.dev | `8f968fed0c48745c0f7b4ca7075ccfb96659794d` | PASS: 302 to Access | Older candidate; delete only after explicit approval |
| `d648e4e4-e1eb-47f1-b7d8-49a8f0019784` | https://d648e4e4.tradeboard-website.pages.dev | `ef84474d306908d94eb98ea5adccfc1b33a02963` | PASS: 302 to Access | Older candidate; delete only after explicit approval |
| `6d83c694-16e2-48c9-b505-00023a94a666` | https://6d83c694.tradeboard-website.pages.dev | `fc7f8f4005c823cea5f1fe611482acc4f3fe443c` | PASS: 302 to Access | Older candidate; delete only after explicit approval |
| `559f42f2-0cca-4211-a701-8467095e56ce` | https://559f42f2.tradeboard-website.pages.dev | `f7969a52d169a8279e466122695f4bd3cb27f5df` | PASS: 302 to Access | Older candidate; delete only after explicit approval |
| `4a74961a-ad0f-4747-bd10-04046830ce44` | https://4a74961a.tradeboard-website.pages.dev | `3d5d94481326cb5625e64736130675ee578bb519` | PASS: 302 to Access | Older candidate; delete only after explicit approval |

### Skipped preview records — no hosted URL listed

- `8f6bd992-06e4-4255-be0c-3c0425f41a20` — source `d47c09e5aac7cc8cbcd112d9ae8a1fc92444f3b9`; no artifact listed, not proposed for deletion.
- `711a2878-89bc-44be-82a2-f171edffaa0c` — source `5639dd437ef9e3a4cde8ddb93ad131dd59935d9e`; no artifact listed, not proposed for deletion.

### Production preservation list — never included in retirement

- `3b3f3ab1-3985-4d89-b55b-fce199866bc0` — `main`, source `3d5d94481326cb5625e64736130675ee578bb519`; PRESERVE.
- `67efb15b-b6c4-47e6-9563-b507b6db017d` — `main`, source `c0df5952c9c286f75df6b91c540b3dedabb8e76b`; PRESERVE.
- `34537f03-b515-4281-a217-bf2a9737a92b` — `main`, source `7c55728789a4ac35bf78575c59772ae11b4d2628`; PRESERVE.
- `7dded3d4-005d-47c3-bff5-8ef331f28de0` — `main`, source `e669d70611af2322426a7cb4ef09eb1d0e95ca15`; PRESERVE.
- `6969d305-dd94-4505-aee8-5b75cda21fa0` — `main`, source `e9ddaf1c7863fae67e49a3891ecaae4b76c3ba2b`; PRESERVE.
- `6e544b8e-06d8-4e73-97ca-7fb97184b384` — `main`, source `89f1eee00eb627e5e3298048c656ff799d2c5940`; PRESERVE.
- `1de48d3f-59e1-46cf-9bed-80b83e5913f0` — `main`, source `8c39eec6aa30224e2eb21b8358a4848230a872af`; PRESERVE.
- `eb69b014-4297-41e8-bd2f-b1e1e1c9084b` — `main`, source `64b9ed2f51a17aa16eec6d3d7a1df77f44201eaa`; PRESERVE.
- `fe8d7fb4-64b4-4eec-9991-07971ed22db5` — `main`, source `0a7920b55a05fabd735c727eb729ebcebe60fc8b`; PRESERVE.
- `39a81388-1cf3-4086-b8db-0d94d5957b56` — `main`, source `8339f117fc797e139d5f70e7e8b3e22358bb038b`; PRESERVE.
- `fa4e52d0-307a-4a93-89f6-337660b8dc87` — `main`, source `be9175d2e776fb481760a20bd94b0896b580b215`; PRESERVE.
- `32dbb3ee-dae2-4508-a0b9-eeaacdbad344` — `main`, source `40c1942fd1bdac0eac2ccb2e1e8af7f94e6a67ef`; PRESERVE.
- `dcc4a904-fece-4998-9486-bf53d1ac91ab` — `main`, source `7d813f271f957f43a7d4f9822098dc24318d0216`; PRESERVE.
- `05b261d5-9cc0-4dca-91ec-0f1e7c087dc3` — `main`, source `355ccabe52e4d6ff23574df0c3343545fb6eb8ba`; PRESERVE.
