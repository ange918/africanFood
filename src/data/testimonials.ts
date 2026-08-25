export interface Testimonial {
  id: number
  name: string
  age: number
  city: string
  image: string
  rating: number
  review: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Kouadio',
    age: 32,
    city: 'Abidjan',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    review:
      "L'attiéké poisson était absolument délicieux ! Une explosion de saveurs qui m'a rappelé les plats de ma grand-mère. Service impeccable et ambiance chaleureuse.",
  },
  {
    id: 2,
    name: 'Amadou Diallo',
    age: 28,
    city: 'Dakar',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    rating: 5,
    review:
      'Le thiéboudienne était parfait ! Les saveurs authentiques du Sénégal dans un cadre moderne. Je recommande vivement Africanfood.',
  },
  {
    id: 3,
    name: 'Fatou Traoré',
    age: 35,
    city: 'Bamako',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 5,
    review:
      "Un vrai voyage culinaire ! Le tô à la sauce arachide était exceptionnel. L'équipe est très accueillante et les prix sont raisonnables.",
  },
  {
    id: 4,
    name: 'Jean-Baptiste Kone',
    age: 41,
    city: 'Ouagadougou',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 5,
    review:
      "Excellente découverte ! Les plats sont authentiques et délicieux. L'ambiance africaine est parfaitement réussie. Je reviendrai sans hésiter.",
  },
  {
    id: 5,
    name: 'Aïcha Sidibé',
    age: 26,
    city: 'Conakry',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 5,
    review:
      'Un restaurant qui honore nos traditions ! Les saveurs sont fidèles aux recettes ancestrales. Bravo pour cette initiative culinaire.',
  },
  {
    id: 6,
    name: 'Ibrahim Sawadogo',
    age: 39,
    city: 'Bobo-Dioulasso',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 5,
    review:
      "Service rapide et plats savoureux ! Le riz épicé était un délice. L'endroit parfait pour découvrir la richesse de la cuisine africaine.",
  },
  {
    id: 7,
    name: 'Ndeye Fall',
    age: 33,
    city: 'Thiès',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    rating: 5,
    review:
      'Une expérience culinaire inoubliable ! Chaque bouchée raconte une histoire. Les desserts traditionnels sont également excellents.',
  },
  {
    id: 8,
    name: 'Sekou Camara',
    age: 45,
    city: 'Kankan',
    image:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    rating: 4,
    review:
      "Très bon restaurant ! Les portions sont généreuses et les prix abordables. L'accueil est chaleureux et l'ambiance conviviale.",
  },
  {
    id: 9,
    name: 'Khadija Ouattara',
    age: 29,
    city: 'Bouaké',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    rating: 5,
    review:
      "Africanfood m'a transportée dans mon enfance ! Les saveurs sont authentiques et le service est impeccable. Une adresse à retenir absolument.",
  },
  {
    id: 10,
    name: 'Moussa Diabaté',
    age: 36,
    city: 'Ségou',
    image:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 5,
    review:
      "Cuisine délicieuse et service au top ! L'ambiance musicale africaine ajoute une touche parfaite à l'expérience gastronomique.",
  },
  {
    id: 11,
    name: 'Salamata Barry',
    age: 31,
    city: 'Labé',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    rating: 5,
    review:
      'Un restaurant qui fait honneur à la gastronomie africaine ! Les ingrédients sont frais et les préparations respectent les traditions.',
  },
  {
    id: 12,
    name: 'Bakary Sanogo',
    age: 42,
    city: 'Sikasso',
    image:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    rating: 4,
    review:
      "Excellente adresse pour découvrir la cuisine africaine ! La carte est variée et tous les plats que j'ai goûtés étaient savoureux.",
  },
]
