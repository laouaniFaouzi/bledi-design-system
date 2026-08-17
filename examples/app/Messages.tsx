import * as React from 'react';
import { Icon, Avatar, Badge, Alert, Input, Button, VerifiedName } from '../../src/components';
import bMarkUrl from '../../assets/bledi-b-mark.png';

/* Aucune capture de la messagerie n'était disponible : cet écran applique
   le vocabulaire visuel du reste de l'app (cartes hairline, badges de confiance,
   panneau vert) et doit être confirmé avec l'écran réel. */
export function Messages() {
  const threads = [
    { who: 'Yacine T.', last: 'Merci, je vous retrouve au terminal 1 à 8h30.', when: '10:12', unread: true },
    { who: 'Sofia B.', last: 'Le dossier est prêt, photographié et décrit.', when: 'Hier', unread: false },
  ];
  const [open, setOpen] = React.useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)' }}>Messages</h1>
        <p style={{ margin: '6px 0 0', fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
          La messagerie s'ouvre une fois le paiement validé.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {threads.map((t, i) => (
          <button key={t.who} type="button" onClick={() => setOpen(i)}
            style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-4)', textAlign: 'left', cursor: 'pointer',
              background: open === i ? 'var(--surface-selected)' : 'var(--surface-card)',
              border: '1px solid ' + (open === i ? 'var(--border-strong)' : 'var(--border-default)'),
              borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', fontFamily: 'var(--font-sans)',
            }}>
            <Avatar initial={t.who.charAt(0)} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <VerifiedName name={t.who} verified markSrc={bMarkUrl} />
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.last}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{t.when}</span>
              {t.unread ? <span style={{ width: 8, height: 8, borderRadius: '999px', background: 'var(--bledi-green-700)' }} /> : null}
            </div>
          </button>
        ))}
      </div>

      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Avatar initial={threads[open].who.charAt(0)} size="sm" />
            <VerifiedName name={threads[open].who} verified markSrc={bMarkUrl} />
          </div>
          <Badge tone="verified" icon={<Icon name="shield-check" size={13} />}>Profil vérifié</Badge>
        </div>

        <Alert tone="notice" icon={<Icon name="eye-off" size={16} />}>
          Les coordonnées restent masquées. Échangez uniquement dans la messagerie Bledi : elle sert de preuve en cas de litige.
        </Alert>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ alignSelf: 'flex-start', maxWidth: '80%', background: 'var(--surface-muted)', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', fontSize: 'var(--text-base)' }}>
            Bonjour, je peux prendre le dossier sur le vol AH1009.
          </div>
          <div style={{ alignSelf: 'flex-end', maxWidth: '80%', background: 'var(--bledi-green-700)', color: '#FFF', borderRadius: '16px 16px 4px 16px', padding: '10px 14px', fontSize: 'var(--text-base)' }}>
            Parfait. Je vous envoie les photos de l'objet déclaré.
          </div>
          <div style={{ alignSelf: 'flex-start', maxWidth: '80%', background: 'var(--surface-muted)', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', fontSize: 'var(--text-base)' }}>
            {threads[open].last}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Input placeholder="Écrire un message…" style={{ flex: 1 }} />
          <Button iconRight={<Icon name="arrow-right" size={16} />}>Envoyer</Button>
        </div>
      </div>
    </div>
  );
}
