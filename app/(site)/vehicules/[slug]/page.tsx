import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getSimilarVehicles, getVehicleBySlug } from '@/lib/vehicles'
import { formatMileage, formatPrice, whatsappLink } from '@/lib/format'
import { PHONE_NUMBER } from '@/lib/constants'
import VehicleGallery from '@/components/VehicleGallery'
import VehicleCard from '@/components/VehicleCard'
import PageHeader from '@/components/PageHeader'
import { ArrowRight, Check, Phone, Whatsapp } from '@/components/icons'

// Revalidation ISR + rendu à la demande des nouveaux véhicules.
export const revalidate = 30
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const vehicle = await getVehicleBySlug(params.slug)
  if (!vehicle) return { title: 'Véhicule introuvable' }
  return {
    title: `${vehicle.make} ${vehicle.model} ${vehicle.year}`,
    description: vehicle.description ?? undefined,
    openGraph: {
      title: `${vehicle.make} ${vehicle.model} ${vehicle.year} — ${formatPrice(vehicle.price)}`,
      description: vehicle.description ?? undefined,
      images: vehicle.images?.length ? [vehicle.images[0]] : undefined,
    },
  }
}

export default async function VehicleDetailPage({ params }: { params: { slug: string } }) {
  const vehicle = await getVehicleBySlug(params.slug)
  if (!vehicle) notFound()

  const similar = await getSimilarVehicles(vehicle)
  const title = `${vehicle.make} ${vehicle.model}`

  const specs: { label: string; value: string }[] = [
    { label: 'Année', value: String(vehicle.year) },
    { label: 'Kilométrage', value: formatMileage(vehicle.mileage) },
    { label: 'Carburant', value: vehicle.fuel },
    { label: 'Transmission', value: vehicle.transmission },
    { label: 'Carrosserie', value: vehicle.body },
    { label: 'Couleur', value: vehicle.color ?? '—' },
    { label: 'Places', value: vehicle.seats ? `${vehicle.seats} places` : '—' },
    { label: 'Puissance', value: vehicle.power ? `${vehicle.power} ch` : '—' },
  ]

  const waMessage = `Bonjour ALVEX, je suis intéressé(e) par la ${title} ${vehicle.year} (${formatPrice(
    vehicle.price,
  )}). Est-elle toujours disponible ?`

  return (
    <>
      <PageHeader
        title={title}
        subtitle={`${vehicle.year} · ${formatMileage(vehicle.mileage)} · ${vehicle.fuel}`}
        breadcrumb="Détail du véhicule"
        image={vehicle.images[0]}
      />

      <section className="bg-ink py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Galerie + description */}
          <div>
            <VehicleGallery images={vehicle.images} alt={title} />

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-white">Présentation</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{vehicle.description}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-white">Équipements</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {vehicle.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panneau prix / actions */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="card p-7">
              <p className="text-xs uppercase tracking-wide text-white/40">Prix de vente</p>
              <p className="mt-1 font-display text-4xl font-extrabold text-accent">
                {formatPrice(vehicle.price)}
              </p>
              <p className="mt-2 text-xs text-white/45">Prix négociable · Reprise possible</p>

              <div className="mt-6 space-y-3">
                <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn--primary w-full">
                  <Whatsapp className="h-4 w-4" /> Réserver via WhatsApp
                </a>
                <a href={`tel:${PHONE_NUMBER}`} className="btn btn--outline w-full">
                  <Phone className="h-4 w-4" /> Appeler un conseiller
                </a>
                <Link href="/reprise" className="btn btn--dark w-full">
                  Estimer ma reprise
                </Link>
              </div>

              <div className="mt-7 border-t border-ink-border pt-6">
                <h3 className="font-display text-lg font-bold text-white">Caractéristiques</h3>
                <dl className="mt-4 space-y-0">
                  {specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between border-b border-ink-border/70 py-2.5 text-sm last:border-0"
                    >
                      <dt className="text-white/45">{s.label}</dt>
                      <dd className="font-medium text-white">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Véhicules similaires */}
      {similar.length > 0 && (
        <section className="border-t border-ink-border bg-ink-soft py-16">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">À découvrir aussi</span>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-white">
                  Véhicules similaires
                </h2>
              </div>
              <Link href="/vehicules" className="btn btn--primary shrink-0">
                Tout le stock <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
