import AnimatedButton from "../components/AnimatedButton";
import CraneCarousel from "../components/CraneCarousel";
import CraneBlueprint from "../components/CraneBlueprint";
import { useLanguage } from "../context/LanguageContext";

export default function Home({ setPage }) {
  const { t } = useLanguage();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        background: "#0d0f11",
        color: "#eeece4",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* 1. Чертеж остается ровно посередине экрана */}
      <CraneBlueprint />

      {/* 2. Контейнер во всю ширину без maxWidth */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between", // Текст влево, краны вправо
          alignItems: "center",
          padding: "0 80px", // Отступы от краев экрана
          boxSizing: "border-box",
        }}
      >
        {/* Левая часть: Текст и кнопки у самого левого края */}
        <div style={{ zIndex: 3 }}>
          
          {/* НАДПИСЬ ITALYCRANE (Увеличена в 2 раза, отчётливый отступ снизу) */}
          <div
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 5.5vw, 6rem)", // Увеличено ~в 2 раза
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "28px", // Чёткий и заметный отступ от заголовка снизу
              lineHeight: 1,
            }}
          >
            {/* Первая часть: ITALY (Белый градиент) */}
            <span
              style={{
                background: "linear-gradient(180deg, #ffffff, #bfbfbf)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              ITALY
            </span>
            {/* Вторая часть: CRANE (Жёлтый градиент) */}
            <span
              style={{
                background: "linear-gradient(180deg, #ffd166, #d99a1f)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              CRANE
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(2.5rem, 4vw, 4.2rem)", // Подбор размера под 1 строку
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {/* whiteSpace: "nowrap" гарантирует, что фраза не перенесется */}
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                background: "linear-gradient(180deg,#fff,#bfbfbf)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("home.headingLine1")}
            </span>

            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                background: "linear-gradient(180deg,#ffd166,#d99a1f)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("home.headingLine2")}
            </span>
          </h1>

          <p
            style={{
              marginTop: 24,
              color: "#9fb9d5",
              lineHeight: 1.7,
              maxWidth: 500,
            }}
          >
            {t("home.subtitle")}
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 30 }}>
            <AnimatedButton
              variant="light"
              onClick={() => setPage("catalog")}
            >
              {t("home.catalogBtn")}
            </AnimatedButton>

            <AnimatedButton
              variant="light"
              onClick={() => setPage("about")}
            >
              {t("home.aboutBtn")}
            </AnimatedButton>
          </div>
        </div>

        {/* Правая часть: Краны у самого правого края */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            zIndex: 3,
          }}
        >
          <CraneCarousel size={540} />
        </div>
      </div>
    </div>
  );
}