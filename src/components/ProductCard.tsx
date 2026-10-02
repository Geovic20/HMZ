import type { Product } from "@/types";
import { getCategory } from "@/data/categories";
import { formatPrice } from "@/lib/format";
import { productInquiryMessage, whatsappLink } from "@/lib/whatsapp";
import { ProductVisual } from "@/components/ProductVisual";
import { WhatsAppIcon } from "@/components/ui/icons";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const available = product.available !== false;
  const message = available
    ? productInquiryMessage(product.name)
    : `Bonjour Hamza Tech Store, je suis intéressé par ${product.name}. Quand sera-t-il de nouveau disponible ?`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel/60 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-white/15">
      <div className="relative flex aspect-[16/10] items-center sm:aspect-[5/4] justify-center bg-gradient-to-b from-[#0f2038] to-deep">
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.condition && (
            <span className="rounded-full border border-white/10 bg-ink/70 px-2.5 py-1 text-[0.65rem] tracking-wide text-white/90 backdrop-blur">
              {product.condition}
            </span>
          )}
        </div>
        {!available && (
          <span className="absolute top-3 right-3 rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] tracking-wide text-mist">Bientôt</span>
        )}
        <ProductVisual
          kind={product.visual}
          tint={product.tint}
          image={product.image}
          alt={`${product.name}${product.condition ? ` — ${product.condition.toLowerCase()}` : ""}`}
          className={`relative h-[72%] w-[72%] transition-transform duration-500 ease-out group-hover:scale-[1.05] ${available ? "" : "opacity-60"}`}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.68rem] tracking-[0.14em] text-cyan uppercase">
          {category?.singular} · {product.brand}
        </p>
        <h3 className="mt-2 font-display text-lg leading-snug font-semibold text-white">{product.name}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Caractéristiques">
          {product.specs.map((spec) => (
            <li key={spec} className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-mist ring-1 ring-white/[0.06]">
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <p className="mb-4 flex items-baseline justify-between gap-2">
            {product.price !== undefined ? (
              <span className="text-lg font-bold tabular-nums text-white">{formatPrice(product.price)}</span>
            ) : (
              <span className="text-sm font-semibold text-white/90">Nous contacter</span>
            )}
            <span className={`flex items-center gap-1.5 text-xs ${available ? "text-whatsapp" : "text-mist"}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${available ? "bg-whatsapp" : "bg-mist"}`} aria-hidden="true" />
              {available ? "Disponible" : "Sur commande"}
            </span>
          </p>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contacter sur WhatsApp à propos de ${product.name}`}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-whatsapp/30 bg-whatsapp/10 text-sm font-semibold text-whatsapp transition-colors hover:bg-whatsapp hover:text-[#04210F]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Contacter sur WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
