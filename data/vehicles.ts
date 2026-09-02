// Les véhicules sont désormais stockés dans Supabase (table `vehicles`).
// Ce fichier ne conserve que les listes d'options (filtres, formulaire admin).

export type Fuel = 'Essence' | 'Diesel' | 'Hybride' | 'Électrique'
export type Transmission = 'Manuelle' | 'Automatique'
export type Body = 'Berline' | 'SUV' | 'Citadine' | 'Pick-up' | 'Break'

export const fuels: Fuel[] = ['Essence', 'Diesel', 'Hybride', 'Électrique']

export const bodies: Body[] = ['Berline', 'SUV', 'Citadine', 'Pick-up', 'Break']

// Liste de marques courantes (formulaire de reprise). Indépendante du stock.
export const makes: string[] = [
  'Audi',
  'BMW',
  'Citroën',
  'Ford',
  'Honda',
  'Hyundai',
  'Kia',
  'Mercedes-Benz',
  'Nissan',
  'Peugeot',
  'Renault',
  'Tesla',
  'Toyota',
  'Volkswagen',
]

