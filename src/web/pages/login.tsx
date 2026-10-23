import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center px-5 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue/15 rounded-full blur-[120px] -z-10" />

      <div className="relative w-full max-w-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text mb-8 transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back home
        </Link>

        <div className="bg-bg-card border border-tb-border rounded-2xl p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <img src="/logo-candlestick.png" alt="TradeBoard logo" className="w-8 h-8" />
            <span className="font-display font-extrabold text-lg">
              Trade<span className="gradient-text">Board</span>
            </span>
          </div>

          <h1 className="font-display font-bold text-2xl">Invited access is being prepared</h1>
          <p className="text-sm text-text-muted mt-4">This marketing website does not sign you in to the application. Public account registration and paid checkout are closed. Invited users will receive the approved access instructions separately.</p>
          <Link to="/waitlist" className="gradient-btn text-white font-semibold inline-block px-5 py-3 rounded-lg mt-6">Join Waitlist</Link>
        </div>

        <p className="text-xs text-text-dim text-center mt-6">
          © 2026 Cajun AI LLC. TradeBoard is a product of Cajun AI LLC.
        </p>
      </div>
    </main>
  );
}
