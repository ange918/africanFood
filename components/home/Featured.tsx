import Link from 'next/link'
import { featuredVehicles } from '@/data/vehicles'
import VehicleCard from '../VehicleCard'
import { ArrowRight } from '../icons'

export default function Featured() {
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}
