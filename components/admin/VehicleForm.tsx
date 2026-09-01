'use client'

import { useState } from 'react'
import { supabase, type VehicleInput, type VehicleRow, type VehicleStatus } from '@/lib/supabase'
import { bodies, fuels } from '@/data/vehicles'

const TRANSMISSIONS = ['Manuelle', 'Automatique']
const STATUSES: { value: VehicleStatus; label: string }[] = [
  { value: 'available', label: 'Disponible' },
  { value: 'reserved', label: 'Réservé' },
  { value: 'sold', label: 'Vendu' },
  { value: 'draft', label: 'Brouillon' },
]

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function VehicleForm({
  vehicle,
  onClose,
  onSaved,
}: {
  vehicle: VehicleRow | null
  onClose: () => void
  onSaved: () => void
}) {
  const isEdit = !!vehicle
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    make: vehicle?.make ?? '',
    model: vehicle?.model ?? '',
    year: vehicle?.year ?? new Date().getFullYear(),
    price: vehicle?.price ?? 0,
    mileage: vehicle?.mileage ?? 0,
    fuel: vehicle?.fuel ?? 'Essence',
    transmission: vehicle?.transmission ?? 'Manuelle',
    body: vehicle?.body ?? 'Berline',
    color: vehicle?.color ?? '',
    seats: vehicle?.seats ?? 5,
    power: vehicle?.power ?? 0,
    status: (vehicle?.status ?? 'available') as VehicleStatus,
    description: vehicle?.description ?? '',
    features: (vehicle?.features ?? []).join('\n'),
    images: (vehicle?.images ?? []).join('\n'),
    slug: vehicle?.slug ?? '',
  })

  const set = (k: keyof typeof form, v: string | number) =>
    setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    const slug = form.slug.trim() || slugify(`${form.make} ${form.model} ${form.year}`)
    const payload: VehicleInput = {
      slug,
      make: form.make.trim(),
      model: form.model.trim(),
      year: Number(form.year),
      price: Number(form.price),
      mileage: Number(form.mileage),
      fuel: form.fuel,
      transmission: form.transmission,
      body: form.body,
      color: form.color.trim() || null,
      seats: Number(form.seats) || null,
      power: Number(form.power) || null,
      status: form.status,
      description: form.description.trim() || null,
      features: form.features.split('\n').map((s) => s.trim()).filter(Boolean),
      images: form.images.split('\n').map((s) => s.trim()).filter(Boolean),
    }

    const { error } = isEdit
      ? await supabase.from('vehicles').update(payload).eq('id', vehicle!.id)
      : await supabase.from('vehicles').insert(payload)

    setSaving(false)
    if (error) {
      setError(
        error.code === '23505'
          ? 'Ce slug existe déjà — choisissez-en un autre.'
          : error.message,
      )
      return
    }
    onSaved()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
      <div className="my-8 w-full max-w-2xl rounded-2xl border border-ink-border bg-ink-card">
        <div className="flex items-center justify-between border-b border-ink-border px-6 py-4">
          <h2 className="font-display text-lg font-bold text-white">
            {isEdit ? 'Modifier le véhicule' : 'Nouveau véhicule'}
          </h2>
          <button onClick={onClose} className="text-white/40 hover:text-white" aria-label="Fermer">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Marque">
              <input className="field" required value={form.make} onChange={(e) => set('make', e.target.value)} />
            </Field>
            <Field label="Modèle">
              <input className="field" required value={form.model} onChange={(e) => set('model', e.target.value)} />
            </Field>
            <Field label="Année">
              <input className="field" type="number" required value={form.year} onChange={(e) => set('year', e.target.value)} />
            </Field>
            <Field label="Prix (FCFA)">
              <input className="field" type="number" required value={form.price} onChange={(e) => set('price', e.target.value)} />
            </Field>
            <Field label="Kilométrage (km)">
              <input className="field" type="number" required value={form.mileage} onChange={(e) => set('mileage', e.target.value)} />
            </Field>
            <Field label="Couleur">
              <input className="field" value={form.color} onChange={(e) => set('color', e.target.value)} />
            </Field>
            <Field label="Carburant">
              <select className="field" value={form.fuel} onChange={(e) => set('fuel', e.target.value)}>
                {fuels.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </Field>
            <Field label="Transmission">
              <select className="field" value={form.transmission} onChange={(e) => set('transmission', e.target.value)}>
                {TRANSMISSIONS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Carrosserie">
              <select className="field" value={form.body} onChange={(e) => set('body', e.target.value)}>
                {bodies.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </Field>
            <Field label="Statut">
              <select className="field" value={form.status} onChange={(e) => set('status', e.target.value)}>
                {STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </Field>
            <Field label="Places">
              <input className="field" type="number" value={form.seats} onChange={(e) => set('seats', e.target.value)} />
            </Field>
            <Field label="Puissance (ch)">
              <input className="field" type="number" value={form.power} onChange={(e) => set('power', e.target.value)} />
            </Field>
          </div>

          <Field label="Description">
            <textarea className="field resize-none" rows={3} value={form.description} onChange={(e) => set('description', e.target.value)} />
          </Field>

          <Field label="Équipements (un par ligne)">
            <textarea className="field resize-none" rows={4} value={form.features} onChange={(e) => set('features', e.target.value)} placeholder={'Climatisation\nGPS\n…'} />
          </Field>

          <Field label="Images — URLs (une par ligne)">
            <textarea className="field resize-none" rows={3} value={form.images} onChange={(e) => set('images', e.target.value)} placeholder="https://…" />
          </Field>

          <Field label="Slug (URL) — laisser vide pour générer automatiquement">
            <input className="field" value={form.slug} onChange={(e) => set('slug', e.target.value)} placeholder="toyota-corolla-2019" />
          </Field>

          {error && (
            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>
          )}

          <div className="flex justify-end gap-3 border-t border-ink-border pt-5">
            <button type="button" onClick={onClose} className="btn btn--outline">
              Annuler
            </button>
            <button type="submit" className="btn btn--primary" disabled={saving}>
              {saving ? 'Enregistrement…' : isEdit ? 'Enregistrer' : 'Créer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      {children}
    </div>
  )
}
