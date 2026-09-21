import React from 'react'
import { Link } from 'react-router'
import { socialLinks, about } from '../data/portfolio'

const quick = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-outline-variant/40 bg-surface-container/80 py-14 backdrop-blur-md">
      <div className="container-custom">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold text-on-surface">{about.name}</h3>
            <p className="body-sm mt-2">{about.title}</p>
          </div>
          <div>
            <h4 className="badge-label mb-4 text-primary">Navigate</h4>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              {quick.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith('/') ? (
                    <Link
                      to={l.href}
                      className="text-sm text-on-surface-variant no-underline hover:text-secondary"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="text-sm text-on-surface-variant no-underline hover:text-secondary"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="badge-label mb-4 text-primary">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target={link.url.startsWith('mailto:') || link.url === '#' ? undefined : '_blank'}
                    rel={
                      link.url.startsWith('mailto:') || link.url === '#'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="text-sm text-on-surface-variant no-underline hover:text-secondary"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-outline-variant/40 pt-8 text-center">
          <p className="text-xs text-on-surface-variant sm:text-sm">
            © {year} {about.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
