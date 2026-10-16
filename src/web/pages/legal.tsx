import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

// EDITORIAL REVIEW DRAFT ONLY — not approved for publication. Reconcile against
// TradeBoard production data flows, security controls, processor list, retention,
// billing and current counsel-approved privacy/terms before routing or deploying.

function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main id="main-content" className="pt-16">
      <section className="max-w-3xl mx-auto px-5 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text mb-8 transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back home
        </Link>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl">{title}</h1>
        <p className="text-text-dim text-sm mt-2">Last updated: {updated}</p>
        <div className="mt-8 space-y-6 text-sm text-text-muted leading-relaxed [&_h2]:text-text [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
          {children}
        </div>
      </section>
    </main>
  );
}

export function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="July 3, 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of TradeBoard, a product of Cajun AI LLC ("Cajun AI," "we," "us," or "our").
        By creating an account or using TradeBoard, you agree to these Terms.
      </p>

      <h2>1. Not Financial Advice</h2>
      <p>
        TradeBoard is a trade journaling, analytics, and educational tool. Nothing in TradeBoard — including AI Trade Coach output, dashboards,
        correlation analysis, or any other feature — constitutes financial advice, an investment recommendation, or a trading signal. TradeBoard is
        backward-looking only: it analyzes trades you have already made. It does not predict future performance, and past performance shown in the
        app does not guarantee or indicate future results. Cajun AI LLC is not a registered investment advisor, broker-dealer, or financial planner.
      </p>

      <h2>2. Your Responsibility</h2>
      <p>
        All trading and investment decisions are made solely by you. You acknowledge that trading involves substantial risk of loss and is not
        suitable for all individuals. You are solely responsible for your own trading, tax, and legal decisions, including compliance with wash sale
        rules and other tax regulations. Tax-reporting and wash-sale features, if introduced in a future release, would be informational only
        and would not replace qualified tax advice.
      </p>

      <h2>3. Broker Connections</h2>
      <p>
        The initial invited release accepts trade-history records through one validated CSV format. There is no direct OAuth broker connection or
        automatic broker synchronization in that release. Any future read-only connection requires separate provider, security and legal review.
      </p>

      <h2>4. Accounts &amp; Eligibility</h2>
      <p>
        You must be at least 18 years old to use TradeBoard. You are responsible for maintaining the security of your account credentials and for
        all activity under your account.
      </p>

      <h2>5. Subscriptions &amp; Billing</h2>
      <p>
        A permanent Free tier and paid subscriptions are planned; they are not yet generally available. Final terms for billing, renewal,
        cancellation, and refunds must be published and accepted before any paid subscription is offered. Joining the waitlist is not a purchase.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>
        You agree not to misuse TradeBoard, attempt to reverse-engineer the platform, resell access without authorization, or use the service for
        any unlawful purpose.
      </p>

      <h2>7. Disclaimers &amp; Limitation of Liability</h2>
      <p>
        TradeBoard is provided "as is" without warranties of any kind. To the fullest extent permitted by law, Cajun AI LLC is not liable for any
        trading losses, missed trades, data inaccuracies, or damages arising from your use of the platform.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of TradeBoard after changes take effect constitutes acceptance of the revised Terms.
      </p>

      <h2>9. Contact</h2>
      <p>Questions about these Terms? Contact us at legal@trade-board.net.</p>
    </LegalLayout>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 3, 2026">
      <p>
        This Privacy Policy explains how Cajun AI LLC ("we," "us," "our") collects, uses, and protects your information when you use TradeBoard.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Account and identity information: profile details, invitation and acceptance records, and external identity-provider identifiers. The invited flow uses provider-backed email authentication; a local password-account description is inaccurate.</li>
        <li>Historical trade records you choose to submit through the approved CSV import workflow.</li>
        <li>Private journal text and draft records you choose to enter. Dedicated psychology collection is disabled in the first release.</li>
        <li>Usage data: pages visited, features used, device/browser information.</li>
        <li>Billing routes are disabled for the first invited release. Any later payment processing requires approved provider disclosures and terms.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use information to operate and improve TradeBoard, process historical trade records that users choose to import, provide analytics,
        support users, and communicate relevant account or product updates.
      </p>

      <h2>3. Historical Trade Imports</h2>
      <p>
        Initial invited access is limited to a validated historical-trade CSV format. No broker OAuth access tokens or direct broker sync are part
        of this scope. Future integrations, if approved, would be described in updated disclosures before they become available.
      </p>

      <h2>4. AI Trade Coach</h2>
      <p>
        AI analysis features are planned but are not part of the initial invited release. If introduced later, we will describe the actual
        providers, data categories transmitted, retention, model-training controls and user choices before enabling those features.
        TradeBoard's intended AI use is retrospective analytics and education, not trade signals or investment recommendations.
      </p>

      <h2>5. Psychology Data</h2>
      <p>
        Private journal text is stored by the application and its hosting/database providers. Dedicated psychology tools are disabled.
        Field-level encryption, independent deletion controls, provider retention and backup behavior must not be promised without verification.
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        We do not sell your personal data. We share data only with service providers necessary to operate TradeBoard (e.g., hosting, payment
        processing where active). Final service-provider identities and data-processing terms must be checked before publication.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>
        The application has an asynchronous account-deletion workflow, privacy exports, cleanup retries and restore-suppression records.
        Immediate erasure of all provider copies and backups is not established. Category-specific retention, lawful exceptions and contact ownership require approval before publication.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement safeguards intended to protect data. The exact encryption, access, storage and operational controls must be verified against
        the release environment before this policy is finalized.
      </p>

      <h2>9. Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, export, or delete your personal data. Contact us to exercise these rights.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. We'll notify you of material changes via email or in-app notice.</p>

      <h2>11. Contact</h2>
      <p>Questions about this policy? Contact us at privacy@trade-board.net.</p>
    </LegalLayout>
  );
}

export function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" updated="July 3, 2026">
      <h2>Not Financial Advice</h2>
      <p>
        TradeBoard is intended for historical analysis, trade journaling and education. Any future AI or advanced analytics features must likewise
        follow this informational and educational scope. Nothing within TradeBoard constitutes financial, investment, tax, or legal advice, and nothing should be
        interpreted as a recommendation to buy, sell, or hold any security or financial instrument.
      </p>

      <h2>Backward-Looking Analysis Only</h2>
      <p>
        Initial TradeBoard functionality centers on historical records submitted for retrospective analysis, not live market signals or orders.
        AI analysis is a future feature proposal, and no technical impossibility or model-behavior guarantee is asserted for it at this stage.
      </p>

      <h2>Past Performance</h2>
      <p>
        Past performance displayed within TradeBoard (win rate, P&amp;L, streaks, or any other metric) is not indicative of future results. Markets
        are inherently risky, and you can lose money trading securities.
      </p>

      <h2>Not a Registered Advisor</h2>
      <p>
        Cajun AI LLC is not a registered investment advisor, broker-dealer, or financial planning firm, and TradeBoard is not registered with the
        SEC, FINRA, or any other regulatory body as an investment advisory service.
      </p>

      <h2>Tax &amp; Wash Sale Information</h2>
      <p>
        Any tax reports or wash-sale flags that may be added in future would be informational, not a substitute for a tax professional.
        Consult a licensed tax professional regarding your specific tax situation.
      </p>

      <h2>Your Decisions, Your Responsibility</h2>
      <p>
        You are solely responsible for evaluating the merits and risks associated with any trading decision. Use TradeBoard as one input among many
        in your own independent decision-making process.
      </p>
    </LegalLayout>
  );
}
