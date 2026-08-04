import { useLanguage } from "../context/LanguageContext";
import CraneBlueprint from "../components/CraneBlueprint";
import AnimatedButton from "../components/AnimatedButton";
import { colors, fonts } from "../theme";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div style={{
      minHeight: "100vh", background: colors.bg, color: colors.textPrimary, position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
    }}>
      <CraneBlueprint />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 24, animation: "fadeUp 0.5s ease both" }}>
        <div style={{
          fontFamily: fonts.display, fontWeight: 700, fontSize: "clamp(4rem, 14vw, 8rem)",
          lineHeight: 1, color: colors.accent
        }}>404</div>
        <p style={{ fontSize: "1.05rem", color: colors.textSecondary, margin: "16px 0 32px" }}>
          {t("notFound.text")}
        </p>
        <a href="/" style={{ textDecoration: "none" }}>
          <AnimatedButton variant="light" size="lg">{t("notFound.backHome")}</AnimatedButton>
        </a>
      </div>
    </div>
  );
}
