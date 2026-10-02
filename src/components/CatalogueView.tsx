"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { Category, CategoryId, Product } from "@/types";
import { whatsappLink } from "@/lib/whatsapp";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/ui/icons";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const sortLabels: Record<SortKey, string> = {
  featured: "Mis en avant",
  "price-asc": "Prix croissant",
  "price-desc": "Prix décroissant",
  name: "Nom (A → Z)",
};

interface CatalogueViewProps {
  products: Product[];
  categories: Category[];
}

export function CatalogueView({ products, categories }: CatalogueViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // La catégorie active vit dans l'URL (/catalogue?categorie=telephones) : partageable et compatible retour arrière.
  const categoryParam = searchParams.get("categorie");
  const activeCategory: CategoryId | "all" = categories.some((c) => c.id === categoryParam) ? (categoryParam as CategoryId) : "all";

  const [query, setQuery] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");

  const setCategory = (id: CategoryId | "all") => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") params.delete("categorie");
    else params.set("categorie", id);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: products.length };
    for (const p of products) map[p.category] = (map[p.category] ?? 0) + 1;
    return map;
  }, [products]);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    const list = products.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (onlyAvailable && p.available === false) return false;
      if (q && !normalize(`${p.name} ${p.brand} ${p.specs.join(" ")}`).includes(q)) return false;
      return true;
    });
    const priced = (p: Product, fallback: number) => p.price ?? fallback;
    switch (sort) {
      case "price-asc":
        return [...list].sort((a, b) => priced(a, Infinity) - priced(b, Infinity));
      case "price-desc":
        return [...list].sort((a, b) => priced(b, -Infinity) - priced(a, -Infinity));
      case "name":
        return [...list].sort((a, b) => a.name.localeCompare(b.name, "fr"));
      default:
        return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
  }, [products, activeCategory, onlyAvailable, query, sort]);

  const hasFilters = query !== "" || onlyAvailable || activeCategory !== "all";
  const resetFilters = () => {
    setQuery("");
    setOnlyAvailable(false);
    setCategory("all");
  };

  const tabs: { id: CategoryId | "all"; name: string }[] = [{ id: "all", name: "Tous" }, ...categories];

  return (
    <div>
      {/* Catégories */}
      <div className="sticky top-16 z-30 -mx-4 border-b border-white/[0.06] bg-ink/85 px-4 py-3 backdrop-blur-xl sm:top-18 sm:mx-0 sm:rounded-2xl sm:border sm:px-3">
        <div role="tablist" aria-label="Catégories" className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const selected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="product-grid"
                onClick={() => setCategory(tab.id)}
                className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors ${
                  selected ? "bg-white text-ink" : "border border-white/10 text-white/80 hover:border-white/25 hover:text-white"
                }`}
              >
                {tab.name}
                <span className={`text-[0.7rem] ${selected ? "text-ink/60" : "text-mist"}`}>{counts[tab.id] ?? 0}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtres */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Rechercher un produit</span>
          <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-mist" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher : iPhone 15, 256 Go, Samsung…"
            className="h-12 w-full rounded-full border border-line bg-panel/60 pr-4 pl-11 text-sm text-white placeholder:text-mist/70 focus:border-cyan/50 focus:outline-none"
          />
        </label>
        <div className="flex gap-3">
          <label className="flex h-12 flex-1 cursor-pointer items-center gap-2.5 rounded-full border border-line bg-panel/60 px-4 text-sm text-white/85 select-none sm:flex-none">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
              className="h-4 w-4 accent-electric"
            />
            Disponibles
          </label>
          <label className="relative flex-1 sm:flex-none">
            <span className="sr-only">Trier par</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-12 w-full appearance-none rounded-full border border-line bg-panel/60 pr-10 pl-4 text-sm text-white focus:border-cyan/50 focus:outline-none sm:w-48"
            >
              {(Object.keys(sortLabels) as SortKey[]).map((key) => (
                <option key={key} value={key}>
                  {sortLabels[key]}
                </option>
              ))}
            </select>
            <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-mist">
              <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </label>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-mist">
        <p aria-live="polite">
          {filtered.length} produit{filtered.length > 1 ? "s" : ""}
        </p>
        {hasFilters && (
          <button type="button" onClick={resetFilters} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Effacer les filtres
          </button>
        )}
      </div>

      {/* Grille */}
      <div id="product-grid" role="tabpanel" className="mt-4">
        {filtered.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <li key={p.id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-line px-6 py-16 text-center">
            <p className="font-display text-xl font-semibold text-white">Aucun produit ne correspond à votre recherche.</p>
            <p className="mt-3 max-w-md text-sm text-mist">
              Nos arrivages changent chaque semaine. Dites-nous ce que vous cherchez, nous vous répondons sur WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={resetFilters} className="h-11 rounded-full border border-white/15 px-5 text-sm font-semibold text-white hover:border-cyan/60">
                Voir tous les produits
              </button>
              <a
                href={whatsappLink(`Bonjour Hamza Tech Store, je cherche ${query.trim() || "un produit"}. Est-il disponible ?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-[#04210F]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Demander sur WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
