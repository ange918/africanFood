import { useEffect, useState } from 'react'
import { PHONE_NUMBER } from '../constants'

const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil', testId: 'nav-accueil' },
  { href: '#apropos', label: 'À propos', testId: 'nav-apropos' },
  { href: '#plats', label: 'Nos plats', testId: 'nav-plats' },
  { href: '#contact', label: 'Contact', testId: 'nav-contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const call = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <h2 data-testid="logo">Africanfood</h2>
          </div>

          <div className={`nav__menu${menuOpen ? ' active' : ''}`} id="nav-menu">
            <ul className="nav__list">
              {NAV_LINKS.map((link) => (
                <li className="nav__item" key={link.href}>
                  <a
                    href={link.href}
                    className="nav__link"
                    data-testid={link.testId}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__actions">
            <button
              className="btn btn--primary"
              id="reserve-btn"
              data-testid="button-reserve"
              onClick={call}
            >
              Réserver une table
            </button>
            <button
              className="nav__toggle"
              id="nav-toggle"
              data-testid="nav-toggle"
              aria-label="Menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
