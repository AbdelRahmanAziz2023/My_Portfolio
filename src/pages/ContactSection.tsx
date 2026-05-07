import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { about, socialLinks } from '../data/portfolio'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const renderIcon = (platform: string) => {
    const p = platform.toLowerCase()
    if (p.includes('github')) {
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.25 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
        </svg>
      )
    }
    if (p.includes('linkedin')) {
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.69zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
        </svg>
      )
    }
    if (p.includes('twitter')) {
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23 4.56c-.8.36-1.66.6-2.56.71a4.48 4.48 0 001.96-2.48c-.88.52-1.86.9-2.9 1.1A4.48 4.48 0 0016.5 3c-2.5 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C8.1 8.4 4.3 6.4 1.67 3.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.64-.72-.02-1.4-.22-1.99-.55v.06c0 2.17 1.54 3.98 3.58 4.39-.38.1-.78.15-1.19.15-.29 0-.57-.03-.85-.08.57 1.78 2.2 3.08 4.13 3.12A9.02 9.02 0 010 19.54a12.75 12.75 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.84 0-.2 0-.39-.02-.58.88-.64 1.64-1.44 2.24-2.36z" />
        </svg>
      )
    }
    if (p.includes('email') || p.includes('mail')) {
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    }
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-outline-variant/50 bg-surface-low/80 px-4 py-2.5 font-sans text-on-surface placeholder:text-on-surface-variant/70 backdrop-blur-sm transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-secondary/35 focus:ring-offset-0'

  return (
    <section id="contact" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Closing scene"
            title="Let’s build the next release"
            subtitle="Open for freelance, contract, and full-time opportunities. Drop a line — I respond quickly."
          />
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <RevealOnScroll delayMs={60}>
            <Card elevation="floating" className="h-full">
              <h3 className="heading-card mb-6 text-on-surface">Contact</h3>
              <div className="space-y-5">
                <div>
                  <p className="badge-label mb-1 text-on-surface-variant">Email</p>
                  <a href={`mailto:${about.email}`} className="text-lg font-medium text-primary hover:text-secondary">
                    {about.email}
                  </a>
                </div>
                <div>
                  <p className="badge-label mb-3 text-on-surface-variant">Social</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target={link.url.startsWith('mailto:') || link.url === '#' ? undefined : '_blank'}
                        rel={
                          link.url.startsWith('mailto:') || link.url === '#'
                            ? undefined
                            : 'noopener noreferrer'
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 text-on-surface-variant transition-all hover:border-secondary/60 hover:text-secondary hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        title={link.platform}
                      >
                        {renderIcon(link.platform)}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="font-display text-sm font-semibold text-primary">Availability</p>
                  <p className="body-sm mt-1">
                    Currently available for freelance projects and contract work. Prefer async-first
                    collaboration with crisp milestones.
                  </p>
                </div>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delayMs={120}>
            <Card elevation="interactive">
              <h3 className="heading-card mb-6 text-on-surface">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-on-surface">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-on-surface">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@domain.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-on-surface">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="What are we shipping?"
                    required
                  />
                </div>
                <Button variant="primary" className="w-full" type="submit" size="lg">
                  Send message
                </Button>
              </form>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
