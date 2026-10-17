import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Waitlist from "./components/waitlist";
import LegalStatus from "./pages/legal-status";
import "./public.css";
import { publicTitles as titles } from "./public-routes";

function Metadata() {
  const [location] = useLocation();
  useEffect(() => {
    const route = location.replace(/\/$/, "") || "/";
    document.title = `TradeBoard — ${titles[route] || "Page unavailable"}`;
    for(const selector of ['link[rel="canonical"]', 'meta[property="og:url"]']) {
      const element = document.querySelector(selector);
      if(element) element.setAttribute(element.tagName === "LINK" ? "href" : "content", `https://trade-board.net${route === "/" ? "/" : route + "/"}`);
    }
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}
function Product() {
  return <section className="release-grid" aria-label="Initial invited release scope">
    <article>
      <span className="release-step">01 / IMPORT</span>
      <h2>Start with your history.</h2>
      <p>Import one validated Webull CSV format for USD equity fills. Preview and confirm before processing. Other exports, options and currencies are outside the initial scope.</p>
    </article>
    <article>
      <span className="release-step">02 / REVIEW</span>
      <h2>See completed trades clearly.</h2>
      <p>Explore historical trade analytics and performance. Direct brokerage synchronization, live account balances and trade execution are not enabled.</p>
    </article>
    <article>
      <span className="release-step">03 / REFLECT</span>
      <h2>Keep a review habit.</h2>
      <p>Use a private text journal to record lessons from past trades. Education and reflection, with no trading signals or individualized investment advice.</p>
    </article>
  </section>;
}
function Home() {
  return <main id="main-content" tabIndex={-1} className="release-main">
    <section className="release-hero">
      <p className="release-eyebrow">Historical analytics · Journaling · Education</p>
      <h1>Your trading history.<br />
        <span className="gradient-text">A clearer perspective.</span>
      </h1>
      <p>Review completed trades, document your decisions and build a more consistent review routine. TradeBoard by Cajun AI is preparing for invited access.</p>
      <div className="release-actions">
        <a className="release-button" href="/waitlist/">Join the launch waitlist →</a>
        <a className="release-secondary" href="/pricing/">Explore planned pricing</a>
      </div>
    </section>
    <Product />
    <section className="release-callout">
      <h2>Know what is coming first.</h2>
      <p>The initial scope is deliberately narrow: validated CSV import, historical performance review and a private text journal. AI capabilities, native mobile apps and additional reports are outside the first invited release.</p>
      <a href="/features/">See the import scope and tutorial plan →</a>
    </section>
  </main>;
}
function Features() {
  return <main id="main-content" tabIndex={-1} className="release-main">
    <section className="release-hero">
      <p className="release-eyebrow">Invited access is in preparation</p>
      <h1>Review the past.<br />
        <span className="gradient-text">Learn from your process.</span>
      </h1>
      <p>Historical trading analytics, journaling and education. No automated execution, brokerage service or individualized investment advice.</p>
    </section>
    <Product />
    <section className="release-callout">
      <h2>A validated import, with a review step.</h2>
      <p>The initial importer accepts the validated Webull CSV format for USD STK/EQUITY BUY and SELL fills marked FILLED. You preview the parsed history and confirm before import. This is not a live broker connection or support for every Webull export.</p>
      <p>Actual application screenshots, the primary product demo and six getting-started tutorials will be added after the UI and recordings are approved. No completed videos are available here yet.</p>
      <a href="https://cajun-ai.com/pages/youtube.html#tutorial-plan">View the planned TradeBoard tutorials on Cajun AI →</a>
    </section>
    <div className="release-actions">
      <a className="release-button" href="/waitlist/">Join the launch waitlist →</a>
      <a href="/pricing/">Explore planned pricing</a>
    </div>
  </main>;
}
function Pricing() {
  const tiers = [
    ["Free", "$0", "forever, planned", "A permanent, useful Free tier is part of the strategy. Exact limits and availability require approval before signup opens."],
    ["Founding Member", "$199", "per year, planned", "Planned for the first 100 successfully paid Founding Members. Waitlist registrations do not reserve slots. Eligibility, renewal and cancellation terms require approval."],
    ["Pro", "TBD", "planned upgrade", "Expanded historical analytics are under consideration. Pricing and entitlements are not finalized."],
    ["Pro+", "TBD", "planned upgrade", "Advanced retrospective tools remain roadmap possibilities. No AI capabilities, quotas or release dates are promised."],
  ];
  return <main id="main-content" tabIndex={-1} className="release-main">
    <section className="release-hero">
      <p className="release-eyebrow">Plan preview · Checkout closed</p>
      <h1>Start with Free.<br />
        <span className="gradient-text">Grow at your own pace.</span>
      </h1>
      <p>Planned Free, Pro and Pro+ tiers, with a limited Founding Member offer at launch. No payment or account registration is available.</p>
    </section>
    <section className="release-plans" aria-label="Planned pricing tiers">{tiers.map(([name, price, cadence, description]) => <article key={name} className={name === "Founding Member" ? "founding-plan" : ""}>
      <h2>{name}</h2>
      <strong>{price}</strong>
      <small>{cadence}</small>
      <p>{description}</p>
      <a href="/waitlist/">Get launch updates →</a>
    </article>)}</section>
    <section className="release-callout">
      <h2>A waitlist entry is not a purchase or reservation.</h2>
      <p>Checkout stays closed until payment, eligibility and legal gates are approved. Final features, entitlements, refund and cancellation terms will be available before purchase. No remaining-spots counter is shown because allocations are not open.</p>
      <a className="release-button" href="/waitlist/">Join the launch waitlist →</a>
    </section>
  </main>;
}
export default function PublicApp() {
  const [location] = useLocation();
  return <>
    <Metadata />
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="release-nav">
      <a className="release-brand" href="/">
        <img src="/brand-mark.png" alt="" />TradeBoard</a>
      <nav aria-label="Main navigation">{[["/features/", "Product"], ["/pricing/", "Plans"], ["/waitlist/", "Waitlist"]].map(([href, label]) => <a key={href} href={href} aria-current={(location.replace(/\/$/, "") || "/") === (href.replace(/\/$/, "") || "/") ? "page" : undefined}>{label}</a>)}</nav>
    </header>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/waitlist">
        <main id="main-content" tabIndex={-1} className="release-main">
          <section className="release-hero compact">
            <p className="release-eyebrow">TradeBoard by Cajun AI</p>
            <h1>Stay in the loop.</h1>
            <p>Get launch updates while invited access is in preparation.</p>
          </section>
          <Waitlist />
        </main>
      </Route>
      <Route path="/legal-status" component={LegalStatus} />
      <Route>
        <main id="main-content" className="release-main release-hero">
          <h1>Page unavailable</h1>
          <p>This page is not part of the public website.</p>
          <a href="/">Return to TradeBoard</a>
        </main>
      </Route>
    </Switch>
    <footer className="release-footer">
      <p>Historical analytics, journaling and education. No trade execution or individualized investment advice.</p>
      <nav aria-label="Footer navigation">
        <a href="https://cajun-ai.com/">By Cajun AI</a>
        <a href="https://cajun-ai.com/pages/youtube.html#tutorial-plan">Planned tutorials</a>
        <a href="/legal-status/">Privacy and launch status</a>
        <a href="mailto:support@trade-board.net">Contact</a>
      </nav>
      <p>© 2026 Cajun AI LLC</p>
    </footer>
  </>;
}
