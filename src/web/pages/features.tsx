import { Link } from "wouter";
import { motion } from "motion/react";
import {
  Play,
  Brain,
  Plug,
  Smartphone,
  Monitor,
  BarChart3,
  Tags,
  CalendarDays,
  FileDown,
  ArrowRight,
  Check,
  X,
  Zap,
} from "lucide-react";
import { Reveal } from "../components/reveal";

const featureBlocks = [
  {
    tag: "Trade Replay",
    icon: Play,
    color: "text-blue",
    headline: "Relive every trade. Learn from every mistake.",
    body: "Step through your trades candle by candle — daily and intraday. Watch exactly where you entered, where you exited, and where you should have. The replay engine turns hindsight into a teachable edge.",
    points: [
      "Bar-by-bar playback with entry & exit markers",
      "Daily + intraday candle timeframes",
      "Notes and emotion tagging on every replay",
      "No external data feed needed — runs on your trades",
    ],
    img: "/feature-replay.png",
    edge: "Tradervue has no replay. TraderSync lacks intraday.",
  },
  {
    tag: "Psychology & Mood Tracking",
    icon: Brain,
    color: "text-cyan",
    headline: "Understand the trader behind the trades.",
    body: "Your biggest losses usually aren't strategy — they're emotion. Tag your mood, score your discipline, and watch TradeBoard correlate your mindset to your actual P&L. See your FOMO, revenge trades, and overconfidence in cold, hard numbers.",
    points: [
      "Post-trade mood, reflection notes & emotion tags",
      "Daily discipline score (A / B / C / D)",
      "Mood-to-P&L correlation charts",
      "Encrypted, private, deletable anytime",
    ],
    img: "/feature-psychology.png",
    edge: "TraderSync & Tradervue don't track this at all.",
  },
  {
    tag: "Multi-Broker Support",
    icon: Plug,
    color: "text-gold",
    headline: "One dashboard. Every broker.",
    body: "Connect Webull directly or import a CSV from any broker — TD Ameritrade, Robinhood, IBKR, Tastytrade, Alpaca and more. TradeBoard normalizes everything into one clean, unified view so you finally see your complete trading picture.",
    points: [
      "Webull direct connection",
      "CSV import — works with any broker",
      "Unified, broker-agnostic trade view",
      "More direct integrations coming soon",
    ],
    img: "/feature-broker.png",
    edge: "Competitors lock you to one or two brokers.",
  },
  {
    tag: "Desktop + Mobile Apps",
    icon: Monitor,
    color: "text-green",
    headline: "Trade anywhere. Review everywhere.",
    body: "Full-featured native apps for Windows and your phone. Log a trade on your desktop, review your psychology dashboard on the go, get notifications when you need them. Your journal goes where you go.",
    points: [
      "Native Windows desktop app (Mac coming soon)",
      "Full mobile experience — iOS & Android",
      "Real-time sync across every device",
      "Mobile app available on every plan including Free",
    ],
    img: "/feature-devices.png",
    edge: "Most competitors are web-only or have basic mobile.",
  },
  {
    tag: "Trade Tagging & Playbooks",
    icon: Tags,
    color: "text-blue",
    headline: "Build your system. Track your setups.",
    body: "Create named playbooks for every strategy you trade — breakouts, reversals, earnings plays, whatever you run. Tag every trade to a playbook and watch TradeBoard show you exactly which setups are working and which are costing you.",
    points: [
      "Unlimited playbooks (Pro & Pro+)",
      "Tag any trade to a setup type",
      "Per-playbook win rate, P&L, and expectancy",
      "Compare setups side by side",
    ],
    img: "/feature-replay.png",
    edge: "Tradervue limits setups. TraderSync doesn't do per-playbook analytics.",
  },
  {
    tag: "Correlation Analysis",
    icon: BarChart3,
    color: "text-cyan",
    headline: "Find the patterns others miss.",
    body: "TradeBoard runs deep correlation across every dimension of your trading — time of day, day of week, hold duration, position size, sector, mood, and more. Stop guessing what's working. Now you'll know.",
    points: [
      "Win rate by time of day & day of week",
      "P&L vs position size correlation",
      "Sector & symbol performance breakdown",
      "Mood vs P&L correlation (Psychology tier)",
    ],
    img: "/feature-psychology.png",
    edge: "No competitor combines behavioral + performance correlation in one view.",
  },
  {
    tag: "Monthly & Weekly Summaries",
    icon: CalendarDays,
    color: "text-gold",
    headline: "Zoom out. See the full picture.",
    body: "Auto-generated weekly and monthly summary reports break down your performance across every metric that matters — P&L, win rate, best/worst days, streak data, and consistency scores. Ready to review every Sunday or month-end.",
    points: [
      "Auto-generated weekly & monthly reports",
      "Streak tracking — wins, losses, consistency",
      "Best & worst day / week / month",
      "Exportable as PDF or CSV",
    ],
    img: "/hero-dashboard.png",
    edge: "Most competitors require you to build this manually.",
  },
  {
    tag: "PDF & CSV Export",
    icon: FileDown,
    color: "text-green",
    headline: "Your data, your format.",
    body: "Every chart page has a one-click export — grab a PNG of any chart or pull a full CSV of your trade data. Share your performance, file taxes, or run your own analysis. No locked-in data, ever.",
    points: [
      "PNG chart export on every dashboard page",
      "Full CSV data export anytime",
      "PDF summary reports (monthly & weekly)",
      "Tax report with wash sale flagging (Pro+)",
    ],
    img: "/feature-devices.png",
    edge: "TraderSync charges extra. Tradervue limits CSV exports on lower tiers.",
  },
];

