import * as React from 'react';

/** Quieter second-level switcher (Mes réservations). */
export interface UnderlineTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export function UnderlineTabs({ tabs = [], value, onChange, style, ...rest }: UnderlineTabsProps) {
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
