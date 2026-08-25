import Link from 'next/link'
import { ShieldCheck, Wallet, Repeat, Headset } from '../icons'

const FEATURES = [
  { icon: ShieldCheck, title: 'Véhicules certifiés', text: 'Chaque voiture passe un contrôle en 120 points avant la mise en vente.' },
  { icon: Wallet, title: 'Financement facilité', text: 'Des solutions de paiement souples adaptées à votre budget.' },
  { icon: Repeat, title: 'Reprise de votre auto', text: 'Estimation rapide et reprise de votre ancien véhicule.' },
  { icon: Headset, title: 'Accompagnement 7j/7', text: 'Une équipe dédiée, de la sélection jusqu’aux démarches.' },
]

export default function WhyUs() {
  return (
    <section className="border-t border-ink-border bg-ink-soft py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Au-delà de la vente</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Expérience, confiance et sérénité
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
            Acheter d’occasion ne devrait jamais rimer avec incertitude. Chez ALVEX,
            on s’occupe de tout pour que vous rouliez l’esprit tranquille.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{f.text}</p>
              </div>
            ))}
          </div>

          <Link href="/a-propos" className="btn btn--primary mt-10">
            Découvrir ALVEX
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-ink-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80"
              alt="Showroom ALVEX"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-accent px-6 py-5 text-ink shadow-glow sm:block">
            <p className="font-display text-3xl font-extrabold">15 ans</p>
            <p className="text-xs font-medium uppercase tracking-wide">d’expertise auto</p>
          </div>
        </div>
      </div>
    </section>
  )
}
