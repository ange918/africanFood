export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Vos véhicules sont-ils garantis ?',
    answer:
      'Oui. Chaque véhicule passe un contrôle en 120 points et est vendu avec une garantie. Le rapport d’inspection est disponible sur demande.',
  },
  {
    question: 'Proposez-vous des facilités de paiement ?',
    answer:
      'Nous travaillons avec plusieurs partenaires financiers pour vous proposer un financement adapté à votre budget, avec ou sans apport.',
  },
  {
    question: 'Puis-je faire reprendre mon ancien véhicule ?',
    answer:
      'Absolument. Utilisez notre module d’estimation de reprise ou passez à l’agence : nous évaluons votre véhicule et déduisons le montant de votre achat.',
  },
  {
    question: 'Comment réserver un essai ?',
    answer:
      'Depuis la fiche d’un véhicule, réservez via WhatsApp ou appelez un conseiller. Nous fixons ensemble un rendez-vous à l’agence.',
  },
]
