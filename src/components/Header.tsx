import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { about } from '../data/portfolio'

const cvButtonClass =
  'inline-flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary/90 via-primary-container to-[#5a4bb7] px-4 py-2 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-[0.98] backdrop-blur-md'
  
const CV_PATH = '/assets/Abdelrahman Aziz CV.pdf'

interface HeaderProps {
  name?: string
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '#contact' },
]

export const Header: React.FC<HeaderProps> = ({ name }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const displayName = name || about.name || 'Your Name'

  // Escape closes the menu and returns focus to the control that opened it.
  // Link activations close the menu without stealing focus back: route
  // changes already move focus to the page via <ScrollToTop />.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        aria-hidden
      />
      <div className="container-custom flex items-center justify-between py-3.5 sm:py-4">
        {/* aria-label keeps the brand link named on mobile, where the
            visible wordmark is hidden and the logo is decorative. */}
        <Link
          to="/"
          aria-label={`${displayName} — home`}
          className="flex items-center gap-3 no-underline hover:opacity-95"
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-primary/25 blur-md" aria-hidden />
            <img
              src="/images/logo/logo-96.webp"
              alt=""
              width={96}
              height={96}
              className="relative h-10 w-10 rounded-full border border-primary/40 object-cover"
            />
          </div>
          <span className="font-display hidden text-lg font-bold text-on-surface sm:inline">{displayName}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <NavLink
                key={link.label}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium no-underline transition-colors ${
                    isActive
                      ? 'text-secondary drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]'
                      : 'text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-on-surface-variant no-underline transition-colors hover:text-secondary hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <a href={CV_PATH} download target="_blank" rel="noopener noreferrer" className={`no-underline ${cvButtonClass}`}>
            Download CV
          </a>
        </div>

        <button
          ref={menuToggleRef}
          type="button"
          className="rounded-lg p-2.5 text-on-surface-variant transition-colors hover:bg-surface-container-high/80 hover:text-secondary lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/*
        Always mounted so `aria-controls` always references a real element;
        the `hidden` attribute removes it from the a11y tree and tab order.
      */}
      <nav
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-outline-variant/40 bg-surface/95 backdrop-blur-xl lg:hidden"
      >
        <div className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <NavLink
                  key={link.label}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 no-underline transition-colors ${
                      isActive
                        ? 'bg-surface-container-high/80 text-secondary'
                        : 'text-on-surface-variant hover:bg-surface-container-high/80 hover:text-primary'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-on-surface-variant no-underline hover:bg-surface-container-high/80 hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href={CV_PATH}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 w-full text-center no-underline ${cvButtonClass} py-3`}
            >
              Download CV
            </a>
          </div>
      </nav>
    </header>
  )
}
