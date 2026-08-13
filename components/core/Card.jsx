import React from 'react';

export function Card({ tone = 'light', padding = 'var(--space-5)', style, children, ...rest }) {
  const dark = tone === 'dark';
  return (
    <div
      style={{
        background: dark ? 'var(--gradient-panel)' : 'var(--surface-card)',
        color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)',
        border: dark ? 'none' : '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: dark ? 'var(--shadow-panel)' : 'var(--shadow-card)',
        padding, ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
