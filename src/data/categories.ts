import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "telephones",
    name: "Téléphones",
    singular: "Téléphone",
    description: "iPhone, Samsung et Android récents, neufs ou reconditionnés et vérifiés.",
    visual: "phone-pro",
  },
  {
    id: "tablettes",
    name: "Tablettes",
    singular: "Tablette",
    description: "iPad et tablettes Android pour le travail, les études et les loisirs.",
    visual: "tablet",
  },
  {
    id: "accessoires",
    name: "Accessoires",
    singular: "Accessoire",
    description: "Écouteurs, chargeurs, montres et protections d'origine.",
    visual: "earbuds",
  },
  {
    id: "vehicules",
    name: "Véhicules",
    singular: "Véhicule",
    description: "Motos et voitures sélectionnées, avec documents en règle.",
    visual: "car",
  },
];

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}
