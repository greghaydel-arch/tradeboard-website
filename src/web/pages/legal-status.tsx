import { Link } from "wouter";

export default function LegalStatus() {
  return (
    <main id="main-content" tabIndex={-1} className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display font-bold text-3xl">Legal documents are under review</h1>
      <p className="text-text-muted mt-6">The proposed Terms, Privacy Policy and product disclaimer require owner and legal approval before release. This page does not publish or accept those drafts. Public account registration and paid checkout are closed.</p>
      <p className="text-text-muted mt-4">TradeBoard is for historical trade review, journaling and education. It does not execute trades or provide individualized investment advice or trading signals.</p>
      <p className="text-text-muted mt-4">The waitlist is provided by Zoho. Review the notices presented by the form before submitting information.</p>
      <Link to="/waitlist" className="inline-block text-cyan underline mt-6">Back to waitlist</Link>
    </main>
  );
}
