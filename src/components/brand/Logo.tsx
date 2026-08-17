import * as React from 'react';

export type LogoTone = 'onLight' | 'onDark' | 'mono';
export type LogoShape = 'squircle' | 'circle' | 'square';

/**
 * Système de logos Bledi : un composant, six assemblages.
 * - `horizontal` : lockup d'en-tête (B + « Bledi » à droite)
 * - `stacked` : B au-dessus du mot, centré
 * - `mark` : le B seul, dans sa tuile (favicon, avatar, app)
 * - `wordmark` : « Bledi » seul
 * - `compact` : pilule verte B + mot, pour barres denses
 * - `appIcon` : composition complète (tuile + B + mot + signature)
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'horizontal' | 'stacked' | 'mark' | 'wordmark' | 'compact' | 'appIcon';
  /** Hauteur du B en px (le reste est proportionnel). Pour `appIcon`, côté de la tuile. */
  size?: number;
  tone?: LogoTone;
  /** Couleur unique quand `tone="mono"`. */
  color?: string;
  /** Affiche « Le lien entre ici et là-bas ». */
  tagline?: boolean;
  shape?: LogoShape;
  /** Force la couleur de la tuile du B (ex. un blanc translucide sur fond vert). */
  tileColor?: string;
  /** Chemin de assets/bledi-b-mark.png, relatif à la page. */
  markSrc?: string;
  href?: string;
}

export interface LogoMarkProps extends React.HTMLAttributes<HTMLElement> {
  size?: number;
  shape?: LogoShape;
  tone?: LogoTone;
  color?: string;
  tileColor?: string;
  markSrc?: string;
}

export interface LogoWordmarkProps extends React.HTMLAttributes<HTMLElement> {
  size?: number;
  tone?: LogoTone;
  color?: string;
}

/* Système de logos Bledi. Un seul composant, plusieurs assemblages :
   mark / markCircle (le B seul), horizontal (B + mot), stacked, wordmark,
   compact (pilule dense pour en-têtes), appIcon (la composition complète).
   Le tracé du B est une image blanche détourée : il vit toujours sur un fond
   vert (ou encre en mono), jamais posé nu sur du clair.
   `markSrc` est relatif à la page qui monte le composant. */

const DEFAULT_MARK = './assets/bledi-b-mark.png';
const TAGLINE = 'Le lien entre ici et là-bas';

function tones(tone?: LogoTone, color?: string) {
  if (tone === 'mono') return { tile: color || 'var(--bledi-ink-900)', word: color || 'var(--bledi-ink-900)', sub: color || 'var(--bledi-ink-900)', rule: color || 'var(--bledi-ink-900)' };
  if (tone === 'onDark') return { tile: 'var(--bledi-green-700)', word: 'var(--bledi-gold-400)', sub: 'var(--text-on-dark-muted)', rule: 'rgba(244,241,234,.5)' };
  return { tile: 'var(--bledi-green-700)', word: 'var(--bledi-green-700)', sub: 'var(--text-secondary)', rule: 'var(--border-default)' };
}

/* Le B seul, dans sa tuile. shape: 'squircle' | 'circle' | 'square' */
export function LogoMark({ size = 40, shape = 'squircle', tone = 'onLight', color, tileColor, markSrc = DEFAULT_MARK, style, ...rest }: LogoMarkProps) {
  const t = tones(tone, color);
  if (tileColor) t.tile = tileColor;
  const radius = shape === 'circle' ? '50%' : shape === 'square' ? Math.round(size * 0.08) : Math.round(size * 0.24);
  return (
    <span
      role="img"
      aria-label="Bledi"
      style={{
        width: size, height: size, flex: '0 0 auto', boxSizing: 'border-box',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: t.tile, borderRadius: radius, overflow: 'hidden', ...style,

      }}
      {...rest}
    >
      <img src={markSrc} alt="" style={{ width: size * 0.62, height: size * 0.62, display: 'block', objectFit: 'contain' }} />
    </span>
  );
}

