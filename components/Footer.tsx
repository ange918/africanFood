import Link from 'next/link'
import Logo from './Logo'
import { Facebook, Instagram, Youtube, Linkedin } from './icons'
import {
  ADDRESS,
  EMAIL,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  SOCIAL_LINKS,
} from '@/lib/constants'

const ICONS = { facebook: Facebook, instagram: Instagram, youtube: Youtube, linkedin: Linkedin }

const COMPANY = [
  { href: '/', label: 'Accueil' },
  { href: '/vehicules', label: 'Véhicules' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

const HELP = [
  { href: '/reprise', label: 'Estimer une reprise' },
  { href: '/vehicules', label: 'Financement' },
  { href: '/contact', label: 'Support client' },
  { href: '/contact', label: 'Nous trouver' },
]

export default function Footer() {
  return (
    <footer id="contact-footer" className="border-t border-ink-border bg-ink">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            ALVEX SARL — la référence des véhicules d’occasion certifiés à Abidjan.
            Chaque véhicule est inspecté et garanti pour rouler l’esprit tranquille.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((s) => {
              const Icon = ICONS[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink transition hover:bg-accent-bright"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Navigation</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {COMPANY.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/55 transition hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {HELP.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/55 transition hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/55">
            <li>
              <a href={`tel:${PHONE_NUMBER}`} className="transition hover:text-accent">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="transition hover:text-accent">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
          <div className="mt-5 space-y-1.5 text-xs text-white/45">
            {OPENING_HOURS.map((o) => (
              <div key={o.days} className="flex justify-between gap-4">
                <span>{o.days}</span>
                <span className="text-white/70">{o.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} ALVEX SARL. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Conditions d’utilisation</Link>
            <Link href="#" className="hover:text-white">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
