import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { Sticker } from "@/components/motion";
import { ASSETS } from "@/lib/data";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Arabesque pointillée — couleur teal du CV */}
      <svg
        className="pointer-events-none absolute -right-10 top-24 hidden lg:block w-[440px] h-[440px]"
        viewBox="0 0 400 400"
        fill="none"
        style={{ color: "var(--teal)", opacity: 0.35 }}
      >
        <motion.path
          d="M30 200 C 90 60, 200 60, 230 150 S 360 280, 360 200 S 250 360, 180 320"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        />
      </svg>

      <div className="container grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-wrap items-center gap-2.5 mb-7"
          >
            <span className="eyebrow" style={{ color: "var(--teal)" }}>
              UI / UX Designer
            </span>
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: "var(--orange)" }}
            />
            <span className="eyebrow text-muted-foreground">
              EFREI Paris · Promo 2026
            </span>
          </motion.div>

          <h1 className="font-display font-semibold text-ink leading-[0.95] tracking-[-0.02em] text-[clamp(2.8rem,7.5vw,6.2rem)]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            >
              Je conçois des
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            >
              interfaces qu'on a
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.23 }}
            >
              <span
                className="italic relative"
                style={{ color: "var(--plum)" }}
              >
                envie
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 7 Q 50 1 100 5 T 198 4"
                    stroke="var(--orange)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.6 }}
                  />
                </svg>
              </span>{" "}
              d'utiliser.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="mt-7 max-w-xl text-[17px] md:text-[18px] leading-relaxed text-muted-foreground"
          >
            Graphiste print & web spécialisée en UI design. Diplômée du Master
            UX-UI de l'EFREI, je cherche mon premier CDI pour donner vie à des
            produits utiles, accessibles et désirables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#travaux"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#travaux")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full pl-6 pr-5 py-3.5 text-[15px] font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
              style={{ background: "var(--plum)", color: "#F2F2F0" }}
            >
              Voir mes travaux
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[15px] font-medium transition-colors"
              style={{
                borderColor: "var(--teal)",
                color: "var(--teal)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--teal)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "";
                (e.currentTarget as HTMLElement).style.color = "var(--teal)";
              }}
            >
              <Download size={16} /> Mon CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-2.5"
          >
            {/* Stickers fidèles au CV : bordeaux/prune + bleu sarcelle */}
            <Sticker rotate={-5} color="#F2F2F0" bg="var(--plum)">
              Créative
            </Sticker>
            <Sticker rotate={3} color="#fff" bg="var(--teal)">
              Adaptabilité
            </Sticker>
            <Sticker rotate={-2} color="var(--ink)" bg="var(--orange-soft)">
              UI Design
            </Sticker>
            <Sticker rotate={4} color="var(--plum)" bg="#EDE8F5">
              Figma
            </Sticker>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-[0_30px_80px_-30px_rgba(31,27,26,0.35)]">
            <img
              src={ASSETS.heroEditorial}
              alt="Composition éditoriale UI/UX"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-5 bg-paper border border-border rounded-2xl px-5 py-3.5 shadow-lg flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ background: "var(--teal)" }}
            />
            <span>
              <span
                className="eyebrow block"
                style={{ color: "var(--orange)" }}
              >
                Disponible dès
              </span>
              <span className="font-display text-xl text-ink leading-tight block">
                Octobre 2026
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
