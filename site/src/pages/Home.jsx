import AnimatedButton from "../components/AnimatedButton";
import CraneCarousel from "../components/CraneCarousel";
import CraneBlueprint from "../components/CraneBlueprint";
import { useLanguage } from "../context/LanguageContext";

export default function Home({ setPage }) {
  const { t } = useLanguage();
  return (
    <div style={{
      height: "100vh", position: "relative", overflow: "hidden",
      background: "#0d0f11", color: "#eeece4", fontFamily: "system-ui, sans-serif"
    }}>
      <CraneBlueprint />

      <div style={{
        position: "relative", zIndex: 1, height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        padding: "90px 6vw 50px", maxWidth: 1300, margin: "0 auto"
      }}>
        <div style={{ maxWidth: 560, textAlign: "left" }}>
          <h1 style={{
            fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: "uppercase",
            fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)", lineHeight: 1.02,
            letterSpacing: "0.01em", margin: 0
          }}>
            <span style={{
              display: "block",
              backgroundImage: "linear-gradient(180deg, #ffffff 0%, #a8a8a8 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent"
            }}>
              {t("home.headingLine1")}
            </span>
            <span style={{
              display: "block",
              backgroundImage: "linear-gradient(180deg, #7fb8f5 0%, #2c6ab8 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent"
            }}>
              {t("home.headingLine2")}
            </span>
          </h1>

          <p style={{
            display: "flex", gap: 10, alignItems: "flex-start", marginTop: 16,
            maxWidth: 440, color: "#9fc3e8", fontSize: "0.95rem", lineHeight: 1.6
          }}>
            <span style={{ color: "#4f8fe0", marginTop: 2 }}>✦</span>
            {t("home.subtitle")}
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 26, flexWrap: "wrap" }}>
            <AnimatedButton variant="light" onClick={() => setPage("catalog")}>
              {t("home.catalogBtn")}
            </AnimatedButton>
            <AnimatedButton variant="light" onClick={() => setPage("about")}>
              {t("home.aboutBtn")}
            </AnimatedButton>
          </div>
        </div>

        <div style={{ marginTop: "8vh" }}>
          <CraneCarousel size={420} />
        </div>
      </div>
    </div>
  );
}