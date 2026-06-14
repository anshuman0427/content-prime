export default function AccessSection() {
  return (
    <section id="access" className="px-6 py-20 md:py-28">
      <div className="max-w-md mx-auto">
        <div className="rounded-3xl border border-saffron/30 bg-ink-soft p-8 md:p-10 text-center">
          <div className="font-mono text-xs tracking-[0.2em] text-saffron mb-4">
            ONE-TIME UNLOCK
          </div>
          <div className="font-display text-5xl text-chai mb-2">₹120</div>
          <p className="text-sm text-chai/60 mb-8">
            Lifetime access to the channel. No subscription, no renewals.
          </p>

          <ul className="text-left text-sm text-chai/75 space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-saffron mt-0.5">→</span>
              Daily memes, news drops and political commentary
            </li>
            <li className="flex gap-3">
              <span className="text-saffron mt-0.5">→</span>
              Private channel — invite-only, no public links
            </li>
            <li className="flex gap-3">
              <span className="text-saffron mt-0.5">→</span>
              Personal, single-use access link sent after payment
            </li>
          </ul>

          <a
            href="https://t.me/"
            className="block w-full rounded-full bg-saffron px-8 py-4 font-display text-sm tracking-wide text-ink hover:bg-saffron-soft transition-colors"
          >
            Pay & Get Access on Telegram
          </a>

          <p className="text-xs text-chai/40 mt-4">
            Secure payment via Razorpay. Your access link is personal and
            cannot be shared or reused.
          </p>
        </div>
      </div>
    </section>
  );
}
