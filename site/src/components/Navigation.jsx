import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { colors, fonts, radius, transitions, zIndex } from "../theme";

const PAGES = ["home", "catalog", "about", "contacts"];

export default function Navigation({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const items = PAGES.map((id) => [id, t(`nav.${id}`)]);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: zIndex.sticky,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 28px",
        background: scrolled ? "rgba(13, 15, 17, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.border}` : "1px solid transparent",
        transition: `background ${transitions.normal}, border-color ${transitions.normal}`
      }}>
        <button onClick={() => setPage("home")} style={{
          background: "transparent", border: "none", cursor: "pointer", padding: 0,
          fontFamily: fonts.display, fontSize: "1.35rem", fontWeight: 600,
          color: colors.textPrimary, letterSpacing: "0.02em"
        }}>
          ITALY<span style={{ color: colors.accent }}>CRANE</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div className="nav-desktop" style={{
            display: "flex", gap: 4, background: colors.surface,
            border: `1px solid ${colors.border}`, borderRadius: radius.full, padding: 4
          }}>
            {items.map(([id, label]) => (
              <button key={id} onClick={() => setPage(id)} style={{
                padding: "9px 18px", borderRadius: radius.full, border: "none", cursor: "pointer",
                fontSize: "0.88rem", fontWeight: 600,
                background: page === id ? colors.accent : "transparent",
                color: page === id ? colors.bg : colors.textSecondary,
                transition: `all ${transitions.fast}`
              }}>{label}</button>
            ))}
          </div>

          <LanguageSwitcher />

          <button className="nav-mobile-btn" onClick={() => setOpen(true)} aria-label="menu" style={{
            display: "none", background: colors.surface,
            border: `1px solid ${colors.border}`, borderRadius: radius.sm,
            width: 42, height: 42, cursor: "pointer",
            alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ display: "grid", gap: 5 }}>
              <span style={{ width: 20, height: 2, background: colors.textPrimary, borderRadius: 1 }} />
              <span style={{ width: 20, height: 2, background: colors.textPrimary, borderRadius: 1 }} />
              <span style={{ width: 14, height: 2, background: colors.textPrimary, borderRadius: 1 }} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: zIndex.overlay,
          display: "flex", justifyContent: "flex-end", animation: "fadeIn 0.2s ease"
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            width: 260, height: "100%", background: colors.surface,
            borderLeft: `1px solid ${colors.border}`, padding: 24,
            display: "flex", flexDirection: "column", gap: 8,
            animation: "slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            {items.map(([id, label]) => (
              <button key={id} onClick={() => { setPage(id); setOpen(false); }} style={{
                textAlign: "left", padding: "14px 16px", borderRadius: radius.md,
                border: "none", cursor: "pointer", fontSize: "1rem",
                background: page === id ? colors.accent : "transparent",
                color: page === id ? colors.bg : colors.textPrimary, fontWeight: 600
              }}>{label}</button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
