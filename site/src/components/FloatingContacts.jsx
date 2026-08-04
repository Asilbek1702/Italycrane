import { User, ChevronsRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { colors, radius, shadows, transitions, zIndex } from "../theme";

export default function FloatingContacts({ page, setPage }) {
  const { t } = useLanguage();
  const [hover, setHover] = useState(false);
  if (page === "contacts") return null;

  return (
    <button
      onClick={() => setPage("contacts")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: zIndex.sticky, cursor: "pointer",
        background: hover ? colors.surfaceHover : colors.surface,
        border: `1px solid ${hover ? colors.accent : colors.border}`,
        backdropFilter: "blur(6px)",
        borderRadius: radius.full, color: colors.textPrimary,
        fontSize: "0.9rem", fontWeight: 600, padding: "8px 16px 8px 8px",
        display: "flex", alignItems: "center", gap: 8,
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hover ? shadows.glow : shadows.card,
        transition: `all ${transitions.fast}`
      }}
    >
      <span style={{
        width: 26, height: 26, borderRadius: "50%", background: colors.accent,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
      }}>
        <User size={15} color={colors.bg} />
      </span>
      {t("nav.contacts")}
      <ChevronsRight size={16} />
    </button>
  );
}
