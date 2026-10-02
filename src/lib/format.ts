const priceFormatter = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });

/** 135000 → « 135 000 FCFA » (espaces insécables normalisées). */
export function formatPrice(amount: number): string {
  return `${priceFormatter.format(amount).replace(/ | /g, " ")} FCFA`;
}
