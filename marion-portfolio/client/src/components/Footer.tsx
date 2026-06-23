import { CONTACT } from "@/lib/data";
import Monogram from "./Monogram";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--plum)', color: '#F2F2F0' }}>
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Monogram variant="gold" className="h-12 w-12 object-contain" />
              <div className="leading-tight">
                <p className="font-display text-2xl">Marion Ziebel</p>
                <p className="text-xs tracking-[0.18em] uppercase text-cream/55">
                  UI / UX Designer
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-cream/65 text-[15px] leading-relaxed">
              Graphiste spécialisée en UI design, diplômée du Master UX-UI de
              l'EFREI Paris. {CONTACT.availability}.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4" style={{ color: 'var(--teal-light)' }}>Navigation</p>
            <ul className="space-y-2.5 text-[15px]">
              <li><a className="link-underline hover:text-cream" href="#travaux">Travaux</a></li>
              <li><a className="link-underline hover:text-cream" href="#a-propos">À propos</a></li>
              <li><a className="link-underline hover:text-cream" href="#process">Process</a></li>
              <li><a className="link-underline hover:text-cream" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4" style={{ color: 'var(--teal-light)' }}>Contact</p>
            <ul className="space-y-2.5 text-[15px] text-cream/80">
              <li><a className="link-underline hover:text-cream" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a className="link-underline hover:text-cream" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a></li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <p>© {year} Marion Ziebel — Tous droits réservés.</p>
          <p className="font-display italic text-cream/60">
            « Je conçois des interfaces qu'on a envie d'utiliser. »
          </p>
        </div>
      </div>
    </footer>
  );
}
