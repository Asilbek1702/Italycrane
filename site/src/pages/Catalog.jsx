import { useState } from "react";
import { PackageSearch } from "lucide-react";
import CraneBlueprint from "../components/CraneBlueprint";
import PdfModal from "../components/PdfModal";
import Skeleton from "../components/Skeleton";
import SuccessCheck from "../components/SuccessCheck";
import GlassCard from "../components/GlassCard";
import AnimatedButton from "../components/AnimatedButton";
import { useLanguage } from "../context/LanguageContext";
import { useProducts } from "../context/ProductsContext";
import { useToast } from "../context/ToastContext";
import { getCategory, optionLabel } from "../data/categories";
import { colors, fonts, radius } from "../theme";

const QUOTE_EMAIL = "4b0bb1139cf12ba51b9816eb9ff90467";

export default function Catalog() {
  const { t, lang } = useLanguage();
  const { products, loading } = useProducts();
  const toast = useToast();
  const [selected, setSelected] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const shown = products;

  async function submitQuote(e) {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const payload = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      category: form.category.value,
      description: form.description.value,
      product: selected ? selected[`name_${lang}`] : "",
      _subject: `Заявка на КП: ${selected ? selected[`name_${lang}`] : ""}`,
    };
    try {
      await fetch(`https://formsubmit.co/ajax/${QUOTE_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setSent(true);
    } catch (err) {
      console.error("Ошибка отправки заявки:", err);
      toast?.error(t("quoteForm.error"));
    }
    setSending(false);
  }

  return (
    <div style={{ background: colors.bg, color: colors.textPrimary, padding: "90px 24px 60px", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <CraneBlueprint />

      <style>{`
        @media (max-width: 640px) {
          .catalog-card { flex-direction: column !important; padding: 24px 18px !important; gap: 18px !important; }
          .catalog-img-wrap { order: -1 !important; width: 100% !important; }
          .catalog-img-wrap img { height: 190px !important; }
          .catalog-info { align-items: center !important; text-align: center !important; width: 100% !important; }
          .catalog-info h3 { text-align: center !important; }
          .catalog-specs { justify-content: center !important; text-align: center !important; }
          .catalog-specs > div { text-align: center !important; }
          .catalog-actions { justify-content: center !important; width: 100% !important; }
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontFamily: fonts.mono, fontSize: "0.78rem", letterSpacing: "0.18em", color: colors.accent, marginBottom: 14 }}>
          {t("catalog.eyebrow")}
        </p>
        <h2 style={{
          fontFamily: fonts.display, fontWeight: 700, textTransform: "uppercase",
          fontSize: "clamp(1.8rem, 5vw, 2.6rem)", lineHeight: 1.05, marginBottom: 28, letterSpacing: "0.01em"
        }}>
          {t("catalog.title")}
        </h2>

        {loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[0, 1].map((i) => (
              <div key={i} style={{ display: "flex", gap: 50, padding: "40px 50px", borderRadius: radius.xl, background: colors.surfaceMuted, border: `1px solid ${colors.border}` }}>
                <Skeleton width={220} height={220} />
                <div style={{ flex: 1, display: "grid", gap: 14 }}>
                  <Skeleton width="60%" height={28} />
                  <Skeleton width="40%" height={16} />
                  <Skeleton width="30%" height={16} />
                  <Skeleton width={160} height={42} style={{ marginTop: 10 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && shown.length === 0 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "60px 20px", color: colors.textSecondary, textAlign: "center" }}>
            <PackageSearch size={40} strokeWidth={1.5} />
            <p style={{ margin: 0 }}>{t("catalog.noProducts")}</p>
          </div>
        )}

        {!loading && shown.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {shown.map((p, idx) => {
              const cat = getCategory(p.category);
              const reversed = idx % 2 === 1;
              const name = p[`name_${lang}`];

              return (
                <GlassCard key={p.id} className="catalog-card" style={{
                  display: "flex", flexDirection: "row", gap: 50, padding: "40px 50px",
                  animation: `fadeUp 0.5s ease ${idx * 80}ms both`,
                }}>
                  <div className="catalog-img-wrap" style={{
                    flex: "1 1 50%", display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative", order: reversed ? 2 : 1
                  }}>
                    <div style={{
                      position: "absolute", width: "180px", height: "180px",
                      background: `radial-gradient(circle, ${colors.accentGlow} 0%, rgba(0,0,0,0) 70%)`,
                      pointerEvents: "none"
                    }} />
                    <img src={p.image} alt={name} loading="lazy" decoding="async" style={{
                      width: "100%", height: 250, objectFit: "contain", position: "relative",
                      zIndex: 1, filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.5))"
                    }} />
                  </div>

                  <div className="catalog-info" style={{
                    flex: "1 1 50%", display: "flex", flexDirection: "column", justifyContent: "center",
                    textAlign: "left", alignItems: "flex-start", order: reversed ? 1 : 2
                  }}>
                    <h3 style={{
                      fontFamily: fonts.display, fontSize: "2rem", fontWeight: 600,
                      letterSpacing: "0.03em", marginBottom: 20, color: colors.textPrimary
                    }}>
                      {name}
                    </h3>

                    <div className="catalog-specs" style={{ display: "flex", gap: 32, marginBottom: 28, textAlign: "left", flexWrap: "wrap" }}>
                      {cat?.fields.map((f) => (
                        <div key={f.key}>
                          <div style={{ fontSize: "0.82rem", color: colors.textTertiary, marginBottom: 6, letterSpacing: "0.05em" }}>
                            {f.label[lang]}
                          </div>
                          <div style={{ fontWeight: 700, fontSize: "1rem", color: colors.textPrimary }}>
                            {f.type === "select"
                              ? optionLabel(f, p.specs?.[f.key], lang)
                              : (p.specs?.[f.key] && typeof p.specs[f.key] === "object" ? p.specs[f.key][lang] : p.specs?.[f.key])}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="catalog-actions" style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <AnimatedButton variant="light" onClick={() => setSelected(p)}>
                        {t("catalog.requestBtn")}
                      </AnimatedButton>
                      {p.pdf && (
                        <AnimatedButton variant="secondary" onClick={() => setPdfUrl(p.pdf)}>
                          {t("catalog.openPdf")}
                        </AnimatedButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        )}
      </div>

      <PdfModal url={pdfUrl} onClose={() => setPdfUrl(null)} />

      {selected && (
        <div onClick={() => { setSelected(null); setSent(false); }} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 40,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
          animation: "fadeIn 0.2s ease"
        }}>
          <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={t("quoteForm.title")} style={{
            background: colors.surface, padding: 28, maxWidth: 400, width: "100%",
            border: `1px solid ${colors.border}`, borderRadius: radius.xl,
            animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            <h3 style={{ fontFamily: fonts.display, fontSize: "1.1rem", marginBottom: 4, color: colors.textPrimary }}>{t("quoteForm.title")}</h3>
            <p style={{ fontSize: "0.85rem", color: colors.textSecondary, marginBottom: 18 }}>{selected[`name_${lang}`]}</p>
            {sent ? (
              <div style={{ textAlign: "center" }}>
                <SuccessCheck />
                <p style={{ color: colors.accent, fontSize: "0.9rem", margin: "8px 0 0" }}>{t("quoteForm.sent")}</p>
              </div>
            ) : (
              <form onSubmit={submitQuote} style={{ display: "grid", gap: 10 }}>
                <input name="name" placeholder={t("quoteForm.name")} required style={inputStyle} />
                <input name="phone" placeholder={t("quoteForm.phone")} required style={inputStyle} />
                <input name="email" placeholder={t("quoteForm.email")} type="email" style={inputStyle} />
                <textarea name="description" placeholder={t("quoteForm.description")} rows={3} style={inputStyle} />
                <AnimatedButton variant="light" disabled={sending} loading={sending} style={{ width: "100%" }}>
                  {t("quoteForm.submit")}
                </AnimatedButton>
                <button type="button" onClick={() => setSelected(null)} style={{
                  padding: 10, background: "transparent", border: "none", color: colors.textSecondary, cursor: "pointer", fontSize: "0.85rem"
                }}>{t("quoteForm.cancel")}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = { padding: 11, background: colors.bg, border: `1px solid ${colors.border}`, color: colors.textPrimary, fontFamily: "inherit", borderRadius: radius.md };
