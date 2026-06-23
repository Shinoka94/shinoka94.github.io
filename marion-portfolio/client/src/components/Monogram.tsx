import { ASSETS } from "@/lib/data";

export default function Monogram({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "gold";
  className?: string;
}) {
  return (
    <img
      src={variant === "gold" ? ASSETS.monogramGold : ASSETS.monogramDark}
      alt="Monogramme MZ — Marion Ziebel"
      className={className}
      draggable={false}
    />
  );
}
