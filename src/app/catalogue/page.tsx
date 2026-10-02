import type { Metadata } from "next";
import { Suspense } from "react";
import { getCategories, getProducts } from "@/lib/catalog";
import { whatsappLink } from "@/lib/whatsapp";
import { PageHeader } from "@/components/PageHeader";
import { CatalogueView } from "@/components/CatalogueView";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "iPhone, Samsung, tablettes, accessoires et véhicules disponibles chez Hamza Tech Store à Cotonou. Contactez-nous sur WhatsApp pour réserver.",
  alternates: { canonical: "/catalogue" },
};

export default async function CataloguePage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Découvrez nos produits"
        description="Choisissez une catégorie, puis écrivez-nous sur WhatsApp : nous confirmons la disponibilité et le prix en quelques minutes."
      />
      <div className="container-x pb-16">
        <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
          <CatalogueView products={products} categories={categories} />
        </Suspense>

        <p className="mt-8 text-xs text-mist">Prix indicatifs, susceptibles d&apos;évoluer selon les arrivages. Confirmation sur WhatsApp.</p>

        <aside className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] border border-line bg-panel/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-display text-xl text-white sm:text-2xl">Vous ne trouvez pas votre modèle ?</h2>
            <p className="mt-2 text-sm text-mist">Nous recevons de nouveaux appareils chaque semaine. Dites-nous ce que vous cherchez.</p>
          </div>
          <ButtonLink
            href={whatsappLink("Bonjour Hamza Tech Store, je cherche un modèle qui n'est pas dans le catalogue : ")}
            variant="whatsapp"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Demander un modèle
          </ButtonLink>
        </aside>
      </div>
    </>
  );
}
