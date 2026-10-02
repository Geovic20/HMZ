/**
 * Configuration centrale de la boutique.
 * Modifiez ici le numéro WhatsApp, l'adresse, les réseaux sociaux, etc.
 */
export const siteConfig = {
  name: "Hamza Tech Store",
  shortName: "Hamza Tech",
  tagline: "La qualité, notre priorité !",
  description:
    "Hamza Tech Store à Cotonou : smartphones, iPhone, tablettes, accessoires, véhicules et services de troc. Découvrez nos produits et contactez-nous sur WhatsApp.",
  /** URL publique du site (à définir via NEXT_PUBLIC_SITE_URL en production). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_BJ",

  whatsapp: {
    /**
     * Numéro au format international, chiffres uniquement (sans + ni espaces).
     * Depuis le 30/11/2024, les numéros béninois comptent 10 chiffres (préfixe 01).
     * Numéro fourni : +229 51 12 14 47 → nouveau format : +229 01 51 12 14 47.
     */
    number: "2290151121447",
    display: "+229 01 51 12 14 47",
    defaultMessage: "Bonjour Hamza Tech Store, j'aimerais avoir des informations.",
  },

  location: {
    /** Adresse affichée. À préciser lorsque l'adresse exacte sera confirmée. */
    street: "Topka",
    city: "Cotonou",
    country: "Bénin",
    /** Requête utilisée pour l'itinéraire Google Maps. */
    mapsQuery: "Dantokpa, Cotonou, Bénin",
    /** Optionnel : URL d'intégration Google Maps (iframe). Laisser vide pour le visuel par défaut. */
    mapEmbedUrl: "",
    /** Horaires à confirmer avec la boutique. */
    hours: [
      { days: "Lundi – Samedi", time: "8h30 – 20h00" },
      { days: "Dimanche", time: "Sur rendez-vous" },
    ],
  },

  /** Réseaux sociaux : laissez l'URL vide pour masquer un réseau. */
  socials: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },

  nav: [
    { label: "Accueil", href: "/" },
    { label: "Catalogue", href: "/catalogue" },
    { label: "Troc", href: "/troc" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
