import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ProjectsSection } from './ProjectsSection'
import { ContactSection } from './ContactSection'

/**
 * Home route ("/") — main entry point.
 * Order: Hero → Featured Projects → About/Experience → Contact.
 */
export function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
