import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

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
        rules and other tax regulations. Any tax-related features (e.g., tax reports, wash sale flags) are provided for informational convenience
        only and are not a substitute for advice from a qualified tax professional.
      </p>

      <h2>3. Broker Connections</h2>
      <p>
        TradeBoard connects to supported brokers via official OAuth integrations or CSV import. We never store your broker login credentials.
        OAuth tokens are encrypted at rest. You may disconnect any broker connection at any time from your account settings.
      </p>

      <h2>4. Accounts &amp; Eligibility</h2>
      <p>
        You must be at least 18 years old to use TradeBoard. You are responsible for maintaining the security of your account credentials and for
        all activity under your account.
      </p>

      <h2>5. Subscriptions &amp; Billing</h2>
      <p>
        Free tier accounts have no expiration. Paid plans (Pro, Pro+) are billed monthly or annually as selected at signup. You may upgrade,
        downgrade, or cancel at any time; cancellations take effect at the end of the current billing period. No refunds are provided for partial
        billing periods except where required by law.
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
        <li>Account information: name, email address, password (hashed).</li>
        <li>Trade data: trades, positions, and history you import via CSV or connect via broker OAuth.</li>
        <li>Psychology &amp; journal data: mood tags, reflection notes, discipline scores you choose to enter.</li>
        <li>Usage data: pages visited, features used, device/browser information.</li>
        <li>Payment data: processed by our third-party payment processor — we do not store full card numbers.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information to operate and improve TradeBoard, sync your broker data, generate your analytics dashboards, provide customer
        support, and communicate important account or product updates.
      </p>

      <h2>3. Broker Data &amp; OAuth</h2>
      <p>
        We never store your broker login credentials. Broker connections use official OAuth 2.0 flows where available; access tokens are encrypted
        (AES-256) at rest and refreshed automatically. You can revoke broker access at any time.
      </p>

      <h2>4. AI Trade Coach</h2>
      <p>
        If you use AI Trade Coach (Pro and Pro+), anonymized trade data is sent to our AI provider for analysis. We use API access configured to
        opt out of model training on your data, and we do not send personally identifiable information beyond what's needed for the analysis.
        AI Trade Coach does not receive live market data and analyzes only your own historical trades — it cannot and does not generate
        forward-looking trade signals. Every conversation is logged for quality review and safety auditing. Before first use, you must
        acknowledge that AI Trade Coach output is not financial advice.
      </p>

      <h2>5. Psychology Data</h2>
      <p>
        Mood, reflection, and discipline data is encrypted at rest, never sold or shared with third parties, and can be deleted independently of
        your other account data at any time from Settings.
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        We do not sell your personal data. We share data only with service providers necessary to operate TradeBoard (e.g., hosting, payment
        processing, broker aggregation partners), each bound by confidentiality obligations.
      </p>

      <h2>7. Data Retention &amp; Deletion</h2>
      <p>
        You may request deletion of your account and associated data at any time by contacting privacy@trade-board.net. We retain data only as long
        as necessary to provide the service or as required by law.
      </p>

      <h2>8. Security</h2>
      <p>
        We use industry-standard encryption in transit (TLS) and at rest for sensitive data, including broker tokens and psychology data.
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
        TradeBoard, including all dashboards, analytics, correlation reports, and the AI Trade Coach feature, is provided for informational and
        educational purposes only. Nothing within TradeBoard constitutes financial, investment, tax, or legal advice, and nothing should be
        interpreted as a recommendation to buy, sell, or hold any security or financial instrument.
      </p>

      <h2>Backward-Looking Analysis Only</h2>
      <p>
        All analysis, scoring, and insights generated by TradeBoard — including the AI Trade Coach — are based entirely on your own historical
        trade data. AI Trade Coach has no connection to live market data or real-time pricing, so it structurally cannot generate forward-looking
        trade signals, price predictions, or buy/sell recommendations — by design, not just by policy.
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
        Tax reports and wash sale flags provided in TradeBoard are for informational convenience only and should not be relied upon as tax advice.
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
