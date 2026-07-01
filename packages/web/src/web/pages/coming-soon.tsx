import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

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
          A professional trading journal and analytics platform built for serious retail traders.
          Multi-broker, psychology tracking, trade replay — one dashboard.
        </motion.p>

        {/* Email form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-6 py-4 font-medium">
              <CheckCircle size={20} />
              You're on the list — we'll reach out when we launch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-bg-elevated border border-tb-border rounded-xl px-5 py-3.5 text-text placeholder:text-text-muted focus:outline-none focus:border-blue transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-blue hover:bg-blue/90 text-white font-semibold px-6 py-3.5 rounded-xl transition-all whitespace-nowrap disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get Early Access"}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>
          )}
          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        </motion.div>

        {/* Feature hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-text-muted text-sm"
        >
          {["Multi-broker support", "Psychology & mood tracking", "Trade Replay", "AI Trade Coach", "Desktop + Mobile"].map((f) => (
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
