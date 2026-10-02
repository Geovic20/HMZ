import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/format";

/** Génère un lien WhatsApp (wa.me) avec un message prérempli. */
export function whatsappLink(message: string = siteConfig.whatsapp.defaultMessage): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function productInquiryMessage(productName: string): string {
  return `Bonjour Hamza Tech Store, je suis intéressé par ${productName}. Est-il disponible ?`;
}

export function tradeMessage(current: string, desired: string, supplement?: number): string {
  const lines = [
    "Bonjour Hamza Tech Store,",
    `je souhaite échanger mon ${current} contre un ${desired}.`,
    supplement !== undefined
      ? `Le complément affiché est de ${formatPrice(supplement)}.`
      : "Je n'ai pas trouvé de complément affiché pour cette combinaison.",
    supplement !== undefined
      ? "Pouvez-vous confirmer la disponibilité et le montant ?"
      : "Pouvez-vous me faire une estimation personnalisée ?",
  ];
  return lines.join("\n");
}
