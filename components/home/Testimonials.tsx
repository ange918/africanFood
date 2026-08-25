import { testimonials } from '@/data/testimonials'
import { Star } from '../icons'

export default function Testimonials() {
  return (
    <section className="border-t border-ink-border bg-ink-soft py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Des histoires vraies, des clients satisfaits
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="card flex flex-col p-7">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/70">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-border pt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
