export interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Kouadio',
    role: 'Abidjan',
    rating: 5,
    quote:
      "Achat impeccable. Le véhicule était exactement comme décrit, contrôle à l’appui. L’équipe m’a accompagnée pour le financement de A à Z.",
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b3db?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Ibrahim Traoré',
    role: 'Bouaké',
    rating: 5,
    quote:
      "Reprise de mon ancienne voiture en 24h et prix très correct. Transparent et rapide, je recommande ALVEX les yeux fermés.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Awa Diomandé',
    role: 'Yamoussoukro',
    rating: 5,
    quote:
      "Un essai sans pression, des conseils honnêtes et un SUV parfait pour la famille. Service après-vente au top.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
]
