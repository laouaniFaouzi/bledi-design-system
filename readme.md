# Bledi — Design System

Bledi (« bledilink ») met en relation des voyageurs vérifiés et des membres de la diaspora qui ont besoin de
récupérer un **objet personnel oublié au pays**. Signature : *« Le lien entre ici et là-bas. »*
Le service n'est pas un transporteur : il n'accepte que des objets personnels déclarés, visibles et validés,
sur des **trajets officiels** (vols Air Algérie, traversées Corsica Linea…) déjà réservés par le voyageur.
Priorité France ↔ Algérie, puis Europe ↔ Maghreb.

Deux surfaces :

1. **Site vitrine** — page d'accueil éditoriale : le problème, les 4 étapes, les objets autorisés et interdits, la confiance, la FAQ.
2. **App produit** — `/requests`, `/publish` (5 étapes), `/reservations`, `/messages`, `/profile` + vérification du profil.

## Sources utilisées

- Site en ligne : https://bledilink-connect.lovable.app (contenu relevé le 11 août 2026)
- 9 captures d'écran fournies par l'auteur : accueil complète, `/requests`, onglet « Mes demandes » vide,
  `/publish` étapes 2/3/5, `/reservations`, vérification du profil.
- Logo : `assets/bledi-logo.png` (fourni par l'auteur).
- Pas d'accès au code source du prototype Lovable : les valeurs numériques (rayons, paddings, tailles) ont été
  relevées sur les captures, et les deux familles de caractères sont des **substitutions** (voir Visual foundations).

---

## Content fundamentals

**Vouvoiement, toujours.** « Publiez votre demande », « Ne partagez pas d'informations médicales sensibles ».
Bledi parle de lui à la troisième personne quand il s'engage : « Bledi vérifie la demande », « Validation finale Bledi ».

**Des règles, pas des promesses.** La majorité des textes sont des règles à l'indicatif, souvent négatives :
« Ne transportez jamais un objet dont vous ne connaissez pas le contenu. » « Non. Bledi facilite uniquement la
récupération ou l'envoi d'objets personnels déclarés, visibles et autorisés. » Les réponses de FAQ commencent
volontiers par « Non. » ou « Oui, ». Aucune formule marketing, aucun superlatif, aucun point d'exclamation.

**Titres courts, souvent interrogatifs ou constatifs.** « Objet oublié au bled ? », « Un objet oublié peut vite
devenir urgent. », « Ce qui n'est jamais accepté », « La confiance avant tout ». Le titre porte le point de vue ;
le sous-titre explique en une phrase.

**Le vocabulaire est fixe** — ne le reformulez pas :
objet déclaré · trajet officiel · voyageur vérifié · demandeur · remise · code unique · paiement sécurisé ·
coordonnées masquées · Protection Bledi · Membre Bledi · Mode démo : Visiteur / Connecté / Vérifié.

**Casse et ponctuation.** Sentence case partout, y compris les boutons (« Proposer mon aide », « Déclarer mon
trajet »). Capitales espacées réservées aux libellés de rôle (`BUDGET PROPOSÉ`, `TRAJET OFFICIEL`, `DÉPART`).
Typographie française : espace fine avant `? ! : ;` et `%`, guillemets « … », `·` comme séparateur de méta,
`↔` pour les routes, `→` pour un sens de trajet, `J+1` pour une arrivée le lendemain.

**Aucun emoji**, ni dans le produit ni dans le marketing. Les seuls symboles admis sont `↔ → · − +` et `€`.

**Emphase.** Le gras sert à isoler la contrainte dans une phrase de règle
(« … si elle est **ouverte, photographiée, décrite et validée** »), jamais à donner du rythme.

---

## Visual foundations

### Couleurs
Trois familles, rien d'autre. **Vert profond** `#0C3B26` (identité, actions, panneaux),
**or** `#E9B949` (confiance, vérification, CTA sur fond sombre), **crème** `#FDF7F0` (fond de toutes les pages).
Le blanc pur est réservé aux cartes. Le rouge `#B3402F` n'apparaît que sur les icônes d'interdiction.
Deux fonds maximum par écran : crème + blanc, plus un panneau vert.

Règle de contraste : **l'or ne se pose jamais sur le crème** pour du texte ou un bouton — il vit sur le vert,
ou en teinte très claire `#FBF3DE` comme surface d'avertissement avec un texte `#C99A22`.

Les panneaux sombres utilisent un dégradé radial unique (`--gradient-panel`), plus clair en haut à droite.
Jamais de dégradé sur du clair, jamais de dégradé bicolore.

### Typographie
- **`--font-display` — Camera Plain** (Fontwerk), fichier variable fourni par l'auteur
  (`assets/fonts/CameraPlainVariable.woff2`, axe 300–800). Réservée aux titres du site vitrine
  et aux titres de page de l'app. Graisses employées : 600 et 700, `letter-spacing: -0.02em`.
- **`--font-sans` — Plus Jakarta Sans** (Google Fonts, axe 200–800). Tout le reste : corps,
  labels, boutons, badges, chiffres.
- Les heures et références (`10:30`, `CL-MRS-AAE-04`) sont en Plus Jakarta Sans semibold, pas en mono. `--font-mono`
  (IBM Plex Mono) ne sert qu'à la documentation du design system.
- Titres : 700, `letter-spacing: -0.02em`. Corps : 400, `line-height: 1.5`. Labels : 13 px gris.

### Espacement et mise en page
Échelle de 4 px. La colonne produit est **étroite et centrée, même sur desktop** : `--container-app` = 568 px —
c'est la signature de mise en page de l'app, une maquette mobile posée au centre d'un fond crème.
Le site vitrine s'ouvre à 1120 px. En-tête 68 px. Cibles tactiles ≥ 44 px.

### Formes
La **pilule** est la forme signature : tous les boutons, badges, chips, onglets et choix à deux options sont
en `border-radius: 999px`. Les cartes sont à 16–20 px, les grands panneaux à 24 px. Aucun angle droit.

### Cartes et élévation
Carte = blanc + filet 1 px `#EAE6DE` + ombre quasi invisible (`0 1px 2px rgba(20,22,26,.04)`). Le relief vient
du filet, pas de l'ombre. Seuls les panneaux verts portent une vraie ombre (`0 12px 40px rgba(7,43,26,.18)`).
La carte de demande est **coupée en deux par un filet horizontal** : en haut le trajet officiel, en bas le membre.

### États
- **Survol** : assombrissement d'un cran du fond (vert 700 → 800, or 400 → 500). Pas d'ombre ajoutée, pas de translation.
- **Sélection** : fond vert très pâle `#F1F4EE` + filet plus contrasté `rgba(12,59,38,.22)`, texte vert.
  Le vert plein est réservé aux boutons et à l'onglet actif.
- **Désactivé** : `opacity: .45`, pointer-events coupés.
- **Focus** : `box-shadow: 0 0 0 3px rgba(12,59,38,.18)`.

### Mouvement
Une seule courbe, `cubic-bezier(0.2, 0, 0, 1)`, et trois durées : 120 / 180 / 280 ms.
Pas de rebond, pas d'apparition en translation, pas de parallaxe, pas d'animation décorative.

### Transparence et flou
Uniquement **sur le vert** : `rgba(255,255,255,.06)` pour un bouton fantôme, `rgba(233,185,73,.16)` pour un
médaillon d'icône, `rgba(255,255,255,.14)` pour un filet. Aucun `backdrop-filter` dans le produit.

### Imagerie
**Il n'y en a pas.** Le site n'utilise ni photo ni illustration : la seule « image » est la carte de démonstration
du héro, construite en HTML. N'introduisez pas de photographie sans validation de l'auteur ; si un emplacement
d'image devient nécessaire, laissez un placeholder explicite plutôt que d'inventer un visuel.

---

## Iconography

**Lucide**, contour, grille 24, `stroke-width: 2`, `stroke-linecap: round` — le set par défaut de l'écosystème
Lovable/shadcn, cohérent avec ce qu'on voit sur les captures. Tailles : 22 px barre d'onglets, 18–20 px corps,
15–16 px lignes de liste, 13–14 px badges. Les icônes héritent de `currentColor` et ne sont jamais remplies.

Le composant `Icon` (`components/core/Icon.jsx`) inline le sous-ensemble réellement utilisé par le produit
(33 glyphes) pour que les kits fonctionnent hors ligne. Pour un glyphe absent, reprenez le tracé sur
[lucide.dev](https://lucide.dev) — **ne dessinez pas de SVG à la main**.

Aucun emoji, aucun caractère Unicode utilisé comme icône (sauf `↔ → − +` qui sont de la ponctuation).

---

## Index

| Fichier | Contenu |
| --- | --- |
| `styles.css` | point d'entrée CSS — n'importe que les fichiers de `tokens/` |
| `tokens/fonts.css` | webfonts : Plus Jakarta Sans (Google) + `@font-face` Camera Plain |
| `assets/fonts/` | CameraPlainVariable.woff2 |
| `tokens/colors.css` | palette de base + rôles sémantiques + `--gradient-panel` |
| `tokens/typography.css` | familles, échelle, graisses, interlignages |
| `tokens/spacing.css` | échelle 4 px, largeurs de conteneur, hauteur de nav |
| `tokens/shape.css` | rayons, ombres |
| `tokens/motion.css` | courbe et durées |
| `guidelines/*.html` | 19 fiches de fondations (onglet Design System) |
| `assets/bledi-logo.png` | logo fourni |
| `assets/bledi-logo-square.png` | logo carré vert (petites tailles) |
| `assets/bledi-b-mark.png` | le B détouré, glyphe de la pastille de vérification |
| `ds-fallback.js` | charge les composants sans le bundle compilé (usage hors ligne) |

### Composants

- **core** — `Button`, `Badge`, `Chip`, `Avatar`, `Card`, `Alert`, `EmptyState`, `Icon`, `RatingStars`, `VerifiedMark` (+ `VerifiedName`)
- **forms** — `Field`, `Input` (+ `Textarea`), `Select`, `OptionToggle`, `Checkbox`, `Switch`, `CodeInput`, `PhotoUploader`
- **feedback** — `Dialog`, `Toast`, `StatusTimeline`
- **navigation** — `TopNav`, `BottomNav`, `SegmentedTabs`, `UnderlineTabs`, `StepProgress`
- **domain** — `RequestCard`, `OfficialTripCard`, `TripBanner`, `RouteLine`, `VerificationRow`, `ProtectionPanel`

#### Ajouts assumés

- `Icon` — enveloppe du set Lucide, nécessaire pour que les kits soient autonomes.
- `VerifiedMark` / `VerifiedName` — pastille « B » de profil vérifié posée après le nom (demandée par l'auteur, convention réseaux sociaux). Le glyphe est `assets/bledi-b-mark.png`, le B du logo fourni par l'auteur.
- `Card` — la surface blanche/verte générique, extraite parce qu'elle se répète dans les deux surfaces.
- `RouteLine` — extrait de `RequestCard` car il réapparaît seul dans les récapitulatifs de trajet.

### UI kits

- `ui_kits/app/` — App Bledi, 5 écrans cliquables (voir son README ; l'écran Messages est **inféré**).
- `ui_kits/site/` — page d'accueil du site vitrine.

## À confirmer avec l'auteur

1. Le partage des rôles entre les deux familles : Camera Plain en titrage, Plus Jakarta Sans partout ailleurs.
2. L'écran **Messages**, reconstitué sans capture de référence.
3. Les écrans `/profile` (hors vérification) et l'étape 1 / 4 de `/publish`, entrevus seulement partiellement.
