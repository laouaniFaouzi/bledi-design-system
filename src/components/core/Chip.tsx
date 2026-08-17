import * as React from 'react';

/** Rounded list token: route pairs, forbidden-items list, filter values. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  selected?: boolean;
  /** Tints the icon red — used in the "Ce qui n'est jamais accepté" list */
  forbidden?: boolean;
  children?: React.ReactNode;
}

export function Chip({ icon, selected = false, forbidden = false, style, children, ...rest }: ChipProps) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
        color: forbidden ? 'var(--text-primary)' : 'var(--text-primary)',
        background: selected ? 'var(--surface-selected)' : 'var(--surface-card)',
        border: '1px solid ' + (selected ? 'var(--border-strong)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-pill)', padding: '9px 16px', lineHeight: 1.2,
        ...style,
      }}
      {...rest}
    >
      {icon ? <span style={{ color: forbidden ? 'var(--text-danger)' : 'var(--text-brand)', display: 'inline-flex' }}>{icon}</span> : null}
      {children}
    </span>
  );
}
