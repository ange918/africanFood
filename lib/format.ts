import { WHATSAPP_NUMBER } from './constants'

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA'
}

export function formatMileage(value: number): string {
  return new Intl.NumberFormat('fr-FR').format(value) + ' km'
}

/** Lien WhatsApp pré-rempli avec un message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
