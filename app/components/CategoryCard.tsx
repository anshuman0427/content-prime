type CategoryCardProps = {
  number: string;
  title: string;
  description: string;
  accent?: "saffron" | "teal" | "red";
};

const accentMap = {
  saffron: "text-saffron border-saffron/30",
  teal: "text-[#5fb3b3] border-[#5fb3b3]/30",
  red: "text-[#e57373] border-[#e57373]/30",
};

export default function CategoryCard({
  number,
  title,
  description,
  accent = "saffron",
}: CategoryCardProps) {
  return (
    <div
      className={`group rounded-2xl border ${accentMap[accent]} bg-ink-soft p-6 transition-colors hover:bg-[var(--ink)]`}
    >
      <div className="font-mono text-xs tracking-[0.2em] opacity-60 mb-4">
        {number}
      </div>
      <h3 className="font-display text-xl mb-3 text-chai leading-tight">
        {title}
      </h3>
      <p className="text-sm text-chai/65 leading-relaxed">{description}</p>
    </div>
  );
}
