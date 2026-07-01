import { useState } from "react";

import { motion } from "motion/react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { unlockPreview } from "../lib/preview-auth";

export default function PreviewGate() {

  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = unlockPreview(password);
    if (ok) {
      // Hard redirect so App re-reads localStorage fresh
      window.location.href = "/";
    } else {
      setError("Incorrect password.");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  }

  return (
    <main id="main-content" className="min-h-screen bg-bg flex items-center justify-center px-5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-sm"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src="/logo-candlestick.png" alt="TradeBoard logo" className="w-9 h-9" />
          <span className="font-display font-bold text-xl text-text">TradeBoard</span>
        </div>

        {/* Card */}
        <div className="bg-bg-elevated border border-tb-border rounded-2xl p-8">
          <div className="flex items-center justify-center w-12 h-12 bg-blue/10 rounded-xl mb-5 mx-auto">
            <Lock size={20} className="text-blue" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold text-xl text-center mb-1">Preview Access</h2>
          <p className="text-text-muted text-sm text-center mb-6">Enter your password to view the full site.</p>

          <motion.form
            onSubmit={handleSubmit}
            animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="relative mb-4">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                aria-label="Preview password"
                aria-describedby={error ? "pw-error" : undefined}
                aria-invalid={!!error}
                className="w-full bg-bg border border-tb-border rounded-xl px-4 py-3 pr-11 text-text placeholder:text-text-muted focus:outline-none focus:border-blue transition-colors"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                aria-label={show ? "Hide password" : "Show password"}
                aria-pressed={show}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
              >
                {show ? (
                  <EyeOff size={18} aria-hidden="true" />
                ) : (
                  <Eye size={18} aria-hidden="true" />
                )}
              </button>
            </div>

            {error && (
              <p id="pw-error" role="alert" className="text-red-400 text-sm mb-4 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue hover:bg-blue/90 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Enter Site
            </button>
          </motion.form>
        </div>

        <p className="text-center text-text-muted text-xs mt-6">
          © 2026 Cajun AI LLC
        </p>
      </motion.div>
    </main>
  );
}
