import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <img src="/logo-candlestick.png" alt="TradeBoard" className="w-10 h-10" />
          <span className="font-display font-bold text-2xl text-text">TradeBoard</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08 }}
          className="inline-flex items-center gap-2 bg-blue/10 border border-blue/30 text-blue text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          Launching Soon
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-5"
        >
          Trade Smarter,{" "}
          <span className="gradient-text">Not Harder.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg leading-relaxed mb-10"
        >
          A historical trading journal and performance review platform for retail traders.
          Initial invited testing uses a validated CSV import format; direct broker connections are not enabled.
        </motion.p>

        {/* The existing Cajun AI / TradeBoard Zoho waitlist is the single signup destination.
            Embedded for convenience; the direct link remains usable if third-party iframes are blocked. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
          className="w-full"
        >
          <div className="rounded-xl border border-tb-border bg-bg-card overflow-hidden">
            <iframe
              title="TradeBoard Waitlist Signup"
              aria-label="TradeBoard Waitlist Signup"
              src="https://forms.zohopublic.com/greghaydelgm1/form/TradeBoardWaitlist/formperma/ZesK-fk6NxQJBtB0a818KwRQSZhoyC8ThdQ-Co-J8Wc"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
          </div>
          <a
            href="https://forms.zohopublic.com/greghaydelgm1/form/TradeBoardWaitlist/formperma/ZesK-fk6NxQJBtB0a818KwRQSZhoyC8ThdQ-Co-J8Wc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan hover:text-blue mt-3"
          >
            Trouble viewing the form? Open the waitlist <ArrowRight size={16} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Feature hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-text-muted text-sm"
        >
          {["Historical performance review", "Trading journal", "CSV import for invited testing", "Education-first", "More features planned"].map((f) => (
            <span key={f} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan" />
              {f}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 text-center text-text-muted text-xs"
      >
        <p>© 2026 Cajun AI LLC. All rights reserved. TradeBoard is a product of Cajun AI LLC.</p>
      </motion.div>
    </main>
  );
}
