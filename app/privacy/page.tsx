import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Filter Bypass",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.2em] text-saffron hover:text-saffron-soft transition-colors"
        >
          ← BACK
        </Link>

        <h1 className="font-display text-3xl md:text-4xl mt-6 mb-2 text-chai">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs tracking-[0.15em] text-chai/40 mb-12">
          LAST UPDATED: 15 JUNE 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-chai/75">
          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              1. Overview
            </h2>
            <p>
              This Privacy Policy explains what information Filter Bypass
              (&quot;we&quot;, &quot;us&quot;) collects when you use this
              website and purchase access to our Telegram channel, how we use
              it, and your rights regarding that information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              2. Information we collect
            </h2>
            <p className="mb-3">We collect the following information:</p>
            <ul className="space-y-2 list-none">
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                <span>
                  <strong className="text-chai">Telegram account
                  information:</strong> your Telegram chat ID, used to send
                  you your personal payment link and access link.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                <span>
                  <strong className="text-chai">Payment information:</strong>{" "}
                  processed directly by Razorpay. We receive confirmation of
                  payment status and amount, but we do not collect or store
                  your card, UPI, or bank details — these are handled entirely
                  by Razorpay under its own privacy policy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                <span>
                  <strong className="text-chai">Usage data:</strong> basic,
                  anonymised analytics about how visitors interact with this
                  website (e.g. page views), if analytics tools are enabled.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              3. How we use your information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-2 list-none">
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                Generate and send your personal payment link
              </li>
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                Verify your payment and grant access to the Channel
              </li>
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                Generate a single-use invite link tied to your account
              </li>
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                Respond to support requests sent via the Telegram bot
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              4. Data retention
            </h2>
            <p>
              We retain your Telegram chat ID and payment reference for as
              long as necessary to provide access to the Channel and resolve
              any support issues. You may request deletion of your data at any
              time (see Section 7).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              5. Third-party services
            </h2>
            <p className="mb-3">We rely on the following third parties:</p>
            <ul className="space-y-2 list-none">
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                <span>
                  <strong className="text-chai">Razorpay</strong> — payment
                  processing. See Razorpay&apos;s privacy policy for details on
                  how they handle payment data.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-saffron mt-0.5">→</span>
                <span>
                  <strong className="text-chai">Telegram</strong> — message
                  delivery and channel hosting. See Telegram&apos;s privacy
                  policy for how they handle your account data.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              6. Data security
            </h2>
            <p>
              We use reasonable technical measures, including signed webhook
              verification, to protect the information we hold. However, no
              method of electronic storage or transmission is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              7. Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data held by us at any time by messaging our Telegram
              bot. We will respond to verified requests within a reasonable
              timeframe.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              8. Children&apos;s privacy
            </h2>
            <p>
              This service is not directed at, and we do not knowingly collect
              information from, individuals under the age of 18.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              9. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected on this page with an updated revision
              date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              10. Contact
            </h2>
            <p>
              For privacy-related questions or requests, contact us through
              the Telegram bot linked from our landing page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
