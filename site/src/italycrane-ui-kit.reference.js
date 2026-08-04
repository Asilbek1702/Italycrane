// ═══════════════════════════════════════════════════════════════════════════════
//  ITALYCRANE UI KIT — Single-file design system for React (CRA, inline styles)
//  Project: Italycrane Factory Catalog (Tashkent)
//  Languages: RU / UZ / EN
//  Theme: dark (#0d0f11), gold accent (#f0b429), Oswald/Orbitron fonts
//  Author: Kimi AI — 2026-07-30
// ═══════════════════════════════════════════════════════════════════════════════

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 1: DESIGN TOKENS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const colors = {
  // Backgrounds
  bg: '#0d0f11',
  bgElevated: '#111418',
  surface: '#1a1d21',
  surfaceHover: '#22262b',
  surfaceMuted: '#15181c',
  surfaceRaised: '#1e2227',
  surfaceStrong: '#2a2f35',

  // Text
  textPrimary: '#ffffff',
  textSecondary: '#8b92a3',
  textTertiary: '#5a6070',
  textQuaternary: '#3a4049',

  // Borders & dividers
  border: '#2a2f35',
  borderLight: '#3a4049',
  borderFocus: '#f0b429',

  // Accent (gold)
  accent: '#f0b429',
  accentHover: '#f5c44a',
  accentMuted: 'rgba(240, 180, 41, 0.12)',
  accentGlow: 'rgba(240, 180, 41, 0.15)',

  // Status
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
  xs: '4px',
  sm: '6px',
  md: '10px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
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
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
};

export const transitions = {
  micro: '60ms ease',
  fast: '150ms ease',
  normal: '250ms ease',
  slow: '400ms ease',
  spring: '400ms cubic-bezier(0.16, 1, 0.3, 1)',
  bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
};

