'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/vehicules', label: 'Véhicules' },
  { href: '/reprise', label: 'Reprise' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur border-b border-ink-border' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label="Accueil">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href) ? 'text-accent' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/vehicules" className="btn btn--light hidden sm:inline-flex">
            Explorer le stock
          </Link>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-border text-white lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-full bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-full bg-current transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-ink-border bg-ink lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-ink-border/60 py-3 text-sm font-medium ${
                  isActive(item.href) ? 'text-accent' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/vehicules" className="btn btn--primary mt-4">
              Explorer le stock
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
