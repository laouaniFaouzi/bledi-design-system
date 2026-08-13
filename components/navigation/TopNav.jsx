import React from 'react';
import { Icon } from '../core/Icon.jsx';

const topNavItems = [
  { value: 'requests', label: 'Demandes', icon: 'inbox' },
  { value: 'trips', label: 'Mes trajets', icon: 'plane' },
  { value: 'messages', label: 'Messages', icon: 'message' },
  { value: 'profile', label: 'Profil', icon: 'user' },
];

export function TopNav({ active = 'requests', onNavigate, logoSrc, style, ...rest }) {
  return (
    <header
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 'var(--nav-height)', padding: '0 var(--space-6)',
        background: 'var(--color-bg)', borderBottom: '1px solid var(--border-default)',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
        {logoSrc
          ? <img src={logoSrc} alt="Bledi" style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', display: 'block' }} />
          : <span style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-brand)', fontSize: 'var(--text-lg)' }}>Bledi</span>}
      </a>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        {topNavItems.map((it) => {
          const on = it.value === active;
          return (
            <button
              key={it.value}
              type="button"
              onClick={() => onNavigate && onNavigate(it.value)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'inherit', fontSize: 'var(--text-base)',
                color: on ? '#FFFFFF' : 'var(--text-primary)',
                background: on ? 'var(--bledi-green-700)' : 'transparent',
                border: 'none', borderRadius: 'var(--radius-pill)',
                padding: '10px 18px', cursor: 'pointer', transition: 'var(--transition-default)',
              }}
            >
              <Icon name={it.icon} size={16} />
              {it.label}
            </button>
          );
        })}
      </nav>

      <button type="button" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 8 }}>
        <Icon name="bell" size={20} />
      </button>
    </header>
  );
}
