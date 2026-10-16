import { Link } from "wouter";
import { motion } from "motion/react";
import {
  Play,
  Brain,
  Plug,
  Monitor,
  BarChart3,
  Tags,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";
import { Reveal } from "../components/reveal";

const featureBlocks = [
  { tag: "Historical CSV Import", icon: Plug, color: "text-gold", headline: "Start with historical trades.", body: "The invited release is limited to one validated Webull CSV format for USD equity fills. Preview and confirm historical records; no broker login or automatic sync is involved.", points: ["A specific CSV schema, not every export", "USD equities only in the initial scope", "Preview before confirmation", "Additional formats require certification"], img: "/hero-dashboard.png" },
  { tag: "Trading Journal", icon: Tags, color: "text-blue", headline: "Put past decisions in context.", body: "The application includes a private, text-based journal for historical trade review. Approved screenshots and a walkthrough will be added after final UI acceptance.", points: ["Retrospective notes", "Journal walkthrough awaiting UI approval", "No screenshot uploads in the initial release", "No plan entitlements promised"], img: "/feature-replay.png" },
  { tag: "Historical Performance", icon: BarChart3, color: "text-cyan", headline: "Review completed activity.", body: "Historical execution review and FIFO analytics are in the invited scope. Broader dashboards, reports and comparisons remain outside that release.", points: ["Review completed equity fills", "Historical FIFO calculations", "Not tax reporting or tax advice", "Advanced analytics require separate validation"], img: "/hero-dashboard.png" },
  { tag: "Trade Replay \u2014 Roadmap", icon: Play, color: "text-blue", headline: "A possible way to revisit past trades.", body: "Replay is disabled in the first invited release. The existing illustration is a design concept, not an available playback tool.", points: ["Planned historical playback", "No predictive entries or exits", "Market-data dependencies require validation", "No release date promised"], img: "/feature-replay.png" },
  { tag: "Psychology \u2014 Roadmap", icon: Brain, color: "text-cyan", headline: "Reflect on your trading habits.", body: "Dedicated psychology scoring and correlation tools are outside the first invited release. Their availability and data handling require separate review.", points: ["Optional retrospective reflection concept", "No certified mood-to-performance charts", "No blanket encryption or deletion guarantees", "No subscription inclusion promised"], img: "/feature-psychology.png" },
  { tag: "Web-first Experience", icon: Monitor, color: "text-green", headline: "A focused browser experience first.", body: "The web interface is being refined for invited access. Native desktop and mobile applications are future possibilities.", points: ["Web experience first", "No released native mobile apps", "No live brokerage balances", "Final UI acceptance remains pending"], img: "/feature-devices.png" },
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
            A preview of where <span className="gradient-text">TradeBoard is headed.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-text-muted mt-5 max-w-xl mx-auto"
          >
            The feature gallery below illustrates roadmap concepts, not the certified invited-release feature set.
            Initial access is limited to validated historical trade import and review.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 text-xs font-semibold text-gold"
          >
            <Zap size={14} />
            <Link to="/pricing" className="hover:underline">
              Planned Founding Member offer: $199/year for the first 100 paid subscribers. Checkout closed.
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
                Illustrative image — not an application screenshot
              </div>
            </Reveal>

            <Reveal y={30} delay={0.1}>
              <div className="relative">
                <div className="absolute inset-0 gradient-btn rounded-2xl blur-2xl opacity-15" />
                <img
                  src={f.img}
                  alt={`${f.tag} illustrative feature concept`}
                  className="relative rounded-xl border border-tb-border shadow-2xl w-full"
                />
              </div>
            </Reveal>
          </div>
        ))}
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
                Join the waitlist for verified launch details. Billing and signup are not open.
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