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
const MAX_GALLERY = 5
const BUCKET = 'vehicle-photos'

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function uploadFile(file: File): Promise<string> {
  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase()
  const path = `vehicles/${crypto.randomUUID()}.${ext}`
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  })
  if (error) throw error
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl
}

type Pick = { file: File; preview: string }

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

  // Photos existantes (édition) : [0] = principale, le reste = galerie.
  const [mainUrl, setMainUrl] = useState(vehicle?.images?.[0] ?? '')
  const [galleryUrls, setGalleryUrls] = useState<string[]>(vehicle?.images?.slice(1) ?? [])
  // Nouveaux fichiers à uploader.
  const [main, setMain] = useState<Pick | null>(null)
  const [gallery, setGallery] = useState<Pick[]>([])

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
    slug: vehicle?.slug ?? '',
  })

  const set = (k: keyof typeof form, v: string | number) => setForm((f) => ({ ...f, [k]: v }))

  const hasMain = !!main || !!mainUrl
  const galleryCount = galleryUrls.length + gallery.length

  const onMainSelect = (file?: File | null) => {
    if (!file) return
    if (main) URL.revokeObjectURL(main.preview)
    setMain({ file, preview: URL.createObjectURL(file) })
  }
  const removeMain = () => {
    if (main) {
      URL.revokeObjectURL(main.preview)
      setMain(null)
    } else {
      setMainUrl('')
    }
  }

  const onGalleryAdd = (files: FileList | null) => {
    if (!files) return
    const room = MAX_GALLERY - galleryCount
    const picks = Array.from(files).slice(0, Math.max(room, 0)).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setGallery((g) => [...g, ...picks])
  }
  const removeGalleryFile = (i: number) => {
    setGallery((g) => {
      URL.revokeObjectURL(g[i].preview)
      return g.filter((_, idx) => idx !== i)
    })
  }
  const removeGalleryUrl = (i: number) => setGalleryUrls((u) => u.filter((_, idx) => idx !== i))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!hasMain) {
      setError('Ajoutez une photo principale.')
      return
    }
    setSaving(true)
    try {
      const finalMain = main ? await uploadFile(main.file) : mainUrl
      const uploadedGallery = await Promise.all(gallery.map((g) => uploadFile(g.file)))
      const images = [finalMain, ...galleryUrls, ...uploadedGallery].filter(Boolean).slice(0, MAX_GALLERY + 1)

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
        images,
      }

      const { error: dbError } = isEdit
        ? await supabase.from('vehicles').update(payload).eq('id', vehicle!.id)
        : await supabase.from('vehicles').insert(payload)

      if (dbError) {
        setError(
          dbError.code === '23505'
            ? 'Ce slug existe déjà — choisissez-en un autre.'
            : dbError.message,
        )
        setSaving(false)
        return
      }
      onSaved()
    } catch (err) {
      setError('Échec de l’envoi des photos : ' + (err instanceof Error ? err.message : 'erreur inconnue'))
      setSaving(false)
    }
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

        <form onSubmit={handleSubmit} className="space-y-6 p-6">
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

          {/* Photo principale */}
          <div>
            <label className="field-label">Photo principale</label>
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-32 overflow-hidden rounded-xl border border-ink-border bg-ink-soft">
                {main || mainUrl ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={main ? main.preview : mainUrl} alt="" className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={removeMain}
                      className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-xs text-white"
                      aria-label="Retirer"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <span className="flex h-full items-center justify-center text-xs text-white/30">Aucune</span>
                )}
              </div>
              <label className="btn btn--outline cursor-pointer text-xs">
                {hasMain ? 'Remplacer' : 'Choisir une photo'}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onMainSelect(e.target.files?.[0])}
                />
              </label>
            </div>
          </div>

          {/* Galerie */}
          <div>
            <label className="field-label">
              Photos de présentation ({galleryCount}/{MAX_GALLERY})
            </label>
            <div className="flex flex-wrap gap-3">
              {galleryUrls.map((url, i) => (
                <Thumb key={`u-${i}`} src={url} onRemove={() => removeGalleryUrl(i)} />
              ))}
              {gallery.map((g, i) => (
                <Thumb key={`f-${i}`} src={g.preview} onRemove={() => removeGalleryFile(i)} />
              ))}
              {galleryCount < MAX_GALLERY && (
                <label className="flex h-20 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-ink-border text-white/40 transition hover:border-accent hover:text-accent">
                  <span className="text-2xl leading-none">+</span>
                  <span className="text-[10px]">Ajouter</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => onGalleryAdd(e.target.files)}
                  />
                </label>
              )}
            </div>
          </div>

          <Field label="Description">
            <textarea className="field resize-none" rows={3} value={form.description} onChange={(e) => set('description', e.target.value)} />
          </Field>

          <Field label="Équipements (un par ligne)">
            <textarea className="field resize-none" rows={4} value={form.features} onChange={(e) => set('features', e.target.value)} placeholder={'Climatisation\nGPS\n…'} />
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

function Thumb({ src, onRemove }: { src: string; onRemove: () => void }) {
  return (
    <div className="relative h-20 w-24 overflow-hidden rounded-xl border border-ink-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" />
      <button
        type="button"
        onClick={onRemove}
        className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-[10px] text-white"
        aria-label="Retirer"
      >
        ✕
      </button>
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
