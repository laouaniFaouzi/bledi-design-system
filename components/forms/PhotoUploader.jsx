import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function PhotoUploader({ label = 'Photos de l\'objet', hint, count = 0, min = 2, onAdd, style, ...rest }) {
  const slots = Array.from({ length: Math.max(min, count + 1) });
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>{label}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(104px, 1fr))', gap: 'var(--space-3)' }}>
        {slots.map((_, i) => {
          const filled = i < count;
          return (
            <button key={i} type="button" onClick={filled ? undefined : onAdd}
              style={{
                aspectRatio: '1 / 1', cursor: filled ? 'default' : 'pointer',
                background: filled
                  ? 'repeating-linear-gradient(135deg, var(--surface-muted) 0 8px, var(--bledi-cream-200) 8px 16px)'
                  : 'var(--surface-card)',
                border: '1px ' + (filled ? 'solid' : 'dashed') + ' var(--border-default)',
                borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 8,
                color: 'var(--text-secondary)', fontFamily: 'inherit', fontSize: 'var(--text-2xs)',
              }}>
              <Icon name="camera" size={18} />
              {filled ? 'photo ' + (i + 1) : 'ajouter'}
            </button>
          );
        })}
      </div>
      {hint ? <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>{hint}</div> : null}
    </div>
  );
}
