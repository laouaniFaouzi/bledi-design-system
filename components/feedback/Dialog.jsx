import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Dialog({ open = false, title, description, onClose, actions, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(7, 43, 26, 0.42)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-5)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 460, background: 'var(--surface-card)',
          borderRadius: 'var(--radius-2xl)', boxShadow: '0 24px 60px rgba(7,43,26,0.28)',
          padding: 'var(--space-6)', fontFamily: 'var(--font-sans)', ...style,
        }}
        {...rest}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <h2 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' }}>{title}</h2>
          <button type="button" onClick={onClose}
            style={{ background: 'var(--surface-muted)', border: 'none', borderRadius: 'var(--radius-pill)', width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)', flex: '0 0 auto' }}>
            <Icon name="x" size={15} />
          </button>
        </div>
        {description ? (
          <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{description}</p>
        ) : null}
        {children ? <div style={{ marginTop: 'var(--space-5)' }}>{children}</div> : null}
        {actions ? <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', marginTop: 'var(--space-6)' }}>{actions}</div> : null}
      </div>
    </div>
  );
}
