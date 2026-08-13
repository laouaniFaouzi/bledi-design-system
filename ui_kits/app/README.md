# UI kit — App Bledi

Recréation des écrans produit relevés sur https://bledilink-connect.lovable.app (captures fournies par l'auteur, août 2026).

| Fichier | Écran source |
| --- | --- |
| `Requests.jsx` | `/requests` — Demandes de la communauté (onglets, cartes de demande, panneau Protection, états vides) |
| `Publish.jsx` | `/publish` — Publier une demande, 5 étapes (transport, sens, trajet officiel, description, budget, sécurité) |
| `Reservations.jsx` | `/reservations` — Mes réservations (onglets soulignés, état vide, Protection Bledi) |
| `Profile.jsx` | `/profile` — en-tête vérifié (pastille « B »), avis, trajets habituels, préférences |
| `Verification.jsx` | Vérification du profil — niveau de confiance, 6 contrôles KYC |
| `Messages.jsx` | `/messages` — **inféré**, aucune capture disponible. À confirmer. |

`index.html` monte les six écrans avec `TopNav` (≥761 px) ou `BottomNav` (mobile) et est cliquable de bout en bout.

Le contenu de démonstration reprend mot pour mot les libellés du site : ne le réécrivez pas quand vous adaptez ces écrans.
