import React from 'react';

export function EmptyState({ icon, title, description, action, style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)', padding: 'var(--space-10) var(--space-6)',
        textAlign: 'center', fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 44, height: 44, borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-muted)', color: 'var(--text-secondary)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 'var(--space-4)',
      }}>{icon}</span>
      <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>{title}</div>
      {description ? (
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '4px' }}>{description}</div>
      ) : null}
      {action ? <div style={{ marginTop: 'var(--space-5)' }}>{action}</div> : null}
    </div>
  );
}
