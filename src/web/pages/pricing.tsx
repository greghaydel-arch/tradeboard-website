import { Link } from "wouter";
import { motion } from "motion/react";
import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../components/reveal";

const tiers = [
  {
    name: "Free",
    monthly: "$0",
    annual: "$0",
    annualMonthly: "$0",
    cadence: "forever",
    tagline: "Try it. Keep it. But you'll hit the ceiling fast.",
    cta: "Start Free",
    highlight: false,
    features: [
      { text: "45 days of trade history", included: true },
      { text: "6 core charts only", included: true },
      { text: "1 broker connection", included: true },
      { text: "1 playbook", included: true },
      { text: "Mobile app (basic charts only)", included: true },
      { text: "Web access", included: true },
      { text: "Platform how-to articles", included: true },
      { text: "Screenshot attachments (10 max)", included: true },
      { text: "Psychology & mood tracking", included: false },
      { text: "Full analytics dashboards (20+)", included: false },
      { text: "Trade Replay", included: false },
      { text: "Multi-broker support", included: false },
      { text: "Export (CSV / PDF)", included: false },
    ],
  },
  {
    name: "Pro",
    monthly: "$29",
    annual: "$278",
    annualMonthly: "$23",
    cadence: "/mo",
    tagline: "The full toolkit for serious traders.",
    cta: "Go Pro",
    highlight: true,
    features: [
      { text: "Unlimited trade history", included: true },
      { text: "All 20+ analytics dashboards", included: true },
      { text: "Multi-broker support", included: true },
      { text: "Psychology & mood tracking", included: true },
      { text: "Trade Replay (daily candles)", included: true },
      { text: "Trade tagging & unlimited playbooks", included: true },
      { text: "Correlation analysis", included: true },
      { text: "Monthly & weekly summaries", included: true },
      { text: "Windows desktop + full mobile apps", included: true },
      { text: "Full education hub", included: true },
      { text: "Unlimited export (CSV & PDF)", included: true },
      { text: "Screenshot attachments — cloud storage (unlimited)", included: true },
      { text: "AI Trade Coach — GPT-3.5 (50 queries/mo)", included: true },
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
      { text: "AI Trade Coach — GPT-4o (unlimited queries)", included: true },
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

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

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
            Start free, forever. Upgrade when you want more. No trial timers, no surprises.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 inline-flex items-center gap-3 bg-bg-card border border-tb-border rounded-full px-2 py-2"
          >
            <button
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                !annual ? "bg-blue text-white" : "text-text-muted hover:text-text"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? "bg-blue text-white" : "text-text-muted hover:text-text"
              }`}
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
              Billed annually — Pro saves $58/yr · Pro+ saves $118/yr
            </motion.p>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t, i) => {
            const displayPrice =
              t.name === "Free"
                ? t.monthly
                : annual
                ? `$${t.annualMonthly}`
                : t.monthly;
            const subLabel =
              t.name === "Free"
                ? "forever"
                : annual
                ? "/mo, billed annually"
                : "/mo";

            return (
              <Reveal key={t.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-7 h-full flex flex-col ${
                    t.highlight
                      ? "bg-bg-elevated border-2 border-transparent"
                      : "bg-bg-card border border-tb-border"
                  }`}
                  style={
                    t.highlight
                      ? {
                          backgroundImage:
                            "linear-gradient(#161c2d, #161c2d), linear-gradient(135deg, #2563eb, #06b6d4)",
                          backgroundOrigin: "border-box",
                          backgroundClip: "padding-box, border-box",
                        }
                      : undefined
                  }
                >
                  {t.highlight && (
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
                  {annual && t.name !== "Free" && (
                    <p className="text-xs text-gold mt-0.5">
                      ${t.annual}/yr — 2 months free
                    </p>
                  )}

                  <Link
                    to="/login"
                    className={`mt-6 text-center font-semibold px-5 py-3 rounded-lg transition-all ${
                      t.highlight
                        ? "gradient-btn text-white"
                        : "border border-tb-border hover:border-text-dim text-text"
                    }`}
                  >
                    {t.cta}
                  </Link>

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
                        <span className={f.included ? "text-text-muted" : "text-text-dim"}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="text-center mt-10">
          <p className="text-sm text-text-dim">
            Mobile app included on every plan · Annual billing available at launch
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 py-16">
        <Reveal className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl">Questions, answered</h2>
        </Reveal>
        <div className="space-y-4">
          {[
            {
              q: "Is the free plan really free forever?",
              a: "Yes. No timer, no credit card. The free plan is your permanent starting point — keep it as long as you like. You'll just hit limits on history, dashboards, and features.",
            },
            {
              q: "What exactly does 'limited' mean on Free?",
              a: "45 days of trade history (Pro gets unlimited), 6 charts instead of 20+, no psychology tracking, no trade replay, no export, and 1 broker. You can see what you're missing on each card above.",
            },
            {
              q: "Which brokers do you support?",
              a: "Webull and Robinhood connect directly. You can also import a CSV from virtually any broker. More direct integrations are on the way.",
            },
            {
              q: "Do I get the mobile app on the free plan?",
              a: "Yes. The mobile app is available on every plan — free users get basic charts, Pro and Pro+ unlock the full experience.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Absolutely. Upgrade, downgrade, or cancel whenever you want. No contracts, no lock-ins.",
            },
          ].map((item, i) => (
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
                Start free in 60 seconds.
              </h2>
              <p className="text-text-muted mt-4">No credit card. No commitment.</p>
              <Link
                to="/login"
                className="gradient-btn text-white font-semibold px-7 py-3 rounded-lg inline-flex items-center gap-2 mt-8 transition-shadow"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
