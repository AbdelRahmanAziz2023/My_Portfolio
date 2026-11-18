import React from 'react'
import { Link } from 'react-router'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { buttonClasses } from '../components/common/buttonStyles'
import { about, resumeUrl, skills } from '../data/portfolio'

const techStrip = ['React', 'TypeScript', 'Node.js', 'REST APIs', 'React Native']
  .map((name) => skills.find((skill) => skill.name === name)?.name)
  .filter((name): name is string => name !== undefined)

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
          <div className="space-y-6 lg:col-span-7">
            <RevealOnScroll>
              <p className="badge-label text-secondary">{about.name}</p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={60}>
              <h1 className="heading-hero max-w-3xl text-on-surface">
                Full-Stack <span className="gradient-text">Software Engineer</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delayMs={120}>
              <p className="font-display text-lg font-semibold text-secondary sm:text-xl">
                Web applications, backend APIs, and mobile product work
              </p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={160}>
              <p className="body-main max-w-xl text-pretty">{about.bio}</p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={200}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/projects" className={buttonClasses('primary', 'lg')}>
                  Explore Projects
                </Link>
                <a href="#contact" className={buttonClasses('secondary', 'lg')}>
                  Contact Me
                </a>
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-on-surface-variant underline decoration-primary/50 underline-offset-4 transition-colors hover:text-secondary"
                >
                  Download CV
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={240}>
              <ul
                aria-label="Core technologies"
                className="flex list-none flex-wrap gap-2 p-0 pt-2"
              >
                {techStrip.map((name) => (
                  <li key={name}>
                    <span className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delayMs={100} className="relative flex justify-center lg:col-span-5">
            <div className="relative">
              <div
                className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-2xl opacity-60"
                aria-hidden
              />

              <div className="relative rounded-full border border-outline-variant/30 bg-surface-container/50 p-1 backdrop-blur-md">
                {about.profileImage ? (
                  <div className="aspect-square h-56 w-56 overflow-hidden rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80">
                    <img
                      src={about.profileImage}
                      srcSet="/images/profile/profile-320.webp 320w, /images/profile/profile-640.webp 640w"
                      sizes="(min-width: 768px) 320px, (min-width: 640px) 288px, 224px"
                      alt={`Portrait of ${about.name}`}
                      width={640}
                      height={960}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
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