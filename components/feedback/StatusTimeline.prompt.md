```jsx
<StatusTimeline current={2} steps={[
  { label: 'Demande validée par Bledi', detail: '12 août · 09:14' },
  { label: 'Voyageur accepté', detail: 'Karim B. · profil vérifié' },
  { label: 'Objet remis au voyageur' },
  { label: 'Remise confirmée par code' },
  { label: 'Paiement libéré' },
]} />
```

Cinq étapes maximum. C'est la seule liste numérotée verticale du système ; les étapes de formulaire utilisent `StepProgress`.
