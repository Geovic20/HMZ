import { ArrowRight } from "lucide-react";
import { featuredTrade } from "@/data/tradeOffers";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/ProductVisual";
import { TradeRail } from "@/components/TradeRail";

export function TradeSection() {
  return (
    <section aria-labelledby="trade-title" className="container-x py-8 sm:py-12">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#0b1d36] via-deep to-ink px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div aria-hidden="true" className="grid-fade absolute inset-0 -z-10 opacity-70" />
        <div aria-hidden="true" className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-electric/20 blur-[100px]" />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">Le troc Hamza</p>
            <h2 id="trade-title" className="font-display text-[1.9rem] leading-[1.08] font-bold tracking-[-0.025em] text-balance text-white sm:text-[2.6rem]">
              Passez à votre prochain modèle
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist sm:text-lg">
              Vous avez déjà un smartphone ? Échangez-le contre un autre modèle et payez simplement la différence.
            </p>
            <ButtonLink href="/troc" size="lg" className="mt-8 w-full sm:w-auto">
              Estimer mon troc
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <div>
            <TradeRail
              steps={[
                {
                  label: "Ancien modèle",
                  value: featuredTrade.currentModel,
                  visual: <ProductVisual kind="phone" tint="#E7E9EC" alt="" />,
                },
                {
                  label: "Nouveau modèle",
                  value: featuredTrade.desiredModel,
                  visual: <ProductVisual kind="phone-pro" tint="#3E4552" alt="" />,
                },
                {
                  label: "Vous payez",
                  value: "le complément",
                  highlight: true,
                  visual: (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display text-5xl font-semibold text-cyan">+</span>
                    </div>
                  ),
                },
              ]}
            />
            <p className="mt-4 text-xs text-mist">Exemple illustratif. Le complément dépend du modèle et de l&apos;état de votre appareil.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
