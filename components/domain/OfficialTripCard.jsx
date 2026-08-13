import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Icon } from '../core/Icon.jsx';

export function OfficialTripCard({ carrier, reference, route, date, times, selected = false, onSelect, style, ...rest }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        background: selected ? 'var(--surface-selected)' : 'var(--surface-card)',
        border: '1px solid ' + (selected ? 'var(--border-strong)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
        transition: 'var(--transition-default)', ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-brand)' }}>
          {carrier} · {reference}
        </span>
        <Badge tone="verified" icon={<Icon name="shield-check" size={12} />}>Vérifié</Badge>
      </div>
      <div style={{ fontSize: 'var(--text-sm)', marginTop: 4 }}>{route}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 6 }}>
        <Icon name="calendar" size={13} />{date}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 4 }}>
        <Icon name="clock" size={13} />{times}
      </div>
      {selected ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-brand)' }}>
          <Icon name="check" size={14} />Trajet sélectionné
        </div>
      ) : null}
    </button>
  );
}
