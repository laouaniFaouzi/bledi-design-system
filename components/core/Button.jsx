import React from 'react';

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
  iconLeft, iconRight, as = 'button', style, children, ...rest
}) {
  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      style={{
        ...btnBase, ...btnSizes[size], ...btnVariants[variant],
        width: block ? '100%' : undefined,
        opacity: disabled ? 0.45 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
