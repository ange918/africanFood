'use client'

import { useState } from 'react'
import { ADMIN_EMAIL, supabase } from '@/lib/supabase'
import Logo from '../Logo'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password,
    })
    setLoading(false)
    if (error) {
      setError('Mot de passe incorrect.')
      setPassword('')
    }
    // En cas de succès, onAuthStateChange (page admin) bascule sur le dashboard.
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Logo />
          <p className="text-sm text-white/45">Espace d’administration</p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5 p-7">
          <div>
            <label className="field-label" htmlFor="admin-password">
              Mot de passe
            </label>
            <input
              id="admin-password"
              type="password"
              className="field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
              required
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn--primary w-full" disabled={loading}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/30">
          Accès réservé — ALVEX SARL
        </p>
      </div>
    </div>
  )
}
