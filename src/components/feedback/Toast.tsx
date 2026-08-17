import * as React from 'react';
import { Icon } from '../core/Icon';

/** Confirmation éphémère en pilule verte, bas de l'écran. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'success' | 'error';
  onClose?: () => void;
  children?: React.ReactNode;
}

export function Toast({ tone = 'success', children, onClose, style, ...rest }: ToastProps) {
  const success = tone === 'success';
  return (
    <div
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
        background: success ? 'var(--gradient-panel)' : 'var(--bledi-red-600)',
        color: success ? 'var(--text-on-dark)' : '#FFFFFF',
        borderRadius: 'var(--radius-pill)', padding: '13px 20px',
        boxShadow: 'var(--shadow-panel)', fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)', ...style,
      }}
      {...rest}
    >
      <span style={{ color: success ? 'var(--text-accent)' : '#FFFFFF', display: 'inline-flex' }}>
        <Icon name={success ? 'check' : 'alert'} size={16} />
      </span>
      {children}
      {onClose ? (
        <button type="button" onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'inherit', opacity: 0.6, cursor: 'pointer', padding: 0, display: 'inline-flex' }}>
          <Icon name="x" size={14} />
        </button>
      ) : null}
    </div>
  );
}
