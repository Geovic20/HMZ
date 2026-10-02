import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/types";
import { ProductVisual } from "@/components/ProductVisual";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/catalogue?categorie=${category.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel/60 p-5 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:bg-panel sm:p-6"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#0f2038] to-deep">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-electric/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <ProductVisual
          kind={category.visual}
          image={category.image}
          alt={`${category.name} disponibles chez Hamza Tech Store`}
          className="relative h-[78%] w-[78%] transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-display text-lg font-semibold text-white">{category.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{category.description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-cyan">
          Voir les {category.name.toLowerCase()}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
