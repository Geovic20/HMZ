"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le défilement et permet de fermer avec Échap quand le menu mobile est ouvert.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Navigation principale" className="container-x flex h-16 items-center justify-between sm:h-18">
        <Logo onClick={close} />

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-white" : "text-mist hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.href) && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-electric to-cyan" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-3.5 text-sm font-semibold text-whatsapp transition-colors hover:bg-whatsapp/20 sm:px-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Nous écrire</span>
            <span className="sr-only sm:hidden">Contacter sur WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/[0.06] bg-ink md:hidden"
      >
        <ul className="container-x flex flex-col pt-4">
          {siteConfig.nav.map((item) => (
            <li key={item.href} className="border-b border-white/[0.06]">
              <Link
                href={item.href}
                onClick={close}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="flex items-center justify-between py-5"
              >
                <span className={`text-2xl font-medium ${isActive(item.href) ? "text-white" : "text-white/70"}`}>{item.label}</span>
                <ArrowRight className="h-5 w-5 text-mist" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-x mt-8 flex flex-col gap-3 pb-10">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-[#04210F]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Écrire sur WhatsApp
          </a>
          <p className="text-center text-xs text-mist">{siteConfig.whatsapp.display}</p>
        </div>
      </div>
    </header>
  );
}
