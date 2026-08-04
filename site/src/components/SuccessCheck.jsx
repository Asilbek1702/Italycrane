import { colors } from "../theme";

export default function SuccessCheck({ size = 56 }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: colors.successMuted,
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
      }}>
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
}
