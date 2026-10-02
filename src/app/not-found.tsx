import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow mb-4">Erreur 404</p>
      <h1 className="font-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">Cette page n&apos;existe pas.</h1>
      <p className="mt-4 max-w-md text-mist">Le lien est peut-être ancien. Retrouvez nos produits dans le catalogue.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/catalogue">Voir le catalogue</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Retour à l&apos;accueil
        </ButtonLink>
      </div>
    </section>
  );
}
