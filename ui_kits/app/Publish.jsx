import React from 'react';

const TRIPS = [
  { date: 'Jeudi 13 août 2026' },
  { date: 'Jeudi 20 août 2026' },
  { date: 'Jeudi 27 août 2026' },
  { date: 'Jeudi 3 septembre 2026' },
];

export function Publish({ NS, onPublished }) {
  const { Button, Icon, Field, Select, Textarea, OptionToggle, StepProgress, OfficialTripCard, TripBanner, Alert, Badge } = NS;
  const [step, setStep] = React.useState(2);
  const [transport, setTransport] = React.useState('bateau');
  const [sens, setSens] = React.useState('fr');
  const [from, setFrom] = React.useState('Marseille');
  const [to, setTo] = React.useState('Annaba');
  const [trip, setTrip] = React.useState(1);
  const [desc, setDesc] = React.useState('');

  const labels = { 1: 'Type de demande', 2: 'Trajet officiel', 3: 'Détails', 4: 'Budget', 5: 'Sécurité & publier' };
  const banner = (
    <TripBanner title="Corsica Linea · CL-MRS-AAE-04" route={from + ' → ' + to}
      schedule={TRIPS[trip].date.replace('Jeudi ', '') + ' · 20:00 → 16:00 (J+1)'} />
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <StepProgress step={step} total={5} label={labels[step]} />
      <h1 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)' }}>
        Publier une demande
      </h1>

      {step === 1 ? (
        <Field label="Type de demande">
          <OptionToggle value="senior" columns={1} onChange={() => {}} options={[
            { value: 'senior', label: 'Accompagnement senior', icon: <Icon name="user" size={16} /> },
            { value: 'doc', label: 'Document personnel', icon: <Icon name="file" size={16} /> },
            { value: 'airport', label: 'Aide aéroport / port', icon: <Icon name="briefcase" size={16} /> },
          ]} />
        </Field>
      ) : null}

      {step === 2 ? (
        <>
          <Field label="Transport">
            <OptionToggle value={transport} onChange={setTransport} options={[
              { value: 'avion', label: 'Avion', icon: <Icon name="plane" size={16} /> },
              { value: 'bateau', label: 'Bateau', icon: <Icon name="ship" size={16} /> },
            ]} />
          </Field>
          <Field label="Sens">
            <OptionToggle value={sens} onChange={setSens} options={[
              { value: 'fr', label: 'France → Algérie' },
              { value: 'dz', label: 'Algérie → France' },
            ]} />
          </Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            <Field label="Départ">
              <Select value={from} onChange={(e) => setFrom(e.target.value)} options={['Marseille', 'Paris CDG', 'Lyon', 'Lille']} />
            </Field>
            <Field label="Arrivée">
              <Select value={to} onChange={(e) => setTo(e.target.value)} options={['Annaba', 'Alger', 'Oran', 'Béjaïa']} />
            </Field>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>Trajets vérifiés disponibles</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {TRIPS.map((t, i) => (
                <OfficialTripCard key={t.date} carrier="Corsica Linea" reference="CL-MRS-AAE-04"
                  route={from + ' → ' + to} date={t.date} times="20:00 → 16:00 (J+1)"
                  selected={trip === i} onSelect={() => setTrip(i)} />
              ))}
            </div>
          </div>
        </>
      ) : null}

      {step === 3 ? (
        <>
          {banner}
          <Field label="Description courte" hint="Ajoutez une courte description.">
            <Textarea rows={3} value={desc} onChange={(e) => setDesc(e.target.value)}
              placeholder="Ex. Je recherche une personne pour accompagner mon père de Paris CDG à Alger." />
          </Field>
        </>
      ) : null}

      {step === 4 ? (
        <>
          {banner}
          <Field label="Budget proposé" hint="Le paiement est bloqué jusqu'à la confirmation de la remise.">
            <Select defaultValue="40 €" options={['25 €', '40 €', '60 €', '90 €']} />
          </Field>
        </>
      ) : null}

      {step === 5 ? (
        <>
          {banner}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>
            <div>Type : <strong>Aide aéroport / port</strong></div>
            <div>Budget : <strong>40 €</strong></div>
          </div>
          <Alert tone="outline">Aucune règle douane spécifique pour ce type. Vous pouvez publier.</Alert>
        </>
      ) : null}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-2)' }}>
        <Button variant="quiet" iconLeft={<Icon name="arrow-left" size={16} />} onClick={() => setStep(Math.max(1, step - 1))}>Retour</Button>
        {step < 5 ? (
          <Button iconRight={<Icon name="arrow-right" size={16} />} onClick={() => setStep(step + 1)}>Continuer</Button>
        ) : (
          <Button iconLeft={<Icon name="check" size={16} />} onClick={onPublished}>Publier ma demande</Button>
        )}
      </div>
    </div>
  );
}
