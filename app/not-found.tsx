import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1900&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="container-x relative text-center">
        <p className="font-display text-7xl font-extrabold text-white sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-accent">Page introuvable</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn btn--primary mt-8">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  )
}
