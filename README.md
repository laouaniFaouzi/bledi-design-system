# @bledi/design-system

Système de composants React/TypeScript officiel de **Bledi** — la plateforme qui met en relation des
voyageurs vérifiés et des membres de la diaspora ayant besoin de récupérer un **objet personnel oublié
au pays**, sur des **trajets officiels** déjà réservés (vols Air Algérie, traversées Corsica Linea…).
Signature de marque : *« Le lien entre ici et là-bas. »*

Ce paquet remplace l'ancien contenu de ce dépôt (prototype non buildé) par une implémentation réelle :
composants TypeScript typés, build ESM/CJS, tokens CSS, polices et assets prêts à consommer.

> Origine : ce paquet a été généré à partir d'un export [Claude Design](https://claude.ai/design)
> (voir `chats/` dans l'historique du projet source) recréant fidèlement le prototype
> [bledilink-connect.lovable.app](https://bledilink-connect.lovable.app).

## Installation

```bash
npm install laouaniFaouzi/bledi-design-system
```

```tsx
import { Button, RequestCard, TopNav } from '@bledi/design-system';
import '@bledi/design-system/styles.css';
```

`styles.css` importe uniquement les fichiers de `src/tokens/` (variables CSS `:root` + `@font-face`) —
aucune règle de composant n'y est injectée : tout le style vit dans les composants eux-mêmes, via
`style={{ ... }}` référençant les tokens (`var(--action-primary-bg)`, etc.).

## `dist/` est versionné

Le dossier `dist/` fait partie du dépôt et **doit être reconstruit avant tout commit
touchant `src/`** :

```bash
npm run build
```

Il n'y a volontairement aucun script `prepare` : une dépendance qui se compile chez
son consommateur produit des résultats différents d'une machine à l'autre. Constaté
sur le dépôt Bledi — le même commit produisait 19 Ko de déclarations en local et un
fichier vide de 30 octets sur le runner d'intégration continue, d'où un `typecheck`
rouge alors que l'application tournait. Ce que l'auteur construit est désormais ce
que tout le monde reçoit.

## Développement local

```bash
npm install
npm run build       # build de la librairie (dist/, ESM + CJS + .d.ts)
npm run typecheck   # tsc --noEmit sur src/ et examples/
npm run lint        # oxlint avec les règles d'adhérence au design system
npm run examples    # démo Vite interactive (site vitrine + app cliquable)
```

## Architecture

```
src/
  tokens/           variables CSS custom properties (une préoccupation par fichier)
  styles.css         point d'entrée — n'importe que des fichiers de tokens/
  components/
    brand/           Logo (6 assemblages)
    core/             primitives (Button, Badge, Card, Icon, …)
    domain/           composants métier (RequestCard, ProtectionPanel, …)
    feedback/         Dialog, Toast, StatusTimeline
    forms/            Field, Input, Select, OptionToggle, …
    navigation/       TopNav, BottomNav, SegmentedTabs, …
  index.ts            point d'entrée public (réexporte tout components/)
assets/
  bledi-logo.png, bledi-logo-square.png, bledi-b-mark.png
  fonts/CameraPlainVariable.woff2
examples/             démo Vite : parcours App Bledi complet + page vitrine
```

Chaque composant est un fichier `<Name>.tsx` autonome (React uniquement, aucune dépendance externe,
style via variables CSS) avec son interface de props exportée `<Name>Props`. Import direct depuis
le paquet — jamais depuis les fichiers internes de `src/components/**` (voir `.oxlintrc.json`).

## Tokens — fondations visuelles

- **Couleurs** — trois familles seulement : vert profond `#0C3B26` (identité, actions), or `#E9B949`
  (confiance, CTA sur fond sombre — **jamais posé sur crème**), crème `#FDF7F0` (fond des pages). Le rouge
  `#B3402F` n'apparaît que sur les icônes d'interdiction.
- **Typographie** — `--font-display` (Playfair Display, titres du site vitrine), `--font-camera`
  (Camera Plain, fichier variable auto-hébergé, logotype + titres d'app), `--font-sans` (Plus Jakarta
  Sans, tout le reste), `--font-mono` (IBM Plex Mono, doc uniquement).
- **Formes** — la pilule (`border-radius: 999px`) est la forme signature de tous les boutons, badges,
  chips et onglets. Cartes à 16–20 px, grands panneaux à 24 px. Aucun angle droit.
- **Élévation** — carte = blanc + filet 1 px `#EAE6DE` + ombre quasi invisible. Seuls les panneaux verts
  (`--gradient-panel`) portent une vraie ombre.
- **Mouvement** — une seule courbe `cubic-bezier(0.2, 0, 0, 1)`, trois durées (120/180/280 ms). Pas de
  rebond, pas de parallaxe.
- **Espacement** — échelle 4 px. Colonne app étroite et centrée (`--container-app` = 568 px, une maquette
  mobile posée au centre d'un fond crème) ; site vitrine à 1120 px.

## Ton éditorial

Vouvoiement systématique. Des règles à l'indicatif plutôt que des promesses marketing (« Bledi vérifie
la demande », pas de point d'exclamation, pas de superlatif). Vocabulaire fixe : *objet déclaré · trajet
officiel · voyageur vérifié · demandeur · remise · code unique · Protection Bledi*. Aucun emoji ; seuls
symboles admis : `↔ → · − +` et `€`.

## Iconographie

Lucide (contour, grille 24, `stroke-width: 2`) — inliné dans `<Icon>` (33 glyphes utilisés par le
produit, aucune dépendance CDN). Pas d'emoji, pas de caractère Unicode comme icône.

## Inventaire des composants

| Groupe | Composants |
| --- | --- |
| `brand` | `Logo` (+ `LogoMark`, `LogoWordmark` — variantes horizontal / stacked / mark / wordmark / compact / appIcon) |
| `core` | `Button`, `Badge`, `Chip`, `Avatar`, `Card`, `Alert`, `EmptyState`, `Icon`, `RatingStars`, `VerifiedMark` / `VerifiedName` |
| `domain` | `RequestCard`, `OfficialTripCard`, `TripBanner`, `RouteLine`, `VerificationRow`, `ProtectionPanel` |
| `feedback` | `Dialog`, `Toast`, `StatusTimeline` |
| `forms` | `Field`, `Input` / `Textarea`, `Select`, `OptionToggle`, `Checkbox`, `Switch`, `CodeInput`, `PhotoUploader` |
| `navigation` | `TopNav`, `BottomNav`, `SegmentedTabs`, `UnderlineTabs`, `StepProgress` |

## Exemples

`npm run examples` lance une démo Vite avec deux parcours cliquables recréant fidèlement les écrans
produit :

- **Site vitrine** (`examples/site/`) — page d'accueil éditoriale : héro à deux colonnes, 4 étapes,
  objets autorisés/interdits, confiance, routes, FAQ.
- **App Bledi** (`examples/app/`) — `Demandes` → `Publier` (5 étapes) → `Réservations` → `Messages` →
  `Profil` → `Vérification`, avec `TopNav` desktop / `BottomNav` mobile.

## À confirmer

Repris du design system source, toujours d'actualité :

1. L'écran **Messages** a été reconstitué sans capture de référence.
2. Les écrans `/profile` (hors vérification) et les étapes 1 et 4 de `/publish` n'avaient été entrevus
   que partiellement au moment de l'export.

## Sources

- Prototype produit : https://bledilink-connect.lovable.app
- Dépôt design system source (Claude Design) : historique de ce dépôt avant remplacement.
