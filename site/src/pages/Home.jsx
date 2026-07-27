// pages/Home.jsx
import BlueprintGrid from "../components/BlueprintGrid";
import AnimatedButton from "../components/AnimatedButton";
import StaticDiagonalTitle from "../components/StaticDiagonalTitle";
import CraneShowcase from "../components/CraneShowcase";
import { useLanguage } from "../context/LanguageContext";

// Убедитесь, что эти файлы — PNG с прозрачным фоном!
import crane1 from "../assets/cranes/crane1.png";
import crane2 from "../assets/cranes/crane2.png";
import crane3 from "../assets/cranes/crane3.png";

const CRANE_IMAGES = [
  { src: crane1, alt: "Crane 1" },
  { src: crane2, alt: "Crane 2" },
  { src: crane3, alt: "Crane 3" },
];

export default function Home({ setPage }) {
  const { t } = useLanguage();
  return (
    <div style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: "#0d0f11", color: "#eeece4", fontFamily: "system-ui, sans-serif"
    }}>
      <BlueprintGrid />

      <div style={{
        position: "relative", zIndex: 1, minHeight: "100vh", boxSizing: "border-box",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "90px 3vw 40px",
        maxWidth: 1400, margin: "0 auto", gap: 20
      }}>
        <div style={{ textAlign: "left", flex: "0 1 480px" }}>
          <StaticDiagonalTitle text="ITALYCRANE" />
          <p style={{
            display: "flex", gap: 10, alignItems: "flex-start", marginTop: 22,
            maxWidth: 440, color: "#9fc3e8", fontSize: "1rem", lineHeight: 1.6
          }}>
            <span style={{ color: "#4f8fe0", marginTop: 2 }}>✦</span>
            {t("home.subtitle")}
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 30, flexWrap: "wrap" }}>
            <AnimatedButton variant="light" onClick={() => setPage("catalog")}>
              {t("home.catalogBtn")}
            </AnimatedButton>
            <AnimatedButton variant="yellow" onClick={() => setPage("about")}>
              {t("home.aboutBtn")}
            </AnimatedButton>
          </div>
        </div>

        <div style={{ flex: "0 0 auto" }}>
          <CraneShowcase images={CRANE_IMAGES} />
        </div>
      </div>
    </div>
  );
}