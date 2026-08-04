import { useState } from "react";
import { colors, radius, transitions } from "../theme";

export default function AnimatedButton({ children, onClick, variant = "primary", size = "md", disabled = false, loading = false, style = {}, ...props }) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);

  const sizeStyles = {
    sm: { padding: '8px 14px', fontSize: '12px' },
    md: { padding: '14px 24px', fontSize: '14px' },
    lg: { padding: '16px 28px', fontSize: '16px' },
  };

  const variantStyles = {
    primary: { background: colors.accent, color: colors.bg, border: 'none' },
    light: {
      background: hover ? colors.accentHover : colors.accent,
      color: colors.bg,
      border: 'none',
      boxShadow: hover ? "0 8px 20px rgba(230,180,60,0.3)" : "0 2px 10px rgba(230,180,60,0.12)",
    },
    secondary: { background: 'transparent', color: colors.textPrimary, border: `1px solid ${colors.border}` },
    outline: { background: hover ? colors.accentMuted : 'transparent', color: colors.accent, border: `1px solid ${colors.accent}` },
    ghost: { background: 'transparent', color: colors.textSecondary, border: 'none' },
    danger: { background: colors.dangerMuted, color: colors.danger, border: `1px solid ${colors.danger}` },
  };

  const btnStyle = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    borderRadius: radius.md, fontWeight: 600, fontFamily: 'inherit',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transform: pressed ? 'scale(0.97)' : hover ? 'translateY(-3px)' : 'translateY(0) scale(1)',
    transition: `transform ${transitions.fast}, opacity ${transitions.fast}, background ${transitions.fast}, box-shadow ${transitions.fast}`,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  return (
    <button
      style={btnStyle}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...props}
    >
      {loading && (
        <span style={{ display: 'inline-block', width: 14, height: 14, border: `2px solid ${colors.bg}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      )}
      {children}
    </button>
  );
}
