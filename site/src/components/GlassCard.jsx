import { useState } from "react";
import { colors, radius, shadows, transitions } from "../theme";

export default function GlassCard({ children, style = {}, hover = true, onClick, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    background: 'rgba(26, 29, 33, 0.72)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
    boxShadow: isHovered && hover ? shadows.cardHover : shadows.card,
    transform: isHovered && hover ? 'translateY(-4px)' : 'translateY(0)',
    transition: `transform ${transitions.normal}, box-shadow ${transitions.normal}`,
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  };

  return (
    <div
      className={className}
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
