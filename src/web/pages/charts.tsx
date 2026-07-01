import { Link } from "wouter";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/reveal";

const gallery = [
  {
    img: "/hero-dashboard.png",
    title: "Performance Dashboard",
    desc: "Your complete P&L picture — equity curve, win rate, daily breakdown, and trade history in one view.",
    span: "lg:col-span-2",
    badges: null as null | { label: string; color: string; note: string }[],
  },
  {
    img: "/feature-psychology.png",
    title: "Psychology Analytics",
    desc: "Mood-to-P&L correlation, discipline scoring, and emotion trends.",
    span: "",
    badges: null as null | { label: string; color: string; note: string }[],
  },
  {
    img: "/feature-replay.png",
    title: "Trade Replay",
    desc: "Step through any trade bar-by-bar with entry and exit markers.",
    span: "",
    badges: null as null | { label: string; color: string; note: string }[],
  },
  {
    img: "/feature-broker.png",
    title: "Multi-Broker View",
    desc: "Connect Webull directly or import a CSV from any broker — all trades normalized into one unified dashboard.",
    span: "lg:col-span-2",
    badges: [
      { label: "Webull", color: "#00c0ff", note: "Direct" },
      { label: "Robinhood", color: "#00c805", note: "CSV" },
      { label: "TD / Schwab", color: "#00883a", note: "CSV" },
      { label: "IBKR", color: "#e8001c", note: "CSV" },
      { label: "Tastytrade", color: "#ff5900", note: "CSV" },
      { label: "Alpaca", color: "#e5cb00", note: "CSV" },
    ] as { label: string; color: string; note: string }[],
  },
];

export default function Charts() {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-cyan/15 rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-12 text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan text-sm font-semibold uppercase tracking-wider"
          >
            Charts & Data
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display font-extrabold text-4xl md:text-5xl mt-3 max-w-2xl mx-auto leading-tight"
          >
            See your trading like <span className="gradient-text">never before.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-text-muted mt-5 max-w-xl mx-auto"
          >
            20+ dashboards built to turn raw trade data into the insights that actually
            change how you trade.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08} className={g.span}>
              <div className="group bg-bg-card border border-tb-border rounded-2xl overflow-hidden hover:border-blue/40 transition-colors h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.title}
                    className="w-full group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg">{g.title}</h3>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">{g.desc}</p>
                  {g.badges && (
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {g.badges.map((b) => (
                          <span
                            key={b.label}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border"
                            style={{
                              color: b.color,
                              borderColor: b.color + "40",
                              background: b.color + "12",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: b.color }}
                            />
                            {b.label}
                            <span className="opacity-60 font-normal">{b.note}</span>
                          </span>
                        ))}
                      </div>
                      <p className="text-[10px] text-text-dim mt-3 leading-relaxed">
                        Broker names and logos are trademarks of their respective owners. TradeBoard is not affiliated with or endorsed by any broker listed above.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12">
        <Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { value: "20+", label: "Dashboards" },
              { value: "Real-time", label: "Data sync" },
              { value: "Every", label: "Metric that matters" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-bg-card border border-tb-border rounded-xl p-6 text-center"
              >
                <div className="font-display font-extrabold text-3xl gradient-text">
                  {s.value}
                </div>
                <div className="text-sm text-text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-tb-border bg-bg-elevated p-10 md:p-14 text-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan/20 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl">
                Put your data to work.
              </h2>
              <p className="text-text-muted mt-4 max-w-md mx-auto">
                Connect a broker or import a CSV and watch your dashboards come alive.
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
