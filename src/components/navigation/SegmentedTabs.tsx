import * as React from 'react';

/** Pill segmented control on a grey track — the primary in-page switcher. */
export interface SegmentedTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export function SegmentedTabs({ tabs = [], value, onChange, style, ...rest }: SegmentedTabsProps) {
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
