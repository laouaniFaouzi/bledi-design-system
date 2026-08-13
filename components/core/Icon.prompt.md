Bledi uses **Lucide** outline icons at stroke 2. This component inlines the subset the product actually uses so kits render offline; for anything else, pull the glyph from lucide.dev rather than drawing one.

```jsx
<Icon name="shield-check" size={16} />
```

Icons inherit `currentColor`. Never fill them, never use emoji as icons.
