'use client'

import { useCallback, useEffect, useState } from 'react'
import { supabase, type VehicleRow } from '@/lib/supabase'
import { formatMileage, formatPrice } from '@/lib/format'
import Logo from '../Logo'
import Analytics from './Analytics'
import VehicleForm from './VehicleForm'

const STATUS_LABEL: Record<string, string> = {
  available: 'Disponible',
  reserved: 'Réservé',
  sold: 'Vendu',
  draft: 'Brouillon',
}

const STATUS_STYLE: Record<string, string> = {
  available: 'bg-emerald-500/15 text-emerald-400',
  reserved: 'bg-amber-500/15 text-amber-400',
  sold: 'bg-white/10 text-white/60',
  draft: 'bg-sky-500/15 text-sky-400',
}

export default function AdminDashboard() {
  const [vehicles, setVehicles] = useState<VehicleRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editing, setEditing] = useState<VehicleRow | null>(null)
  const [creating, setCreating] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) setError(error.message)
    else setVehicles((data as VehicleRow[]) ?? [])
    setLoading(false)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const handleDelete = async (v: VehicleRow) => {
    if (!confirm(`Supprimer « ${v.make} ${v.model} » ? Cette action est définitive.`)) return
    const { error } = await supabase.from('vehicles').delete().eq('id', v.id)
    if (error) {
      alert('Erreur : ' + error.message)
      return
    }
    setVehicles((list) => list.filter((x) => x.id !== v.id))
  }

  const handleSaved = () => {
    setCreating(false)
    setEditing(null)
    load()
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div>
      {/* Barre supérieure */}
      <header className="sticky top-0 z-30 border-b border-ink-border bg-ink/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent sm:inline">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden text-sm text-white/50 hover:text-white sm:inline">
              Voir le site
            </a>
            <button onClick={logout} className="btn btn--outline px-4 py-2 text-xs">
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-white">Tableau de bord</h1>
            <p className="mt-1 text-sm text-white/45">Gestion du stock de véhicules</p>
          </div>
          <button onClick={() => setCreating(true)} className="btn btn--primary">
            + Ajouter un véhicule
          </button>
        </div>

        {error && (
          <p className="mb-6 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>
        )}

        {/* Analytics */}
        <Analytics vehicles={vehicles} />

        {/* Liste des véhicules */}
        <div className="mt-10">
          <h2 className="mb-4 font-display text-lg font-bold text-white">
            Véhicules <span className="text-white/40">({vehicles.length})</span>
          </h2>

          {loading ? (
            <p className="py-12 text-center text-white/40">Chargement…</p>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-ink-border">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-ink-card text-xs uppercase tracking-wide text-white/40">
                    <tr>
                      <th className="px-4 py-3 font-medium">Véhicule</th>
                      <th className="px-4 py-3 font-medium">Année</th>
                      <th className="px-4 py-3 font-medium">Km</th>
                      <th className="px-4 py-3 font-medium">Prix</th>
                      <th className="px-4 py-3 font-medium">Statut</th>
                      <th className="px-4 py-3 text-right font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-border">
                    {vehicles.map((v) => (
                      <tr key={v.id} className="bg-ink-soft/40 hover:bg-ink-card/60">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={v.images?.[0]}
                              alt=""
                              className="h-10 w-14 rounded-md object-cover"
                            />
                            <div>
                              <p className="font-medium text-white">
                                {v.make} {v.model}
                              </p>
                              <p className="text-xs text-white/40">{v.fuel} · {v.body}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-white/70">{v.year}</td>
                        <td className="px-4 py-3 text-white/70">{formatMileage(v.mileage)}</td>
                        <td className="px-4 py-3 font-semibold text-accent">{formatPrice(v.price)}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLE[v.status] ?? ''}`}>
                            {STATUS_LABEL[v.status] ?? v.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setEditing(v)}
                              className="rounded-lg border border-ink-border px-3 py-1.5 text-xs text-white/70 transition hover:border-accent hover:text-accent"
                            >
                              Modifier
                            </button>
                            <button
                              onClick={() => handleDelete(v)}
                              className="rounded-lg border border-ink-border px-3 py-1.5 text-xs text-red-400/80 transition hover:border-red-500/50 hover:text-red-400"
                            >
                              Supprimer
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {vehicles.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-10 text-center text-white/40">
                          Aucun véhicule. Cliquez sur « Ajouter un véhicule ».
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {(creating || editing) && (
        <VehicleForm
          vehicle={editing}
          onClose={() => {
            setCreating(false)
            setEditing(null)
          }}
          onSaved={handleSaved}
        />
      )}
    </div>
  )
}
