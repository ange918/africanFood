import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import CatalogClient from '@/components/CatalogClient'
import { getVehicles } from '@/lib/vehicles'

export const metadata: Metadata = {
  title: 'Nos véhicules d’occasion',
  description:
    'Parcourez le stock ALVEX : berlines, SUV, citadines et pick-up d’occasion certifiés. Filtrez par marque, prix, carburant et carrosserie.',
}

// Revalidation ISR : le catalogue reflète l'admin sous 30 s.
export const revalidate = 30

export default async function VehiculesPage() {
  const vehicles = await getVehicles()

  return (
    <>
      <PageHeader
        title="Nos véhicules"
        subtitle="Un stock certifié et inspecté, mis à jour en continu."
        breadcrumb="Véhicules"
      />
      <CatalogClient vehicles={vehicles} />
    </>
  )
}