export const zIndex = {
  background: 0,
  content: 10,
  sticky: 100,
  dropdown: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 2: GLOBAL CSS (keyframes + base) — inject into index.html <style>
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const globalCSS = `
/* ── Keyframes ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slideUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}
@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(240,180,41,0.2); }
  50%      { box-shadow: 0 0 20px rgba(240,180,41,0.4); }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ── Base ── */
html { scroll-behavior: smooth; }
body {
  margin: 0;
  padding: 0;
  background: #0d0f11;
  color: #ffffff;
  font-family: system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* { box-sizing: border-box; }

/* ── Scrollbar (WebKit) ── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: #0d0f11; }
::-webkit-scrollbar-thumb { background: #2a2f35; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #3a4049; }

/* ── Selection ── */
::selection { background: rgba(240, 180, 41, 0.25); color: #ffffff; }
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 3: HOOKS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';

// ── useMediaQuery ──
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') return window.matchMedia(query).matches;
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Predefined breakpoints
export const useBreakpoints = () => ({
  isXs: useMediaQuery('(max-width: 479px)'),
  isSm: useMediaQuery('(min-width: 480px) and (max-width: 767px)'),
  isMd: useMediaQuery('(min-width: 768px) and (max-width: 1023px)'),
  isLg: useMediaQuery('(min-width: 1024px) and (max-width: 1439px)'),
  isXl: useMediaQuery('(min-width: 1440px)'),
  isMobile: useMediaQuery('(max-width: 767px)'),
  isTablet: useMediaQuery('(min-width: 768px) and (max-width: 1023px)'),
  isDesktop: useMediaQuery('(min-width: 1024px)'),
});

// ── useClickOutside ──
export function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// ── useScrollProgress ──
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

// ── useLockBodyScroll ──
export function useLockBodyScroll(lock) {
  useEffect(() => {
    if (!lock) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [lock]);
}

// ── useDebounce ──
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// ── useLocalStorage ──
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 4: LANGUAGE CONTEXT (i18n)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const translations = {
  ru: {
    nav: { home: 'Главная', catalog: 'Каталог', about: 'О заводе', contacts: 'Контакты', admin: 'Админ' },
    catalog: { title: 'Каталог кранов', filter: 'Фильтры', all: 'Все', category: 'Категория', load: 'Грузоподъёмность', span: 'Пролёт' },
    product: { specs: 'Характеристики', request: 'Запросить КП', download: 'Скачать PDF', inStock: 'В наличии', onOrder: 'Под заказ' },
    form: { name: 'Ваше имя', phone: 'Телефон', email: 'Email', message: 'Сообщение', send: 'Отправить', success: 'Заявка отправлена!', error: 'Ошибка отправки' },
    admin: { login: 'Вход', logout: 'Выйти', add: 'Добавить', edit: 'Редактировать', delete: 'Удалить', save: 'Сохранить', cancel: 'Отмена', translate: 'Перевести' },
    misc: { loading: 'Загрузка...', notFound: 'Страница не найден', back: 'Назад', scrollTop: 'Наверх' },
  },
  uz: {
    nav: { home: 'Bosh sahifa', catalog: 'Katalog', about: 'Zavod haqida', contacts: 'Aloqa', admin: 'Admin' },
    catalog: { title: 'Kranlar katalogi', filter: 'Filtrlar', all: 'Barchasi', category: 'Kategoriya', load: 'Yuk ko\'tarish', span: 'Prolyot' },
    product: { specs: 'Xususiyatlar', request: 'KP so\'rash', download: 'PDF yuklash', inStock: 'Omborda', onOrder: 'Buyurtma' },
    form: { name: 'Ismingiz', phone: 'Telefon', email: 'Email', message: 'Xabar', send: 'Yuborish', success: 'So\'rov yuborildi!', error: 'Yuborishda xatolik' },
    admin: { login: 'Kirish', logout: 'Chiqish', add: 'Qo\'shish', edit: 'Tahrirlash', delete: 'O\'chirish', save: 'Saqlash', cancel: 'Bekor qilish', translate: 'Tarjima' },
    misc: { loading: 'Yuklanmoqda...', notFound: 'Sahifa topilmadi', back: 'Orqaga', scrollTop: 'Yuqoriga' },
  },
  en: {
    nav: { home: 'Home', catalog: 'Catalog', about: 'About', contacts: 'Contacts', admin: 'Admin' },
    catalog: { title: 'Crane Catalog', filter: 'Filters', all: 'All', category: 'Category', load: 'Load capacity', span: 'Span' },
    product: { specs: 'Specifications', request: 'Request quotation', download: 'Download PDF', inStock: 'In stock', onOrder: 'On order' },
    form: { name: 'Your name', phone: 'Phone', email: 'Email', message: 'Message', send: 'Send', success: 'Request sent!', error: 'Send error' },
    admin: { login: 'Login', logout: 'Logout', add: 'Add', edit: 'Edit', delete: 'Delete', save: 'Save', cancel: 'Cancel', translate: 'Translate' },
    misc: { loading: 'Loading...', notFound: 'Page not found', back: 'Back', scrollTop: 'Scroll to top' },
  },
};

export const LanguageContext = createContext({
  lang: 'ru',
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useLocalStorage('ic-lang', 'ru');

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let val = translations[lang];
      for (const k of keys) { val = val?.[k]; if (!val) break; }
      return val || key;
    },
    [lang]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    const dir = ['ar', 'he', 'fa'].includes(lang) ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 5: TOAST CONTEXT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const ToastContext = createContext({ showToast: () => {} });

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: zIndex.toast, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ message, type }) {
  const typeColors = {
    success: colors.success,
    error: colors.danger,
    warning: colors.warning,
    info: colors.info,
  };
  const borderColor = typeColors[type] || colors.border;

  return (
    <div
      style={{
        padding: '14px 20px',
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderLeft: `3px solid ${borderColor}`,
        borderRadius: radius.md,
        color: colors.textPrimary,
        fontSize: '14px',
        boxShadow: shadows.modal,
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        maxWidth: 360,
        minWidth: 280,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <span style={{ fontSize: 16 }}>{type === 'success' ? '✓' : type === 'error' ? '✕' : type === 'warning' ? '!' : 'ℹ'}</span>
      {message}
    </div>
  );
}

export const useToast = () => useContext(ToastContext);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 6: UI COMPONENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── GlassCard ──
export function GlassCard({ children, style = {}, hover = true, onClick }) {
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
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

// ── CircuitBackground (blueprint) ──
export function CircuitBackground({ opacity = 0.08 }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: zIndex.background,
        opacity,
        backgroundImage: 'url(/images/crane-blueprint.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 20%',
        backgroundSize: 'contain',
      }}
      aria-hidden="true"
    />
  );
}

// ── BlueprintGrid (CSS grid overlay) ──
export function BlueprintGrid({ opacity = 0.03 }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: zIndex.background + 1,
        opacity,
        backgroundImage: `
          linear-gradient(rgba(240,180,41,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(240,180,41,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />
  );
}

// ── Skeleton ──
export function Skeleton({ width = '100%', height = '16px', circle = false, style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: circle ? '50%' : radius.sm,
        background: `linear-gradient(90deg, ${colors.surface} 25%, ${colors.surfaceStrong} 50%, ${colors.surface} 75%)`,
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        ...style,
      }}
    />
  );
}

