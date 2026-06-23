import { Reveal, Counter } from "@/components/motion";
import { STATS } from "@/lib/data";

const MARQUEE = [
  "UI Design",
  "Identité visuelle",
  "Prototypage Figma",
  "Direction artistique",
  "UX Research",
  "Print & édition",
  "Design system",
  "Web design",
];

// Séparateur entre les items
const SEP = (
  <span className="not-italic shrink-0" style={{ color: "var(--teal)" }}>
    ✦
  </span>
);

export default function Stats() {
  // On duplique 4 fois pour garantir un remplissage continu
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];

  return (
    <section className="border-y border-border bg-paper">
      {/* Marquee — technique : deux pistes identiques qui défilent en boucle */}
      <div className="relative overflow-hidden py-5 border-b border-border">
        {/* Masques de fondu sur les bords */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-paper to-transparent" />

        {/* Piste défilante */}
        <div
          className="flex w-max gap-10 whitespace-nowrap will-change-transform"
          style={{ animation: "marquee-scroll 32s linear infinite" }}
        >
          {items.map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-2xl md:text-3xl text-ink/80 italic shrink-0"
            >
              {m}
              {SEP}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Chiffres clés */}
      <div className="container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative">
              <p
                className="font-display text-[clamp(2.6rem,6vw,4rem)] font-semibold leading-none"
                style={{ color: i % 2 === 0 ? "var(--plum)" : "var(--teal)" }}
              >
                <Counter to={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[14px] text-muted-foreground leading-snug max-w-[14rem]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
