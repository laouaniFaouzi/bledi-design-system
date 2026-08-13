import React from 'react';

export function UnderlineTabs({ tabs = [], value, onChange, style, ...rest }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${tabs.length}, 1fr)`, borderBottom: '1px solid var(--border-default)', ...style }} {...rest}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => onChange && onChange(t.value)}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
              fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
              color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
              background: 'transparent', border: 'none',
              borderBottom: '2px solid ' + (active ? 'var(--bledi-green-700)' : 'transparent'),
              padding: '12px 8px', marginBottom: '-1px', cursor: 'pointer',
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
