import type { TradeOffer } from "@/types";

export function findTradeOffer(offers: TradeOffer[], current: string, desired: string) {
  return offers.find((o) => o.currentModel === current && o.desiredModel === desired);
}

/** Liste unique des modèles, dans l'ordre d'apparition dans la grille. */
export function listModels(offers: TradeOffer[], key: "currentModel" | "desiredModel") {
  return Array.from(new Set(offers.map((o) => o[key])));
}
