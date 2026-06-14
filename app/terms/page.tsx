import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Filter Bypass",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="font-mono text-xs tracking-[0.15em] text-chai/40 mb-12">
          LAST UPDATED: 15 JUNE 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-chai/75">
          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              1. About this service
            </h2>
            <p>
              Filter Bypass (&quot;we&quot;, &quot;us&quot;) operates a paid
              digital content channel distributed via Telegram
              (&quot;Channel&quot;). By purchasing access to the Channel, you
              (&quot;you&quot;, &quot;Subscriber&quot;) agree to these Terms of
              Service. If you do not agree, do not purchase access.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              2. What you&apos;re buying
            </h2>
            <p>
              Your one-time payment of ₹120 grants you a personal,
              non-transferable licence to access curated content (memes,
              infotainment, news summaries and political commentary) posted in
              the Channel. Access is delivered via a unique, single-use
              Telegram invite link sent to you after payment is confirmed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              3. Access is personal and non-transferable
            </h2>
            <p>
              The invite link and any subsequent access to the Channel are for
              your personal use only. You may not share, resell, sublicense,
              or otherwise distribute your access, the invite link, or any
              content from the Channel to any third party. We reserve the
              right to remove any Subscriber found to be in breach of this
              clause without refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              4. Content and intellectual property
            </h2>
            <p>
              All original content posted in the Channel remains the property
              of Filter Bypass or its licensors. Where third-party content
              (such as memes, news clips, or social media posts) is shared, it
              is shared for commentary, criticism, and infotainment purposes.
              We do not claim ownership over third-party material and will
              respond to legitimate takedown requests from rights holders. You
              may not screenshot, screen-record, re-upload, or redistribute
              Channel content outside the Channel.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              5. Editorial nature of content
            </h2>
            <p>
              Content relating to news, politics, or current affairs reflects
              curation and commentary and may include opinion. It is provided
              for informational and entertainment purposes only and should not
              be relied upon as a sole source of news or as professional advice
              of any kind.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              6. Payments and refunds
            </h2>
            <p>
              Payments are processed securely through Razorpay. Because access
              is granted instantly and digitally upon payment, all sales are
              final and non-refundable, except where required by applicable
              law or where we are unable to deliver access due to an error on
              our part — in which case, contact us for a resolution.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              7. Acceptable use
            </h2>
            <p>
              You agree not to use the Channel or its content to harass,
              defame, or incite violence against any individual or group, and
              not to use automated tools to scrape, archive, or redistribute
              Channel content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              8. Changes to the service
            </h2>
            <p>
              We may update, suspend, or discontinue the Channel or these
              Terms at any time. Material changes to these Terms will be
              reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              9. Limitation of liability
            </h2>
            <p>
              The Channel and its content are provided &quot;as is&quot;
              without warranties of any kind. To the maximum extent permitted
              by law, Filter Bypass shall not be liable for any indirect,
              incidental, or consequential damages arising from your use of
              the Channel.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              10. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of
              India.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-chai mb-3">
              11. Contact
            </h2>
            <p>
              For questions about these Terms, contact us through the Telegram
              bot linked from our landing page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
