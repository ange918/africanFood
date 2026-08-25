export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      'Nous sommes ouverts du lundi au dimanche de 11h00 à 23h00. Le vendredi et samedi, nous restons ouverts jusqu’à minuit pour vous accueillir plus longtemps.',
  },
  {
    question: 'Proposez-vous des plats à emporter ?',
    answer:
      'Oui, tous nos plats sont disponibles à emporter. Vous pouvez passer commande par téléphone ou directement sur place. Un délai de 15-20 minutes est nécessaire pour la préparation.',
  },
  {
    question: 'Effectuez-vous des livraisons ?',
    answer:
      'Nous proposons un service de livraison dans un rayon de 10 km autour du restaurant. La livraison est gratuite pour les commandes supérieures à 8,000 FCFA. Contactez-nous pour plus d’informations.',
  },
  {
    question: 'Comment puis-je faire une réservation ?',
    answer:
      'Vous pouvez réserver par téléphone, via notre site web ou directement en restaurant. Nous recommandons de réserver à l’avance, surtout pour les week-ends et les soirées.',
  },
]
