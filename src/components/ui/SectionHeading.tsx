import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, align = "left", as: H = "h2", id, action }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${centered ? "items-center text-center md:flex-col md:items-center" : ""}`}>
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <H id={id} className="font-display text-[1.75rem] leading-[1.1] font-bold tracking-[-0.025em] text-balance text-white sm:text-4xl lg:text-[2.6rem]">
          {title}
        </H>
        {description && <p className="mt-4 text-base leading-relaxed text-pretty text-mist sm:text-lg">{description}</p>}
      </div>
      {action}
    </div>
  );
}
