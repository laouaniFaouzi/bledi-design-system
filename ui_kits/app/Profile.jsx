import React from 'react';

export function Profile({ NS, onVerify }) {
  const { Button, Badge, Icon, Avatar, Card, Alert, Switch, RatingStars, VerifiedName, VerifiedMark, Chip } = NS;
  const [notif, setNotif] = React.useState(true);
  const [visible, setVisible] = React.useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div style={{ background: 'var(--gradient-panel)', color: 'var(--text-on-dark)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-panel)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <Avatar initial="K" size="lg" tone="muted" />
          <div style={{ minWidth: 0 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)' }}>
              Karim B. <VerifiedMark size={22} tone="onDark" src="../../assets/bledi-b-mark.png" />
            </span>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', marginTop: 4 }}>Membre Bledi depuis mars 2026 · Marseille</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
          <Badge tone="onDark" icon={<Icon name="shield-check" size={12} />}>Profil 100 % vérifié</Badge>
          <Badge tone="onDark" icon={<Icon name="plane" size={12} />}>7 trajets réalisés</Badge>
        </div>
      </div>

      <Card>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <div>
            <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)' }}>Avis reçus</div>
            <div style={{ marginTop: 6 }}><RatingStars value={4.9} count={38} /></div>
          </div>
          <Button variant="outline" size="sm">Voir les avis</Button>
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)' }}>Mes trajets habituels</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          <Chip icon={<Icon name="ship" size={14} />}>Marseille ↔ Annaba</Chip>
          <Chip icon={<Icon name="plane" size={14} />}>Marseille ↔ Alger</Chip>
        </div>
      </Card>

      <Alert tone="outline" icon={<Icon name="shield-check" size={16} />}>
        Votre profil est vérifié et validé par Bledi. Vous pouvez proposer votre aide sur toutes les demandes, y compris les demandes sensibles.
      </Alert>

      <Switch checked={visible} onChange={setVisible} label="Rendre mes trajets visibles" hint="Les demandeurs peuvent vous proposer un objet sur ces trajets." />
      <Switch checked={notif} onChange={setNotif} label="Alertes de nouvelles demandes" hint="Sur vos trajets déclarés uniquement." />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Button variant="outline" block onClick={onVerify} iconLeft={<Icon name="shield-check" size={16} />}>Vérification du profil</Button>
        <Button variant="quiet" block iconLeft={<Icon name="lock" size={16} />}>Sécurité et confidentialité</Button>
      </div>
    </div>
  );
}
