import Image from "next/image";
import type { ProductVisualKind } from "@/types";

interface ProductVisualProps {
  kind: ProductVisualKind;
  tint?: string;
  /** Photo réelle : si fournie, elle remplace l'illustration. */
  image?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Visuel produit : affiche la photo si disponible, sinon une illustration vectorielle
 * légère (aucun téléchargement d'image, rendu net sur tous les écrans).
 */
export function ProductVisual({
  kind,
  tint = "#C9CDD3",
  image,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  priority,
}: ProductVisualProps) {
  if (image) {
    return (
      <div className={`relative ${className}`}>
        <Image src={image} alt={alt} fill sizes={sizes} priority={priority} className="object-contain" />
      </div>
    );
  }

  const id = `pv-${kind}-${tint.replace("#", "")}`;
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={alt} className={className}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={tint} />
          <stop offset="1" stopColor={tint} stopOpacity="0.72" />
        </linearGradient>
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={`${id}-screen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A2A55" />
          <stop offset="0.55" stopColor="#06162E" />
          <stop offset="1" stopColor="#00D9FF" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`${id}-lens`} cx="0.35" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#3B5A86" />
          <stop offset="0.5" stopColor="#0B1426" />
          <stop offset="1" stopColor="#02060C" />
        </radialGradient>
      </defs>
      {/* ombre au sol */}
      <ellipse cx="100" cy="190" rx="58" ry="5" fill="#000" opacity="0.45" />
      <Shape kind={kind} id={id} />
    </svg>
  );
}

function Lens({ cx, cy, r, id }: { cx: number; cy: number; r: number; id: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 1.6} fill="#0E1522" opacity="0.85" />
      <circle cx={cx} cy={cy} r={r} fill={`url(#${id}-lens)`} />
      <circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.22} fill="#9FD8FF" opacity="0.55" />
    </g>
  );
}

function Shape({ kind, id }: { kind: ProductVisualKind; id: string }) {
  const body = `url(#${id}-body)`;
  const sheen = `url(#${id}-sheen)`;
  const screen = `url(#${id}-screen)`;

  switch (kind) {
    case "phone-pro":
      return (
        <g>
          <rect x="60" y="12" width="80" height="172" rx="17" fill={body} />
          <rect x="60" y="12" width="80" height="172" rx="17" fill={sheen} />
          <rect x="61.5" y="13.5" width="77" height="169" rx="15.5" fill="none" stroke="#fff" strokeOpacity="0.25" />
          <rect x="68" y="20" width="38" height="38" rx="10" fill="#000" opacity="0.22" />
          <rect x="68" y="20" width="38" height="38" rx="10" fill="none" stroke="#fff" strokeOpacity="0.2" />
          <Lens cx={78} cy={30} r={6.2} id={id} />
          <Lens cx={78} cy={48} r={6.2} id={id} />
          <Lens cx={95} cy={39} r={6.2} id={id} />
          <circle cx="97" cy="25" r="2" fill="#F5E6C8" opacity="0.8" />
        </g>
      );
    case "phone":
      return (
        <g>
          <rect x="62" y="14" width="76" height="170" rx="16" fill={body} />
          <rect x="62" y="14" width="76" height="170" rx="16" fill={sheen} />
          <rect x="63.5" y="15.5" width="73" height="167" rx="14.5" fill="none" stroke="#fff" strokeOpacity="0.25" />
          <rect x="70" y="22" width="32" height="32" rx="9" fill="#000" opacity="0.16" />
          <Lens cx={79} cy={31} r={5.6} id={id} />
          <Lens cx={93} cy={45} r={5.6} id={id} />
          <circle cx="94" cy="29" r="1.8" fill="#F5E6C8" opacity="0.8" />
        </g>
      );
    case "phone-android":
      return (
        <g>
          <rect x="62" y="12" width="76" height="174" rx="9" fill={body} />
          <rect x="62" y="12" width="76" height="174" rx="9" fill={sheen} />
          <rect x="63.5" y="13.5" width="73" height="171" rx="7.5" fill="none" stroke="#fff" strokeOpacity="0.22" />
          <Lens cx={78} cy={30} r={6} id={id} />
          <Lens cx={78} cy={48} r={6} id={id} />
          <Lens cx={78} cy={66} r={6} id={id} />
          <circle cx="94" cy="30" r="2.6" fill="#0B1426" />
          <circle cx="94" cy="44" r="2" fill="#F5E6C8" opacity="0.7" />
        </g>
      );
    case "tablet":
      return (
        <g>
          <rect x="26" y="30" width="148" height="150" rx="14" fill={body} />
          <rect x="26" y="30" width="148" height="150" rx="14" fill={sheen} />
          <rect x="33" y="37" width="134" height="136" rx="8" fill={screen} />
          <rect x="33" y="37" width="134" height="136" rx="8" fill="none" stroke="#000" strokeOpacity="0.4" />
          <path d="M33 140 Q 100 95 167 120 L167 165 Q167 173 159 173 L41 173 Q33 173 33 165 Z" fill="#007BFF" opacity="0.28" />
          <path d="M33 155 Q 110 120 167 145 L167 165 Q167 173 159 173 L41 173 Q33 173 33 165 Z" fill="#00D9FF" opacity="0.22" />
          <circle cx="100" cy="33.5" r="1.4" fill="#0B1426" />
        </g>
      );
    case "earbuds":
      return (
        <g>
          <rect x="52" y="78" width="96" height="92" rx="30" fill={body} />
          <rect x="52" y="78" width="96" height="92" rx="30" fill={sheen} />
          <path d="M52 108 H148" stroke="#000" strokeOpacity="0.18" strokeWidth="1.5" />
          <rect x="96" y="132" width="8" height="3" rx="1.5" fill="#000" opacity="0.25" />
          <g transform="translate(62 18) rotate(-12)">
            <ellipse cx="18" cy="20" rx="15" ry="14" fill={body} />
            <ellipse cx="18" cy="20" rx="15" ry="14" fill={sheen} />
            <rect x="12" y="28" width="11" height="34" rx="5.5" fill={body} />
            <ellipse cx="13" cy="17" rx="5" ry="4" fill="#1A2230" opacity="0.6" />
          </g>
          <g transform="translate(104 12) rotate(14)">
            <ellipse cx="18" cy="20" rx="15" ry="14" fill={body} />
            <ellipse cx="18" cy="20" rx="15" ry="14" fill={sheen} />
            <rect x="13" y="28" width="11" height="34" rx="5.5" fill={body} />
            <ellipse cx="23" cy="17" rx="5" ry="4" fill="#1A2230" opacity="0.6" />
          </g>
        </g>
      );
    case "charger":
      return (
        <g>
          <path d="M100 150 C 100 175, 150 170, 160 186" stroke="#E7E9EC" strokeWidth="5" fill="none" strokeLinecap="round" />
          <rect x="84" y="134" width="32" height="20" rx="4" fill={body} />
          <rect x="62" y="52" width="76" height="86" rx="14" fill={body} />
          <rect x="62" y="52" width="76" height="86" rx="14" fill={sheen} />
          <rect x="82" y="30" width="8" height="24" rx="2" fill="#B9BEC6" />
          <rect x="110" y="30" width="8" height="24" rx="2" fill="#B9BEC6" />
          <rect x="91" y="118" width="18" height="6" rx="3" fill="#0B1426" opacity="0.7" />
        </g>
      );
    case "watch":
      return (
        <g>
          <rect x="74" y="8" width="52" height="56" rx="14" fill={body} opacity="0.9" />
          <rect x="74" y="136" width="52" height="56" rx="14" fill={body} opacity="0.9" />
          <rect x="58" y="46" width="84" height="104" rx="26" fill={body} />
          <rect x="58" y="46" width="84" height="104" rx="26" fill={sheen} />
          <rect x="66" y="54" width="68" height="88" rx="20" fill="#02060C" />
          <circle cx="100" cy="98" r="24" fill="none" stroke="#00D9FF" strokeWidth="5" strokeDasharray="110 200" strokeLinecap="round" transform="rotate(-90 100 98)" />
          <circle cx="100" cy="98" r="15" fill="none" stroke="#007BFF" strokeWidth="5" strokeDasharray="60 200" strokeLinecap="round" transform="rotate(-90 100 98)" />
          <rect x="142" y="82" width="6" height="18" rx="3" fill={body} />
        </g>
      );
    case "scooter":
      return (
        <g>
          <circle cx="52" cy="150" r="26" fill="#0B1426" stroke="#2C3646" strokeWidth="6" />
          <circle cx="152" cy="150" r="26" fill="#0B1426" stroke="#2C3646" strokeWidth="6" />
          <circle cx="52" cy="150" r="8" fill="#8D96A5" />
          <circle cx="152" cy="150" r="8" fill="#8D96A5" />
          <path d="M70 128 L96 128 L112 104 L148 104 L160 124 L136 140 L86 140 Z" fill="#2C3646" />
          <path d="M84 104 Q 92 86 120 88 L146 92 Q 156 96 150 106 L110 110 Z" fill={body} />
          <path d="M84 104 Q 92 86 120 88 L146 92 Q 156 96 150 106 L110 110 Z" fill={sheen} />
          <path d="M60 96 Q 74 90 92 96 L86 106 Q 70 102 62 106 Z" fill="#11161F" />
          <path d="M150 96 L168 70 L182 70" stroke="#8D96A5" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M152 150 L166 74" stroke="#8D96A5" strokeWidth="5" strokeLinecap="round" />
          <circle cx="170" cy="86" r="5" fill="#F5E6C8" />
        </g>
      );
    case "car":
      return (
        <g>
          <path d="M18 138 Q 18 118 40 114 L66 110 L92 82 Q 98 76 108 76 L140 76 Q 150 76 158 84 L178 108 Q 190 112 190 126 L190 138 Q 190 146 182 146 L26 146 Q 18 146 18 138 Z" fill={body} />
          <path d="M18 138 Q 18 118 40 114 L66 110 L92 82 Q 98 76 108 76 L140 76 Q 150 76 158 84 L178 108 Q 190 112 190 126 L190 138 Q 190 146 182 146 L26 146 Q 18 146 18 138 Z" fill={sheen} />
          <path d="M76 110 L98 86 Q 102 82 110 82 L122 82 L122 110 Z" fill="#0B1426" opacity="0.85" />
          <path d="M128 82 L140 82 Q 148 82 152 88 L168 110 L128 110 Z" fill="#0B1426" opacity="0.85" />
          <path d="M28 124 H 182" stroke="#000" strokeOpacity="0.15" />
          <circle cx="58" cy="146" r="20" fill="#0B1426" stroke="#2C3646" strokeWidth="6" />
          <circle cx="152" cy="146" r="20" fill="#0B1426" stroke="#2C3646" strokeWidth="6" />
          <circle cx="58" cy="146" r="7" fill="#8D96A5" />
          <circle cx="152" cy="146" r="7" fill="#8D96A5" />
          <rect x="180" y="118" width="10" height="6" rx="2" fill="#F5E6C8" />
        </g>
      );
  }
}
