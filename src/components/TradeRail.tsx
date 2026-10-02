import type { ReactNode } from "react";

interface TradeRailStep {
  label: string;
  value: ReactNode;
  visual?: ReactNode;
  highlight?: boolean;
}

/**
 * Le « rail du troc » : Ancien modèle → Nouveau modèle → Complément.
 * Une impulsion cyan parcourt la ligne pour matérialiser l'échange.
 */
export function TradeRail({ steps, className = "" }: { steps: [TradeRailStep, TradeRailStep, TradeRailStep]; className?: string }) {
  return (
    <ol className={`relative grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 ${className}`}>
      {/* Ligne de connexion (desktop horizontale, mobile verticale) */}
      <span aria-hidden="true" className="absolute top-8 bottom-8 left-[2.15rem] w-px overflow-hidden bg-line sm:top-[3.25rem] sm:right-[16%] sm:bottom-auto sm:left-[16%] sm:h-px sm:w-auto">
        <span className="absolute inset-0 hidden animate-pulse-rail bg-gradient-to-r from-transparent via-cyan to-transparent sm:block" />
      </span>
      {steps.map((step, i) => (
        <li
          key={step.label}
          className={`relative flex items-center gap-4 rounded-2xl border p-4 sm:flex-col sm:p-5 sm:text-center ${
            step.highlight ? "border-cyan/30 bg-panel bg-gradient-to-b from-electric/15 to-panel" : "border-line bg-panel"
          }`}
        >
          <span
            className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs sm:order-first sm:mb-1 ${
              step.highlight ? "border-cyan/50 bg-ink text-cyan" : "border-line bg-ink text-mist"
            }`}
            aria-hidden="true"
          >
            {i + 1}
          </span>
          {step.visual && <div className="hidden h-28 w-28 sm:block">{step.visual}</div>}
          <div className="min-w-0">
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-mist uppercase">{step.label}</p>
            <p className={`mt-1 font-display text-base font-medium sm:text-lg ${step.highlight ? "text-cyan" : "text-white"}`}>{step.value}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
