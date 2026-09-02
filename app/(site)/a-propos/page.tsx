import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Stats from '@/components/home/Stats'
import { ShieldCheck, Star, Repeat, Headset } from '@/components/icons'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'ALVEX SARL, spécialiste des véhicules d’occasion certifiés à Abidjan depuis 15 ans.',
}

const VALUES = [
  { icon: ShieldCheck, title: 'Confiance', text: 'Des véhicules inspectés et un historique transparent, sans mauvaise surprise.' },
  { icon: Star, title: 'Qualité', text: 'Une sélection rigoureuse pour ne proposer que des véhicules fiables.' },
  { icon: Repeat, title: 'Simplicité', text: 'Achat, reprise et financement réunis en un seul et même endroit.' },
  { icon: Headset, title: 'Proximité', text: 'Un accompagnement humain, avant, pendant et après la vente.' },
]

const TIMELINE = [
  { year: '2010', title: 'Les débuts', text: 'Ouverture de la première agence ALVEX à Abidjan.' },
  { year: '2017', title: 'Croissance', text: 'Plus de 500 véhicules vendus et un showroom agrandi.' },
  { year: '2024', title: 'Référence', text: 'ALVEX devient une référence de l’occasion certifiée en Côte d’Ivoire.' },
]

export default function AProposPage() {
  return (
    <>
      <PageHeader
        title="À propos d’ALVEX"
        subtitle="15 ans d’expertise au service de l’occasion de confiance."
        breadcrumb="À propos"
        image="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1900&q=80"
      />

      <section className="bg-ink py-16">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-ink-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=80"
              alt="Showroom ALVEX"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Notre histoire</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Rendre l’achat d’occasion aussi serein qu’un achat neuf
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Née à Abidjan, ALVEX SARL s’est donné une mission : réconcilier les
              Ivoiriens avec le marché de l’occasion. Chaque véhicule est sélectionné,
              inspecté et garanti, pour que vous n’achetiez jamais à l’aveugle.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              De la première visite à la remise des clés, notre équipe vous conseille
              en toute transparence — financement et reprise compris.
            </p>
            <Link href="/vehicules" className="btn btn--primary mt-8">
              Voir nos véhicules
            </Link>
          </div>
        </div>
      </section>

      <Stats />

      <section className="bg-ink py-16">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
              Ce qui nous guide au quotidien
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-border bg-ink-soft py-16">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Notre parcours</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
              Construit pour durer
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TIMELINE.map((t) => (
              <div key={t.year} className="card p-7">
                <p className="font-display text-3xl font-extrabold text-accent">{t.year}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
