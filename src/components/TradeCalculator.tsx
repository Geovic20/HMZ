"use client";

import { useId, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Info, MessageCircleQuestion } from "lucide-react";
import type { TradeOffer } from "@/types";
import { findTradeOffer, listModels } from "@/lib/trade";
import { formatPrice } from "@/lib/format";
import { tradeMessage, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

interface TradeCalculatorProps {
  offers: TradeOffer[];
  defaultCurrent?: string;
  defaultDesired?: string;
}

export function TradeCalculator({ offers, defaultCurrent, defaultDesired }: TradeCalculatorProps) {
  const currentModels = useMemo(() => listModels(offers, "currentModel"), [offers]);
  const desiredModels = useMemo(() => listModels(offers, "desiredModel"), [offers]);

  const [current, setCurrent] = useState(defaultCurrent ?? currentModels[0] ?? "");
  const [desired, setDesired] = useState(defaultDesired ?? desiredModels[0] ?? "");

  const offer = findTradeOffer(offers, current, desired);
  const sameModel = current === desired;
  const message = tradeMessage(current, desired, offer?.supplement);

  const currentId = useId();
  const desiredId = useId();

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-panel/60">
      <div className="grid gap-0 lg:grid-cols-[1fr_auto_1fr]">
        <ModelSelect
          id={currentId}
          step="1"
          label="Modèle actuel"
          hint="Le téléphone que vous avez"
          value={current}
          options={currentModels.map((m) => ({ value: m }))}
          onChange={setCurrent}
        />
        <div className="flex items-center justify-center border-y border-line py-2 lg:border-x lg:border-y-0 lg:px-4 lg:py-0" aria-hidden="true">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 bg-ink text-cyan">
            <ArrowDown className="h-4 w-4 lg:hidden" />
            <ArrowRight className="hidden h-4 w-4 lg:block" />
          </span>
        </div>
        <ModelSelect
          id={desiredId}
          step="2"
          label="Modèle souhaité"
          hint="Le téléphone que vous voulez"
          value={desired}
          options={desiredModels.map((m) => ({
            value: m,
            note: m !== current && !findTradeOffer(offers, current, m) ? "sur devis" : undefined,
          }))}
          onChange={setDesired}
        />
      </div>

      {/* Résultat */}
      <div className="border-t border-line bg-gradient-to-b from-electric/[0.08] to-transparent p-6 sm:p-10" aria-live="polite">
        {offer ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Complément estimatif</p>
              <p className="mt-3 font-mono text-[2.2rem] leading-none min-[400px]:text-[2.6rem] font-semibold tracking-tight text-white sm:text-6xl">
                {formatPrice(offer.supplement)}
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
                <span>
                  {current} <span className="text-cyan">→</span> {desired}
                </span>
                <span className="rounded-full bg-white/[0.06] px-2 py-0.5 font-mono text-[0.65rem] tracking-wide whitespace-nowrap uppercase">
                  Données de démonstration
                </span>
              </p>
            </div>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 font-semibold text-[#04210F] transition hover:brightness-110 md:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Confirmer sur WhatsApp
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan">
                <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg text-white sm:text-xl">
                  {sameModel ? "Choisissez un modèle différent de votre téléphone actuel." : "Cette combinaison n'est pas encore disponible."}
                </p>
                {!sameModel && (
                  <p className="mt-2 max-w-lg text-sm text-mist">Contactez-nous pour obtenir une estimation personnalisée.</p>
                )}
              </div>
            </div>
            {!sameModel && (
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 font-semibold text-[#04210F] transition hover:brightness-110 md:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Demander une estimation
              </a>
            )}
          </div>
        )}

        <p className="mt-8 flex items-start gap-2 border-t border-line pt-5 text-xs leading-relaxed text-mist">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Les montants affichés sont indicatifs et doivent être confirmés par Hamza Tech Store après vérification de l&apos;état de l&apos;appareil.
        </p>
      </div>
    </div>
  );
}

interface ModelSelectProps {
  id: string;
  step: string;
  label: string;
  hint: string;
  value: string;
  options: { value: string; note?: string }[];
  onChange: (v: string) => void;
}

function ModelSelect({ id, step, label, hint, value, options, onChange }: ModelSelectProps) {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line font-mono text-xs text-mist" aria-hidden="true">
          {step}
        </span>
        <label htmlFor={id} className="text-sm font-semibold text-white">
          {label}
        </label>
      </div>
      <p className="mt-1 pl-10 text-xs text-mist">{hint}</p>
      <div className="relative mt-5">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-line bg-ink pr-12 pl-5 font-display text-base text-white transition-colors hover:border-white/20 focus:border-cyan/60 focus:outline-none sm:text-lg"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.value}
              {o.note ? ` — ${o.note}` : ""}
            </option>
          ))}
        </select>
        <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-cyan">
          <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
