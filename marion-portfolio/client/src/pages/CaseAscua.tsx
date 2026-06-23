import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, Counter } from "@/components/motion";
import { ASSETS, CONTACT } from "@/lib/data";

const PALETTE = [
  { hex: "#F2E0D6", name: "Beige rosé" },
  { hex: "#9EA771", name: "Vert sauge" },
  { hex: "#404040", name: "Anthracite" },
  { hex: "#FFFFFF", name: "Blanc" },
  { hex: "#C9A24B", name: "Doré" },
];

const PERSONA = [
  {
    title: "Objectifs",
    color: "var(--petrol)",
    items: [
      "Réduire son empreinte écologique au quotidien",
      "Encourager une consommation plus responsable",
      "Soutenir les initiatives locales et associatives",
    ],
  },
  {
    title: "Peurs",
    color: "var(--wine)",
    items: [
      "Le greenwashing des grandes marques",
      "Le manque de temps pour bien s'informer",
      "Des discours trop flous, peu fiables",
    ],
  },
  {
    title: "Besoins",
    color: "var(--sage)",
    items: [
      "Accès rapide à une information fiable et lisible",
      "Des outils simples pour comparer les produits",
      "Pouvoir agir directement via ses achats",
    ],
  },
];

export default function CaseAscua() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen flex flex-col bg-background paper-grain">
      <Header />

      {/* Hero étude de cas */}
      <section className="relative pt-28 md:pt-36 overflow-hidden">
        <div className="container">
          <Reveal>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors mb-8">
              <ArrowLeft size={16} /> Retour aux travaux
            </Link>
          </Reveal>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="eyebrow text-gold">Étude de cas · 2026</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span className="eyebrow text-muted-foreground">Photoshop · Illustrator</span>
              </div>
              <h1 className="font-display text-[clamp(3rem,9vw,6.5rem)] font-semibold text-ink leading-[0.9] tracking-[-0.02em]">
                ASCUA
              </h1>
              <p className="mt-3 font-display italic text-2xl text-wine">Restaurant</p>
              <p className="mt-6 max-w-xl text-[17px] text-muted-foreground leading-relaxed">
                Identité visuelle et interface d'un restaurant relié à
                l'association la Chrysalide, qui accompagne les personnes en
                situation de handicap. Le projet démontre, avec élégance, que
                ces personnes sont pleinement capables.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Branding", "UI Design", "Logo", "Direction artistique"].map((t) => (
                  <span key={t} className="text-[12.5px] px-3 py-1.5 rounded-full border border-border text-ink/75">{t}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.8rem] overflow-hidden border border-border shadow-[0_30px_80px_-30px_rgba(31,27,26,0.4)]">
                <img src={ASSETS.ascuaCover} alt="Logo doré ASCUA en situation" className="w-full h-auto" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Repères */}
      <section className="py-16 md:py-20">
        <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-border py-12">
          {[
            { v: 1970, p: "Ouvert depuis ", s: "" },
            { v: 525, p: "", s: " personnes accompagnées" },
            { v: 301, p: "", s: " salariés" },
          ].map((r, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center sm:text-left">
              <p className="font-display text-[clamp(2.6rem,5vw,3.6rem)] font-semibold text-wine leading-none">
                {r.p}<Counter to={r.v} />{r.s ? <span className="text-xl ml-1 align-baseline">{r.s}</span> : null}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brief */}
      <section className="pb-16 md:pb-20">
        <div className="container grid lg:grid-cols-[0.4fr_1.6fr] gap-8">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">Brief</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-[17px] text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Dans le cadre d'un projet d'école, j'ai imaginé l'identité d'un
                restaurant ouvert au public et rattaché à <span className="text-wine font-medium">la Chrysalide</span>,
                une association accompagnant les personnes en situation de
                handicap. L'enjeu : créer un lieu chaleureux, professionnel et
                désirable, où l'inclusion se vit sans s'afficher.
              </p>
              <p>
                Le parti pris est celui d'un restaurant gastronomique premium —
                <span className="text-wine font-medium"> parce que ces personnes méritent un standard d'excellence</span>,
                et que l'identité devait l'exprimer avec finesse plutôt qu'avec un ton compassionnel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Persona : objectifs / peurs / besoins */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <Reveal className="mb-10">
            <span className="eyebrow text-wine">Recherche UX</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink">Comprendre l'utilisateur</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {PERSONA.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="rounded-[1.4rem] border border-border bg-card overflow-hidden">
                <div className="px-6 py-4 text-cream font-display text-xl" style={{ background: p.color }}>
                  {p.title}
                </div>
                <ul className="p-6 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[15px] text-muted-foreground leading-snug">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="pb-16 md:pb-24 bg-paper border-y border-border">
        <div className="container py-16 md:py-20 grid lg:grid-cols-[0.5fr_1.5fr] gap-8">
          <Reveal><h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">Objectifs</h2></Reveal>
          <Reveal delay={0.1}>
            <p className="text-[18px] md:text-[20px] text-ink/80 leading-relaxed max-w-3xl font-display italic">
              Donner au restaurant une image à la hauteur de son ambition :
              élégante, accueillante et résolument haut de gamme — tout en
              valorisant, en filigrane, la mission inclusive de l'association.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Recherches & croquis */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal className="mb-10 max-w-2xl">
            <span className="eyebrow text-wine">Idéation</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink">Recherches & croquis</h2>
            <p className="mt-4 text-[16px] text-muted-foreground leading-relaxed">
              Avant l'écran, le crayon. J'ai exploré plusieurs pistes autour du
              feu (« ascua » signifie braise), de la lettre A et d'un lettrage
              à fort caractère.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[1.6rem] overflow-hidden border border-border">
              <img src={ASSETS.ascuaCover} alt="Croquis de recherche du logo ASCUA" className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Typographie & palette */}
      <section className="py-16 md:py-24 bg-paper border-y border-border">
        <div className="container">
          <Reveal className="mb-10">
            <span className="eyebrow text-wine">Système visuel</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink">Typographie & couleurs</h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <Reveal className="rounded-[1.4rem] border border-border overflow-hidden bg-card">
              <img src={ASSETS.ascuaCover} alt="Charte typographique et palette ASCUA" className="w-full h-auto" />
            </Reveal>

            <Reveal delay={0.1} className="rounded-[1.4rem] border border-border bg-card p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-end gap-4">
                  <span className="font-display text-7xl text-wine leading-none">Aa</span>
                  <div className="pb-2">
                    <p className="font-display text-xl text-ink">Abril Display</p>
                    <p className="text-sm text-muted-foreground">Titres — fort contraste, caractère</p>
                  </div>
                </div>
                <div className="mt-8 flex items-end gap-4">
                  <span className="text-6xl text-ink leading-none" style={{ fontFamily: "Archivo, sans-serif", fontWeight: 600 }}>Aa</span>
                  <div className="pb-2">
                    <p className="font-display text-xl text-ink">Lexie</p>
                    <p className="text-sm text-muted-foreground">Texte courant — lisible, chaleureux</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="eyebrow text-muted-foreground mb-3">Palette</p>
                <div className="flex flex-wrap gap-3">
                  {PALETTE.map((c) => (
                    <div key={c.hex} className="text-center">
                      <span className="block h-14 w-14 rounded-xl border border-border" style={{ background: c.hex }} />
                      <span className="block mt-1.5 text-[11px] text-muted-foreground">{c.name}</span>
                      <span className="block text-[10px] text-ink/40 font-mono">{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logo en situation */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal className="mb-10 max-w-2xl">
            <span className="eyebrow text-wine">Déclinaisons</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink">Le logo en situation</h2>
            <p className="mt-4 text-[16px] text-muted-foreground leading-relaxed">
              Un monogramme entrelacé « AS » et un logotype complet, déclinés en
              or sur fond sombre pour incarner le caractère gastronomique du lieu.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal className="rounded-[1.6rem] overflow-hidden border border-border">
              <img src={ASSETS.ascuaCover} alt="Logo ASCUA sur une assiette de restaurant" className="w-full h-full object-cover" />
            </Reveal>
            <Reveal delay={0.1} className="rounded-[1.6rem] overflow-hidden border border-border bg-ink grid place-items-center p-10">
              <img src={ASSETS.ascuaCover} alt="Logo doré ASCUA en relief" className="w-full h-auto rounded-2xl" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Conclusion / CTA */}
      <section className="py-16 md:py-24 bg-wine text-cream">
        <div className="container text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="eyebrow text-gold">Résultat</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-tight">
              Une identité élégante, inclusive <span className="italic text-gold">et désirable.</span>
            </h2>
            <p className="mt-5 text-[17px] text-cream/75 leading-relaxed">
              ASCUA prouve qu'une démarche inclusive peut rimer avec excellence
              et raffinement. Ce projet résume ma façon de travailler : partir du
              sens, puis le sublimer par le design.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-6 py-3.5 text-[15px] font-medium hover:scale-[1.03] active:scale-[0.97] transition-transform">
                Voir les autres projets
              </Link>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-[15px] font-medium hover:bg-cream hover:text-ink transition-colors">
                Me contacter <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
