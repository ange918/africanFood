import Link from 'next/link'
import { getFeaturedVehicles } from '@/lib/vehicles'
import VehicleCard from '../VehicleCard'
import { ArrowRight } from '../icons'

export default async function Featured() {
  const vehicles = await getFeaturedVehicles()

  return (
    <section className="bg-ink py-20">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Sélection du moment</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Des véhicules pensés pour le style, la fiabilité et le budget
            </h2>
          </div>
          <Link href="/vehicules" className="btn btn--primary shrink-0">
            Tout le catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {vehicles.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-white/40">Aucun véhicule disponible pour le moment.</p>
        )}
      </div>
    </section>
  )
}
