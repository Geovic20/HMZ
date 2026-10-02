import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Bouton WhatsApp flottant, présent sur toutes les pages. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec Hamza Tech Store sur WhatsApp"
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-[#04210F] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] ring-4 ring-ink/60 transition-transform duration-200 hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-attention rounded-full bg-whatsapp" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-panel px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 ring-1 ring-line transition-opacity group-hover:opacity-100 lg:block">
        Une question ? Écrivez-nous
      </span>
    </a>
  );
}
