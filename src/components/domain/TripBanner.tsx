import * as React from 'react';

/** Dark green confirmation banner that carries the chosen trip through the rest of the flow. */
export interface TripBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title?: string;
  route?: string;
  schedule?: string;
}

export function TripBanner({ eyebrow = 'Trajet officiel', title, route, schedule, style, ...rest }: TripBannerProps) {
  return (
    <div
      style={{
        background: 'var(--gradient-panel)', color: 'var(--text-on-dark)',
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      <div style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-accent)', fontWeight: 'var(--weight-semibold)' }}>
        {eyebrow}
      </div>
      <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', marginTop: 8 }}>{title}</div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', marginTop: 4 }}>{route}</div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', marginTop: 2 }}>{schedule}</div>
    </div>
  );
}
