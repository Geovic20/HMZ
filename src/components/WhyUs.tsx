import { ArrowLeftRight, BadgeCheck, ShieldCheck, Truck, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const advantages: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: BadgeCheck,
    title: "Produits authentiques",
    text: "Chaque appareil est contrôlé avant la vente : origine, état, batterie et fonctionnement.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie satisfaction",
    text: "Un souci après votre achat ? Revenez vers nous, nous trouvons une solution ensemble.",
  },
  {
    icon: ArrowLeftRight,
    title: "Échange simple et rapide",
    text: "Votre ancien téléphone est évalué sur place ou sur photos. Vous payez la différence, c'est tout.",
  },
  {
    icon: Truck,
    title: "Livraison partout au Bénin",
    text: "Cotonou, Calavi, Porto-Novo, Parakou… Nous expédions votre commande où que vous soyez.",
  },
];

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="container-x py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Nos engagements" id="why-title" title="Pourquoi choisir Hamza Tech Store ?" />
      </Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 80} className="rounded-3xl border border-line bg-panel/40 p-6 transition-colors duration-300 hover:border-white/15">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] text-cyan">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
