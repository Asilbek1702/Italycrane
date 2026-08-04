import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { login } from "../adminAuth";
import AnimatedButton from "../components/AnimatedButton";
import GlassCard from "../components/GlassCard";
import { colors, fonts, radius } from "../theme";

export default function AdminLogin({ onSuccess }) {
  const { t } = useLanguage();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      await login(username, pass);
      onSuccess();
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: "100vh", background: colors.bg, color: colors.textPrimary,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24
    }}>
      <GlassCard hover={false} style={{ width: "100%", maxWidth: 340, padding: 32 }}>
        <form onSubmit={submit} style={{ display: "grid", gap: 14 }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "1.3rem", marginBottom: 8 }}>{t("admin.loginTitle")}</h2>
          <input placeholder={t("admin.username")} type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={inputStyle} />
          <input placeholder={t("admin.password")} type="password" value={pass} onChange={(e) => setPass(e.target.value)} required style={inputStyle} />
          {error && <p style={{ color: colors.danger, fontSize: "0.85rem" }}>{t("admin.wrong")}</p>}
          <AnimatedButton variant="light" disabled={loading} loading={loading} style={{ width: "100%" }}>
            {t("admin.enter")}
          </AnimatedButton>
        </form>
      </GlassCard>
    </div>
  );
}

const inputStyle = { padding: 12, background: colors.bg, border: `1px solid ${colors.border}`, color: colors.textPrimary, fontFamily: "inherit", borderRadius: radius.md };
