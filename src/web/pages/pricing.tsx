import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/reveal";

const tiers = [
  { name: "Free", price: "$0", cadence: "/ forever, planned", description: "A permanent Free tier is planned. Exact limits and release timing will be confirmed before signup opens.", highlight: false },
  { name: "Founding Member", price: "$199", cadence: "/ year, planned", description: "Planned for the first 100 paid subscribers at launch. Eligibility, renewal and cancellation terms require approval. A waitlist entry does not reserve an allocation.", highlight: true },
  { name: "Pro", price: "TBD", cadence: "", description: "Expanded historical analytics are under consideration. Pricing, features and entitlements are not finalized.", highlight: false },
  { name: "Pro+", price: "TBD", cadence: "", description: "Advanced retrospective tools are roadmap possibilities. No AI quotas, storage allowances or release dates are promised.", highlight: false },
];

const faq = [
  { q: "Is a permanent Free tier planned?", a: "Yes. The permanent Free tier remains part of the launch strategy. Its limits and availability have not been finalized." },
  { q: "Can I buy or reserve a Founding Member plan?", a: "No. The planned offer is $199/year for the first 100 paid subscribers. Checkout is closed. Joining the waitlist is neither a purchase nor a reservation; final terms will be shown before purchase." },
  { q: "What can invited users import?", a: "The initial scope is one validated Webull CSV format for USD equity fills, with preview and confirmation. It is not a direct broker connection or support for every Webull export. Other formats, options and currencies are outside this initial scope." },
  { q: "Are AI analysis, replay or mobile apps available?", a: "They are outside the first invited release. Future features require their own validation and approval." },
  { q: "What are the refund and cancellation terms?", a: "Those terms require owner and legal approval before billing opens. No subscription or payment is created by joining the waitlist." },
];

export default function Pricing() {

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

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <article className={`rounded-2xl p-7 h-full flex flex-col bg-bg-card border ${tier.highlight ? "border-gold" : "border-tb-border"}`}>
                <h2 className="font-display font-bold text-xl">{tier.name}</h2>
                <p className="mt-5 font-display font-extrabold text-4xl">{tier.price}</p>
                <p className="text-xs text-text-muted mt-1">{tier.cadence}</p>
                <p className="text-sm text-text-muted mt-5 mb-6 flex-1">{tier.description}</p>
                <a href="/waitlist" className="gradient-btn text-white text-center font-semibold px-5 py-3 rounded-lg">Join Waitlist</a>
              </article>
            </Reveal>
          ))}
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
                href="/waitlist"
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