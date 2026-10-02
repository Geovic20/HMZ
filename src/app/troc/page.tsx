import type { Metadata } from "next";
import { Camera, Handshake, MessageSquareText, type LucideIcon } from "lucide-react";
import { getTradeOffers } from "@/lib/catalog";
import { featuredTrade } from "@/data/tradeOffers";
import { PageHeader } from "@/components/PageHeader";
import { TradeCalculator } from "@/components/TradeCalculator";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Troc de smartphones",
  description:
    "Échangez votre smartphone chez Hamza Tech Store à Cotonou : choisissez votre modèle actuel et le modèle souhaité, obtenez le complément estimatif et confirmez sur WhatsApp.",
  alternates: { canonical: "/troc" },
};

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: MessageSquareText, title: "Estimez", text: "Sélectionnez votre téléphone et celui que vous voulez pour voir le complément estimatif." },
  { icon: Camera, title: "Faites vérifier", text: "Envoyez des photos sur WhatsApp ou passez en boutique : nous contrôlons l'état de l'appareil." },
  { icon: Handshake, title: "Échangez", text: "Le montant est confirmé, vous payez la différence et repartez avec votre nouveau modèle." },
];

export default async function TrocPage() {
  const offers = await getTradeOffers();

  return (
    <>
      <PageHeader eyebrow="Troc" title="Échangez votre smartphone" description="Passez à un nouveau modèle en payant simplement la différence." />

      <div className="container-x">
        <section aria-label="Simulateur de troc">
          <TradeCalculator offers={offers} defaultCurrent={featuredTrade.currentModel} defaultDesired={featuredTrade.desiredModel} />
        </section>

        <section aria-labelledby="how-title" className="py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow mb-4">En 3 étapes</p>
            <h2 id="how-title" className="font-display text-[1.75rem] leading-tight font-bold tracking-[-0.025em] text-white sm:text-4xl">
              Comment se passe un troc
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80} className="relative rounded-3xl border border-line bg-panel/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] text-cyan">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-xs text-mist">Étape {i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{text}</p>
              </Reveal>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
