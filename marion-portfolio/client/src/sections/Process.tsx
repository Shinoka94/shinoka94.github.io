import { useState } from "react";
import { Reveal } from "@/components/motion";
import { PROCESS } from "@/lib/data";

const ACCENT_COLORS = [
  "var(--plum)",
  "var(--teal)",
  "var(--orange)",
  "var(--plum)",
  "var(--teal)",
  "var(--orange)",
];

function ProcessCard({ p, i }: { p: (typeof PROCESS)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group bg-card p-7 md:p-8 transition-colors duration-500 cursor-default"
      style={{ background: hovered ? ACCENT_COLORS[i] : "" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-baseline justify-between">
        <span
          className="font-display text-5xl font-semibold"
          style={{
            color: hovered ? "rgba(242,242,240,0.5)" : ACCENT_COLORS[i],
            opacity: hovered ? 1 : 0.35,
            transition: "color 0.5s, opacity 0.5s",
          }}
        >
          {p.n}
        </span>
        <span
          className="h-2 w-2 rounded-full"
          style={{
            background: "rgba(242,242,240,0.6)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />
      </div>
      <h3
        className="mt-6 font-display text-2xl font-semibold transition-colors duration-500"
        style={{ color: hovered ? "#fff" : "var(--ink)" }}
      >
        {p.title}
      </h3>
      <p
        className="mt-2 text-[15px] leading-relaxed transition-colors duration-500"
        style={{ color: hovered ? "rgba(255,255,255,0.8)" : "var(--muted-foreground)" }}
      >
        {p.text}
      </p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow" style={{ color: "var(--teal)" }}>
            03 — Ma méthode
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-ink leading-[1.02]">
            Une démarche UX,{" "}
            <span className="italic" style={{ color: "var(--plum)" }}>
              de bout en bout.
            </span>
          </h2>
          <p className="mt-5 text-[16px] text-muted-foreground leading-relaxed">
            Je ne dessine pas seulement des écrans : je structure une réflexion.
            Voici les six étapes qui guident chacun de mes projets.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[1.4rem] overflow-hidden border border-border">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <ProcessCard p={p} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
