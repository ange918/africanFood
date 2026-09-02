'use client'

import { useEffect, useMemo, useState } from 'react'
import { supabase, type VehicleRow } from '@/lib/supabase'
import { formatPrice } from '@/lib/format'

// Palette catégorielle validée pour fond sombre (skill dataviz).
const PALETTE = ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#008300', '#9085e9', '#e66767']

type Slice = { label: string; value: number }

function distribution(items: VehicleRow[], key: (v: VehicleRow) => string, cap = 8): Slice[] {
  const map = new Map<string, number>()
  for (const v of items) map.set(key(v), (map.get(key(v)) ?? 0) + 1)
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]).map(([label, value]) => ({ label, value }))
  if (sorted.length <= cap) return sorted
  const head = sorted.slice(0, cap - 1)
  const rest = sorted.slice(cap - 1).reduce((s, x) => s + x.value, 0)
  return [...head, { label: 'Autre', value: rest }]
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-5">
      <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-white">{value}</p>
    </div>
  )
}

function Donut({ title, data }: { title: string; data: Slice[] }) {
  const total = data.reduce((s, d) => s + d.value, 0)
  const size = 148
  const stroke = 20
  const r = (size - stroke) / 2
  const C = 2 * Math.PI * r
  let offset = 0

  return (
    <div className="card p-6">
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      {total === 0 ? (
        <p className="text-sm text-white/30">Aucune donnée.</p>
      ) : (
        <div className="flex items-center gap-5">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
            <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
              {data.map((d, i) => {
                const len = (d.value / total) * C
                const gap = data.length > 1 ? 2 : 0
                const dash = Math.max(len - gap, 0.001)
                const el = (
                  <circle
                    key={d.label}
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke={PALETTE[i % PALETTE.length]}
                    strokeWidth={stroke}
                    strokeDasharray={`${dash} ${C - dash}`}
                    strokeDashoffset={-offset}
                  />
                )
                offset += len
                return el
              })}
            </g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-white text-2xl font-extrabold"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {total}
            </text>
          </svg>

          <ul className="flex-1 space-y-1.5 text-xs">
            {data.map((d, i) => (
              <li key={d.label} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-white/70">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: PALETTE[i % PALETTE.length] }}
                  />
                  {d.label}
                </span>
                <span className="tabular-nums text-white/45">
                  {d.value} · {Math.round((d.value / total) * 100)}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function VisitsChart({ data }: { data: { day: string; count: number }[] }) {
  const max = Math.max(1, ...data.map((d) => d.count))
  return (
    <div className="flex h-40 items-end gap-1.5">
      {data.map((d) => {
        const date = new Date(d.day + 'T00:00:00')
        const label = date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })
        return (
          <div key={d.day} className="group flex flex-1 flex-col items-center justify-end gap-1">
            <span className="text-[10px] tabular-nums text-white/40 opacity-0 transition group-hover:opacity-100">
              {d.count}
            </span>
            <div
              className="w-full rounded-t bg-accent/80 transition group-hover:bg-accent"
              style={{ height: `${Math.max((d.count / max) * 100, 2)}%` }}
              title={`${label} : ${d.count} visite${d.count > 1 ? 's' : ''}`}
            />
            <span className="text-[9px] tabular-nums text-white/30">{label.slice(0, 2)}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function Analytics({ vehicles }: { vehicles: VehicleRow[] }) {
  const [visits, setVisits] = useState<{ day: string; count: number }[]>([])
  const [visitsReady, setVisitsReady] = useState(false)

  useEffect(() => {
    supabase
      .rpc('views_per_day', { days: 14 })
      .then(({ data, error }) => {
        if (!error && data) {
          setVisits((data as { day: string; count: number }[]).map((d) => ({ day: d.day, count: Number(d.count) })))
        }
        setVisitsReady(true)
      })
  }, [])

  const stats = useMemo(() => {
    const total = vehicles.length
    const available = vehicles.filter((v) => v.status === 'available').length
    const stockValue = vehicles.filter((v) => v.status !== 'sold').reduce((s, v) => s + (v.price ?? 0), 0)
    const avgPrice = total ? Math.round(vehicles.reduce((s, v) => s + v.price, 0) / total) : 0
    return {
      total,
      available,
      stockValue,
      avgPrice,
      byMake: distribution(vehicles, (v) => v.make, 7),
      byFuel: distribution(vehicles, (v) => v.fuel),
      byBody: distribution(vehicles, (v) => v.body),
    }
  }, [vehicles])

  const totalVisits = visits.reduce((s, d) => s + d.count, 0)
  const todayVisits = visits.length ? visits[visits.length - 1].count : 0
  const last7 = visits.slice(-7).reduce((s, d) => s + d.count, 0)

  return (
    <section className="space-y-8">
      {/* KPI stock */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Kpi label="Véhicules" value={String(stats.total)} />
        <Kpi label="Disponibles" value={String(stats.available)} />
        <Kpi label="Valeur du stock" value={formatPrice(stats.stockValue)} />
        <Kpi label="Prix moyen" value={formatPrice(stats.avgPrice)} />
      </div>

      {/* Visites */}
      <div>
        <h2 className="mb-4 font-display text-lg font-bold text-white">Fréquentation du site</h2>
        <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            <Kpi label="Visites (14 j)" value={String(totalVisits)} />
            <Kpi label="Aujourd’hui" value={String(todayVisits)} />
            <Kpi label="7 derniers jours" value={String(last7)} />
          </div>
          <div className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Visites par jour</h3>
              <span className="text-xs text-white/40">14 derniers jours</span>
            </div>
            {visitsReady && totalVisits === 0 ? (
              <p className="py-10 text-center text-sm text-white/30">
                Aucune visite enregistrée pour le moment.
              </p>
            ) : (
              <VisitsChart data={visits} />
            )}
          </div>
        </div>
      </div>

      {/* Répartitions en donuts */}
      <div>
        <h2 className="mb-4 font-display text-lg font-bold text-white">Répartition du stock</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <Donut title="Par marque" data={stats.byMake} />
          <Donut title="Par carburant" data={stats.byFuel} />
          <Donut title="Par carrosserie" data={stats.byBody} />
        </div>
      </div>
    </section>
  )
}