const comparison = [
  { feature: "Trade Replay (intraday)", tb: true, others: false },
  { feature: "Psychology & Mood Tracking", tb: true, others: false },
  { feature: "Correlation Analysis (behavioral + performance)", tb: true, others: false },
  { feature: "Monthly / Weekly Auto-Summaries", tb: true, others: "partial" },
  { feature: "Trade Tagging & Playbook Analytics", tb: true, others: "partial" },
  { feature: "Multi-broker + CSV (any broker)", tb: true, others: "partial" },
  { feature: "Windows Desktop App", tb: true, others: "partial" },
  { feature: "iOS + Android Mobile Apps", tb: true, others: "partial" },
  { feature: "PDF + CSV Export (every chart)", tb: true, others: "partial" },
  { feature: "Free plan (no timer)", tb: true, others: "partial" },
  { feature: "20+ analytics dashboards", tb: true, others: true },
  { feature: "AI Trade Coach", tb: true, others: "partial" },
];

export default function Features() {
  return (
    <main id="main-content" className="pt-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-12 text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan text-sm font-semibold uppercase tracking-wider"
          >
            Features
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display font-extrabold text-4xl md:text-5xl mt-3 max-w-2xl mx-auto leading-tight"
          >
            Everything you need to <span className="gradient-text">find your edge.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-text-muted mt-5 max-w-xl mx-auto"
          >
            TradeBoard isn't just a logbook. It's a system for understanding your trades,
            your patterns, and yourself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 text-xs font-semibold text-gold"
          >
            <Zap size={14} />
            <Link to="/pricing" className="hover:underline">
              Founder pricing available — lock in Pro at $199/yr for life. First 100 subscribers only.
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12 space-y-28">
        {featureBlocks.map((f, i) => (
          <div
            key={f.tag}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal y={30}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-tb-border text-xs mb-5">
                <f.icon className={f.color} size={14} />
                <span className="text-text-muted">{f.tag}</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-tight">
                {f.headline}
              </h2>
              <p className="text-text-muted mt-4 leading-relaxed">{f.body}</p>
              <ul className="mt-6 space-y-3">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <Check className="text-green mt-0.5 shrink-0" size={16} />
                    <span className="text-text">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-block text-xs text-gold bg-gold/10 border border-gold/20 rounded-lg px-3 py-2">
                ⚡ {f.edge}
              </div>
            </Reveal>

            <Reveal y={30} delay={0.1}>
              <div className="relative">
                <div className="absolute inset-0 gradient-btn rounded-2xl blur-2xl opacity-15" />
                <img
                  src={f.img}
                  alt={`${f.tag} feature screenshot`}
                  className="relative rounded-xl border border-tb-border shadow-2xl w-full"
                />
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-5 py-12">
        <Reveal className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl">
            How we <span className="gradient-text">stack up</span>
          </h2>
          <p className="text-text-muted mt-3">
            The features that actually move the needle — vs TraderSync, Tradervue & others.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-bg-card border border-tb-border rounded-xl overflow-hidden">
            <table className="w-full text-sm" aria-label="TradeBoard vs competitors feature comparison">
              <thead>
                <tr className="border-b border-tb-border">
                  <th scope="col" className="text-left px-5 py-4 text-text-muted font-semibold">Feature</th>
                  <th scope="col" className="text-center px-5 py-4 font-semibold">
                    <span className="gradient-text">TradeBoard</span>
                  </th>
                  <th scope="col" className="text-center px-5 py-4 text-text-muted font-semibold">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-tb-border last:border-0"
                  >
                    <td className="px-5 py-3.5 text-text">{row.feature}</td>
                    <td className="px-5 py-3.5 text-center">
                      <Check className="text-green inline-block" size={18} aria-hidden="true" />
                      <span className="sr-only">Yes</span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {row.others === true ? (
                        <>
                          <Check className="text-text-dim inline-block" size={18} aria-hidden="true" />
                          <span className="sr-only">Yes</span>
                        </>
                      ) : row.others === "partial" ? (
                        <span className="text-xs text-gold">Partial / Extra cost</span>
                      ) : (
                        <>
                          <X className="text-red/60 inline-block" size={18} aria-hidden="true" />
                          <span className="sr-only">No</span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-tb-border bg-bg-elevated p-10 md:p-14 text-center">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan/20 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl">
                Ready to trade smarter?
              </h2>
              <p className="text-text-muted mt-4 max-w-md mx-auto">
                Start free. Upgrade when you're ready. Cancel anytime.
              </p>
              <Link
                to="/pricing"
                className="gradient-btn text-white font-semibold px-7 py-3 rounded-lg inline-flex items-center gap-2 mt-8 transition-shadow"
              >
                See Pricing <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}