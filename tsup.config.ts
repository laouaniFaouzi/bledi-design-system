import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  // Plusieurs composants tiennent un etat (CodeInput, Dialog, OptionToggle,
  // Switch, Checkbox, SegmentedTabs, TopNav, BottomNav...). Sans cette
  // directive en tete du bundle, les utiliser dans un arbre serveur React
  // (Next App Router) plante a l-execution — l-ecran de saisie du code de
  // remise en particulier. La directive est posee sur tout le paquet plutot
  // que sur un second point d-entree : cela evite de scinder les imports des
  // consommateurs, au prix d-envoyer au client des composants purement
  // presentationnels, qui y etaient de toute facon puisqu-ils partagent le
  // meme bundle.
  banner: { js: "'use client';" },
});
