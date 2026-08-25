import Link from 'next/link'
import { ArrowRight } from '../icons'

export default function CtaBanner() {
  return (
    <section className="bg-ink py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-ink-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1900&q=80"
            alt="Parc de véhicules ALVEX"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="relative flex flex-col items-center px-6 py-20 text-center">
            <span className="eyebrow">Prêt à passer à l’action</span>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Votre prochaine voiture d’occasion vous attend
            </h2>
            <p className="mt-5 max-w-xl text-sm text-white/60">
              Parcourez notre stock certifié, réservez un essai en quelques clics et
              roulez en toute confiance avec ALVEX.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/vehicules" className="btn btn--primary">
                Parcourir le stock <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn--light">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
