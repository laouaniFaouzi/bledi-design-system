import React from 'react';

export function SegmentedTabs({ tabs = [], value, onChange, style, ...rest }) {
  return (
    <div
      style={{
        display: 'grid', gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
        background: 'var(--surface-muted)', borderRadius: 'var(--radius-pill)',
        padding: '4px', ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => onChange && onChange(t.value)}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
              fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
              color: active ? '#FFFFFF' : 'var(--text-primary)',
              background: active ? 'var(--bledi-green-700)' : 'transparent',
              border: 'none', borderRadius: 'var(--radius-pill)',
              padding: '11px 12px', cursor: 'pointer', transition: 'var(--transition-default)',
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
