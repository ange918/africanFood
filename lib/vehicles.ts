import { supabase, type VehicleRow } from './supabase'

// Type véhicule pour tout le site public (issu de la table Supabase).
export type Vehicle = VehicleRow

/** Tous les véhicules, du plus récent au plus ancien. */
export async function getVehicles(): Promise<Vehicle[]> {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error('getVehicles', error.message)
    return []
  }
  return (data as Vehicle[]) ?? []
}

/** Véhicules mis en avant sur la page d'accueil (hors vendus). */
export async function getFeaturedVehicles(limit = 6): Promise<Vehicle[]> {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .neq('status', 'sold')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) {
    console.error('getFeaturedVehicles', error.message)
    return []
  }
  return (data as Vehicle[]) ?? []
}

export async function getVehicleBySlug(slug: string): Promise<Vehicle | null> {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()
  if (error) {
    console.error('getVehicleBySlug', error.message)
    return null
  }
  return (data as Vehicle) ?? null
}

/** Slugs de tous les véhicules (pour la pré-génération des pages). */
export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase.from('vehicles').select('slug')
  if (error) {
    console.error('getAllSlugs', error.message)
    return []
  }
  return (data ?? []).map((r) => (r as { slug: string }).slug)
}

/** Véhicules similaires (même carrosserie de préférence), hors véhicule courant. */
export async function getSimilarVehicles(current: Vehicle, count = 3): Promise<Vehicle[]> {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .neq('id', current.id)
    .limit(24)
  if (error) {
    console.error('getSimilarVehicles', error.message)
    return []
  }
  const list = (data as Vehicle[]) ?? []
  const sameBody = list.filter((v) => v.body === current.body)
  const others = list.filter((v) => v.body !== current.body)
  return [...sameBody, ...others].slice(0, count)
}
