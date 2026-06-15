"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import AccessSection from "./components/AccessSection";

const previewVideos = [
  {
    src: "https://vk25cdn.viralkand.com/8000/9364.mp4",
    poster: "https://viralkand.com/wp-content/uploads/9364.jpg",
    label: "FEED 01",
  },
  {
    src: "https://vk25cdn.viralkand.com/8000/9353.mp4",
    poster: "https://viralkand.com/wp-content/uploads/9353.jpg",
    label: "FEED 02",
  },
  {
    src: "https://vk25cdn.viralkand.com/8000/9334.mp4",
    poster: "https://viralkand.com/wp-content/uploads/9334.jpg",
    label: "FEED 03",
  },
  {
    src: "https://vk25cdn.viralkand.com/8000/9331.mp4",
    poster: "https://viralkand.com/wp-content/uploads/9331.jpg",
    label: "FEED 04",
  },
];

function VideoCard({ src, poster, label, caption }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-black/5">
      <span className="absolute top-3 left-3 z-10 font-mono text-xs tracking-[0.2em] text-saffron bg-black/60 px-2 py-1 rounded">
        {label}
      </span>

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full aspect-video object-cover"
        playsInline
        loop
        muted
        onClick={togglePlay}
        onEnded={() => setPlaying(false)}
      />

      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {!playing && (
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90">
            <Play className="w-6 h-6 text-chai" fill="currentColor" />
          </span>
        )}
      </button>

     
    </div>
  );
}

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
            {previewVideos.map((video) => (
              <VideoCard key={video.label} {...video} />
            ))}
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
