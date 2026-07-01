import { Link, useLocation } from "wouter";

export function Footer() {
  const [location] = useLocation();
  if (location === "/login") return null;

  return (
    <footer className="border-t border-tb-border mt-32">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo-candlestick.png" alt="TradeBoard" className="w-8 h-8" />
              <span className="font-display font-extrabold text-lg">
                Trade<span className="gradient-text">Board</span>
              </span>
            </Link>
            <p className="text-sm text-text-dim leading-relaxed">
              Trade smarter, not harder. The trading journal built for traders who want an edge.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/features" className="text-text-muted hover:text-text transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-text-muted hover:text-text transition-colors">Pricing</Link></li>
              <li><Link to="/charts" className="text-text-muted hover:text-text transition-colors">Charts & Data</Link></li>
              <li><Link to="/login" className="text-text-muted hover:text-text transition-colors">Log in</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://cajun-ai.com" className="text-text-muted hover:text-text transition-colors">Cajun AI</a></li>
              <li><a href="https://cajun-ai.com" className="text-text-muted hover:text-text transition-colors">About</a></li>
              <li><a href="mailto:hello@tradeboard.com" className="text-text-muted hover:text-text transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-text-muted hover:text-text transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-text-muted hover:text-text transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-text transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tb-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim text-center sm:text-left">
            © 2026 Cajun AI LLC. All rights reserved. TradeBoard is a product of Cajun AI LLC.
          </p>
          <a
            href="https://cajun-ai.com"
            className="text-xs text-text-dim hover:text-cyan transition-colors flex items-center gap-1.5"
          >
            powered by <span className="gradient-text font-semibold">Cajun AI LLC</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
