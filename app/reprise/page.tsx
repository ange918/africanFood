import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import TradeInForm from '@/components/TradeInForm'
import { Check } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Estimer une reprise',
  description:
    'Faites estimer gratuitement la reprise de votre véhicule par ALVEX SARL et déduisez son montant de votre prochain achat.',
}

const STEPS = [
  'Décrivez votre véhicule en 1 minute',
  'Recevez une offre de reprise sous 24-48h',
  'Déduisez le montant de votre prochain achat',
]

export default function ReprisePage() {
  return (
    <>
      <PageHeader
        title="Reprise de votre véhicule"
        subtitle="Une estimation rapide, gratuite et sans engagement."
        breadcrumb="Reprise"
      />

      <section className="bg-ink py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="eyebrow">Comment ça marche</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white">
              Reprenez la route dans une voiture plus récente
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              Nous rachetons votre véhicule actuel et déduisons son montant du prix de
              votre nouvelle voiture. Simple, transparent et rapide.
            </p>

            <ul className="mt-8 space-y-4">
              {STEPS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl border border-ink-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=80"
                alt="Reprise de véhicule ALVEX"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <TradeInForm />
        </div>
      </section>
    </>
  )
}
