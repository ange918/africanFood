export type Fuel = 'Essence' | 'Diesel' | 'Hybride' | 'Électrique'
export type Transmission = 'Manuelle' | 'Automatique'
export type Body = 'Berline' | 'SUV' | 'Citadine' | 'Pick-up' | 'Break'

export interface Vehicle {
  id: number
  slug: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  fuel: Fuel
  transmission: Transmission
  body: Body
  color: string
  seats: number
  power: number
  description: string
  features: string[]
  images: string[]
}

/** Prix en FCFA. */
export const vehicles: Vehicle[] = [
  {
    id: 1,
    slug: 'toyota-corolla-2019',
    make: 'Toyota',
    model: 'Corolla',
    year: 2019,
    price: 8500000,
    mileage: 62000,
    fuel: 'Essence',
    transmission: 'Automatique',
    body: 'Berline',
    color: 'Gris métallisé',
    seats: 5,
    power: 132,
    description:
      "Berline fiable et économique, entretien à jour et carnet complet. Idéale pour la ville comme pour les longs trajets. Première main, non accidentée.",
    features: ['Climatisation', 'Caméra de recul', 'Bluetooth', 'Régulateur de vitesse', 'Jantes alliage'],
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 2,
    slug: 'honda-cr-v-2020',
    make: 'Honda',
    model: 'CR-V',
    year: 2020,
    price: 14200000,
    mileage: 48000,
    fuel: 'Essence',
    transmission: 'Automatique',
    body: 'SUV',
    color: 'Blanc nacré',
    seats: 5,
    power: 190,
    description:
      "SUV spacieux et confortable, parfait pour la famille. Grand coffre, position de conduite surélevée et excellente tenue de route.",
    features: ['Toit ouvrant', 'Sièges cuir', 'GPS', 'Caméra 360°', 'Aide au stationnement', 'Apple CarPlay'],
    images: [
      'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 3,
    slug: 'peugeot-208-2018',
    make: 'Peugeot',
    model: '208',
    year: 2018,
    price: 5200000,
    mileage: 74000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    body: 'Citadine',
    color: 'Rouge',
    seats: 5,
    power: 100,
    description:
      "Citadine agile et sobre en carburant, facile à garer. Un excellent premier véhicule au budget maîtrisé.",
    features: ['Climatisation', 'Bluetooth', 'Écran tactile', 'Régulateur de vitesse'],
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 4,
    slug: 'mercedes-classe-c-2017',
    make: 'Mercedes-Benz',
    model: 'Classe C',
    year: 2017,
    price: 12800000,
    mileage: 89000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    body: 'Berline',
    color: 'Noir',
    seats: 5,
    power: 170,
    description:
      "Berline premium alliant élégance et performances. Finition soignée, confort haut de gamme et équipements complets.",
    features: ['Sièges cuir chauffants', 'GPS', 'Toit panoramique', 'Feux LED', 'Démarrage sans clé'],
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 5,
    slug: 'hyundai-tucson-2021',
    make: 'Hyundai',
    model: 'Tucson',
    year: 2021,
    price: 15500000,
    mileage: 31000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    body: 'SUV',
    color: 'Bleu',
    seats: 5,
    power: 230,
    description:
      "SUV hybride récent, très faible consommation et technologies de dernière génération. Garantie constructeur en cours.",
    features: ['Hybride auto-rechargeable', 'Grand écran tactile', 'Caméra 360°', 'Régulateur adaptatif', 'Hayon électrique'],
    images: [
      'https://images.unsplash.com/photo-1633867753751-3d3c3b3b3f3f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 6,
    slug: 'toyota-hilux-2019',
    make: 'Toyota',
    model: 'Hilux',
    year: 2019,
    price: 18900000,
    mileage: 95000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    body: 'Pick-up',
    color: 'Gris',
    seats: 5,
    power: 204,
    description:
      "Pick-up robuste et increvable, idéal pour les terrains difficiles et le travail. 4x4, entretenu régulièrement.",
    features: ['4x4', 'Barre anti-encastrement', 'Attelage', 'Climatisation', 'Caméra de recul'],
    images: [
      'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 7,
    slug: 'volkswagen-golf-2018',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2018,
    price: 7800000,
    mileage: 68000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    body: 'Citadine',
    color: 'Blanc',
    seats: 5,
    power: 150,
    description:
      "Compacte polyvalente et bien équipée, réputée pour sa fiabilité et son agrément de conduite.",
    features: ['Climatisation automatique', 'Apple CarPlay', 'Feux LED', 'Régulateur de vitesse', 'Capteurs de recul'],
    images: [
      'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 8,
    slug: 'tesla-model-3-2021',
    make: 'Tesla',
    model: 'Model 3',
    year: 2021,
    price: 22000000,
    mileage: 27000,
    fuel: 'Électrique',
    transmission: 'Automatique',
    body: 'Berline',
    color: 'Gris métallisé',
    seats: 5,
    power: 283,
    description:
      "Berline 100% électrique, autonomie confortable et technologies embarquées avancées. Recharge rapide compatible.",
    features: ['Autopilot', 'Grand écran central', 'Toit en verre', 'Mises à jour à distance', 'Recharge rapide'],
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 9,
    slug: 'renault-duster-2020',
    make: 'Renault',
    model: 'Duster',
    year: 2020,
    price: 9800000,
    mileage: 54000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    body: 'SUV',
    color: 'Orange',
    seats: 5,
    power: 115,
    description:
      "SUV économique et endurant, parfait rapport qualité-prix. Garde au sol élevée, adapté aux routes exigeantes.",
    features: ['Climatisation', 'Barres de toit', 'GPS', 'Bluetooth', 'Régulateur de vitesse'],
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 10,
    slug: 'bmw-serie-3-2019',
    make: 'BMW',
    model: 'Série 3',
    year: 2019,
    price: 16400000,
    mileage: 58000,
    fuel: 'Essence',
    transmission: 'Automatique',
    body: 'Berline',
    color: 'Bleu foncé',
    seats: 5,
    power: 258,
    description:
      "Berline sportive et raffinée, plaisir de conduite garanti. Entretien exclusivement en concession.",
    features: ['Sièges sport cuir', 'Toit ouvrant', 'GPS Pro', 'Feux laser', 'Système audio premium'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 11,
    slug: 'kia-picanto-2020',
    make: 'Kia',
    model: 'Picanto',
    year: 2020,
    price: 4300000,
    mileage: 41000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    body: 'Citadine',
    color: 'Jaune',
    seats: 4,
    power: 67,
    description:
      "Mini-citadine économique et pratique, idéale en ville. Faible consommation et coûts d'entretien réduits.",
    features: ['Climatisation', 'Bluetooth', 'Vitres électriques', 'Direction assistée'],
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    id: 12,
    slug: 'audi-q5-2020',
    make: 'Audi',
    model: 'Q5',
    year: 2020,
    price: 19500000,
    mileage: 45000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    body: 'SUV',
    color: 'Noir',
    seats: 5,
    power: 204,
    description:
      "SUV premium alliant confort, technologie et transmission intégrale. Équipement complet et finition irréprochable.",
    features: ['Quattro (4 roues motrices)', 'Cockpit virtuel', 'Sièges cuir chauffants', 'Hayon électrique', 'Caméra 360°'],
    images: [
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1600&q=80',
    ],
  },
]

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.slug === slug)
}

/** Quelques véhicules mis en avant sur la page d'accueil. */
export const featuredVehicles: Vehicle[] = vehicles.slice(0, 6)

/** Liste triée des marques présentes en stock (pour les filtres). */
export const makes: string[] = Array.from(new Set(vehicles.map((v) => v.make))).sort()

export const fuels: Fuel[] = ['Essence', 'Diesel', 'Hybride', 'Électrique']

export const bodies: Body[] = ['Berline', 'SUV', 'Citadine', 'Pick-up', 'Break']

/** Trois véhicules similaires (même carrosserie de préférence), hors véhicule courant. */
export function getSimilarVehicles(current: Vehicle, count = 3): Vehicle[] {
  const sameBody = vehicles.filter(
    (v) => v.id !== current.id && v.body === current.body,
  )
  const others = vehicles.filter(
    (v) => v.id !== current.id && v.body !== current.body,
  )
  return [...sameBody, ...others].slice(0, count)
}
