import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Monogram from "./Monogram";
import { CONTACT } from "@/lib/data";

const NAV = [
  { label: "Travaux", to: "#travaux" },
  { label: "À propos", to: "#a-propos" },
  { label: "Process", to: "#process" },
  { label: "Contact", to: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();
  const onHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    setOpen(false);
    if (!onHome) {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-xl border-b border-border shadow-[0_1px_24px_rgba(31,27,26,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-10 w-10 rounded-full" style={{ background: 'var(--plum)' }}>
            <Monogram variant="gold" className="h-7 w-7 object-contain" />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
              Marion Ziebel
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground font-sans">
              UI / UX Designer
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.to}
              href={n.to}
              onClick={(e) => handleAnchor(e, n.to)}
              className="link-underline text-[15px] font-medium text-ink/80 hover:text-ink transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleAnchor(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{ background: 'var(--teal)', color: '#fff' }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: 'var(--orange)' }} />
            Me contacter
          </a>
          <button
            className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-border text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden overflow-hidden bg-paper border-b border-border"
          >
            <div className="container py-5 flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.to}
                  href={n.to}
                  onClick={(e) => handleAnchor(e, n.to)}
                  className="py-3 font-display text-2xl text-ink border-b border-border/60 last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-flex justify-center rounded-full bg-ink text-cream px-5 py-3 text-sm font-medium"
              >
                {CONTACT.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
