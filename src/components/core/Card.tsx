import * as React from 'react';

/** The Bledi surface: white hairline card, or the dark green gradient panel. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'light' | 'dark';
  padding?: string;
  children?: React.ReactNode;
}

export function Card({ tone = 'light', padding = 'var(--space-5)', style, children, ...rest }: CardProps) {
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
