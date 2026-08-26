import Link from 'next/link'
import { ArrowRight } from '../icons'

// Photo HD temporaire (banque d'images). À remplacer par la photo du client :
// déposer sa version HD dans public/hero-car.jpg puis remplacer le src ci-dessous par "/hero-car.jpg".
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden bg-ink">
      {/* Fond plein cadre */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt="Véhicule d’occasion premium"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dégradés de lisibilité : sombre à gauche (texte) + fondu bas vers la section suivante */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      {/* Contenu superposé */}
      <div className="container-x relative z-10 flex flex-1 items-center pt-20">
        <div className="max-w-2xl animate-fade-up py-16">
          <span className="eyebrow">Roulez en confiance</span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
            La voiture d’occasion
            <br />
            qui vous <span className="text-accent">ressemble</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Un stock de véhicules d’occasion inspectés et garantis. Comparez, réservez
            un essai et repartez au volant en toute sérénité — le tout au meilleur prix.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/vehicules" className="btn btn--primary">
              Voir le stock <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/reprise" className="btn btn--outline">
              Estimer ma reprise
            </Link>
          </div>
        </div>
      </div>

      {/* Barre d'actions façon LUZURIO */}
      <div className="container-x relative z-10 pb-8">
        <div className="grid overflow-hidden rounded-2xl border border-ink-border bg-ink-card/80 backdrop-blur sm:grid-cols-2">
          <Link
            href="/vehicules"
            className="group flex items-center justify-between gap-4 border-b border-ink-border px-6 py-6 transition hover:bg-ink-soft sm:border-b-0 sm:border-r"
          >
            <span>
              <span className="block text-xs uppercase tracking-wide text-white/40">Explorer</span>
              <span className="text-lg font-semibold text-white">Notre collection</span>
            </span>
            <ArrowRight className="h-5 w-5 text-accent transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center justify-between gap-4 px-6 py-6 transition hover:bg-ink-soft"
          >
            <span>
              <span className="block text-xs uppercase tracking-wide text-white/40">Passer à l’action</span>
              <span className="text-lg font-semibold text-white">Réserver un essai</span>
            </span>
            <ArrowRight className="h-5 w-5 text-accent transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
