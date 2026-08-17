import * as React from 'react';
import { Button, Badge, Icon, SegmentedTabs, RequestCard, EmptyState, Alert, ProtectionPanel } from '../../src/components';
import bMarkUrl from '../../assets/bledi-b-mark.png';

export function Requests() {
  const [tab, setTab] = React.useState('all');
  const [mode, setMode] = React.useState('Vérifié');
  const [filters, setFilters] = React.useState(false);

  const tripBadges = (
    <>
      <Badge icon={<Icon name="plane" size={13} />}>Avion</Badge>
      <Badge tone="verified" icon={<Icon name="shield-check" size={13} />}>Trajet vérifié Bledi</Badge>
      <Badge icon={<Icon name="eye-off" size={13} />}>Coordonnées masquées</Badge>
      <Badge icon={<Icon name="credit-card" size={13} />}>Paiement sécurisé</Badge>
    </>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: '6px 6px 6px 16px' }}>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          Mode démo : <strong style={{ color: 'var(--text-primary)' }}>Voyageur vérifié</strong>
        </span>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['Visiteur', 'Connecté', 'Vérifié'].map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
                color: mode === m ? '#FFF' : 'var(--text-primary)',
                background: mode === m ? 'var(--bledi-green-700)' : 'transparent',
                border: '1px solid ' + (mode === m ? 'transparent' : 'var(--border-default)'),
                borderRadius: 'var(--radius-pill)', padding: '6px 12px', cursor: 'pointer',
              }}>{m}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)' }}>
            Demandes de la communauté
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
            Trouvez des personnes qui ont besoin d'aide sur un trajet officiel France ↔ Algérie.
          </p>
        </div>
        <Button size="sm" iconLeft={<Icon name="plus" size={14} />}>Publier</Button>
      </div>

      <SegmentedTabs value={tab} onChange={setTab} tabs={[
        { value: 'all', label: 'Voir les demandes' },
        { value: 'mine', label: 'Mes demandes' },
        { value: 'offers', label: 'Mes propositions' },
      ]} />

      {tab === 'all' ? (
        <>
          <Button variant="outline" block onClick={() => setFilters(!filters)}>
            {filters ? 'Masquer les filtres' : 'Afficher les filtres'}
          </Button>
          {filters ? (
            <Alert tone="outline">Filtres : transport, sens du trajet, ville de départ, type de demande, budget.</Alert>
          ) : null}

          <RequestCard
            badges={tripBadges}
            category="Recherche accompagnement senior"
            carrier="Air Algérie" flight="AH1009"
            route={{ from: 'Paris CDG', fromCode: 'CDG', fromTime: '10:30', to: 'Alger — Houari Boumediene', toCode: 'ALG', toTime: '12:35' }}
            date="25 août 2026"
            author="Yacine T." authorVerified markSrc={bMarkUrl} budget="90 €"
            message="Je recherche une personne de confiance pour accompagner mon père depuis l'enregistrement jusqu'à la remise à la famille à Alger."
            details={
              <>
                <div><strong>Mon père</strong> · 78 · Aide légère · arabe</div>
                <div>Aide pour : enregistrement, bagages, embarquement, remise à la famille</div>
                <div>Point de rencontre et contact à l'arrivée partagés via la messagerie sécurisée après paiement.</div>
              </>
            }
            notices={
              <>
                <Alert tone="notice" icon={<Icon name="alert" size={16} />}>
                  Ne partagez pas d'informations médicales sensibles dans l'annonce publique. Les détails nécessaires pourront être échangés après paiement validé, dans la messagerie sécurisée Bledi.
                </Alert>
                <Alert tone="neutral" icon={<Icon name="sparkles" size={16} />} style={{ marginTop: 'var(--space-3)' }}>
                  Astuce : <u>publiez ce trajet officiel</u> pour apparaître en priorité auprès du demandeur.
                </Alert>
              </>
            }
            action={<Button block>Proposer mon aide</Button>}
          />

          <RequestCard
            badges={tripBadges}
            category="Recherche document"
            carrier="Air Algérie" flight="AH1031"
            route={{ from: 'Paris CDG', fromCode: 'CDG', fromTime: '08:25', to: 'Constantine — Mohamed Boudiaf', toCode: 'CZL', toTime: '10:40' }}
            date="12 août 2026"
            author="Sofia B." authorVerified markSrc={bMarkUrl} budget="25 €"
            message="Dossier administratif à remettre en main propre à un proche à Oran."
            notices={
              <Alert tone="neutral" icon={<Icon name="sparkles" size={16} />}>
                Astuce : <u>publiez ce trajet officiel</u> pour apparaître en priorité auprès du demandeur.
              </Alert>
            }
            action={<Button block>Proposer mon aide</Button>}
          />

          <ProtectionPanel
            description="Votre paiement est conservé en toute sécurité jusqu'à ce que vous confirmiez la bonne réception de votre colis."
            points={['Transaction sécurisée', "Vérification d'identité", 'Support 7j/7']}
            linkLabel="Besoin d'aide ?"
          />
        </>
      ) : (
        <EmptyState
          icon={<Icon name="message" size={20} />}
          title={tab === 'mine' ? "Vous n'avez aucune demande publiée" : "Vous n'avez fait aucune proposition"}
          description={tab === 'mine' ? 'Publiez votre première demande sur un trajet officiel.' : 'Proposez votre aide sur une demande de la communauté.'}
          action={<Button size="sm">{tab === 'mine' ? 'Publier une demande' : 'Voir les demandes'}</Button>}
        />
      )}
    </div>
  );
}
