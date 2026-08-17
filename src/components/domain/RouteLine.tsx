import * as React from 'react';
import { Icon } from '../core/Icon';

/** Departure → arrival row with airport/port codes, times and the gold arrow node. */
export interface RouteLineProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: string; fromCode?: string; fromTime?: string;
  to?: string; toCode?: string; toTime?: string;
}

export function RouteLine({ from, fromCode, fromTime, to, toCode, toTime, style, ...rest }: RouteLineProps) {
  const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 };
  const cap: React.CSSProperties = { fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-secondary)' };
  const place: React.CSSProperties = { fontSize: 'var(--text-base)', color: 'var(--text-primary)' };
  const time: React.CSSProperties = { fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' };
  const code: React.CSSProperties = { fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 'var(--space-4)', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={col}>
        <span style={cap}>Départ</span>
        <span style={place}>{from}</span>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}><span style={code}>{fromCode}</span><span style={time}>{fromTime}</span></span>
      </div>
      <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-pill)', background: 'var(--surface-notice)', color: 'var(--bledi-gold-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="arrow-right" size={16} />
      </span>
      <div style={{ ...col, alignItems: 'flex-end', textAlign: 'right' }}>
        <span style={cap}>Arrivée</span>
        <span style={place}>{to}</span>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}><span style={code}>{toCode}</span><span style={time}>{toTime}</span></span>
      </div>
    </div>
  );
}
