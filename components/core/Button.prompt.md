The Bledi pill button. Use `primary` for the main action inside the app, `accent` (gold) only on dark green panels, `quiet` for "Retour" / disabled-looking secondary steps.

```jsx
<Button variant="primary" block>Proposer mon aide</Button>
<Button variant="accent" size="lg" iconRight="→">Récupérer mon objet</Button>
<Button variant="quiet" iconLeft="←">Retour</Button>
```

Never use gold on a cream background — contrast fails. Buttons are always fully rounded; there is no square button in Bledi.
