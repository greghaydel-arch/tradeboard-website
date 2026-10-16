import { motion } from "motion/react";
import { Check, X, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../components/reveal";

const foundingFeaturesPro = [
  { text: "Unlimited trade history", included: true },
  { text: "All 20+ analytics dashboards", included: true },
  { text: "Direct broker sync (future certification)", included: false },
  { text: "Psychology & mood tracking", included: true },
  { text: "Trade Replay (daily candles)", included: true },
  { text: "Trade tagging & unlimited playbooks", included: true },
  { text: "Correlation analysis", included: true },
  { text: "Monthly & weekly summaries", included: true },
  { text: "Native desktop / mobile apps (planned)", included: false },
  { text: "Full education hub", included: true },
  { text: "Unlimited export (CSV & PDF)", included: true },
  { text: "Screenshot attachments — cloud storage (unlimited)", included: true },
  { text: "AI Trade Coach — GPT-4o (300 queries/mo)", included: true },
  { text: "Stock backtesting", included: false },
  { text: "Tax report + wash sale flagging", included: false },
];

const tiers = [
  {
    name: "Free",
    monthly: "$0",
    annual: "$0",
    annualMonthly: "$0",
    cadence: "forever",
    tagline: "Permanent Free tier planned; launch details are being finalized.",
    cta: "Start Free",
    highlight: false,
    features: [
      { text: "45 days of trade history", included: true },
      { text: "6 core charts only", included: true },
      { text: "Validated CSV import workflow (invited test)", included: true },
      { text: "1 playbook", included: true },
      { text: "Web UI under development", included: false },
      { text: "Web access", included: true },
      { text: "Platform how-to articles", included: true },
      { text: "Screenshot attachments (10 max)", included: true },
      { text: "Psychology & mood tracking", included: false },
      { text: "Full analytics dashboards (20+)", included: false },
      { text: "Trade Replay", included: false },
      { text: "Direct broker sync (not in first release)", included: false },
      { text: "Export (CSV / PDF)", included: false },
    ],
  },
  {
    name: "Founding Member",
    monthly: null,
    annual: "$199",
    annualMonthly: "$17",
    cadence: "/yr",
    tagline: "Proposed $199/yr offer for first 100 subscribers; not open yet.",
    cta: "Join the First 100",
    highlight: true,
    badge: "Founding Member",
    annualOnly: true,
    features: foundingFeaturesPro,
  },
  {
    name: "Pro",
    monthly: "$29",
    annual: "$278",
    annualMonthly: "$23",
    cadence: "/mo",
    tagline: "The full toolkit for serious traders.",
    cta: "Go Pro",
    highlight: false,
    features: [
      { text: "Unlimited trade history", included: true },
      { text: "All 20+ analytics dashboards", included: true },
      { text: "Direct broker sync (future certification)", included: false },
      { text: "Psychology & mood tracking", included: true },
      { text: "Trade Replay (daily candles)", included: true },
      { text: "Trade tagging & unlimited playbooks", included: true },
      { text: "Correlation analysis", included: true },
      { text: "Monthly & weekly summaries", included: true },
      { text: "Native desktop / mobile apps (planned)", included: false },
      { text: "Full education hub", included: true },
      { text: "Unlimited export (CSV & PDF)", included: true },
      { text: "Screenshot attachments — cloud storage (unlimited)", included: true },
      { text: "AI Trade Coach — GPT-4o (300 queries/mo)", included: true },
      { text: "Stock backtesting", included: false },
      { text: "Tax report + wash sale flagging", included: false },
    ],
  },
  {
    name: "Pro+",
    monthly: "$49",
    annual: "$470",
    annualMonthly: "$39",
    cadence: "/mo",
    tagline: "Every edge, plus what's coming next.",
    cta: "Go Pro+",
    highlight: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "AI Trade Coach — GPT-4o (1,000 queries/mo)", included: true },
      { text: "Stock backtesting", included: true },
      { text: "Intraday trade replay", included: true },
      { text: "Advanced correlation analysis", included: true },
      { text: "Tax report + wash sale flagging", included: true },
      { text: "Unlimited screenshot attachments", included: true },
      { text: "Priority support", included: true },
      { text: "Early access to new features", included: true },
    ],
  },
];

