import React from 'react';

export function Switch({ checked = false, onChange, label, hint, style, ...rest }) {
  return (
    <label
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-4)', cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', ...style,
      }}
      {...rest}
    >
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block' }}>{label}</span>
        {hint ? <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 2 }}>{hint}</span> : null}
      </span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 46, height: 28, flex: '0 0 auto', borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--bledi-green-700)' : 'var(--bledi-neutral-200)',
        padding: 3, boxSizing: 'border-box', transition: 'var(--transition-default)',
        display: 'inline-flex', justifyContent: checked ? 'flex-end' : 'flex-start',
      }}>
        <span style={{ width: 22, height: 22, borderRadius: 'var(--radius-pill)', background: '#FFFFFF', boxShadow: 'var(--shadow-card)' }} />
      </span>
    </label>
  );
}
