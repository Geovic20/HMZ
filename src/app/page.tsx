import { getCategories, getTestimonials } from "@/lib/catalog";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { WhyUs } from "@/components/WhyUs";
import { TradeSection } from "@/components/TradeSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { LocationSection } from "@/components/LocationSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default async function HomePage() {
  const [categories, testimonials] = await Promise.all([getCategories(), getTestimonials()]);

  return (
    <>
      <Hero />

      {/* Nos produits */}
      <section aria-labelledby="products-title" className="container-x pt-12 pb-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Nos produits"
            id="products-title"
            title="Tout ce dont vous avez besoin"
            description="Du smartphone à la moto, une sélection vérifiée, au même endroit."
            action={
              <div className="hidden md:block">
                <ButtonLink href="/catalogue" variant="secondary">
                  Tout le catalogue
                </ButtonLink>
              </div>
            }
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal as="li" key={category.id} delay={i * 80}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </ul>
      </section>

      <WhyUs />
      <TradeSection />

      {/* Témoignages */}
      <section aria-labelledby="testimonials-title" className="container-x py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Avis clients" id="testimonials-title" title="Ils nous font confiance" />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.id} delay={i * 80}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </ul>
      </section>

      <LocationSection />
    </>
  );
}
