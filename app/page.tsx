"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import AccessSection from "../components/AccessSection";

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

function VideoCard({ src, poster, label }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-black/5">
      <span className="absolute top-3 left-3 z-10 rounded bg-black/60 px-2 py-1 font-mono text-xs tracking-[0.2em] text-saffron">
        {label}
      </span>

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        className="aspect-video w-full object-cover cursor-pointer"
        playsInline
        loop
        muted
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {!playing && (
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
            <Play
              className="h-6 w-6 text-chai"
              fill="currentColor"
            />
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

      {/* WHAT'S INSIDE */}
      <section
        id="whats-inside"
        className="px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-xl">
            <span className="font-mono text-xs tracking-[0.2em] text-saffron">
              WHAT YOU GET
            </span>

            <h2 className="mt-3 font-display text-3xl leading-tight text-chai md:text-4xl">
              Four feeds. One channel.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {previewVideos.map((video) => (
              <VideoCard
                key={video.label}
                {...video}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-[var(--line)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-saffron">
            HOW IT WORKS
          </span>

          <h2 className="mt-3 mb-12 font-display text-3xl leading-tight text-chai md:text-4xl">
            Three steps. Two minutes.
          </h2>

          <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-3">
            <div>
              <div className="mb-3 font-display text-3xl text-saffron">
                1
              </div>

              <p className="text-sm leading-relaxed text-chai/70">
                Tap "Get Access" and message our Telegram bot to start.
              </p>
            </div>

            <div>
              <div className="mb-3 font-display text-3xl text-saffron">
                2
              </div>

              <p className="text-sm leading-relaxed text-chai/70">
                Pay securely through the Razorpay payment link sent by the bot.
              </p>
            </div>

            <div>
              <div className="mb-3 font-display text-3xl text-saffron">
                3
              </div>

              <p className="text-sm leading-relaxed text-chai/70">
                Receive an instant single-use invite link and access the private
                Telegram channel immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AccessSection />

      {/* FOOTER */}
      <footer className="border-t border-[var(--line)] px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs tracking-[0.15em] text-chai/40">
            © {new Date().getFullYear()} FILTER BYPASS
          </p>

          <div className="flex gap-6 font-mono text-xs tracking-[0.15em] text-chai/50">
            <a
              href="/terms"
              className="transition-colors hover:text-chai"
            >
              TERMS OF SERVICE
            </a>

            <a
              href="/privacy"
              className="transition-colors hover:text-chai"
            >
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
