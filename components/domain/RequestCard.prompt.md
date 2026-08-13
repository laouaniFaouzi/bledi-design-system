The request card is split in two: an official-trip header (badges, carrier, route, date) and a member half (who, budget, what, cautions, action).

```jsx
<RequestCard
  badges={<><Badge icon={<Icon name="plane" size={13}/>}>Avion</Badge><Badge tone="verified">Trajet vérifié Bledi</Badge></>}
  category="Recherche accompagnement senior"
  carrier="Air Algérie" flight="AH1009"
  route={{ from:'Paris CDG', fromCode:'CDG', fromTime:'10:30', to:'Alger — Houari Boumediene', toCode:'ALG', toTime:'12:35' }}
  date="25 août 2026" author="Yacine T." budget="90 €"
  message="Je recherche une personne de confiance…"
  action={<Button block>Proposer mon aide</Button>}
/>
```

Never show a bare request without its verified-trip header — the pairing is the product's trust model.
