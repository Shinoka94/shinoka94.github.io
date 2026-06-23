import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.23, 1, 0.32, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

export function Sticker({
  children,
  rotate = -4,
  color = "var(--wine)",
  bg = "var(--cream)",
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  color?: string;
  bg?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={`eyebrow inline-flex items-center rounded-full border px-3.5 py-1.5 ${className}`}
      style={{ color, background: bg, borderColor: color, rotate }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
    >
      {children}
    </motion.span>
  );
}

export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, mv, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
