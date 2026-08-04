import { colors, radius } from "../theme";

export default function Skeleton({ width = "100%", height = 16, style = {}, circle = false }) {
  return (
    <div style={{
      width, height, borderRadius: circle ? "50%" : radius.sm,
      background: `linear-gradient(90deg, ${colors.surface} 25%, ${colors.surfaceStrong} 50%, ${colors.surface} 75%)`,
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
      ...style
    }} />
  );
}
