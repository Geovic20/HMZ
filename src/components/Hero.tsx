import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ProductVisual } from "@/components/ProductVisual";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Fond : trame + halo très léger */}
      <div aria-hidden="true" className="grid-fade absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute top-[38%] right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-electric/25 blur-[120px] lg:top-1/2 lg:right-[5%] lg:-translate-y-1/2"
      />
      <div aria-hidden="true" className="absolute top-[55%] right-[20%] -z-10 h-56 w-56 rounded-full bg-cyan/15 blur-[90px]" />

      <div className="container-x grid items-center gap-8 pt-8 pb-10 sm:pt-16 sm:pb-16 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pt-6 lg:pb-20">
        <div className="relative z-10">
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(0,217,255,0.6)]" />
            Cotonou · Livraison partout au Bénin
          </p>
          <h1
            id="hero-title"
            className="font-display text-[2.6rem] leading-[1.02] font-bold tracking-[-0.035em] text-balance text-white sm:text-6xl lg:text-[4.4rem]"
          >
            Votre prochain <span className="bg-gradient-to-r from-electric via-[#2fa6ff] to-cyan bg-clip-text text-transparent">iPhone</span>{" "}
            commence ici.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-pretty text-mist sm:text-lg">
            Téléphones, tablettes, accessoires et véhicules. Achetez, échangez et profitez d&apos;un service rapide et fiable partout au
            Bénin.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/catalogue" size="lg">
              Voir le catalogue
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/troc" size="lg" variant="secondary">
              <ArrowLeftRight className="h-4 w-4 text-cyan" aria-hidden="true" />
              Faire un troc
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] tracking-wide text-mist uppercase">
            <li>Produits authentiques</li>
            <li aria-hidden="true" className="text-line">
              /
            </li>
            <li>Troc simple et rapide</li>
            <li aria-hidden="true" className="text-line">
              /
            </li>
            <li>Garantie satisfaction</li>
          </ul>
        </div>

        {/* Composition produit */}
        <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[520px]" aria-hidden="true">
          <div className="absolute inset-[12%] rounded-full border border-white/[0.06]" />
          <div className="absolute inset-[24%] rounded-full border border-cyan/10" />
          <div className="absolute top-[4%] left-[2%] w-[62%] -rotate-[9deg] drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]">
            <ProductVisual kind="phone-pro" tint="#3E4552" alt="" priority />
          </div>
          <div className="absolute right-[0%] bottom-[2%] w-[66%] rotate-[7deg] drop-shadow-[0_40px_50px_rgba(0,0,0,0.7)]">
            <ProductVisual kind="phone-pro" tint="#C9772E" alt="" priority />
          </div>
          <div className="absolute bottom-[12%] left-[0%] rounded-2xl border border-white/10 bg-panel/80 px-4 py-3 backdrop-blur-md sm:left-[4%]">
            <p className="text-[0.65rem] tracking-[0.14em] text-mist uppercase">Troc</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-white">
              Ancien <ArrowRight className="h-3.5 w-3.5 text-cyan" /> Nouveau
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
