'use client'

import { useState } from 'react'
import { makes } from '@/data/vehicles'
import { Check } from './icons'

export default function TradeInForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: POST vers l'API /leads (type ESTIMATION_REPRISE) — voir CDC.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-white">Demande reçue</h3>
        <p className="mt-2 max-w-sm text-sm text-white/55">
          Merci ! Nous étudions votre véhicule et revenons vers vous avec une offre de
          reprise sous 24 à 48h.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="ti-make">Marque</label>
          <select id="ti-make" name="make" required className="field">
            <option value="">Sélectionner</option>
            {makes.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="ti-model">Modèle</label>
          <input id="ti-model" name="model" required className="field" placeholder="Ex. Corolla" />
        </div>
        <div>
          <label className="field-label" htmlFor="ti-year">Année</label>
          <input id="ti-year" name="year" type="number" min={1990} max={2026} required className="field" placeholder="2018" />
        </div>
        <div>
          <label className="field-label" htmlFor="ti-km">Kilométrage</label>
          <input id="ti-km" name="mileage" type="number" min={0} required className="field" placeholder="80000" />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="ti-state">État général</label>
        <select id="ti-state" name="state" className="field">
          <option>Excellent</option>
          <option>Bon</option>
          <option>Moyen</option>
          <option>À réparer</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="ti-name">Votre nom</label>
          <input id="ti-name" name="name" required className="field" placeholder="Nom complet" />
        </div>
        <div>
          <label className="field-label" htmlFor="ti-phone">Téléphone</label>
          <input id="ti-phone" name="phone" required className="field" placeholder="+225 ..." />
        </div>
      </div>
      <button type="submit" className="btn btn--primary w-full">
        Obtenir mon estimation
      </button>
      <p className="text-center text-xs text-white/40">
        Estimation gratuite et sans engagement.
      </p>
    </form>
  )
}
