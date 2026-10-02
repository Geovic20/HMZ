import type { Testimonial } from "@/types";

/**
 * ⚠️ TÉMOIGNAGES FICTIFS — à remplacer par de vrais avis clients (avec leur accord).
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    firstName: "Rachidi",
    city: "Cotonou",
    rating: 5,
    context: "Troc iPhone 12 → iPhone 14",
    comment:
      "J'ai envoyé les photos de mon ancien téléphone sur WhatsApp, on m'a donné le complément dans l'heure. Échange fait le lendemain, sans surprise.",
  },
  {
    id: "t2",
    firstName: "Mireille",
    city: "Abomey-Calavi",
    rating: 5,
    context: "Achat d'un iPad",
    comment:
      "Tablette neuve, scellée, et on m'a aidée à tout configurer avant de partir. Je recommande pour le sérieux.",
  },
  {
    id: "t3",
    firstName: "Fabrice",
    city: "Porto-Novo",
    rating: 4,
    context: "Livraison à Porto-Novo",
    comment:
      "Commande passée le matin, reçue le soir même. Le téléphone correspondait exactement à la description.",
  },
  {
    id: "t4",
    firstName: "Aïcha",
    city: "Cotonou",
    rating: 5,
    context: "AirPods et coque",
    comment:
      "Accueil agréable à la boutique, produits d'origine et conseils honnêtes. Je reviendrai pour mon prochain téléphone.",
  },
];
