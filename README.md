# Hamza Tech Store — site vitrine

Site vitrine/catalogue de Hamza Tech Store (Cotonou) : Accueil, Catalogue, Troc.
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4. Les demandes commerciales passent par WhatsApp.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

En production, définir `NEXT_PUBLIC_SITE_URL` (ex. `https://www.mon-domaine.bj`) pour les URLs canoniques, l'Open Graph et le sitemap.

## Où modifier le contenu

| Quoi | Fichier |
| --- | --- |
| Numéro WhatsApp, adresse, horaires, réseaux sociaux | `src/config/site.ts` |
| Produits du catalogue (prix, état, photos) | `src/data/products.ts` |
| Catégories | `src/data/categories.ts` |
| Grille de troc (compléments) | `src/data/tradeOffers.ts` |
| Témoignages | `src/data/testimonials.ts` |

- **Photos produits** : déposer l'image dans `public/products/` et renseigner `image: "/products/nom.jpg"`. Sans photo, une illustration vectorielle est affichée.
- **Prix** : supprimer `price` pour afficher « Nous contacter ».
- **Carte** : renseigner `location.mapEmbedUrl` (URL d'intégration Google Maps) pour remplacer le plan stylisé.
- **Réseaux sociaux** : un réseau s'affiche dans le footer dès que son URL est renseignée.

> ⚠️ Les prix, compléments de troc, horaires et témoignages actuels sont des **données de démonstration**.

## Brancher une API plus tard

Toutes les pages lisent les données via `src/lib/catalog.ts` (`getProducts`, `getTradeOffers`…).
Il suffit de remplacer le corps de ces fonctions par des appels `fetch` vers le backend ; les composants restent inchangés.

## Structure

```
src/
  app/            pages (/, /catalogue, /troc), metadata, icon, OG image, sitemap, robots
  components/     Navbar, Footer, Hero, CategoryCard, ProductCard, CatalogueView, WhyUs,
                  TradeSection, TradeRail, TradeCalculator, TestimonialCard, LocationSection,
                  WhatsAppButton, ProductVisual, ui/ (Button, Logo, Reveal, SectionHeading, icons)
  config/site.ts  configuration de la boutique
  data/           données modifiables
  lib/            whatsapp (liens préremplis), catalog (accès données), trade, format
  types/          types partagés
```
