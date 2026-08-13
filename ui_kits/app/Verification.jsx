import React from 'react';

export function Verification({ NS, onBack }) {
  const { Icon, Alert, VerificationRow } = NS;
  const rows = [
    ['mail', 'E-mail vérifié', 'Lien de confirmation envoyé à votre adresse.'],
    ['phone', 'Téléphone vérifié', 'Code SMS à 6 chiffres.'],
    ['camera', 'Photo de profil ajoutée', 'Visage visible, pas de filtre.'],
    ['id-card', "Pièce d'identité validée", 'Vérification via prestataire KYC (Stripe Identity / Mangopay).'],
    ['smile', 'Selfie validé', "Comparaison automatique avec la pièce d'identité."],
    ['shield-check', 'Validation finale Bledi', 'Revue manuelle Bledi pour activer les actions sensibles.'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <button type="button" onClick={onBack} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'inline-flex', padding: 0 }}>
          <Icon name="arrow-left" size={18} />
        </button>
        <h1 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)' }}>Vérification du profil</h1>
      </div>

      <div style={{ background: 'var(--gradient-panel)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', color: 'var(--text-on-dark)', boxShadow: 'var(--shadow-panel)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-pill)', background: 'rgba(233,185,73,0.16)', color: 'var(--text-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
            <Icon name="shield-check" size={18} />
          </span>
          <div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)' }}>Niveau de confiance</div>
            <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>Profil 100 % vérifié et validé par Bledi</div>
          </div>
        </div>
        <div style={{ height: 5, borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.14)', marginTop: 'var(--space-5)', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', background: 'var(--bledi-gold-400)' }} />
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-on-dark-muted)', marginTop: 8 }}>6/6 vérifications complétées</div>
      </div>

      <Alert tone="outline" icon={<Icon name="lock" size={16} />}>
        Bledi ne stocke pas vos pièces d'identité brutes. La vérification est traitée par un prestataire KYC certifié (Stripe Identity, Mangopay ou Lemonway). Bledi ne conserve que le statut et la référence du dossier.
      </Alert>

      {rows.map(([icon, title, description]) => (
        <VerificationRow key={title} icon={<Icon name={icon} size={16} />} title={title} description={description} />
      ))}

      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
        <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>Pourquoi ces vérifications ?</div>
        <div>· <strong>Demande simple</strong> (document, petit colis) : e-mail + téléphone suffisent.</div>
        <div>· <strong>Demande sensible</strong> (senior, médicaments, budget élevé) : identité + selfie + validation Bledi.</div>
        <div>· <strong>Proposer son aide en tant que voyageur</strong> : profil 100 % vérifié et validé par Bledi.</div>
      </div>
    </div>
  );
}
