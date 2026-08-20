import * as React from 'react';
import { Icon } from '../core/Icon';
import { NavItem } from './TopNav';

/** Les cinq destinations par défaut, en français, « Publier » mise en avant. */
export const defaultBottomNavItems: NavItem[] = [
  { value: 'requests', label: 'Demandes', icon: 'inbox' },
  { value: 'trips', label: 'Mes trajets', icon: 'plane' },
  { value: 'publish', label: 'Publier', icon: 'plus', primary: true },
  { value: 'messages', label: 'Messages', icon: 'message' },
  { value: 'profile', label: 'Profil', icon: 'user' },
];

/** Barre d'onglets mobile : quatre destinations plus l'action « Publier » surélevée. */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Valeur de la destination active. Chaîne libre — voir TopNav. */
  active?: string;
  onNavigate?: (value: string) => void;
  /** Remplace les destinations par défaut, et porte les libellés traduits. */
  items?: NavItem[];
}

export function BottomNav({
  active = 'requests', onNavigate, items = defaultBottomNavItems, style, ...rest
}: BottomNavProps) {
  return (
    <nav
      style={{
        display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, alignItems: 'end',
        background: 'var(--surface-card)', borderTop: 'var(--border-width) solid var(--border-default)',
        padding: 'var(--space-2) var(--space-2) var(--space-3)', fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.value === active;
        if (it.primary) {
          return (
            <button key={it.value} type="button" aria-current={on ? 'page' : undefined}
              onClick={() => onNavigate && onNavigate(it.value)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-pill)', background: 'var(--bledi-green-700)', color: '#FFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={it.icon} size={22} />
              </span>
              <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-secondary)' }}>{it.label}</span>
            </button>
          );
        }
        return (
          <button key={it.value} type="button" aria-current={on ? 'page' : undefined}
            onClick={() => onNavigate && onNavigate(it.value)}
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
