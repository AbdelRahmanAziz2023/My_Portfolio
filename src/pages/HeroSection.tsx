import React from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { StatBlock } from '../components/StatBlock'
import { about, skills } from '../data/portfolio'

const techStrip = skills.slice(0, 8).map((s) => s.name)

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative z-0 flex min-h-screen items-center scroll-mt-24 pt-24 section-padding"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-primary-container/25 blur-[100px] animate-float-slow" />
        <div className="absolute -right-1/4 bottom-1/4 h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-secondary/15 blur-[90px] animate-float-slow [animation-delay:-6s]" />
        <div className="absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-b from-primary/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-7">
            <RevealOnScroll>
              <Badge>Cinematic portfolio · {about.title}</Badge>
            </RevealOnScroll>

            <RevealOnScroll delayMs={60}>
              <h1 className="heading-hero text-on-surface">
                Hi, I&apos;m{' '}
                <span className="gradient-text block sm:inline">{about.name}</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delayMs={120}>
              <p className="body-main max-w-xl text-pretty">{about.bio}</p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={180}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  type="button"
                  onClick={() =>
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  type="button"
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Let&apos;s talk
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={220}>
              <div className="flex flex-wrap gap-8 border-t border-outline-variant/50 pt-8">
                <StatBlock value="2+" label="Years shipping products" />
                <StatBlock value="5+" label="Projects in portfolio" />
                <StatBlock value="∞" label="Curiosity for hard problems" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={280}>
              <div className="glass-panel max-w-2xl px-4 py-3">
                <p className="badge-label mb-2 text-on-surface-variant">Stack focus</p>
                <div className="flex flex-wrap gap-2">
                  {techStrip.map((name) => (
                    <span
                      key={name}
                      className="rounded-md border border-secondary/25 bg-secondary/5 px-2.5 py-1 font-sans text-xs font-medium text-secondary"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delayMs={100} className="relative flex justify-center lg:col-span-5">
            <div className="relative">
              <div
                className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-primary/40 via-secondary/25 to-tertiary/20 opacity-80 blur-3xl animate-pulse-glow"
                aria-hidden
              />
              <div className="relative rounded-full border border-primary/30 bg-surface-container-high/40 p-1 shadow-glow-lg backdrop-blur-md">
                {about.profileImage ? (
                  <div className="relative h-56 w-56 overflow-hidden rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80">
                    <img
                      src={about.profileImage}
                      alt={`${about.name} profile`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-56 w-56 items-center justify-center rounded-full bg-surface-container sm:h-72 sm:w-72">
                    <span className="font-display text-6xl text-primary">A</span>
                  </div>
                )}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
