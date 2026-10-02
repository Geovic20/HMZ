import { Clock, MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";

export function LocationSection() {
  const { location } = siteConfig;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`;
  const address = `${location.city}, ${location.street}, ${location.country}`;

  return (
    <section aria-labelledby="location-title" className="container-x py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Boutique" id="location-title" title="Retrouvez-nous à Cotonou" />
      </Reveal>

      <Reveal delay={80} className="mt-12 grid overflow-hidden rounded-[2rem] border border-line bg-panel/50 lg:grid-cols-[1.25fr_1fr]">
        {/* Carte */}
        <div className="relative min-h-[260px] sm:min-h-[340px]">
          {location.mapEmbedUrl ? (
            <iframe
              src={location.mapEmbedUrl}
              title={`Carte : ${address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.4] invert-[0.9] hue-rotate-180"
            />
          ) : (
            <MapPlaceholder label={address} />
          )}
        </div>

        {/* Infos */}
        <div className="flex flex-col gap-8 border-t border-line p-6 sm:p-10 lg:border-t-0 lg:border-l">
          <div>
            <p className="eyebrow mb-3 !text-mist">Adresse</p>
            <p className="flex items-start gap-3 font-display text-xl text-white sm:text-2xl">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
              {address}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3 !text-mist">Horaires</p>
            <ul className="space-y-2 text-sm">
              {location.hours.map((h) => (
                <li key={h.days} className="flex items-center justify-between gap-4 border-b border-line/70 pb-2 last:border-0">
                  <span className="flex items-center gap-2 text-white/85">
                    <Clock className="h-4 w-4 text-mist" aria-hidden="true" />
                    {h.days}
                  </span>
                  <span className="font-mono text-mist">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={directionsUrl} variant="primary" className="flex-1">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Itinéraire
            </ButtonLink>
            <ButtonLink href={whatsappLink("Bonjour Hamza Tech Store, je souhaite passer à la boutique. Pouvez-vous m'indiquer l'adresse exacte ?")} variant="whatsapp" className="flex-1">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Carte stylisée (en attendant l'adresse exacte / une intégration Google Maps). */
function MapPlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#071222]" role="img" aria-label={`Plan schématique : ${label}`}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400" aria-hidden="true">
        <defs>
          <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="#0f2140" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#map-grid)" />
        {/* lagune / mer */}
        <path d="M0 330 Q 150 300 300 340 T 600 320 V400 H0Z" fill="#0a2547" opacity="0.8" />
        <path d="M380 0 Q 360 120 400 200 T 420 400" stroke="#0a2547" strokeWidth="26" fill="none" opacity="0.8" />
        {/* routes */}
        <path d="M0 210 Q 200 180 330 200 T 600 170" stroke="#1d3558" strokeWidth="9" fill="none" />
        <path d="M120 0 Q 160 160 250 230 T 330 400" stroke="#1d3558" strokeWidth="6" fill="none" />
        <path d="M500 0 L 470 140 L 520 400" stroke="#16294a" strokeWidth="5" fill="none" />
        <path d="M0 100 Q 220 120 600 60" stroke="#16294a" strokeWidth="4" fill="none" />
        <path d="M60 400 Q 120 290 330 200" stroke="#16294a" strokeWidth="4" fill="none" />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
        <span className="absolute top-full left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-cyan/20" />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full rounded-br-none bg-electric shadow-[0_0_0_6px_rgba(0,123,255,0.2)] [transform:rotate(45deg)]">
          <span className="h-3.5 w-3.5 rounded-full bg-white" />
        </span>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 font-mono text-[0.7rem] text-mist backdrop-blur">
        Hamza Tech Store · Cotonou
      </span>
    </div>
  );
}
