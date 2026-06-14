export default function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-saffron/30 px-4 py-1.5 mb-8 font-mono text-xs tracking-[0.15em] text-saffron">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron" />
          </span>
          NEW DROPS DAILY
        </div>

        <h1 className="font-display text-4xl md:text-6xl leading-[1.1] mb-6 text-chai">
          The internet&apos;s sharpest{" "}
          <span className="text-saffron">Indian content</span>, before
          everyone else has it
        </h1>

        <p className="text-base md:text-lg text-chai/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Memes, infotainment, breaking news and political takes — hand-picked
          and posted daily inside a private channel. No algorithm, no noise,
          no recycled reposts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#access"
            className="w-full sm:w-auto rounded-full bg-saffron px-8 py-4 font-display text-sm tracking-wide text-ink hover:bg-saffron-soft transition-colors"
          >
            Get Access — ₹120
          </a>
          <a
            href="#whats-inside"
            className="w-full sm:w-auto rounded-full border border-chai/20 px-8 py-4 font-display text-sm tracking-wide text-chai hover:border-chai/40 transition-colors"
          >
            See What&apos;s Inside
          </a>
        </div>
      </div>
    </section>
  );
}
