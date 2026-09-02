'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'

/**
 * Enregistre une vue de page dans Supabase à chaque navigation sur le site public.
 * « Fire and forget » : toute erreur (table absente, réseau) est ignorée
 * silencieusement pour ne jamais gêner le visiteur.
 */
export default function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    supabase
      .from('page_views')
      .insert({ path: pathname })
      .then(() => {})
  }, [pathname])

  return null
}
