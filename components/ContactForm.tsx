'use client'

import { useState } from 'react'
import { Check } from './icons'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: brancher sur l'API /leads (voir CDC). Pour l'instant : confirmation locale.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-white">Message envoyé</h3>
        <p className="mt-2 text-sm text-white/55">
          Merci ! Un conseiller ALVEX vous recontacte dans les plus brefs délais.
        </p>
        <button onClick={() => setSent(false)} className="btn btn--outline mt-6">
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">Nom complet</label>
          <input id="name" name="name" required className="field" placeholder="Votre nom" />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" required className="field" placeholder="+225 ..." />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="field" placeholder="vous@email.com" />
      </div>
      <div>
        <label className="field-label" htmlFor="subject">Sujet</label>
        <select id="subject" name="subject" className="field">
          <option>Demande d’information</option>
          <option>Réserver un essai</option>
          <option>Estimation de reprise</option>
          <option>Financement</option>
        </select>
      </div>
      <div>
        <label className="field-label" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} className="field resize-none" placeholder="Votre message..." />
      </div>
      <button type="submit" className="btn btn--primary w-full">
        Envoyer ma demande
      </button>
    </form>
  )
}
