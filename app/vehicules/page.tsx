import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import CatalogClient from '@/components/CatalogClient'

export const metadata: Metadata = {
  title: 'Nos véhicules d’occasion',
  description:
    'Parcourez le stock ALVEX : berlines, SUV, citadines et pick-up d’occasion certifiés. Filtrez par marque, prix, carburant et carrosserie.',
}

export default function VehiculesPage() {
  return (
    <>
      <PageHeader
        title="Nos véhicules"
        subtitle="Un stock certifié et inspecté, mis à jour en continu."
        breadcrumb="Véhicules"
      />
      <CatalogClient />
    </>
  )
}
