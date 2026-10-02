export type CategoryId = "telephones" | "tablettes" | "accessoires" | "vehicules";

export interface Category {
  id: CategoryId;
  name: string;
  /** Nom au singulier, utilisé sur les cartes produit. */
  singular: string;
  description: string;
  visual: ProductVisualKind;
  /** Image réelle optionnelle (chemin dans /public). Remplace l'illustration. */
  image?: string;
}

/** Illustrations vectorielles intégrées, utilisées tant qu'aucune photo n'est fournie. */
export type ProductVisualKind =
  | "phone-pro"
  | "phone"
  | "phone-android"
  | "tablet"
  | "earbuds"
  | "charger"
  | "watch"
  | "scooter"
  | "car";

export type ProductCondition = "Neuf" | "Comme neuf" | "Très bon état" | "Bon état";

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  brand: string;
  /** 2 à 4 caractéristiques courtes. */
  specs: string[];
  condition?: ProductCondition;
  /** Prix en FCFA. Laisser vide pour afficher « Nous contacter ». */
  price?: number;
  visual: ProductVisualKind;
  /** Teinte de l'illustration (couleur de l'appareil). */
  tint?: string;
  /** Photo réelle optionnelle (chemin dans /public ou URL autorisée). */
  image?: string;
  available?: boolean;
  featured?: boolean;
}

export interface TradeOffer {
  currentModel: string;
  desiredModel: string;
  /** Complément en FCFA à payer par le client. */
  supplement: number;
}

export interface Testimonial {
  id: string;
  firstName: string;
  city?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  /** Ce que le client a acheté / échangé (optionnel). */
  context?: string;
}
