import * as React from 'react';

/** Inline advisory block. Bledi uses these constantly to state safety rules. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** notice = gold safety rule; neutral = grey tip ("Astuce : …"); outline = quiet info; danger = full-bleed dark green warning band */
  tone?: 'notice' | 'neutral' | 'outline' | 'danger';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const alertTones = {
  notice: { background: 'var(--surface-notice)', border: '1px solid var(--border-notice)', icon: 'var(--bledi-gold-600)' },
  neutral: { background: 'var(--surface-muted)', border: '1px solid transparent', icon: 'var(--text-secondary)' },
  outline: { background: 'var(--surface-card)', border: '1px solid var(--border-default)', icon: 'var(--text-secondary)' },
  danger: { background: 'var(--bledi-green-900)', border: '1px solid transparent', icon: '#FFFFFF' },
};

export function Alert({ tone = 'notice', icon, style, children, ...rest }: AlertProps) {
  const t = alertTones[tone];
  const onDark = tone === 'danger';
  return (
    <div
      style={{
        display: 'flex', gap: '10px', alignItems: 'flex-start',
        background: t.background, border: t.border,
        borderRadius: 'var(--radius-lg)', padding: '12px 14px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
        lineHeight: 'var(--leading-normal)',
        color: onDark ? 'var(--text-accent)' : 'var(--text-primary)',
        textAlign: onDark ? 'center' : 'left',
        justifyContent: onDark ? 'center' : 'flex-start',
        fontWeight: onDark ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        ...style,
      }}
      {...rest}
    >
      {icon ? <span style={{ color: t.icon, display: 'inline-flex', flex: '0 0 auto', marginTop: '1px' }}>{icon}</span> : null}
      <div>{children}</div>
    </div>
  );
}
