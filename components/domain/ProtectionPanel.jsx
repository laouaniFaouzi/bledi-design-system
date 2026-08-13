import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ProtectionPanel({ title = 'Protection Bledi', description, points = [], linkLabel, onLink, style, ...rest }) {
  return (
    <section
      style={{
        background: 'var(--gradient-panel)', color: 'var(--text-on-dark)',
        borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-panel)', fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-pill)', background: 'rgba(233,185,73,0.16)', color: 'var(--text-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="shield-check" size={18} />
      </span>
      <h3 style={{ margin: 'var(--space-4) 0 var(--space-2)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-on-dark-muted)' }}>{description}</p>
      <ul style={{ listStyle: 'none', margin: 'var(--space-5) 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {points.map((p) => (
          <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--text-sm)' }}>
            <span style={{ color: 'var(--text-accent)', display: 'inline-flex' }}><Icon name="check" size={15} /></span>{p}
          </li>
        ))}
      </ul>
      {linkLabel ? (
        <button type="button" onClick={onLink}
          style={{ marginTop: 'var(--space-5)', paddingTop: 'var(--space-4)', borderTop: '1px solid rgba(255,255,255,0.14)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', color: 'var(--text-accent)', fontFamily: 'inherit', fontSize: 'var(--text-base)', cursor: 'pointer' }}>
          {linkLabel}<Icon name="arrow-right" size={16} />
        </button>
      ) : null}
    </section>
  );
}
