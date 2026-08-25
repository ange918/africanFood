export interface Dish {
  slug: string
  name: string
  price: string
  description: string
  image: string
  imageAlt: string
}

export const dishes: Dish[] = [
  {
    slug: 'attieke',
    name: 'Attiéké Poisson',
    price: '3,500 FCFA',
    description:
      'Spécialité ivoirienne : semoule de manioc accompagnée de poisson grillé et légumes frais.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80',
    imageAlt: 'Attiéké poisson grillé',
  },
  {
    slug: 'yassa',
    name: 'Poulet Yassa',
    price: '3,800 FCFA',
    description:
      'Poulet mariné au citron et aux oignons, mijoté dans une sauce onctueuse aux épices africaines.',
    image:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    imageAlt: 'Poulet Yassa',
  },
  {
    slug: 'banku',
    name: 'Banku & Tilapia',
    price: '4,200 FCFA',
    description:
      'Spécialité ghanéenne : pâte de maïs fermentée accompagnée de tilapia grillé et sauce pimentée.',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    imageAlt: 'Banku et poisson grillé',
  },
]
