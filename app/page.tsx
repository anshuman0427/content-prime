import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import CategoryCard from "./components/CategoryCard";
import AccessSection from "./components/AccessSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Ticker />
      <Hero />

      <section id="whats-inside" className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 max-w-xl">
            <span className="font-mono text-xs tracking-[0.2em] text-saffron">
              WHAT YOU GET
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 text-chai leading-tight">
              Four feeds. One channel.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <CategoryCard
              number="FEED 01"
              title="Memes that actually land"
              description="The funniest desi memes of the day, picked from across the internet before they hit your main feed — no recycled templates."
              accent="saffron"
            />
            <CategoryCard
              number="FEED 02"
              title="Infotainment, bite-sized"
              description="Quick explainers and curious facts about India, current affairs and culture — made to be read in under a minute."
              accent="teal"
            />
            <CategoryCard
              number="FEED 03"
              title="News that didn't trend (but should've)"
              description="Stories worth knowing that got buried under the news cycle, summarised straight and without the spin."
              accent="red"
            />
            <CategoryCard
              number="FEED 04"
              title="Politics, unpacked"
              description="Sharp commentary and context on what's happening in Indian politics — opinionated, but always clearly labelled as such."
              accent="saffron"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20 border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-saffron">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-12 text-chai leading-tight">
            Three steps. Two minutes.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div>
              <div className="font-display text-3xl text-saffron mb-3">1</div>
              <p className="text-sm text-chai/70 leading-relaxed">
                Tap &quot;Get Access&quot; and message our Telegram bot to
                start.
              </p>
            </div>
            <div>
              <div className="font-display text-3xl text-saffron mb-3">2</div>
              <p className="text-sm text-chai/70 leading-relaxed">
                Pay ₹120 securely via the personal Razorpay link the bot sends
                you.
              </p>
            </div>
            <div>
              <div className="font-display text-3xl text-saffron mb-3">3</div>
              <p className="text-sm text-chai/70 leading-relaxed">
                Get an instant, single-use invite link to the private channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AccessSection />

      <footer className="px-6 py-10 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.15em] text-chai/40">
            © {new Date().getFullYear()} FILTER BYPASS
          </p>
          <div className="flex gap-6 font-mono text-xs tracking-[0.15em] text-chai/50">
            <a href="/terms" className="hover:text-chai transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="/privacy" className="hover:text-chai transition-colors">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
