import Link from "next/link";
import { siteConfig } from "@/config/site";

/** Monogramme : un « H » dont la barre centrale est une double flèche d'échange. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#007BFF" />
          <stop offset="1" stopColor="#00D9FF" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="39" height="39" rx="11" fill="#0C1829" stroke="#172640" />
      <rect x="10" y="9" width="4.5" height="22" rx="2.25" fill="#fff" />
      <rect x="25.5" y="9" width="4.5" height="22" rx="2.25" fill="#fff" />
      <path d="M14.5 17.5h9.5l-2.6-2.6" stroke="url(#logo-g)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.5 22.5H16l2.6 2.6" stroke="url(#logo-g)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group flex items-center gap-2.5" aria-label={`${siteConfig.name} — Accueil`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-[-0.01em] text-white">HAMZA</span>
        <span className="mt-1 text-[0.6rem] font-medium tracking-[0.28em] text-mist uppercase">Tech Store</span>
      </span>
    </Link>
  );
}
