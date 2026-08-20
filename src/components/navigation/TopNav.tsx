import * as React from 'react';
import { Icon, IconName } from '../core/Icon';

/** Une destination de la navigation. `value` est libre : le consommateur y met ce qu'il veut. */
export interface NavItem {
  value: string;
  label: string;
  icon: IconName;
  /** Action mise en avant (pastille verte surélevée). BottomNav uniquement. */
  primary?: boolean;
}

/** Les quatre destinations par défaut, en français. */
export const defaultTopNavItems: NavItem[] = [
  { value: 'requests', label: 'Demandes', icon: 'inbox' },
  { value: 'trips', label: 'Mes trajets', icon: 'plane' },
  { value: 'messages', label: 'Messages', icon: 'message' },
  { value: 'profile', label: 'Profil', icon: 'user' },
];

/**
 * En-tête d'application sur desktop : logo, destinations en pilules, emplacements
 * à droite.
 */
export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Valeur de la destination active. Chaîne libre, et non plus une énumération
   * fermée : un consommateur a en général plus de routes que d'onglets, et c'est
   * à lui de décider laquelle allume lequel.
   */
  active?: string;
  onNavigate?: (value: string) => void;
  /**
   * Remplace les destinations par défaut. C'est par là que passent les libellés
   * traduits : le composant ne peut pas connaître la langue du consommateur.
   */
  items?: NavItem[];
  /** Chemin vers bledi-logo.png. */
  logoSrc?: string;
  /** Cible du logo. Sans `logoHref` ni `onLogo`, le logo n'est pas cliquable. */
  logoHref?: string;
  onLogo?: () => void;
  /** Texte accessible du logo. */
  logoLabel?: string;
  /**
   * Contrôle de notifications. Le composant n'en fournit aucun par défaut :
   * une cloche qui ne fait rien est un mensonge d'interface. Le consommateur
   * passe le sien, avec son compteur de non-lus.
   */
  bell?: React.ReactNode;
  /** Contrôles supplémentaires à droite : déconnexion, menu de compte… */
  actions?: React.ReactNode;
}

export function TopNav({
  active = 'requests', onNavigate, items = defaultTopNavItems,
  logoSrc, logoHref, onLogo, logoLabel = 'Bledi', bell, actions, style, ...rest
}: TopNavProps) {
  const marque = logoSrc
    ? <img src={logoSrc} alt={logoLabel} style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', display: 'block' }} />
    : <span style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-brand)', fontSize: 'var(--text-lg)' }}>{logoLabel}</span>;

  const styleMarque: React.CSSProperties = { display: 'flex', alignItems: 'center', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' };

  return (
    <header
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 'var(--nav-height)', padding: '0 var(--space-6)',
        background: 'var(--color-bg)', borderBottom: 'var(--border-width) solid var(--border-default)',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      {logoHref
        ? <a href={logoHref} aria-label={logoLabel} style={{ ...styleMarque, textDecoration: 'none' }}>{marque}</a>
        : onLogo
          ? <button type="button" onClick={onLogo} aria-label={logoLabel} style={styleMarque}>{marque}</button>
          : <span style={{ display: 'flex', alignItems: 'center' }}>{marque}</span>}

      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        {items.map((it) => {
          const on = it.value === active;
          return (
            <button
              key={it.value}
              type="button"
              aria-current={on ? 'page' : undefined}
              onClick={() => onNavigate && onNavigate(it.value)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
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

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        {bell}
        {actions}
      </div>
    </header>
  );
}
