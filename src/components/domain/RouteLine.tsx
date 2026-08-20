import * as React from 'react';
import { Icon } from '../core/Icon';

/** Departure → arrival row with airport/port codes, times and the gold arrow node. */
export interface RouteLineProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: string; fromCode?: string; fromTime?: string;
  to?: string; toCode?: string; toTime?: string;
  /** Surcharge « Départ ». Les consommateurs qui traduisent passent leur propre chaîne. */
  fromLabel?: string;
  /** Surcharge « Arrivée ». */
  toLabel?: string;
}

export function RouteLine({
  from, fromCode, fromTime, to, toCode, toTime,
  fromLabel = 'Départ', toLabel = 'Arrivée', style, ...rest
}: RouteLineProps) {
  const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 };
  const cap: React.CSSProperties = { fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-secondary)' };
  const place: React.CSSProperties = { fontSize: 'var(--text-base)', color: 'var(--text-primary)' };
  const time: React.CSSProperties = { fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' };
  const code: React.CSSProperties = { fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 'var(--space-4)', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={col}>
        <span style={cap}>{fromLabel}</span>
        {from ? <span style={place}>{from}</span> : null}
        {fromCode || fromTime ? (
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            {fromCode ? <span style={code}>{fromCode}</span> : null}
            {fromTime ? <span style={time}>{fromTime}</span> : null}
          </span>
        ) : null}
      </div>
      <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-pill)', background: 'var(--surface-notice)', color: 'var(--bledi-gold-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="arrow-right" size={16} />
      </span>
      <div style={{ ...col, alignItems: 'flex-end', textAlign: 'right' }}>
        <span style={cap}>{toLabel}</span>
        {to ? <span style={place}>{to}</span> : null}
        {toCode || toTime ? (
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            {toCode ? <span style={code}>{toCode}</span> : null}
            {toTime ? <span style={time}>{toTime}</span> : null}
          </span>
        ) : null}
      </div>
    </div>
  );
}
