import * as React from 'react';

/** Small status pill: "Trajet vérifié Bledi", "Avion", "Paiement sécurisé". */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'verified' | 'brand' | 'onDark' | 'danger';
  icon?: React.ReactNode;
  /** Uppercase + letter-spaced, for eyebrow labels like "TRAJET OFFICIEL" */
  caps?: boolean;
  children?: React.ReactNode;
}

const badgeTones = {
  neutral: { background: 'var(--surface-muted)', color: 'var(--text-primary)', border: '1px solid transparent' },
  verified: { background: 'var(--surface-notice)', color: 'var(--bledi-gold-600)', border: '1px solid var(--border-notice)' },
  brand: { background: 'var(--bledi-green-100)', color: 'var(--text-brand)', border: '1px solid transparent' },
  onDark: { background: 'rgba(233,185,73,0.14)', color: 'var(--text-accent)', border: '1px solid rgba(233,185,73,0.3)' },
  danger: { background: 'var(--surface-danger)', color: 'var(--text-danger)', border: '1px solid transparent' },
};

export function Badge({ tone = 'neutral', icon, caps = false, style, children, ...rest }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: caps ? 'var(--tracking-caps)' : 'var(--tracking-normal)',
        textTransform: caps ? 'uppercase' : 'none',
        padding: '5px 10px', borderRadius: 'var(--radius-pill)', lineHeight: 1.2,
        ...badgeTones[tone], ...style,
      }}
      {...rest}
    >
      {icon}{children}
    </span>
  );
}
