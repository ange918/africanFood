import { createClient } from '@supabase/supabase-js'

// URL + clé « publishable » du projet Supabase alvex.
// Ces valeurs sont conçues pour être publiques : la sécurité repose sur les
// politiques RLS (lecture publique, écriture réservée à l'admin authentifié).
// La clé secrète service_role n'est JAMAIS utilisée côté client.
export const SUPABASE_URL = 'https://vhuuuskczsrpfnvqqngl.supabase.co'
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__GZQgNdDrDo9MDkfRto8ww_AqiO7anF'

// Email technique du compte admin unique (le mot de passe est saisi au login
// et vérifié par Supabase Auth — il n'apparaît jamais dans le code).
export const ADMIN_EMAIL = 'admin@alvex.ci'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

export type VehicleStatus = 'available' | 'reserved' | 'sold' | 'draft'

export interface VehicleRow {
  id: string
  slug: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  fuel: string
  transmission: string
  body: string
  color: string | null
  seats: number | null
  power: number | null
  description: string | null
  features: string[]
  images: string[]
  status: VehicleStatus
  created_at: string
  updated_at: string
}

/** Champs éditables d'un véhicule (insert/update). */
export type VehicleInput = Omit<VehicleRow, 'id' | 'created_at' | 'updated_at'>
