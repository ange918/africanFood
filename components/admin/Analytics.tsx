'use client'

import { useMemo } from 'react'
import type { VehicleRow } from '@/lib/supabase'
import { formatPrice } from '@/lib/format'

function countBy(items: VehicleRow[], key: (v: VehicleRow) => string) {
  const map = new Map<string, number>()
  for (const v of items) {
    const k = key(v)
    map.set(k, (map.get(k) ?? 0) + 1)
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1])
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-5">
      <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
      <p className="mt-2 font-display text-2xl font-extrabold text-white">{value}</p>
    </div>
  )
}

function BarChart({ title, data }: { title: string; data: [string, number][] }) {
  const max = Math.max(1, ...data.map(([, n]) => n))
  return (
    <div className="card p-6">
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <div className="space-y-3">
        {data.map(([label, n]) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-white/60">{label}</span>
              <span className="text-white/40">{n}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-ink-soft">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${(n / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
        {data.length === 0 && <p className="text-sm text-white/30">Aucune donnée.</p>}
      </div>
    </div>
  )
}

export default function Analytics({ vehicles }: { vehicles: VehicleRow[] }) {
  const stats = useMemo(() => {
    const total = vehicles.length
    const available = vehicles.filter((v) => v.status === 'available').length
    const sold = vehicles.filter((v) => v.status === 'sold').length
    const stockValue = vehicles
      .filter((v) => v.status !== 'sold')
      .reduce((sum, v) => sum + (v.price ?? 0), 0)
    const avgPrice = total ? Math.round(vehicles.reduce((s, v) => s + v.price, 0) / total) : 0
    return {
      total,
      available,
      sold,
      stockValue,
      avgPrice,
      byMake: countBy(vehicles, (v) => v.make),
      byFuel: countBy(vehicles, (v) => v.fuel),
      byBody: countBy(vehicles, (v) => v.body),
    }
  }, [vehicles])

  return (
    <section>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Kpi label="Véhicules" value={String(stats.total)} />
        <Kpi label="Disponibles" value={String(stats.available)} />
        <Kpi label="Valeur du stock" value={formatPrice(stats.stockValue)} />
        <Kpi label="Prix moyen" value={formatPrice(stats.avgPrice)} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <BarChart title="Par marque" data={stats.byMake} />
        <BarChart title="Par carburant" data={stats.byFuel} />
        <BarChart title="Par carrosserie" data={stats.byBody} />
      </div>
    </section>
  )
}
