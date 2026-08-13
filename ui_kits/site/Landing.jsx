import React from 'react';

export function Landing({ NS }) {
  const { Button, Badge, Chip, Card, Alert, Icon, Avatar, VerifiedName } = NS;

  const S = ({ children, style }) => (
    <section style={{ maxWidth: 'var(--container-marketing)', margin: '0 auto', padding: '0 var(--space-6)', ...style }}>{children}</section>
  );
  const H2 = ({ children }) => (
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)', margin: 0 }}>{children}</h2>
  );
  const Lead = ({ children }) => (
    <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '62ch', margin: 'var(--space-4) 0 0' }}>{children}</p>
  );
  const Tile = ({ icon, title, body }) => (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)' }}>
      <span style={{ color: 'var(--text-brand)', display: 'inline-flex' }}>{icon}</span>
      <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', marginTop: 'var(--space-4)' }}>{title}</div>
      {body ? <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 6, lineHeight: 'var(--leading-normal)' }}>{body}</div> : null}
    </div>
  );

  const steps = [
    ["Déclarez l'objet oublié", "Indiquez où se trouve l'objet, où il doit arriver, ajoutez des photos et une description complète."],
    ['Bledi vérifie la demande', "Nous vérifions que l'objet est personnel, visible, autorisé et non commercial."],
    ['Choisissez un voyageur', 'Consultez les voyageurs compatibles avec votre trajet, leur profil et leur disponibilité.'],
    ['Confirmez la remise', 'Le destinataire confirme la réception avec un code unique. Le paiement est ensuite libéré.'],
  ];
  const objects = [['key', 'Clés'], ['file', 'Documents'], ['glasses', 'Lunettes'], ['shirt', 'Vêtements oubliés'], ['briefcase', 'Petit sac'], ['gift', 'Objet familial'], ['suitcase', 'Petite valise déclarée']];
  const forbidden = ['Argent liquide', 'Bijoux ou objets de forte valeur', 'Valise fermée', 'Colis opaque', 'Produits commerciaux', 'Contrefaçons', 'Tabac', 'Alcool', 'Produits frais', 'Viande, lait, fromage', 'Médicaments non validés', 'Objets électroniques neufs en quantité', 'Tout objet que le voyageur ne peut pas vérifier'];
  const trust = [['shield-check', 'Identité vérifiée'], ['camera', 'Objet déclaré avec photos'], ['check', 'Validation Bledi'], ['credit-card', 'Paiement sécurisé'], ['key', 'Remise par code'], ['star', 'Avis après transaction']];
  const routes = ['Paris ↔ Alger', 'Marseille ↔ Oran', 'Lyon ↔ Constantine', 'Lille ↔ Béjaïa', 'Bruxelles ↔ Alger', 'Paris ↔ Casablanca', 'Marseille ↔ Tunis'];
  const faq = [
    ['Est-ce que Bledi transporte des colis ?', "Non. Bledi facilite uniquement la récupération ou l'envoi d'objets personnels déclarés, visibles et autorisés. Ce n'est pas un service de transport commercial."],
    ['Puis-je faire récupérer une valise ?', 'Uniquement si elle est ouverte, photographiée, décrite et validée avant le trajet.'],
    ['Le voyageur peut-il refuser un objet ?', 'Oui, à tout moment et sans justification.'],
    ['Comment le paiement est-il sécurisé ?', 'Le paiement est bloqué jusqu\'à la confirmation de la remise par code unique.'],
    ['Quels objets sont interdits ?', 'Argent, bijoux, colis opaques, produits commerciaux, tabac, alcool, produits frais, médicaments non validés.'],
    ['Que se passe-t-il en cas de problème ?', 'Le support Bledi intervient et la messagerie sert de preuve des échanges.'],
    ["Est-ce que l'objet doit être visible ?", 'Oui. Aucun objet fermé, opaque ou non vérifiable n\'est accepté.'],
    ["Qui remet l'objet au voyageur ?", 'La personne indiquée dans la demande, au point de rencontre convenu.'],
  ];
  const [open, setOpen] = React.useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
      {/* HERO */}
      <S style={{ paddingTop: 'var(--space-8)' }}>
        <div style={{ background: 'var(--gradient-panel)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-panel)', color: 'var(--text-on-dark)', padding: 'var(--space-12)', display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,.85fr)', gap: 'var(--space-12)', alignItems: 'center' }}>
          <div>
            <Badge tone="onDark" caps icon={<Icon name="plane" size={12} />}>Europe ↔ Maghreb</Badge>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', margin: 'var(--space-5) 0 0' }}>
              Objet oublié au bled ?
            </h1>
            <p style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-medium)', margin: 'var(--space-4) 0 0' }}>
              Bledi vous aide à le récupérer grâce à un voyageur vérifié.
            </p>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-on-dark-muted)', lineHeight: 'var(--leading-relaxed)', margin: 'var(--space-3) 0 0', maxWidth: '46ch' }}>
              Clés, documents, lunettes, petit sac… chaque objet est déclaré, visible et validé avant le trajet.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={16} />}>Récupérer mon objet</Button>
              <Button variant="outlineOnDark" size="lg" iconLeft={<Icon name="plane" size={16} />}>Je voyage bientôt</Button>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', margin: 'var(--space-6) 0 0' }}>
              La communauté qui rapproche ici et là-bas.
            </p>
          </div>

          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-raised)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' }}>Ma demande</span>
              <Badge tone="verified">Objet déclaré</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-4)', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>
              Alger <span style={{ color: 'var(--bledi-gold-600)', display: 'inline-flex' }}><Icon name="arrow-right" size={16} /></span> Paris
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', background: 'var(--surface-muted)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
              <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-pill)', background: 'var(--bledi-green-700)', color: '#FFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                <Icon name="key" size={16} />
              </span>
              <div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)' }}>Clés de maison</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Photo + description validées</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
              <Avatar initial="K" />
              <div>
                <VerifiedName name="Karim B." verified markSrc="../../assets/bledi-b-mark.png" />
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icon name="star" size={12} /> 4.9 · vérifié
                </div>
              </div>
            </div>
            <Button variant="accent" block style={{ marginTop: 'var(--space-5)' }}>Voir les voyageurs</Button>
          </div>
        </div>
      </S>

      {/* PROBLÈME */}
      <S>
        <H2>Un objet oublié peut vite devenir urgent.</H2>
        <Lead>
          Un dossier administratif, des clés, des lunettes, un petit sac ou un objet familial oublié au pays peuvent être
          difficiles à récupérer. Bledi connecte les personnes de confiance qui voyagent déjà avec celles qui ont besoin de
          récupérer un objet important.
        </Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
          <Tile icon={<Icon name="smile" size={20} />} title="Un besoin réel" body="Objets oubliés chez la famille, chez des amis ou dans une maison au pays." />
          <Tile icon={<Icon name="shield-check" size={20} />} title="Des voyageurs vérifiés" body="Les profils sont contrôlés pour renforcer la confiance entre les membres." />
          <Tile icon={<Icon name="lock" size={20} />} title="Une remise sécurisée" body="L'objet est déclaré, le paiement est protégé et la remise est confirmée par code." />
        </div>
      </S>

      {/* ÉTAPES */}
      <S>
        <H2>Récupérer un objet en 4 étapes</H2>
        <ol style={{ listStyle: 'none', padding: 0, margin: 'var(--space-8) 0 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {steps.map(([t, d], i) => (
            <li key={t} style={{ display: 'flex', gap: 'var(--space-4)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
              <span style={{ width: 30, height: 30, flex: '0 0 auto', borderRadius: 'var(--radius-pill)', background: 'var(--bledi-green-700)', color: '#FFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' }}>{i + 1}</span>
              <div>
                <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>{t}</div>
                <div style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 'var(--leading-normal)' }}>{d}</div>
              </div>
            </li>
          ))}
        </ol>
      </S>

      {/* OBJETS AUTORISÉS */}
      <S>
        <H2>Objets personnels uniquement</H2>
        <Lead>Bledi est conçu pour les objets personnels simples, déclarés et vérifiables.</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
          {objects.map(([ic, label]) => (
            <div key={label} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', textAlign: 'center' }}>
              <span style={{ color: 'var(--text-brand)', display: 'inline-flex' }}><Icon name={ic} size={20} /></span>
              <div style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-3)' }}>{label}</div>
            </div>
          ))}
        </div>
        <Alert tone="notice" icon={<Icon name="camera" size={16} />} style={{ marginTop: 'var(--space-5)' }}>
          Une valise ne peut être acceptée que si elle est <strong>ouverte, photographiée, décrite et validée</strong>. Aucun voyageur ne doit transporter un objet fermé, opaque ou non vérifié.
        </Alert>
      </S>

      {/* INTERDITS */}
      <S>
        <H2>Ce qui n'est jamais accepté</H2>
        <Lead>Pour protéger les voyageurs, les demandeurs et la communauté, certains objets sont strictement interdits.</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
          {forbidden.map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: '11px 18px', fontSize: 'var(--text-sm)' }}>
              <span style={{ color: 'var(--text-danger)', display: 'inline-flex' }}><Icon name="ban" size={15} /></span>{item}
            </div>
          ))}
        </div>
        <Alert tone="danger" style={{ marginTop: 'var(--space-5)' }}>Ne transportez jamais un objet dont vous ne connaissez pas le contenu.</Alert>
      </S>

      {/* VOYAGEURS */}
      <S>
        <div style={{ background: 'var(--gradient-panel)', color: 'var(--text-on-dark)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-12)', boxShadow: 'var(--shadow-panel)' }}>
          <Badge tone="onDark" caps icon={<Icon name="plane" size={12} />}>Pour les voyageurs</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)', margin: 'var(--space-5) 0 0', maxWidth: '30ch' }}>
            Vous voyagez bientôt ? Rendez service à la communauté.
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-on-dark-muted)', lineHeight: 'var(--leading-relaxed)', maxWidth: '60ch', margin: 'var(--space-4) 0 0' }}>
            Déclarez votre trajet, indiquez votre espace disponible et choisissez uniquement les objets que vous acceptez de transporter.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
            {[['shield-check', 'Profil vérifié'], ['camera', 'Objets visibles avant acceptation'], ['credit-card', 'Rémunération claire']].map(([ic, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', fontSize: 'var(--text-sm)' }}>
                <span style={{ color: 'var(--text-accent)', display: 'inline-flex' }}><Icon name={ic} size={16} /></span>{l}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Button variant="accent" size="lg" iconLeft={<Icon name="plane" size={16} />}>Déclarer mon trajet</Button>
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', margin: 'var(--space-6) 0 0', maxWidth: '70ch' }}>
            Le voyageur reste libre d'accepter ou de refuser une demande. Aucun objet fermé ou non déclaré ne doit être transporté.
          </p>
        </div>
      </S>

      {/* CONFIANCE */}
      <S>
        <H2>La confiance avant tout</H2>
        <Lead>Bledi est construit autour d'une règle simple : transparence totale avant chaque trajet.</Lead>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
          {trust.map(([ic, l]) => <Tile key={l} icon={<Icon name={ic} size={18} />} title={l} />)}
        </div>
      </S>

      {/* ROUTES */}
      <S>
        <H2>Pensé d'abord pour les trajets Europe ↔ Maghreb</H2>
        <Lead>Bledi commence avec les routes les plus demandées par la diaspora, puis s'ouvrira progressivement à d'autres destinations.</Lead>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
          {routes.map((r) => <Chip key={r} icon={<Icon name="plane" size={14} />}>{r}</Chip>)}
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--bledi-gold-600)', marginTop: 'var(--space-5)' }}>France ↔ Algérie en priorité, puis Europe ↔ Maghreb.</p>
      </S>

      {/* FAQ */}
      <S>
        <H2>Questions fréquentes</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
          {faq.map(([q, a], i) => (
            <div key={q} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 'var(--space-5)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)', color: 'var(--text-primary)', textAlign: 'left' }}>
                {q}
                <span style={{ width: 26, height: 26, flex: '0 0 auto', borderRadius: 'var(--radius-pill)', background: open === i ? 'var(--bledi-green-700)' : 'var(--surface-muted)', color: open === i ? '#FFF' : 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-base)' }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i ? (
                <div style={{ padding: '0 var(--space-5) var(--space-5)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '80ch' }}>{a}</div>
              ) : null}
            </div>
          ))}
        </div>
      </S>

      {/* CTA */}
      <S>
        <div style={{ background: 'var(--gradient-panel)', color: 'var(--text-on-dark)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-12)', textAlign: 'center', boxShadow: 'var(--shadow-panel)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, letterSpacing: 'var(--tracking-tight)', margin: 0 }}>Un objet oublié au pays ?</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-on-dark-muted)', margin: 'var(--space-4) auto 0', maxWidth: '52ch' }}>
            Publiez votre demande et trouvez un voyageur vérifié pour vous le rapporter.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', marginTop: 'var(--space-6)' }}>
            <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={16} />}>Récupérer mon objet</Button>
            <Button variant="outlineOnDark" size="lg" iconLeft={<Icon name="plane" size={16} />}>Déclarer mon trajet</Button>
          </div>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Badge tone="onDark" caps icon={<Icon name="shield-check" size={12} />}>Communauté vérifiée</Badge>
          </div>
        </div>
      </S>

      {/* FOOTER */}
      <S>
        <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 'var(--space-6)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', justifyContent: 'space-between', alignItems: 'center' }}>
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', fontSize: 'var(--text-sm)' }}>
            {['Objets autorisés', 'Sécurité', 'Aide', 'Conditions', 'Confidentialité', 'Contact'].map((l) => (
              <a key={l} href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{l}</a>
            ))}
          </nav>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            Bledi — Le lien entre ici et là-bas.
          </span>
        </div>
      </S>
    </div>
  );
}
