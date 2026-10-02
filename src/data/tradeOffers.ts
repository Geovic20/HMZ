import type { TradeOffer } from "@/types";

/**
 * Grille de troc.
 * ⚠️ MONTANTS DE DÉMONSTRATION — à remplacer par la grille réelle de Hamza Tech Store.
 * Chaque ligne = un échange possible : appareil du client → appareil souhaité → complément à payer (FCFA).
 */
export const tradeOffers: TradeOffer[] = [
  { currentModel: "iPhone 11", desiredModel: "iPhone 13", supplement: 110000 },
  { currentModel: "iPhone 11", desiredModel: "iPhone 14", supplement: 165000 },
  { currentModel: "iPhone 11", desiredModel: "iPhone 15 Pro", supplement: 360000 },
  { currentModel: "iPhone 12", desiredModel: "iPhone 13", supplement: 70000 },
  { currentModel: "iPhone 12", desiredModel: "iPhone 14", supplement: 120000 },
  { currentModel: "iPhone 12", desiredModel: "iPhone 15 Pro", supplement: 315000 },
  { currentModel: "iPhone 12", desiredModel: "iPhone 16 Pro", supplement: 450000 },
  { currentModel: "iPhone 13", desiredModel: "iPhone 14", supplement: 75000 },
  { currentModel: "iPhone 13", desiredModel: "iPhone 15 Pro", supplement: 135000 },
  { currentModel: "iPhone 13", desiredModel: "iPhone 16 Pro", supplement: 395000 },
  { currentModel: "iPhone 13", desiredModel: "iPhone 17 Pro Max", supplement: 640000 },
  { currentModel: "iPhone 14", desiredModel: "iPhone 15 Pro", supplement: 210000 },
  { currentModel: "iPhone 14", desiredModel: "iPhone 16 Pro", supplement: 340000 },
  { currentModel: "iPhone 14", desiredModel: "iPhone 17 Pro Max", supplement: 585000 },
  { currentModel: "iPhone 15 Pro", desiredModel: "iPhone 16 Pro", supplement: 160000 },
  { currentModel: "iPhone 15 Pro", desiredModel: "iPhone 17 Pro Max", supplement: 405000 },
  { currentModel: "iPhone 16 Pro", desiredModel: "iPhone 17 Pro Max", supplement: 260000 },
  { currentModel: "Samsung Galaxy S23", desiredModel: "Samsung Galaxy S25 Ultra", supplement: 430000 },
  { currentModel: "Samsung Galaxy S23", desiredModel: "iPhone 15 Pro", supplement: 220000 },
];

/** Exemple illustré sur la page d'accueil (purement visuel, sans montant). */
export const featuredTrade = { currentModel: "iPhone 13", desiredModel: "iPhone 15 Pro" };
