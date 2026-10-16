import { useState } from "react";

export const WAITLIST_URL = "https://forms.zohopublic.com/greghaydelgm1/form/TradeBoardWaitlist/formperma/ZesK-fk6NxQJBtB0a818KwRQSZhoyC8ThdQ-Co-J8Wc";

export default function Waitlist() {
  const [requested, setRequested] = useState(false);
  return <section className="waitlist-panel" aria-labelledby="waitlist-title">
    <h2 id="waitlist-title">Hear when invited access opens.</h2>
    <a className="release-button" href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">Join the TradeBoard waitlist (new tab) →</a>
    <p>Opens Zoho Forms, a third-party service that receives your email if you submit it. Loading the embedded form also connects your browser to Zoho. Our waitlist privacy notice is awaiting owner and legal approval; review the form before sharing information. <a href="/legal-status/">Read the privacy and launch status</a>.</p>
    <p>Joining does not create an account, start a subscription, guarantee a price or reserve a Founding Member place. Only Zoho can confirm your submission.</p>
    <button className="release-secondary" type="button" aria-expanded={requested} aria-controls="waitlist-embed" onClick={() => setRequested(true)}>{requested ? "Zoho form requested — direct link remains available" : "Load Zoho form on this page"}</button>
    <div id="waitlist-embed">{requested && <>
      <p>If the form stays blank or is blocked, use the direct waitlist link above. This page cannot confirm submission.</p>
      <iframe title="TradeBoard Waitlist Signup" src={WAITLIST_URL} referrerPolicy="no-referrer" />
    </>}</div>
  </section>;
}
