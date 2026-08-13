import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ checked = false, onChange, label, hint, style, ...rest }) {
  return (
    <label
      style={{
        display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
        background: 'var(--surface-card)', border: '1px solid ' + (checked ? 'var(--border-strong)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
        transition: 'var(--transition-default)', ...style,
      }}
      {...rest}
    >
      <input type="checkbox" checked={checked} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 22, height: 22, flex: '0 0 auto', borderRadius: 'var(--radius-sm)',
        background: checked ? 'var(--bledi-green-700)' : 'var(--surface-card)',
        border: '1px solid ' + (checked ? 'var(--bledi-green-700)' : 'var(--border-default)'),
        color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'var(--transition-default)',
      }}>
        {checked ? <Icon name="check" size={14} strokeWidth={2.6} /> : null}
      </span>
      <span>
        <span style={{ display: 'block' }}>{label}</span>
        {hint ? <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 2 }}>{hint}</span> : null}
      </span>
    </label>
  );
}
