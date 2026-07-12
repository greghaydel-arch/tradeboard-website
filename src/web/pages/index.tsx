import { Link } from "wouter";
import { motion } from "motion/react";
import {
  Play,
  Brain,
  Plug,
  Smartphone,
  ArrowRight,
  TrendingUp,
  Check,
} from "lucide-react";
import { Reveal } from "../components/reveal";

const features = [
  {
    icon: Play,
    title: "Trade Replay",
    desc: "Relive every trade bar-by-bar. Daily + intraday candles. Learn from every mistake.",
    color: "text-blue",
  },
  {
    icon: Brain,
    title: "Psychology Tracking",
    desc: "Tag your emotions, score your discipline, and see how your mindset drives your P&L.",
    color: "text-cyan",
  },
  {
    icon: Plug,
    title: "Multi-Broker",
    desc: "Connect Webull, Robinhood, or import CSV. Every trade, one dashboard.",
    color: "text-gold",
  },
  {
    icon: Smartphone,
    title: "Desktop + Mobile",
    desc: "Full apps for Windows, Mac, and your phone. Trade anywhere, review everywhere.",
    color: "text-green",
  },
];

const stats = [
  { value: "20+", label: "Analytics dashboards" },
  { value: "3", label: "Broker integrations" },
  { value: "100%", label: "Your data, your control" },
];

export default function Index() {
  return (
    <main id="main-content" className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[120px] -z-10" />

        <div className="max-w-6xl mx-auto px-5 pt-20 pb-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-tb-border text-xs text-text-muted mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                Now in early access
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-display font-extrabold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Trade Smarter,
                <br />
                <span className="gradient-text">Not Harder.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 text-lg text-text-muted max-w-md leading-relaxed"
              >
                The only trading journal built to show you <em>why</em> you win or lose — not
                just that you did. Psychology tracking, Trade Replay, and multi-broker sync,
                all in one dashboard.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/pricing"
                  className="gradient-btn text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-shadow"
                >
                  Start Free <ArrowRight size={18} />
                </Link>
                <Link
                  to="/features"
                  className="border border-tb-border hover:border-text-dim text-text font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  View Features
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-4 text-xs text-text-dim flex items-center gap-1.5"
              >
                <Check size={14} className="text-green" /> Free forever plan · No credit card required
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
                className="mt-5 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 text-xs font-semibold text-gold"
              >
                🔥{" "}
                <Link to="/pricing" className="hover:underline">
                  Founding Member pricing — locked for your first year, first 100 subscribers only
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-btn rounded-2xl blur-2xl opacity-20" />
              <img
                src="/hero-dashboard.png"
                alt="TradeBoard dashboard"
                className="relative rounded-2xl border border-tb-border shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* Stats */}
          <Reveal delay={0.2} className="mt-20 grid grid-cols-3 gap-4 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl gradient-text">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Feature teasers */}
      <section className="max-w-6xl mx-auto px-5 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
            Why TradeBoard
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            Built different. Built to make you better.
          </h2>
          <p className="text-text-muted mt-4">
            Other journals log your trades. TradeBoard helps you understand them —
            and the trader behind them.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="h-full bg-bg-card border border-tb-border rounded-xl p-6 hover:border-blue/40 transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-bg-elevated border border-tb-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className={f.color} size={20} />
                </div>
                <h3 className="font-display font-bold text-lg">{f.title}</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-10">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-cyan hover:text-blue font-medium transition-colors"
          >
            Explore all features <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* CTA band */}
      <section className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-tb-border bg-bg-elevated p-10 md:p-16 text-center">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-blue/20 rounded-full blur-[100px]" />
            <div className="relative">
              <TrendingUp className="mx-auto text-cyan mb-5" size={36} />
              <h2 className="font-display font-extrabold text-3xl md:text-4xl max-w-xl mx-auto">
                Your edge is hiding in your data.
              </h2>
              <p className="text-text-muted mt-4 max-w-md mx-auto">
                Start journaling free today. Find the patterns that make you money — and the ones that don't.
              </p>
              <Link
                to="/pricing"
                className="gradient-btn text-white font-semibold px-7 py-3 rounded-lg inline-flex items-center gap-2 mt-8 transition-shadow"
              >
                Start Free <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
