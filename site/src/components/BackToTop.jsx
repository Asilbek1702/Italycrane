import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";
import { colors, radius, shadows, transitions, zIndex } from "../theme";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 500); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Наверх"
      style={{
        position: "fixed", bottom: 28, left: 28, zIndex: zIndex.sticky,
        width: 46, height: 46, borderRadius: radius.full, cursor: "pointer",
        background: colors.surface, border: `1px solid ${hover ? colors.accent : colors.border}`,
        color: hover ? colors.accent : colors.textPrimary,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: shadows.card,
        transition: `all ${transitions.fast}`,
        animation: "fadeUp 0.2s ease"
      }}
    >
      <ChevronsUp size={20} />
    </button>
  );
}
