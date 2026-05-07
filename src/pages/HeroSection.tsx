import React from 'react'
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
      {/* Background (SOFT ONLY) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-1/3 bottom-1/4 h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[110px]" />
        <div className="absolute left-1/2 top-0 h-40 w-[120%] -translate-x-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-7">
            
            <RevealOnScroll delayMs={60}>
              <h1 className="heading-hero text-on-surface">
                Hi, I&apos;m{' '}
                <span className="gradient-text block sm:inline">
                  {about.name}
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delayMs={120}>
              <p className="body-main max-w-xl text-pretty">
                {about.bio}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={180}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById('projects')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View work
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Let&apos;s talk
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={220}>
              <div className="flex flex-wrap gap-8 border-t border-outline-variant/40 pt-8">
                <StatBlock value="2+" label="Years shipping products" />
                <StatBlock value="5+" label="Projects in portfolio" />
                <StatBlock value="∞" label="Curiosity for hard problems" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={280}>
              <div className="rounded-xl border border-outline-variant/30 bg-surface-container/40 px-4 py-3 backdrop-blur-sm">
                <p className="badge-label mb-2 text-on-surface-variant">
                  Stack focus
                </p>

                <div className="flex flex-wrap gap-2">
                  {techStrip.map((name) => (
                    <span
                      key={name}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* PROFILE IMAGE (NO GLOW) */}
          <RevealOnScroll delayMs={100} className="relative flex justify-center lg:col-span-5">
            <div className="relative">
              
              {/* subtle background ring فقط */}
              <div
                className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-2xl opacity-60"
                aria-hidden
              />

              <div className="relative rounded-full border border-outline-variant/30 bg-surface-container/50 p-1 backdrop-blur-md">
                {about.profileImage ? (
                  <div className="h-56 w-56 overflow-hidden rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80">
                    <img
                      src={about.profileImage}
                      alt={`${about.name} profile`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-56 w-56 items-center justify-center rounded-full bg-surface-container sm:h-72 sm:w-72">
                    <span className="font-display text-6xl text-primary">
                      A
                    </span>
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