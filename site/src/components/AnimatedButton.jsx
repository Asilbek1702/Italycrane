import { useState } from "react";

export default function AnimatedButton({ children, onClick, variant = "light", style = {} }) {
  const [hover, setHover] = useState(false);

  const base = {
    border: "none", borderRadius: 12, fontSize: "0.95rem", fontWeight: 600,
    padding: "16px 26px", display: "flex", alignItems: "center", gap: 10,
    cursor: "pointer", transition: "transform 0.2s ease, box-shadow 0.2s ease",
    transform: hover ? "translateY(-3px)" : "translateY(0)",
  };

  const variants = {
    light: {
      background: "linear-gradient(180deg, #f7f6f2 0%, #e3d6a3 100%)",
      color: "#0d0f11",
      boxShadow: hover
        ? "0 10px 28px rgba(230,180,60,0.45)"
        : "0 4px 20px rgba(230,180,60,0.25)",
    },
    blue: {
      background: hover
        ? "linear-gradient(180deg, #f7c948 0%, #c9960b 100%)"
        : "linear-gradient(180deg, #f0b429 0%, #b8860b 100%)",
      color: "#0d0f11",
      boxShadow: hover
        ? "0 10px 28px rgba(240,180,41,0.55)"
        : "0 4px 18px rgba(240,180,41,0.35)",
    },
    outline: {
      background: hover ? "rgba(240,180,41,0.12)" : "transparent",
      color: "#f0b429",
      border: "1px solid #f0b429",
    },
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}
