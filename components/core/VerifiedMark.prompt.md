Marque un membre dont le profil est 100 % vérifié et validé par Bledi. À poser **immédiatement après le nom**, jamais ailleurs.

```jsx
<VerifiedName name="Karim B." verified />
<VerifiedName name="Vous V." verified size="var(--text-xl)" markSize={24} />
<VerifiedMark size={14} />                    {/* seule, dans une ligne dense */}
<VerifiedMark tone="onDark" />                {/* sur un panneau vert */}
```

Tailles : 14 px en ligne de liste, 18 px par défaut, 22–26 px en tête de profil.

Le glyphe est `assets/bledi-b-mark.png` (le B du logo, clin d'œil compris). Le chemin par défaut suppose une page
à la racine du projet — depuis une sous-page, passez `src` / `markSrc` :

```jsx
<VerifiedName name="Karim B." verified markSrc="../../assets/bledi-b-mark.png" />
```

La pastille remplace le badge texte « Profil vérifié par Bledi » **partout où le nom est affiché** ; gardez le badge texte
uniquement là où l'état doit être explicité (écran de vérification, en-tête de profil). Ne l'utilisez jamais pour un trajet :
un trajet vérifié porte `<Badge tone="verified">Trajet vérifié Bledi</Badge>`.
