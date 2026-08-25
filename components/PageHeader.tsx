import Link from 'next/link'

export default function PageHeader({
  title,
  subtitle,
  image = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1900&q=80',
  breadcrumb,
}: {
  title: string
  subtitle?: string
  image?: string
  breadcrumb?: string
}) {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="container-x relative py-20 text-center">
        {breadcrumb && (
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/50">
            <Link href="/" className="hover:text-accent">Accueil</Link>
            <span className="px-2 text-accent">/</span>
            <span className="text-white/80">{breadcrumb}</span>
          </p>
        )}
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">{subtitle}</p>}
      </div>
    </section>
  )
}
