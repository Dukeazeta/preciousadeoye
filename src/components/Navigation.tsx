import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { navigation } from '../data/portfolio'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="page-shell nav-shell">
        <a className="brand-mark" href="#top" aria-label="Adeoye Precious, back to top">
          <img className="brand-symbol" src="/favicon.svg" alt="" width="40" height="40" />
        </a>

        <div className="nav-rail">
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav-contact" href="#contact">
            Contact me
            <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="page-shell mobile-nav-grid">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <strong>{item.label}</strong>
              <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </a>
          ))}
          <a className="mobile-nav-contact" href="#contact" onClick={closeMenu}>
            <strong>Contact me</strong>
            <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
