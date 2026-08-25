const STEPS = [
  { n: '01', title: 'Choisissez', text: 'Parcourez le stock et filtrez selon votre budget et vos besoins.' },
  { n: '02', title: 'Réservez un essai', text: 'Prenez rendez-vous en ligne ou par WhatsApp en quelques secondes.' },
  { n: '03', title: 'Roulez', text: 'Finalisez l’achat, la reprise et le financement — puis prenez la route.' },
]

export default function Steps() {
  return (
    <section className="bg-ink py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Simple et rapide</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Votre prochaine voiture en 3 étapes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="card p-8">
              <span className="font-display text-4xl font-extrabold text-accent/30">{s.n}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
