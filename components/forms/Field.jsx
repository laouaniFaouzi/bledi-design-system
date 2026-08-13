import React from 'react';

export function Field({ label, hint, children, style, ...rest }) {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {label ? (
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '8px' }}>{label}</div>
      ) : null}
      {children}
      {hint ? (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: '8px' }}>{hint}</div>
      ) : null}
    </div>
  );
}
