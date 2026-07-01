import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue/15 rounded-full blur-[120px] -z-10" />

      <div className="relative w-full max-w-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back home
        </Link>

        <div className="bg-bg-card border border-tb-border rounded-2xl p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <img src="/logo-candlestick.png" alt="TradeBoard" className="w-8 h-8" />
            <span className="font-display font-extrabold text-lg">
              Trade<span className="gradient-text">Board</span>
            </span>
          </div>

          <h1 className="font-display font-bold text-2xl">Welcome back</h1>
          <p className="text-sm text-text-muted mt-1">
            Log in to your TradeBoard account.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-medium text-text-muted">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full bg-bg-elevated border border-tb-border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-blue transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-muted">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1.5 w-full bg-bg-elevated border border-tb-border rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-blue transition-colors"
              />
            </div>
            <button
              type="submit"
              className="gradient-btn text-white font-semibold w-full py-2.5 rounded-lg transition-shadow"
            >
              Log in
            </button>
          </form>

          <p className="text-sm text-text-muted text-center mt-6">
            New here?{" "}
            <Link to="/pricing" className="text-cyan hover:text-blue transition-colors">
              Start free
            </Link>
          </p>
        </div>

        <p className="text-xs text-text-dim text-center mt-6">
          © 2026 Cajun AI LLC. TradeBoard is a product of Cajun AI LLC.
        </p>
      </div>
    </main>
  );
}
