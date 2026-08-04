import { colors, radius, shadows, zIndex } from "../theme";

export default function PdfModal({ url, onClose }) {
  if (!url) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: zIndex.modal,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      animation: "fadeIn 0.2s ease"
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: colors.surface, width: "100%", maxWidth: 900, height: "88vh",
        border: `1px solid ${colors.border}`, borderRadius: radius.xl,
        boxShadow: shadows.modal, display: "flex", flexDirection: "column", overflow: "hidden",
        animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: 10, borderBottom: `1px solid ${colors.border}` }}>
          <button onClick={onClose} style={{
            background: "transparent", border: `1px solid ${colors.border}`, borderRadius: radius.sm,
            color: colors.textPrimary, padding: "6px 14px", cursor: "pointer", fontSize: "0.85rem"
          }}>✕</button>
        </div>
        <iframe title="pdf" src={url} style={{ flex: 1, width: "100%", border: "none", background: "#fff" }} />
      </div>
    </div>
  );
}
