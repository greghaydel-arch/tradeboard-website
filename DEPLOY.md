# TradeBoard Website — Cloudflare Pages Deployment

Domain: trade-board.net  
GitHub: greghaydel-arch/tradeboard-website  
Host: Cloudflare Pages (free)

---

## How the site works right now

| URL | What visitors see |
|---|---|
| `trade-board.net` | Coming Soon page + email waitlist form |
| `trade-board.net/preview` | Password gate |
| `trade-board.net/preview` (correct password) | Full site unlocked — Home, Features, Pricing, Charts |

**Preview password:** `CajunAI2026!`  
To change it: open `packages/web/src/web/lib/preview-auth.ts` and update `PREVIEW_PASSWORD`.

## When you're ready to go fully public

Open `packages/web/src/web/app.tsx` and change this one line at the top of the `/` route:

```
// Change this:
{isPreviewUnlocked() ? ( ... ) : ( <ComingSoon /> )}

// To just show the full site to everyone:
<><Nav /><Index /><Footer /></>
```

Then push to GitHub — Cloudflare auto-deploys in ~60 seconds.

---

## Setting up the Waitlist Email Form (Formspree — Free)

The coming soon page has an email capture form. To actually receive those emails:

1. Go to [formspree.io](https://formspree.io) → create a free account
2. Create a new form → copy your form ID (looks like `xpzgkwqr`)
3. Open `packages/web/src/web/pages/coming-soon.tsx`
4. Find this line:
   ```
   const res = await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
   ```
5. Replace `REPLACE_WITH_YOUR_ID` with your actual Formspree ID
6. Push to GitHub — done. Emails arrive in your inbox.

---

## Step 1 — Push to GitHub

1. Open **GitHub Desktop** on your Windows machine
2. Click **File → Add Local Repository**
3. Browse to wherever you unzipped this folder (e.g. `C:\Users\gregh\Projects\tradeboard-website`)
4. Click **"create a repository"** when prompted
5. Set name: `tradeboard-website`
6. Click **Publish repository**
   - Organization: `greghaydel-arch`
   - Uncheck "Keep this code private" (optional)
7. Click **Publish Repository**

---

## Step 2 — Connect to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Left sidebar → **Workers & Pages**
3. Click **Create** → **Pages** tab → **Connect to Git**
4. Authorize GitHub → select `tradeboard-website` repo
5. Click **Begin setup**

### Build settings:
| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `bun install && cd packages/web && bun run build` |
| Build output directory | `packages/web/dist` |
| Root directory | *(leave blank)* |

6. Click **Save and Deploy** — first build takes ~60 seconds

---

## Step 3 — Connect trade-board.net Domain

1. Cloudflare Pages → your project → **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter: `trade-board.net` → **Continue** → **Activate domain**
4. Repeat for `www.trade-board.net`

Done — live at trade-board.net within minutes.

---

## Future Updates

Every push in GitHub Desktop → Cloudflare auto-deploys in ~60 seconds.

---

## Swapping In Real App Screenshots (Charts/Data page)

Replace these files in `packages/web/public/`:
- `hero-dashboard.png` — homepage hero
- `feature-replay.png` — Trade Replay block
- `feature-psychology.png` — Psychology block
- `feature-broker.png` — Multi-broker block
- `feature-devices.png` — Desktop/Mobile block

Commit and push — auto-deploys.

---

© 2026 Cajun AI LLC. All rights reserved. TradeBoard is a product of Cajun AI LLC.
