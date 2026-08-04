// Design tokens ported from italycrane-ui-kit.js (Kimi AI, 2026-07-30)

export const colors = {
  bg: '#0d0f11',
  bgElevated: '#111418',
  surface: '#1a1d21',
  surfaceHover: '#22262b',
  surfaceMuted: '#15181c',
  surfaceRaised: '#1e2227',
  surfaceStrong: '#2a2f35',

  textPrimary: '#ffffff',
  textSecondary: '#8b92a3',
  textTertiary: '#5a6070',
  textQuaternary: '#3a4049',

  border: '#2a2f35',
  borderLight: '#3a4049',
  borderFocus: '#f0b429',

  accent: '#f0b429',
  accentHover: '#f5c44a',
  accentMuted: 'rgba(240, 180, 41, 0.12)',
  accentGlow: 'rgba(240, 180, 41, 0.15)',

  danger: '#e74c3c',
  dangerMuted: 'rgba(231, 76, 60, 0.12)',
  success: '#2ecc71',
  successMuted: 'rgba(46, 204, 113, 0.12)',
  warning: '#f39c12',
  warningMuted: 'rgba(243, 156, 18, 0.12)',
  info: '#3498db',
  infoMuted: 'rgba(52, 152, 219, 0.12)',
};

export const fonts = {
  display: '"Oswald", "Bebas Neue", sans-serif',
  tech: '"Orbitron", "Rajdhani", monospace',
  body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: '"SF Mono", "Fira Code", "JetBrains Mono", monospace',
};

export const radius = {
  xs: '4px', sm: '6px', md: '10px', lg: '12px', xl: '16px', full: '9999px',
};

export const shadows = {
  card: '0 4px 24px rgba(0, 0, 0, 0.4)',
  cardHover: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(240, 180, 41, 0.08)',
  modal: '0 24px 64px rgba(0, 0, 0, 0.6)',
  dropdown: '0 12px 32px rgba(0, 0, 0, 0.5)',
  inset: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
  glow: '0 0 20px rgba(240, 180, 41, 0.15)',
};

export const spacing = {
  0: '0', 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px',
  6: '24px', 8: '32px', 10: '40px', 12: '48px', 16: '64px',
};

export const transitions = {
  micro: '60ms ease', fast: '150ms ease', normal: '250ms ease', slow: '400ms ease',
  spring: '400ms cubic-bezier(0.16, 1, 0.3, 1)', bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
};

export const zIndex = {
  background: 0, content: 10, sticky: 100, dropdown: 200,
  overlay: 300, modal: 400, toast: 500, tooltip: 600,
};

export const globalCSS = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
@keyframes slideRight { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideLeft { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes glow { 0%, 100% { box-shadow: 0 0 5px rgba(240,180,41,0.2); } 50% { box-shadow: 0 0 20px rgba(240,180,41,0.4); } }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

html { scroll-behavior: smooth; }
* { box-sizing: border-box; }

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: #0d0f11; }
::-webkit-scrollbar-thumb { background: #2a2f35; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #3a4049; }

::selection { background: rgba(240, 180, 41, 0.25); color: #ffffff; }
`;
