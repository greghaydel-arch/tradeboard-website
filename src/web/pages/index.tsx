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
  Zap,
  TrendingDown,
  Pencil,
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

const chartBars = [40, 55, 30, 60, 80, 25, 70, 90, 45, 65, 85, 35, 75, 95];

export default function Index() {
  return (
    <main id="main-content" className="pt-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue/20 rounded-full blur-[150px] -z-10" />
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
                className="font-bold leading-[1.1] tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                }}
              >
                Your Trades Tell Everything.
                <br />
                <span className="gradient-text">Start Listening.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 text-base md:text-lg text-text-muted max-w-md leading-relaxed"
              >
                Psychology tracking. Trade Replay. Multi-broker — all in one dashboard.
                The only journal built to show you <em>why</em> you win or lose.
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
                className="mt-5 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 text-xs font-semibold text-gold animate-float"
              >
                <Zap size={14} />
                <Link to="/pricing" className="hover:underline">
                  Founding Member pricing — $199/yr for life. First 100 spots available.
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-btn rounded-2xl blur-3xl opacity-15" />
              <div className="relative bg-[#0f1729] border border-blue/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-tb-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green/60" />
                    </div>
                    <span className="text-[11px] text-text-dim">TradeBoard Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                    <span className="text-[10px] text-text-dim">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 p-5">
                  <div className="bg-bg-card/80 border border-tb-border rounded-xl p-3">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider font-semibold">Total P&L</p>
                    <p className="text-xl font-bold text-green" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+$12,847</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[10px] text-green/70">↑ 14.2%</span>
                      <span className="text-[10px] text-text-dim">this month</span>
                    </div>
                  </div>
                  <div className="bg-bg-card/80 border border-tb-border rounded-xl p-3">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider font-semibold">Win Rate</p>
                    <p className="text-xl font-bold text-cyan" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>68.4%</p>
                    <div className="w-full bg-bg-elevated rounded-full h-1.5 mt-1.5">
                      <div className="bg-gradient-to-r from-cyan to-blue h-1.5 rounded-full" style={{ width: "68%" }} />
                    </div>
                  </div>
                  <div className="bg-bg-card/80 border border-tb-border rounded-xl p-3">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider font-semibold">Best Trade</p>
                    <p className="text-xl font-bold text-gold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+$2,340</p>
                    <p className="text-[10px] text-text-dim">NVDA · 5 days ago</p>
                  </div>
                </div>

                <div className="px-5 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>P&L Trend — Last 30 Days</p>
                    <div className="flex items-center gap-3 text-[10px] text-text-dim">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green" /> Profit</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red/60" /> Loss</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-24">
                    {chartBars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.05, ease: "easeOut" }}
                        className={`w-full rounded-t-md ${i % 3 === 2 ? "bg-red/60" : "bg-green/70"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 p-5 pt-3">
                  <div className="bg-bg-card/80 border border-tb-border rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-text-dim uppercase tracking-wider font-semibold">Psychology</p>
                      <p className="text-lg font-bold text-cyan" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>A-</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                      <Pencil size={16} className="text-cyan" />
                    </div>
                  </div>
                  <div className="bg-bg-card/80 border border-tb-border rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-text-dim uppercase tracking-wider font-semibold">Playbook</p>
                      <p className="text-lg font-bold text-gold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Momentum</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-green">72% WR</p>
                      <p className="text-[10px] text-text-dim">24 trades</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 animate-shimmer" />
              </div>
            </motion.div>
          </div>

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