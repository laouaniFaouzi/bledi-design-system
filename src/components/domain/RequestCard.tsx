import * as React from 'react';
import { Badge } from '../core/Badge';
import { Avatar } from '../core/Avatar';
import { VerifiedName } from '../core/VerifiedMark';
import { Icon } from '../core/Icon';
import { RouteLine } from './RouteLine';

/**
 * The central object of the app: one community request pinned to an official trip.
 */
export interface RequestCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Row of <Badge> elements: transport, "Trajet vérifié Bledi", "Coordonnées masquées", "Paiement sécurisé" */
  badges?: React.ReactNode;
  /** Right-aligned request type, e.g. "Recherche accompagnement senior" */
  category?: string;
  carrier?: string;
  flight?: string;
  route?: { from?: string; fromCode?: string; fromTime?: string; to?: string; toCode?: string; toTime?: string };
  date?: string;
  author?: string;
  /** Affiche la pastille « B » de profil vérifié après le nom */
  authorVerified?: boolean;
  /** Chemin vers bledi-b-mark.png depuis la page hôte */
  markSrc?: string;
  authorRole?: string;
  /**
   * Libelle au-dessus du montant. Par defaut « Budget proposé » ; les
   * consommateurs qui traduisent passent le leur.
   */
  budgetLabel?: string;
  /** Surcharge « Départ » / « Arrivée » de la RouteLine interne. */
  routeLabels?: { from?: string; to?: string };
  /** Formatted amount including the € sign */
  budget?: string;
  message?: string;
  /** Grey block of structured facts */
  details?: React.ReactNode;
  /** One or more <Alert> elements */
  notices?: React.ReactNode;
  /** Usually <Button block>Proposer mon aide</Button> */
  action?: React.ReactNode;
}

export function RequestCard({
  badges = [], category, carrier, flight, route = {}, date, author,
  authorVerified = false, markSrc, authorRole, budget,
  budgetLabel = 'Budget proposé', routeLabels, message, details, notices, action,
  style, ...rest
}: RequestCardProps) {
  return (
    <article
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-card)',
        fontFamily: 'var(--font-sans)', overflow: 'hidden', ...style,
      }}
      {...rest}
    >
      <div style={{ padding: 'var(--space-5)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'flex-start' }}>
          {badges}
        </div>
        {category ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <Badge tone="neutral">{category}</Badge>
          </div>
        ) : null}

        {carrier || flight ? (
          <h3 style={{ margin: 'var(--space-4) 0 var(--space-5)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-brand)' }}>
            {carrier}{carrier && flight ? <span style={{ marginLeft: 6 }}>{flight}</span> : flight}
          </h3>
        ) : null}

        <RouteLine {...route} fromLabel={routeLabels?.from} toLabel={routeLabels?.to} />

        {date ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            <Icon name="calendar" size={14} />{date}
          </div>
        ) : null}
      </div>

      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {author || budget ? (
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
            {/* Sans `author`, on n-affiche pas une pastille « ? » suivie d-un nom
                vide : mieux vaut ne rien dire que d-inventer un auteur. */}
            {author ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Avatar initial={author.charAt(0)} />
                <div>
                  <VerifiedName name={author} verified={authorVerified} markSrc={markSrc} />
                  {authorRole ? (
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{authorRole}</div>
                  ) : null}
                </div>
              </div>
            ) : <span />}
            {budget ? (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{budgetLabel}</div>
                <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)' }}>{budget}</div>
              </div>
            ) : null}
          </div>
        ) : null}

        {message ? <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)' }}>{message}</p> : null}

        {details ? (
          <div style={{ background: 'var(--surface-muted)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-primary)' }}>
            {details}
          </div>
        ) : null}

        {notices}
        {action}
      </div>
    </article>
  );
}
