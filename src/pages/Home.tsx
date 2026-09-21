import { HeroSection } from './HeroSection'
import { HighlightsSection } from './HighlightsSection'
import { AboutSection } from './AboutSection'
import { ProjectsSection } from './ProjectsSection'
import { ProcessSection } from './ProcessSection'
import { ContactSection } from './ContactSection'

/**
 * Home route ("/") — composes the existing single-page sections.
 * The visual composition is identical to the previous App layout.
 */
export function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}
