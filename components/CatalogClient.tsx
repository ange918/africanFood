'use client'

import { useMemo, useState } from 'react'
import { bodies, fuels } from '@/data/vehicles'
import type { Vehicle } from '@/lib/vehicles'
import VehicleCard from './VehicleCard'

type SortKey = 'recent' | 'price-asc' | 'price-desc' | 'year-desc'

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'recent', label: 'Plus récents' },
  { key: 'price-asc', label: 'Prix croissant' },
  { key: 'price-desc', label: 'Prix décroissant' },
  { key: 'year-desc', label: 'Année récente' },
]

const PRICE_MAX = 25_000_000

export default function CatalogClient({ vehicles }: { vehicles: Vehicle[] }) {
  const [make, setMake] = useState('')
  const [fuel, setFuel] = useState('')
  const [body, setBody] = useState('')
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX)
  const [sort, setSort] = useState<SortKey>('recent')

  const makes = useMemo(
    () => Array.from(new Set(vehicles.map((v) => v.make))).sort(),
    [vehicles],
  )

  const filtered = useMemo(() => {
    const result = vehicles.filter(
      (v) =>
        (!make || v.make === make) &&
        (!fuel || v.fuel === fuel) &&
        (!body || v.body === body) &&
        v.price <= maxPrice,
    )
    switch (sort) {
      case 'price-asc':
        return result.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return result.sort((a, b) => b.price - a.price)
      case 'year-desc':
        return result.sort((a, b) => b.year - a.year)
      default:
        return result.sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        )
    }
  }, [vehicles, make, fuel, body, maxPrice, sort])

  const reset = () => {
    setMake('')
    setFuel('')
    setBody('')
    setMaxPrice(PRICE_MAX)
    setSort('recent')
  }

  const priceLabel = new Intl.NumberFormat('fr-FR').format(maxPrice)

  return (
    <div className="container-x grid gap-8 py-16 lg:grid-cols-[280px_1fr]">
      {/* Filtres */}
      <aside className="h-fit space-y-6 rounded-2xl border border-ink-border bg-ink-card p-6 lg:sticky lg:top-24">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-white">Filtres</h2>
          <button onClick={reset} className="text-xs text-accent hover:underline">
            Réinitialiser
          </button>
        </div>

        <div>
          <label className="field-label">Marque</label>
          <select className="field" value={make} onChange={(e) => setMake(e.target.value)}>
            <option value="">Toutes les marques</option>
            {makes.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label">Carburant</label>
          <select className="field" value={fuel} onChange={(e) => setFuel(e.target.value)}>
            <option value="">Tous</option>
            {fuels.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label">Carrosserie</label>
          <select className="field" value={body} onChange={(e) => setBody(e.target.value)}>
            <option value="">Toutes</option>
            {bodies.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label">Prix max&nbsp;: {priceLabel} FCFA</label>
          <input
            type="range"
            min={3_000_000}
            max={PRICE_MAX}
            step={500_000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
      </aside>

      {/* Résultats */}
      <div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            <span className="font-semibold text-white">{filtered.length}</span> véhicule
            {filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wide text-white/40">Trier</span>
            <select
              className="field w-auto py-2"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center text-white/55">
            Aucun véhicule ne correspond à ces critères.
            <button onClick={reset} className="mt-4 block w-full text-accent hover:underline">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
