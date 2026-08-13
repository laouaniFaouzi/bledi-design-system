import React from 'react';
import { Icon } from './Icon.jsx';

export function RatingStars({ value = 0, count, size = 14, editable = false, onChange, style, ...rest }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {[1, 2, 3, 4, 5].map((n) => {
        const on = n <= Math.round(value);
        return (
          <span key={n}
            onClick={editable && onChange ? () => onChange(n) : undefined}
            style={{
              color: on ? 'var(--bledi-gold-500)' : 'var(--bledi-neutral-200)',
              display: 'inline-flex', cursor: editable ? 'pointer' : 'default',
            }}>
            <Icon name="star" size={size} fill={on ? 'currentColor' : 'none'} />
          </span>
        );
      })}
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginLeft: 4 }}>{value.toFixed(1)}</span>
      {count != null ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>· {count} avis</span> : null}
    </span>
  );
}
