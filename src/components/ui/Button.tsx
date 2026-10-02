import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,border-color,color,transform,box-shadow] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-electric text-white hover:bg-electric-hover shadow-[0_8px_30px_-10px_rgba(0,123,255,0.7)] hover:shadow-[0_10px_34px_-8px_rgba(0,123,255,0.85)]",
  secondary: "border border-white/15 bg-white/[0.03] text-white hover:border-cyan/60 hover:bg-white/[0.06]",
  whatsapp: "bg-whatsapp text-[#04210F] hover:brightness-110",
  ghost: "text-white/80 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/** Lien stylé en bouton. Les liens externes (http) s'ouvrent dans un nouvel onglet. */
export function ButtonLink({ variant, size, className, href, children, ...rest }: ButtonLinkProps) {
  const cls = buttonClasses(variant, size, className);
  if (typeof href === "string" && href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
