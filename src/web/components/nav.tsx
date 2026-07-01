import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/charts", label: "Charts & Data" },
];

export function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location === "/login" || location === "/preview") return null;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg border-b border-tb-border shadow-lg"
          : "bg-bg/85 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/logo-candlestick.png" alt="TradeBoard" className="w-8 h-8" />
          <span className="font-display font-extrabold text-lg tracking-tight">
            Trade<span className="gradient-text">Board</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                location === l.to
                  ? "text-text"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/pricing"
            className="gradient-btn text-white text-sm font-semibold px-4 py-2 rounded-lg transition-shadow"
          >
            Start Free
          </Link>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-tb-border px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm text-text-muted hover:text-text rounded-lg"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/pricing"
            onClick={() => setOpen(false)}
            className="gradient-btn text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center mt-2"
          >
            Start Free
          </Link>
        </div>
      )}
    </header>
  );
}
