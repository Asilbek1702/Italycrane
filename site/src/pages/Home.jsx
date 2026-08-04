import AnimatedButton from "../components/AnimatedButton";
import CraneCarousel from "../components/CraneCarousel";
import CraneBlueprint from "../components/CraneBlueprint";
import { useLanguage } from "../context/LanguageContext";
import { colors, fonts } from "../theme";

export default function Home({ setPage }) {
  const { t } = useLanguage();

  return (
    <div style={{
      height: "100vh", width: "100vw", position: "relative", overflow: "hidden",
      background: colors.bg, color: colors.textPrimary, fontFamily: fonts.body,
    }}>
      <CraneBlueprint />

      <div style={{
        position: "relative", zIndex: 2, width: "100%", height: "100%",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 80px", boxSizing: "border-box",
      }}>
        <div style={{ zIndex: 3, animation: "fadeUp 0.6s ease both" }}>
          <div style={{
            fontFamily: fonts.display, fontWeight: 700,
            fontSize: "clamp(3.5rem, 5.5vw, 6rem)", letterSpacing: "4px",
            textTransform: "uppercase", marginBottom: "28px", lineHeight: 1,
          }}>
            <span style={{ color: colors.textPrimary }}>ITALY</span>
            <span style={{ color: colors.accent }}>CRANE</span>
          </div>

          <h1 style={{
            fontFamily: fonts.display, fontWeight: 600, textTransform: "uppercase",
            fontSize: "clamp(2.5rem, 4vw, 4.2rem)", lineHeight: 1.1, margin: 0,
          }}>
            <span style={{ display: "block", whiteSpace: "nowrap", color: colors.textPrimary }}>
              {t("home.headingLine1")}
            </span>
            <span style={{ display: "block", whiteSpace: "nowrap", color: colors.accent }}>
              {t("home.headingLine2")}
            </span>
          </h1>

          <p style={{ marginTop: 24, color: colors.textSecondary, lineHeight: 1.7, maxWidth: 500 }}>
            {t("home.subtitle")}
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 30 }}>
            <AnimatedButton variant="light" size="lg" onClick={() => setPage("catalog")}>
              {t("home.catalogBtn")}
            </AnimatedButton>
            <AnimatedButton variant="secondary" size="lg" onClick={() => setPage("about")}>
              {t("home.aboutBtn")}
            </AnimatedButton>
          </div>
        </div>

        <div style={{
          position: "relative", display: "flex", justifyContent: "flex-end",
          alignItems: "center", zIndex: 3,
        }}>
          <CraneCarousel size={540} />
        </div>
      </div>
    </div>
  );
}
