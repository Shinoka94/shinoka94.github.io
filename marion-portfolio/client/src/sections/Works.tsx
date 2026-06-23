import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/motion";
import { PROJECTS, type Project } from "@/lib/data";

const EASE = [0.23, 1, 0.32, 1] as const;

function Card({ p, large }: { p: Project; large?: boolean }) {
  return (
    <button
      onClick={() =>
        toast("Étude de cas disponible sur demande", {
          description: `${p.title} — présentée lors d'un entretien.`,
        })
      }
      className="block w-full h-full text-left"
    >
      <motion.article
        whileHover="hover"
        className="group relative h-full rounded-[1.6rem] overflow-hidden border border-border bg-card"
      >
        <div
          className={`relative overflow-hidden ${large ? "aspect-[16/11]" : "aspect-[16/10]"}`}
        >
          <motion.img
            src={p.image}
            alt={p.title}
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute top-4 left-4 font-display text-sm font-semibold px-2.5 py-1 rounded-full bg-paper/90 backdrop-blur text-ink">
            {p.index}
          </span>
          <motion.span
            variants={{ hover: { opacity: 1, scale: 1, rotate: 0 } }}
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute top-4 right-4 grid place-items-center h-11 w-11 rounded-full bg-white text-ink"
          >
            <ArrowUpRight size={20} />
          </motion.span>
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ background: p.accent }}
            />
            <span className="eyebrow text-muted-foreground">{p.role}</span>
            <span className="ml-auto text-sm text-muted-foreground font-sans">
              {p.year}
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-[2rem] font-semibold text-ink leading-tight">
            {p.title}
          </h3>
          <p className="mt-2 text-[15px] text-muted-foreground leading-snug">
            {p.subtitle}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[12px] tracking-wide px-2.5 py-1 rounded-full border border-border text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </button>
  );
}

export default function Works() {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="travaux" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow" style={{ color: "var(--teal)" }}>
              01 — Travaux sélectionnés
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-ink leading-[1] tracking-[-0.01em]">
              Des projets pensés{" "}
              <br className="hidden md:block" />
              <span className="italic" style={{ color: "var(--orange)" }}>
                par l'expérience.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-muted-foreground leading-relaxed">
            Du branding à l'interface, chaque projet part d'un besoin réel et se
            termine par une solution soignée, testée et livrée.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <Card p={featured} large />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <Card p={rest[0]} />
          </Reveal>
          {rest.slice(1).map((p, i) => (
            <Reveal key={p.slug} className="lg:col-span-6" delay={0.08 * i}>
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