// ── AnimatedButton ──
export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  style = {},
  ...props
}) {
  const [pressed, setPressed] = useState(false);

  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '12px' },
    md: { padding: '10px 20px', fontSize: '14px' },
    lg: { padding: '14px 28px', fontSize: '16px' },
  };

  const variantStyles = {
    primary: {
      background: colors.accent,
      color: colors.bg,
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      color: colors.textPrimary,
      border: `1px solid ${colors.border}`,
    },
    ghost: {
      background: 'transparent',
      color: colors.textSecondary,
      border: 'none',
    },
    danger: {
      background: colors.dangerMuted,
      color: colors.danger,
      border: `1px solid ${colors.danger}`,
    },
  };

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: radius.md,
    fontWeight: 500,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transform: pressed ? 'scale(0.97)' : 'scale(1)',
    transition: `transform ${transitions.fast}, opacity ${transitions.fast}, background ${transitions.fast}`,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  return (
    <button
      style={btnStyle}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      {...props}
    >
      {loading && (
        <span style={{ display: 'inline-block', width: 14, height: 14, border: `2px solid ${variant === 'primary' ? colors.bg : colors.textSecondary}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      )}
      {children}
    </button>
  );
}

// ── Input ──
export function Input({ label, error, icon, style = {}, ...props }) {
  const [focused, setFocused] = useState(false);

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    ...style,
  };

  const inputStyle = {
    width: '100%',
    padding: icon ? '12px 16px 12px 44px' : '12px 16px',
    background: colors.bg,
    border: `1px solid ${error ? colors.danger : focused ? colors.accent : colors.border}`,
    borderRadius: radius.md,
    color: colors.textPrimary,
    fontSize: '16px',
    outline: 'none',
    transition: `border-color ${transitions.fast}, box-shadow ${transitions.fast}`,
    boxShadow: focused ? `0 0 0 3px ${colors.accentGlow}` : 'none',
    fontFamily: fonts.body,
  };

  return (
    <div style={wrapperStyle}>
      {label && (
        <label style={{ fontSize: '13px', fontWeight: 500, color: colors.textSecondary }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: colors.textTertiary, fontSize: 16, pointerEvents: 'none' }}>
            {icon}
          </span>
        )}
        <input
          style={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </div>
      {error && (
        <span style={{ fontSize: '12px', color: colors.danger }}>{error}</span>
      )}
    </div>
  );
}

// ── ProductCard ──
export function ProductCard({ product, index = 0, onClick }) {
  const { t } = useLanguage();
  const { isMobile } = useBreakpoints();

  return (
    <div
      style={{
        animation: `fadeUp 0.5s ease ${index * 80}ms both`,
      }}
    >
      <GlassCard onClick={onClick}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: `${radius.lg} ${radius.lg} 0 0` }}>
          <img
            src={product.image}
            alt={`${product.name} — ${product.loadCapacity}т, ${product.span}м`}
            loading="lazy"
            style={{
              width: '100%',
              height: isMobile ? 180 : 220,
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            top: 12,
            left: 12,
            padding: '4px 10px',
            borderRadius: radius.sm,
            fontSize: '11px',
            fontWeight: 500,
            background: product.inStock ? colors.successMuted : colors.warningMuted,
            color: product.inStock ? colors.success : colors.warning,
          }}>
            {product.inStock ? t('product.inStock') : t('product.onOrder')}
          </div>
        </div>
        <div style={{ padding: 16 }}>
          <h3 style={{
            margin: '0 0 6px',
            fontFamily: fonts.display,
            fontSize: '18px',
            fontWeight: 500,
            color: colors.textPrimary,
            lineHeight: 1.2,
          }}>
            {product.name}
          </h3>
          <p style={{
            margin: 0,
            fontSize: '13px',
            color: colors.textSecondary,
            lineHeight: 1.5,
          }}>
            {product.category} · {product.loadCapacity}т × {product.span}м
          </p>
          <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {product.tags?.map((tag) => (
              <span key={tag} style={{
                padding: '3px 10px',
                borderRadius: radius.sm,
                fontSize: '11px',
                fontWeight: 500,
                background: colors.accentMuted,
                color: colors.accent,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

// ── LangSwitch ──
export function LangSwitch() {
  const { lang, setLang } = useLanguage();
  const langs = ['ru', 'uz', 'en'];

  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', background: colors.surface, padding: 4, borderRadius: radius.md, border: `1px solid ${colors.border}` }}>
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: '6px 12px',
            borderRadius: radius.sm,
            border: 'none',
            background: lang === l ? colors.accent : 'transparent',
            color: lang === l ? colors.bg : colors.textSecondary,
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: `all ${transitions.fast}`,
          }}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

// ── ScrollProgress ──
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 3,
      background: colors.surfaceStrong,
      zIndex: zIndex.sticky,
    }}>
      <div style={{
        width: `${progress * 100}%`,
        height: '100%',
        background: colors.accent,
        transition: 'width 0.1s linear',
      }} />
    </div>
  );
}

// ── BackToTop ──
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        width: 44,
        height: 44,
        borderRadius: radius.full,
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        color: colors.textPrimary,
        fontSize: 18,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: shadows.card,
        zIndex: zIndex.sticky,
        transition: `all ${transitions.fast}`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.accent; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.textPrimary; }}
      aria-label={t('misc.scrollTop')}
    >
      ↑
    </button>
  );
}

// ── FloatingContacts ──
export function FloatingContacts({ phone, telegram, whatsapp }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: zIndex.sticky, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
      {expanded && (
        <>
          {phone && (
            <a href={`tel:${phone}`} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', background: colors.surface, border: `1px solid ${colors.border}`,
              borderRadius: radius.md, color: colors.textPrimary, textDecoration: 'none', fontSize: 14,
              boxShadow: shadows.card, animation: 'slideLeft 0.3s ease both',
            }}>
              📞 {phone}
            </a>
          )}
          {telegram && (
            <a href={telegram} target="_blank" rel="noopener" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', background: colors.surface, border: `1px solid ${colors.border}`,
              borderRadius: radius.md, color: colors.textPrimary, textDecoration: 'none', fontSize: 14,
              boxShadow: shadows.card, animation: 'slideLeft 0.3s ease 0.05s both',
            }}>
              ✈️ Telegram
            </a>
          )}
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', background: colors.surface, border: `1px solid ${colors.border}`,
              borderRadius: radius.md, color: colors.textPrimary, textDecoration: 'none', fontSize: 14,
              boxShadow: shadows.card, animation: 'slideLeft 0.3s ease 0.1s both',
            }}>
              💬 WhatsApp
            </a>
          )}
        </>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: 52, height: 52, borderRadius: radius.full,
          background: colors.accent, color: colors.bg, border: 'none',
          fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: shadows.glow, transition: `transform ${transitions.fast}`,
        }}
        aria-label={expanded ? 'Закрыть контакты' : 'Открыть контакты'}
        aria-expanded={expanded}
      >
        {expanded ? '✕' : '☎'}
      </button>
    </div>
  );
}

// ── PdfModal ──
export function PdfModal({ url, onClose }) {
  useLockBodyScroll(true);
  const modalRef = useRef();
  useClickOutside(modalRef, onClose);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: zIndex.modal,
      background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, animation: 'fadeIn 0.2s ease',
    }}>
      <div
        ref={modalRef}
        style={{
          width: '100%', maxWidth: 900, height: '80vh',
          background: colors.surface, borderRadius: radius.xl,
          border: `1px solid ${colors.border}`,
          boxShadow: shadows.modal,
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        role="dialog"
        aria-modal="true"
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px', borderBottom: `1px solid ${colors.border}`,
        }}>
          <span style={{ fontWeight: 500, fontSize: 16 }}>PDF</span>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, borderRadius: radius.sm,
              background: 'transparent', border: `1px solid ${colors.border}`,
              color: colors.textSecondary, cursor: 'pointer', fontSize: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <iframe
            src={url}
            title="PDF Viewer"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

// ── SuccessCheck ──
export function SuccessCheck({ size = 64 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: colors.successMuted,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

// ── HomeButton ──
export function HomeButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '8px 16px', borderRadius: radius.md,
        background: 'transparent', border: `1px solid ${colors.border}`,
        color: colors.textSecondary, fontSize: 14, cursor: 'pointer',
        transition: `all ${transitions.fast}`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.accent; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.textSecondary; }}
    >
      ← На главную
    </button>
  );
}

// ── ErrorBoundary (class component wrapper) ──
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 16,
          padding: 24, textAlign: 'center',
        }}>
          <div style={{ fontSize: 48 }}>⚠️</div>
          <h2 style={{ margin: 0, fontFamily: fonts.display, fontSize: 24 }}>Что-то пошло не так</h2>
          <p style={{ color: colors.textSecondary, maxWidth: 400 }}>
            Произошла ошибка при загрузке страницы. Попробуйте обновить или вернуться назад.
          </p>
          <AnimatedButton onClick={() => window.location.reload()}>
            Обновить страницу
          </AnimatedButton>
        </div>
      );
    }
    return this.props.children;
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 7: NAVIGATION COMPONENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── Navigation ──
export function Navigation({ onMenuToggle }) {
  const { t } = useLanguage();
  const { isMobile } = useBreakpoints();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%',
    zIndex: zIndex.sticky,
    background: scrolled ? 'rgba(13, 15, 17, 0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? `1px solid ${colors.border}` : '1px solid transparent',
    transition: `background ${transitions.normal}, border-color ${transitions.normal}`,
  };

  const linkStyle = {
    color: colors.textSecondary,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    padding: '8px 12px',
    borderRadius: radius.sm,
    transition: `color ${transitions.fast}, background ${transitions.fast}`,
  };

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/catalog', label: t('nav.catalog') },
    { href: '/about', label: t('nav.about') },
    { href: '/contacts', label: t('nav.contacts') },
  ];

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 24px',
      }}>
        <a href="/" style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 500, color: colors.textPrimary, textDecoration: 'none' }}>
          ITALY<span style={{ color: colors.accent }}>CRANE</span>
        </a>

        {isMobile ? (
          <button
            onClick={onMenuToggle}
            style={{
              width: 40, height: 40, borderRadius: radius.sm,
              background: 'transparent', border: `1px solid ${colors.border}`,
              color: colors.textPrimary, cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
            }}
            aria-label={t('nav.menu') || 'Меню'}
          >
            <span style={{ display: 'block', width: 20, height: 2, background: colors.textPrimary, borderRadius: 1 }} />
            <span style={{ display: 'block', width: 20, height: 2, background: colors.textPrimary, borderRadius: 1 }} />
            <span style={{ display: 'block', width: 14, height: 2, background: colors.textPrimary, borderRadius: 1 }} />
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.color = colors.accent; e.currentTarget.style.background = colors.surface; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = colors.textSecondary; e.currentTarget.style.background = 'transparent'; }}
              >
                {link.label}
              </a>
            ))}
            <LangSwitch />
          </div>
        )}
      </div>
    </nav>
  );
}

// ── HamburgerMenu (mobile overlay) ──
export function HamburgerMenu({ isOpen, onClose }) {
  const { t } = useLanguage();
  useLockBodyScroll(isOpen);

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/catalog', label: t('nav.catalog') },
    { href: '/about', label: t('nav.about') },
    { href: '/contacts', label: t('nav.contacts') },
  ];

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: zIndex.overlay,
      background: 'rgba(0,0,0,0.85)',
      display: 'flex', flexDirection: 'column',
      animation: 'fadeIn 0.2s ease',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '80%', maxWidth: 320, height: '100%',
        background: colors.surface,
        borderLeft: `1px solid ${colors.border}`,
        padding: '80px 24px 24px',
        display: 'flex', flexDirection: 'column', gap: 8,
        animation: 'slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 20, right: 20,
            width: 40, height: 40, borderRadius: radius.sm,
            background: 'transparent', border: `1px solid ${colors.border}`,
            color: colors.textPrimary, cursor: 'pointer', fontSize: 20,
          }}
          aria-label="Закрыть меню"
        >
          ✕
        </button>

        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              padding: '14px 0',
              color: colors.textPrimary,
              textDecoration: 'none',
              fontSize: '20px',
              fontFamily: fonts.display,
              fontWeight: 500,
              borderBottom: `1px solid ${colors.border}`,
              animation: `fadeUp 0.4s ease ${i * 60}ms both`,
            }}
          >
            {link.label}
          </a>
        ))}

        <div style={{ marginTop: 'auto', paddingTop: 24 }}>
          <LangSwitch />
        </div>
      </div>
      <div style={{ flex: 1 }} onClick={onClose} />
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 8: CATALOG COMPONENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── CraneCarousel ──
export function CraneCarousel({ items }) {
  const { isMobile } = useBreakpoints();
  const scrollRef = useRef();

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = isMobile ? el.clientWidth * 0.85 : 340;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: isMobile ? 12 : 24,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '4px 4px 16px',
        }}
      >
        {items.map((item, i) => (
          <div key={item.id} style={{
            flex: isMobile ? '0 0 85%' : '0 0 320px',
            scrollSnapAlign: 'start',
          }}>
            <ProductCard product={item} index={i} />
          </div>
        ))}
      </div>

      {!isMobile && (
        <>
          <button onClick={() => scroll(-1)} style={{
            position: 'absolute', left: -16, top: '50%', transform: 'translateY(-50%)',
            width: 40, height: 40, borderRadius: radius.full,
            background: colors.surface, border: `1px solid ${colors.border}`,
            color: colors.textPrimary, cursor: 'pointer', fontSize: 18,
            boxShadow: shadows.card,
          }} aria-label="Назад">‹</button>
          <button onClick={() => scroll(1)} style={{
            position: 'absolute', right: -16, top: '50%', transform: 'translateY(-50%)',
            width: 40, height: 40, borderRadius: radius.full,
            background: colors.surface, border: `1px solid ${colors.border}`,
            color: colors.textPrimary, cursor: 'pointer', fontSize: 18,
            boxShadow: shadows.card,
          }} aria-label="Вперёд">›</button>
        </>
      )}
    </div>
  );
}

// ── CraneShowcase (hero section) ──
export function CraneShowcase({ title, subtitle, ctaText, onCta }) {
  const { isMobile } = useBreakpoints();

  return (
    <section style={{
      position: 'relative',
      minHeight: isMobile ? '70vh' : '85vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative', zIndex: zIndex.content,
        maxWidth: 720,
        animation: 'fadeUp 0.8s ease both',
      }}>
        <h1 style={{
          fontFamily: fonts.display,
          fontSize: isMobile ? '36px' : '56px',
          fontWeight: 500,
          color: colors.textPrimary,
          margin: '0 0 16px',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
        }}>
          {title}
        </h1>
        <p style={{
          fontSize: isMobile ? '16px' : '20px',
          color: colors.textSecondary,
          margin: '0 0 32px',
          lineHeight: 1.6,
          maxWidth: 560,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {subtitle}
        </p>
        <AnimatedButton variant="primary" size="lg" onClick={onCta}>
          {ctaText}
        </AnimatedButton>
      </div>

      {/* Decorative crane silhouette */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: isMobile ? '120%' : '80%',
        maxWidth: 900,
        opacity: 0.06,
        pointerEvents: 'none',
        zIndex: zIndex.background + 2,
      }}>
        <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 350 L100 350 L100 100 L400 50 L700 100 L700 350 L750 350" stroke={colors.accent} strokeWidth="2" fill="none" />
          <path d="M400 50 L400 350" stroke={colors.accent} strokeWidth="1.5" strokeDasharray="8 4" />
          <rect x="180" y="120" width="440" height="60" rx="4" stroke={colors.accent} strokeWidth="1.5" fill="none" />
          <line x1="200" y1="150" x2="600" y2="150" stroke={colors.accent} strokeWidth="0.5" />
          <circle cx="400" cy="80" r="20" stroke={colors.accent} strokeWidth="1.5" fill="none" />
          <line x1="380" y1="80" x2="420" y2="80" stroke={colors.accent} strokeWidth="1" />
          <line x1="400" y1="60" x2="400" y2="100" stroke={colors.accent} strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 9: UTILITY HELPERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const cx = (...classes) => classes.filter(Boolean).join(' ');

export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 12 && cleaned.startsWith('998')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10, 12)}`;
  }
  return phone;
};

export const slugify = (str) =>
  str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 10: USAGE EXAMPLE (commented out — paste into App.jsx)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/*
import React, { useState } from 'react';
import {
  LanguageProvider, ToastProvider, ErrorBoundary,
  Navigation, HamburgerMenu, CircuitBackground, BlueprintGrid,
  CraneShowcase, CraneCarousel, ScrollProgress, BackToTop,
  FloatingContacts, GlassCard, AnimatedButton, Input,
  useLanguage, useToast, useBreakpoints, colors, fonts,
} from './italycrane-ui-kit';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useBreakpoints();

  const sampleProducts = [
    { id: 1, name: 'Кран-балка 5т', category: 'Мостовой', loadCapacity: 5, span: 12, inStock: true, image: '/crane1.jpg', tags: ['Электрический'] },
    { id: 2, name: 'Кран-балка 10т', category: 'Мостовой', loadCapacity: 10, span: 18, inStock: false, image: '/crane2.jpg', tags: ['Ручной'] },
    { id: 3, name: 'Козловой кран 20т', category: 'Козловой', loadCapacity: 20, span: 30, inStock: true, image: '/crane3.jpg', tags: ['Портальный'] },
  ];

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ToastProvider>
          <CircuitBackground opacity={isMobile ? 0.04 : 0.08} />
          <BlueprintGrid opacity={0.02} />
          <ScrollProgress />
          <Navigation onMenuToggle={() => setMenuOpen(true)} />
          <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          <main style={{ position: 'relative', zIndex: zIndex.content }}>
            <CraneShowcase
              title="Краны от завода Italycrane"
              subtitle="Производство и поставка мостовых, козловых и консольных кранов в Ташкенте и по Узбекистану"
              ctaText="Перейти в каталог"
              onCta={() => window.location.href = '/catalog'}
            />

            <section style={{ padding: '80px 24px', maxWidth: 1280, margin: '0 auto' }}>
              <h2 style={{ fontFamily: fonts.display, fontSize: 28, marginBottom: 32 }}>Популярные модели</h2>
              <CraneCarousel items={sampleProducts} />
            </section>
          </main>

          <BackToTop />
          <FloatingContacts phone="+998 90 123 45 67" telegram="https://t.me/italycrane" whatsapp="https://wa.me/998901234567" />
        </ToastProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
*/

// ═══════════════════════════════════════════════════════════════════════════════
//  END OF ITALYCRANE UI KIT
// ═══════════════════════════════════════════════════════════════════════════════
