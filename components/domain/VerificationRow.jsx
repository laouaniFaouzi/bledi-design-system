import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function VerificationRow({ icon, title, description, status = 'OK', done = true, style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      <span style={{ width: 34, height: 34, flex: '0 0 auto', borderRadius: 'var(--radius-md)', background: 'var(--surface-muted)', color: 'var(--text-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)' }}>{title}</div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: 2 }}>{description}</div>
      </div>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-sm)', color: done ? 'var(--text-brand)' : 'var(--text-secondary)' }}>
        {done ? <Icon name="check" size={15} /> : null}{status}
      </span>
    </div>
  );
}
