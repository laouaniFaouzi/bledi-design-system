import * as React from 'react';

/** Native select with Bledi chrome. Placeholder is the em-dash form: "— Choisir —". */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  placeholder?: string;
}

export function Select({ options = [], placeholder, style, ...rest }: SelectProps) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <select
        style={{
          width: '100%', boxSizing: 'border-box', appearance: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
          color: 'var(--text-primary)', background: 'var(--surface-card)',
          border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)',
          padding: '11px 34px 11px 14px', minHeight: 'var(--tap-target-min)', outline: 'none',
        }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', pointerEvents: 'none', fontSize: 11, lineHeight: 1 }}>▲▼</span>
    </div>
  );
}
