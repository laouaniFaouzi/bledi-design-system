import * as React from 'react';
import { Icon, IconName } from '../core/Icon';

/**
 * Mobile tab bar: four destinations plus the raised green "Publier" action.
 */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  active?: 'requests' | 'trips' | 'publish' | 'messages' | 'profile';
  onNavigate?: (value: string) => void;
}

export function BottomNav({ active = 'requests', onNavigate, style, ...rest }: BottomNavProps) {
  const items: { value: string; label: string; icon: IconName; primary?: boolean }[] = [
    { value: 'requests', label: 'Demandes', icon: 'inbox' },
    { value: 'trips', label: 'Mes trajets', icon: 'plane' },
    { value: 'publish', label: 'Publier', icon: 'plus', primary: true },
    { value: 'messages', label: 'Messages', icon: 'message' },
    { value: 'profile', label: 'Profil', icon: 'user' },
  ];
  return (
    <nav
      style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', alignItems: 'end',
        background: 'var(--surface-card)', borderTop: '1px solid var(--border-default)',
        padding: '8px 8px 12px', fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.value === active;
        if (it.primary) {
          return (
            <button key={it.value} type="button" onClick={() => onNavigate && onNavigate(it.value)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-pill)', background: 'var(--bledi-green-700)', color: '#FFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="plus" size={22} />
              </span>
              <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-secondary)' }}>{it.label}</span>
            </button>
          );
        }
        return (
          <button key={it.value} type="button" onClick={() => onNavigate && onNavigate(it.value)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: on ? 'var(--text-brand)' : 'var(--text-secondary)', padding: '6px 0',
            }}>
            <Icon name={it.icon} size={20} />
            <span style={{ fontSize: 'var(--text-2xs)', fontWeight: on ? 'var(--weight-medium)' : 'var(--weight-regular)' }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