/* « Bledi » typographié, sans le B. */
export function LogoWordmark({ size = 28, tone = 'onLight', color, style, ...rest }: LogoWordmarkProps) {
  const t = { word: color || tones(tone).word };
  return (
    <span
      style={{
        fontFamily: 'var(--font-sans)', fontWeight: 700,
        fontSize: size, lineHeight: 1, letterSpacing: '-0.02em',
        color: t.word, whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      Bledi
    </span>
  );
}

function Tagline({ size, tone, color, rules }: { size: number; tone?: LogoTone; color?: string; rules?: boolean }) {
  const t = tones(tone, color);
  const line = <span style={{ height: 1, width: size * 0.9, background: t.rule, flex: '0 0 auto' }} />;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.45, color: t.sub, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', fontSize: size, lineHeight: 1.2, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>
      {rules ? line : null}{TAGLINE}{rules ? line : null}
    </span>
  );
}

export function Logo({
  variant = 'horizontal',
  size = 40,
  tone = 'onLight',
  color,
  tagline = false,
  shape,
  tileColor,
  markSrc = DEFAULT_MARK,
  href,
  style,
  ...rest
}: LogoProps) {
  const t = tones(tone, color);
  const wrap = (children: React.ReactNode, extra: React.CSSProperties) => {
    const El = (href ? 'a' : 'span') as 'a' | 'span';
    return (
      <El
        href={href}
        aria-label="Bledi"
        style={{ display: 'inline-flex', textDecoration: 'none', ...extra, ...style }}
        {...rest}
      >
        {children}
      </El>
    );
  };

  if (tileColor) t.tile = tileColor;

  if (variant === 'mark') return <LogoMark size={size} shape={shape || 'squircle'} tone={tone} color={color} tileColor={tileColor} markSrc={markSrc} style={style} {...rest} />;

  if (variant === 'wordmark') {
    return wrap(
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: size * 0.16 }}>
        <LogoWordmark size={size * 0.72} tone={tone} color={color} />
        {tagline ? <Tagline size={size * 0.2} tone={tone} color={color} /> : null}
      </span>,
      { alignItems: 'center' }
    );
  }

  if (variant === 'stacked') {
    return wrap(
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.28 }}>
        <LogoMark size={size} shape={shape || 'squircle'} tone={tone} color={color} tileColor={tileColor} markSrc={markSrc} />
        <LogoWordmark size={size * 0.62} tone={tone} color={color} />
        {tagline ? <Tagline size={size * 0.17} tone={tone} color={color} /> : null}
      </span>,
      { flexDirection: 'column', alignItems: 'center' }
    );
  }

  /* Pilule dense : le B et le mot dans un seul bloc vert. Barres d'outils, en-têtes serrés, favicons larges. */
  if (variant === 'compact') {
    return wrap(
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', gap: size * 0.26,
          padding: `${size * 0.16}px ${size * 0.4}px ${size * 0.16}px ${size * 0.22}px`,
          background: t.tile, borderRadius: 'var(--radius-pill)', boxSizing: 'border-box',
        }}
      >
        <img src={markSrc} alt="" style={{ width: size * 0.56, height: size * 0.56, display: 'block', objectFit: 'contain' }} />
        <LogoWordmark size={size * 0.52} tone="mono" color={tone === 'mono' ? 'var(--bledi-neutral-000)' : 'var(--bledi-gold-400)'} />
      </span>,
      { alignItems: 'center' }
    );
  }

  /* Composition complète, façon icône d'application : tuile verte, B, mot, signature. */
  if (variant === 'appIcon') {
    return wrap(
      <span
        style={{
          width: size, height: size, boxSizing: 'border-box',
          display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: size * 0.045, padding: size * 0.1,
          background: t.tile, borderRadius: size * 0.22,
        }}
      >
        <img src={markSrc} alt="" style={{ width: size * 0.42, height: size * 0.42, display: 'block', objectFit: 'contain' }} />
        <LogoWordmark size={size * 0.2} tone="mono" color="var(--bledi-gold-400)" />
        {tagline ? <Tagline size={size * 0.052} color="rgba(255,255,255,.86)" tone="mono" rules /> : null}
      </span>,
      { alignItems: 'center' }
    );
  }

  /* horizontal (défaut) : le lockup d'en-tête. */
  return wrap(
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28 }}>
      <LogoMark size={size} shape={shape || 'squircle'} tone={tone} color={color} tileColor={tileColor} markSrc={markSrc} />
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: size * 0.08 }}>
        <LogoWordmark size={size * 0.58} tone={tone} color={color} />
        {tagline ? <Tagline size={size * 0.17} tone={tone} color={color} /> : null}
      </span>
    </span>,
    { alignItems: 'center' }
  );
}
