import * as React from 'react';

/** Two-up pill choice used all through "Publier une demande" (Avion/Bateau, sens du trajet). */
export interface OptionToggleOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}
export interface OptionToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options?: OptionToggleOption[];
  value?: string;
  onChange?: (value: string) => void;
  columns?: number;
}

export function OptionToggle({ options = [], value, onChange, columns = 2, style, ...rest }: OptionToggleProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 'var(--space-3)', ...style }} {...rest}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange && onChange(o.value)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
              color: active ? 'var(--text-brand)' : 'var(--text-primary)',
              background: active ? 'var(--surface-selected)' : 'var(--surface-card)',
              border: '1px solid ' + (active ? 'var(--border-strong)' : 'var(--border-default)'),
              borderRadius: 'var(--radius-pill)', padding: '13px 18px', minHeight: 'var(--tap-target-min)',
              cursor: 'pointer', transition: 'var(--transition-default)',
            }}
          >
            {o.icon}{o.label}
          </button>
        );
      })}
    </div>
  );
}
