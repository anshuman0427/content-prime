const TAGS = [
  "DESI MMS",
  "DESI MAAL",
  "INDIAN LEAKED CLIPS",
  "DESI FUCK",
  "DESI SEX",
  "HOT VIDEOS",
  "VIRAL CLIPS",
];

export default function Ticker() {
  const items = [...TAGS, ...TAGS];

  return (
    <div
      className="overflow-hidden border-y border-[var(--line)] bg-ink-soft"
      aria-hidden="true"
    >
      <div className="ticker-track py-3">
        {items.map((tag, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 font-mono text-xs tracking-[0.2em] text-chai/70 shrink-0"
          >
            <span className="text-saffron">●</span>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
