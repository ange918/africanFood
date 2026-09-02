import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import { Mail, MapPin, Phone } from '@/components/icons'
import { ADDRESS, EMAIL, OPENING_HOURS, PHONE_DISPLAY, PHONE_NUMBER } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez ALVEX SARL à Abidjan : téléphone, email, adresse et formulaire.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Nous contacter"
        subtitle="Une question, un essai, une reprise ? Notre équipe vous répond."
        breadcrumb="Contact"
      />

      <section className="bg-ink py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Restons en contact</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white">
              Disponibles quand vous en avez besoin
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              Passez à l’agence ou écrivez-nous — nous vous accompagnons dans le choix,
              l’essai, le financement et la reprise de votre véhicule.
            </p>

            <div className="mt-8 space-y-5">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-ink">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/40">Téléphone</span>
                  <span className="text-white">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-ink">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/40">Email</span>
                  <span className="text-white">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-ink">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/40">Adresse</span>
                  <span className="text-white">{ADDRESS}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Horaires</h3>
              <div className="mt-4 space-y-2 text-sm">
                {OPENING_HOURS.map((o) => (
                  <div key={o.days} className="flex justify-between border-b border-ink-border/70 pb-2 text-white/55 last:border-0">
                    <span>{o.days}</span>
                    <span className="text-white">{o.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-ink-border bg-ink-soft py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white">
              Tout ce que vous devez savoir
            </h2>
            <p className="mt-4 text-sm text-white/55">
              Vous ne trouvez pas votre réponse ? Écrivez-nous, on s’occupe du reste.
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </>
  )
}
