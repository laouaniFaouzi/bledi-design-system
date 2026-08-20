import * as React from 'react';

/**
 * Bledi action button — pill-shaped, four brand variants.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = deep green (default app action); accent = gold (marketing CTA on dark); quiet = grey fill; outline = hairline on light; outlineOnDark = hairline on green panels; ghost = text only */
  variant?: 'primary' | 'accent' | 'quiet' | 'outline' | 'outlineOnDark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Full-width — used for the card-footer action ("Proposer mon aide") */
  block?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Render as another element, e.g. "a" */
  as?: 'button' | 'a';
  /**
   * Rend l-unique enfant a la place du bouton, en lui appliquant les styles.
   * C-est ainsi qu-on compose avec le lien d-un routeur — `next/link`, par
   * exemple — sans imbriquer deux <a> ni perdre la navigation cote client :
   *
   *   <Button asChild><Link href="/x">Aller</Link></Button>
   */
  asChild?: boolean;
  /** Cible du lien quand `as="a"`. Absent, le composant n-etait pas composable avec un routeur. */
  href?: string;
  target?: string;
  rel?: string;
  /** Type du bouton quand `as="button"`. Sans lui, impossible de declarer un submit. */
  type?: 'button' | 'submit' | 'reset';
  /**
   * `name` et `value` du bouton de soumission. Necessaires des qu-un formulaire
   * porte plusieurs actions : c-est la paire envoyee au serveur pour savoir
   * laquelle a ete choisie.
   */
  name?: string;
  value?: string;
  children?: React.ReactNode;
}

const btnBase = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
  borderRadius: 'var(--radius-pill)', border: '1px solid transparent',
  cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap',
  transition: 'var(--transition-default)', lineHeight: 1,
};

const btnSizes = {
  sm: { fontSize: 'var(--text-sm)', padding: '9px 16px', minHeight: '34px' },
  md: { fontSize: 'var(--text-base)', padding: '12px 22px', minHeight: '44px' },
  lg: { fontSize: 'var(--text-md)', padding: '15px 28px', minHeight: '52px' },
};

const btnVariants = {
  primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' },
  accent: { background: 'var(--action-accent-bg)', color: 'var(--action-accent-fg)', fontWeight: 'var(--weight-semibold)' },
  quiet: { background: 'var(--action-quiet-bg)', color: 'var(--action-quiet-fg)' },
  outline: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-default)' },
  outlineOnDark: { background: 'rgba(255,255,255,0.06)', color: 'var(--text-on-dark)', borderColor: 'rgba(255,255,255,0.22)' },
  ghost: { background: 'transparent', color: 'var(--text-brand)' },
};

export function Button({
  variant = 'primary', size = 'md', block = false, disabled = false,
  iconLeft, iconRight, as = 'button', asChild = false, style, children, ...rest
}: ButtonProps) {
  const styleFinal: React.CSSProperties = {
    ...btnBase, ...btnSizes[size], ...btnVariants[variant],
    width: block ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    ...style,
  };

  if (asChild && React.isValidElement(children)) {
    const enfant = children as React.ReactElement<{
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }>;
    return React.cloneElement(
      enfant,
      // Le style de l-enfant l-emporte : c-est lui qu-on habille, pas l-inverse.
      { ...rest, style: { ...styleFinal, ...enfant.props.style } },
      iconLeft,
      enfant.props.children,
      iconRight,
    );
  }

  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      style={styleFinal}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
