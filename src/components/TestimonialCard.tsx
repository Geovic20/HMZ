import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { firstName, city, rating, comment, context } = testimonial;
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-line bg-panel/50 p-6">
      <div className="flex items-center gap-0.5" role="img" aria-label={`Note : ${rating} sur 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} aria-hidden="true" className={`h-4 w-4 ${i < rating ? "fill-cyan text-cyan" : "text-line"}`} />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-white/90">« {comment} »</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan font-display text-sm font-bold text-ink">
          {firstName.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white">
            {firstName}
            {city && <span className="font-normal text-mist"> · {city}</span>}
          </span>
          {context && <span className="block truncate text-[0.7rem] text-mist">{context}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
