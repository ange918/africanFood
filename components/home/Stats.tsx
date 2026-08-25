import { STATS } from '@/lib/constants'

export default function Stats() {
  return (
    <section className="border-y border-ink-border bg-ink">
      <div className="container-x grid grid-cols-2 gap-y-8 py-12 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-white/45">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
