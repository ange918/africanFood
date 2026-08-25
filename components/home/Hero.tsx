import Link from 'next/link'
import { ArrowRight } from '../icons'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-20">
      {/* halo décoratif */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-10 pb-8 pt-16 lg:grid-cols-2 lg:pt-24">
        <div className="animate-fade-up">
          <span className="eyebrow">Roulez en confiance</span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            La voiture d’occasion
            <br />
            qui vous <span className="text-accent">ressemble</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
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

        <div className="animate-fade-up">
          <div className="relative overflow-hidden rounded-3xl border border-ink-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
              alt="Véhicule d’occasion premium"
              className="h-[300px] w-full object-cover sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Barre d'actions façon LUZURIO */}
      <div className="container-x relative">
        <div className="grid overflow-hidden rounded-2xl border border-ink-border bg-ink-card sm:grid-cols-2">
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
