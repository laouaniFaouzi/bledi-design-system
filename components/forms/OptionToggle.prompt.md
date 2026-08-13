```jsx
<OptionToggle
  value={transport}
  onChange={setTransport}
  options={[
    { value: 'avion', label: 'Avion', icon: <Icon name="plane" size={16} /> },
    { value: 'bateau', label: 'Bateau', icon: <Icon name="ship" size={16} /> },
  ]}
/>
```

Selected = pale green fill + darker hairline. There is no filled-green selected state here; that weight is reserved for buttons.
