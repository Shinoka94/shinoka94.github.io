import { Reveal } from "@/components/motion";
import { ASSETS, TIMELINE, SKILLS, EXPERIENCE } from "@/lib/data";

export default function About() {
  return (
    <section
      id="a-propos"
      className="py-20 md:py-28 bg-paper border-y border-border scroll-mt-20"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <Reveal className="lg:sticky lg:top-24">
            <div className="relative">
              <div
                className="rounded-[1.8rem] overflow-hidden border border-border"
                style={{ background: "var(--orange-soft)" }}
              >
                <img
                  src={ASSETS.portrait}
                  alt="Portrait de Marion Ziebel"
                  className="w-full h-auto"
                />
              </div>
              {/* Badge MZ — couleur plum du CV */}
              <div
                className="absolute -right-4 -bottom-4 rounded-2xl px-5 py-4 shadow-xl max-w-[12rem]"
                style={{ background: "var(--plum)", color: "#F2F2F0" }}
              >
                <p className="font-display text-3xl leading-none">MZ</p>
                <p
                  className="mt-1.5 text-[12px] leading-snug"
                  style={{ color: "rgba(242,242,240,0.75)" }}
                >
                  Villejuif (94) · Mobile en Île-de-France
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texte */}
          <div>
            <span className="eyebrow" style={{ color: "var(--teal)" }}>
              02 — À propos
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold text-ink leading-[1.05]">
              Designer hybride,{" "}
              <span className="italic" style={{ color: "var(--plum)" }}>
                print & produit.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-xl">
              <p>
                Je suis Marion, graphiste devenue UI designer. Après trois ans
                d'expérience en alternance et en stage, j'ai consolidé mon œil
                d'image au Master UX-UI de l'EFREI Paris, où j'ai appris à
                concevoir des produits centrés sur l'utilisateur.
              </p>
              <p>
                J'aime ce moment où une intention devient une interface claire et
                désirable. Curieuse et rigoureuse, je passe naturellement du
                concept à la maquette Figma, du logo au design system.
              </p>
            </div>

            {/* Expériences */}
            <div className="mt-12">
              <p className="eyebrow text-muted-foreground mb-5">Expériences</p>
              <div className="space-y-7">
                {EXPERIENCE.map((e, i) => (
                  <Reveal
                    key={i}
                    delay={i * 0.05}
                    className="grid sm:grid-cols-[0.9fr_2fr] gap-2 sm:gap-6 pb-7 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-display text-lg text-ink leading-tight">
                        {e.company}
                      </p>
                      <p className="text-[13px] text-muted-foreground mt-0.5">
                        {e.period}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[14px] font-semibold"
                        style={{ color: "var(--orange)" }}
                      >
                        {e.role}
                      </p>
                      <p className="mt-1.5 text-[15px] text-muted-foreground leading-relaxed">
                        {e.points}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Formations + Compétences */}
            <div className="mt-12 grid md:grid-cols-2 gap-10">
              <div>
                <p className="eyebrow text-muted-foreground mb-5">Formations</p>
                <ul className="space-y-5">
                  {TIMELINE.map((t, i) => (
                    <Reveal
                      as="li"
                      key={i}
                      delay={i * 0.05}
                      className="relative pl-5"
                    >
                      <span
                        className="absolute left-0 top-2 h-2 w-2 rounded-full"
                        style={{ background: "var(--teal)" }}
                      />
                      <p className="font-semibold text-ink text-[15px]">
                        {t.title}
                      </p>
                      <p className="text-[13px] text-muted-foreground">
                        {t.place}
                        {t.place && t.period ? " · " : ""}
                        {t.period}
                      </p>
                    </Reveal>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground mb-5">
                  Compétences
                </p>
                <div className="space-y-4">
                  {SKILLS.map((s, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <p
                        className="text-[13px] font-semibold mb-1.5"
                        style={{
                          color: i % 2 === 0 ? "var(--plum)" : "var(--teal)",
                        }}
                      >
                        {s.group}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.items.map((it) => (
                          <span
                            key={it}
                            className="text-[12.5px] px-2.5 py-1 rounded-full border border-border text-ink/80 bg-white"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
