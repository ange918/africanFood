import Link from 'next/link'
import type { Vehicle } from '@/data/vehicles'
import { formatMileage, formatPrice } from '@/lib/format'
import { ArrowRight, Calendar, Fuel, Gauge } from './icons'

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={`/vehicules/${vehicle.slug}`}
      className="group card overflow-hidden transition-colors duration-300 hover:border-accent/60"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {vehicle.make}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
          {vehicle.body}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">
            {vehicle.make} {vehicle.model}
          </h3>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/55">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-accent" /> {vehicle.year}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Gauge className="h-4 w-4 text-accent" /> {formatMileage(vehicle.mileage)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Fuel className="h-4 w-4 text-accent" /> {vehicle.fuel}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink-border pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-white/40">Prix</p>
            <p className="text-lg font-bold text-accent">{formatPrice(vehicle.price)}</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-soft text-white transition group-hover:bg-accent group-hover:text-ink">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
