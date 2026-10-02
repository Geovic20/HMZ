import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="grid-fade absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 h-80 w-[640px] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]" />
      <div className="container-x pt-12 pb-10 sm:pt-20 sm:pb-14">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-[2.2rem] leading-[1.05] font-medium tracking-[-0.025em] text-balance text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{description}</p>}
        {children}
      </div>
    </section>
  );
}