const faq = [
  {
    q: "Is the free plan really free forever?",
    a: "Yes. No timer, no credit card. The free plan is your permanent starting point — keep it as long as you like. You'll just hit limits on history, dashboards, and features.",
  },
  {
    q: "What does 'Founding Member' mean?",
    a: "The first 100 subscribers get Pro at $199/yr — locked in for life as long as your subscription stays active. That's 28% off the regular annual price, forever. After the first 100 spots are filled, this offer goes away permanently.",
  },
  {
    q: "What happens if I cancel my Founding Member plan?",
    a: "Your Founding Member rate is yours as long as your subscription stays active. If you cancel and come back later, the Founding Member rate is no longer available. This keeps the offer exclusive to the first 100 who commit.",
  },
  {
    q: "What exactly does 'limited' mean on Free?",
    a: "The permanent Free plan is proposed. Exact history, dashboard, import, and journal limits will be finalized after release certification.",
  },
  {
    q: "Are direct broker connections supported?",
    a: "No. Initial invited testing is limited to one validated CSV import format; no direct broker sync is enabled. Additional formats or read-only connections require certification.",
  },
  {
    q: "Are native mobile apps available?",
    a: "Not yet. Native iOS and Android applications are planned and are not part of the first invited release.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Upgrade, downgrade, or cancel whenever you want. No contracts, no lock-ins.",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <main id="main-content" className="pt-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue/15 rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-10 text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan text-sm font-semibold uppercase tracking-wider"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display font-extrabold text-4xl md:text-5xl mt-3"
          >
            Simple, honest <span className="gradient-text">pricing.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-text-muted mt-5 max-w-lg mx-auto"
          >
            Plan preview only — no paid checkout is open. Features, pricing, and entitlements require final approval before launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 inline-flex items-center gap-3 bg-bg-card border border-tb-border rounded-full px-2 py-2"
          >
            <button
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${!annual ? "bg-blue text-white" : "text-text-muted hover:text-text"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-blue text-white" : "text-text-muted hover:text-text"}`}
            >
              Annual
              <span className="bg-gold/20 text-gold text-xs font-bold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
          {annual && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-text-dim mt-2"
            >
              Billed annually — Founding Member $199/yr · Pro saves $58/yr · Pro+ saves $118/yr
            </motion.p>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid md:grid-cols-4 gap-6 items-start">
          {tiers.map((t, i) => {
            const displayPrice =
              t.name === "Free"
                ? t.monthly
                : t.annualOnly
                ? t.annual
                : annual
                ? `${t.annualMonthly}`
                : t.monthly;
            const subLabel =
              t.name === "Free"
                ? "forever"
                : t.annualOnly
                ? "/yr"
                : annual
                ? "/mo, billed annually"
                : "/mo";

            return (
              <Reveal key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-2xl p-7 h-full flex flex-col ${t.highlight && !t.annualOnly ? "bg-bg-elevated border-2 border-transparent" : t.annualOnly ? "bg-bg-elevated border-2 border-transparent" : "bg-bg-card border border-tb-border"}`}
                  style={t.highlight ? { backgroundImage: "linear-gradient(#161c2d, #161c2d), linear-gradient(135deg, #f59e0b, #d97706)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" } : undefined}
                >
                  {t.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap size={12} />
                      {t.badge}
                    </span>
                  )}
                  {t.highlight && !t.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-btn text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-display font-bold text-xl">{t.name}</h3>
                  <p className="text-sm text-text-muted mt-1 min-h-[2.5rem]">{t.tagline}</p>

                  <div className="mt-4 flex items-end gap-1">
                    <span className="font-display font-extrabold text-4xl">{displayPrice}</span>
                    <span className="text-text-dim text-xs mb-2">{subLabel}</span>
                  </div>

                  {t.annualOnly && (
                    <>
                      <p className="text-xs mt-0.5">
                        <span className="line-through text-text-dim/60">$278/yr</span>{" "}
                        <span className="text-gold font-semibold">Save $79/yr</span>
                      </p>
                      {!annual && (
                        <p className="text-[10px] text-gold font-semibold mt-1">
                          Founding offer will be annual-only if launched
                        </p>
                      )}
                    </>
                  )}

                  {annual && t.name === "Pro" && (
                    <p className="text-xs text-gold mt-0.5">$278/yr — 2 months free</p>
                  )}
                  {annual && t.name === "Pro+" && (
                    <p className="text-xs text-gold mt-0.5">$470/yr — 2 months free</p>
                  )}

                  {t.annualOnly && (
                    <div className="mt-3 bg-gold/10 border border-gold/30 rounded-lg px-3 py-2 text-center">
                      <p className="text-xs font-bold text-gold">
                        Founding offer planned for the first 100 subscribers
                      </p>
                      <p className="text-[10px] text-text-dim mt-0.5">Subject to published launch terms</p>
                    </div>
                  )}

                  <a
                    href="https://cajun-ai.com/pages/tradeboard.html"
                    className={`mt-6 text-center font-semibold px-5 py-3 rounded-lg transition-all ${t.annualOnly ? "bg-gold text-black hover:bg-gold/90" : t.highlight ? "gradient-btn text-white" : "border border-tb-border hover:border-text-dim text-text"}`}
                  >
                    Join Waitlist
                  </a>

                  {t.annualOnly && !annual && (
                    <p className="text-[10px] text-text-dim mt-2 text-center">
                      Annual-only offer — purchases not yet open
                    </p>
                  )}

                  <ul className="mt-7 space-y-3 flex-1">
                    {t.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm">
                        {f.included ? (
                          <>
                            <Check className="text-green mt-0.5 shrink-0" size={16} aria-hidden="true" />
                            <span className="sr-only">Included: </span>
                          </>
                        ) : (
                          <>
                            <X className="text-text-dim mt-0.5 shrink-0" size={16} aria-hidden="true" />
                            <span className="sr-only">Not included: </span>
                          </>
                        )}
                        <span className={f.included ? "text-text-muted" : "text-text-dim"}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="text-center mt-10">
          <p className="text-sm text-text-dim">
            Native mobile apps are planned, not available. All plans and pricing here are proposals.
          </p>
        </Reveal>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-16">
        <Reveal className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl">Questions, answered</h2>
        </Reveal>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <div className="bg-bg-card border border-tb-border rounded-xl p-5">
                <h3 className="font-semibold text-text">{item.q}</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-tb-border bg-bg-elevated p-10 md:p-14 text-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-blue/20 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl">
                Join the launch waitlist.
              </h2>
              <p className="text-text-muted mt-4">We will share verified features and signup details before public launch.</p>
              <a
                href="https://cajun-ai.com/pages/tradeboard.html"
                className="gradient-btn text-white font-semibold px-7 py-3 rounded-lg inline-flex items-center gap-2 mt-8 transition-shadow"
              >
                Join Waitlist <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}