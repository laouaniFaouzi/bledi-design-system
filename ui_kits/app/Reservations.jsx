import React from 'react';

export function Reservations({ NS }) {
  const { Button, Icon, UnderlineTabs, EmptyState, ProtectionPanel } = NS;
  const [tab, setTab] = React.useState('d');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)' }}>Mes réservations</h1>
        <p style={{ margin: '6px 0 0', fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>Suivez l'état de vos demandes et trajets.</p>
      </div>
      <UnderlineTabs value={tab} onChange={setTab} tabs={[
        { value: 'd', label: 'Mes demandes' },
        { value: 'p', label: 'Mes trajets publiés' },
      ]} />
      <EmptyState
        icon={<Icon name="package" size={20} />}
        title={tab === 'd' ? 'Aucune réservation' : 'Aucun trajet publié'}
        description={tab === 'd' ? 'Trouvez un voyageur de confiance pour votre prochain envoi.' : 'Déclarez votre trajet pour recevoir des demandes.'}
        action={<Button size="sm">{tab === 'd' ? 'Trouver un voyageur' : 'Déclarer mon trajet'}</Button>}
      />
      <ProtectionPanel
        description="Votre paiement est conservé en toute sécurité jusqu'à ce que vous confirmiez la bonne réception de votre colis."
        points={['Transaction sécurisée', "Vérification d'identité", 'Support 7j/7']}
        linkLabel="Besoin d'aide ?"
      />
    </div>
  );
}
