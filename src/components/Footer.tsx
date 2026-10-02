import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/icons";

const socialIcons = { facebook: FacebookIcon, instagram: InstagramIcon, tiktok: TikTokIcon } as const;
const socialLabels = { facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok" } as const;

export function Footer() {
  const { location, whatsapp, socials } = siteConfig;
  const activeSocials = (Object.keys(socials) as (keyof typeof socials)[]).filter((k) => socials[k]);
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-white/[0.06] bg-deep">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-mist">
            Téléphones, tablettes, accessoires et véhicules à Cotonou. Achat, troc et livraison partout au Bénin.
          </p>
          <p className="mt-6 font-display text-lg font-semibold text-white">
            La qualité, <span className="text-cyan">notre priorité !</span>
          </p>
        </div>

        <div>
          <h2 className="eyebrow mb-5 !text-mist">Navigation</h2>
          <ul className="space-y-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 transition-colors hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-cyan">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 !text-mist">Contact</h2>
          <address className="space-y-3 text-sm not-italic">
            <p className="flex items-start gap-2 text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
              {location.city}, {location.street}, {location.country}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-whatsapp" />
              <span className="">{whatsapp.display}</span>
            </a>
          </address>
          {activeSocials.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {activeSocials.map((key) => {
                const Icon = socialIcons[key];
                return (
                  <li key={key}>
                    <a
                      href={socials[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLabels[key]}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:border-cyan/50 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. Tous droits réservés.</p>
          <p className="">Cotonou · Bénin</p>
        </div>
      </div>
    </footer>
  );
}
