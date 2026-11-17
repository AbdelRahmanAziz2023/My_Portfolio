import { Seo } from '../components/common/Seo'
import { pageMeta } from '../data/siteMeta'
import { HeroSection } from './HeroSection'
import { ProjectsSection } from './ProjectsSection'
import { TechnicalExpertiseSection } from './TechnicalExpertiseSection'
import { AboutSection } from './AboutSection'
import { EngineeringApproachSection } from './EngineeringApproachSection'
import { EducationPreviewSection } from './EducationPreviewSection'
import { ContactSection } from './ContactSection'

/**
 * Home route ("/") — main entry point.
 * Order: Hero → Selected Projects → Expertise → Experience → Approach →
 * Education Preview → Contact.
 */
export function Home() {
  return (
    <>
      <Seo title={pageMeta.home.title} description={pageMeta.home.description} path="/" />
      <HeroSection />
      <ProjectsSection />
      <TechnicalExpertiseSection />
      <AboutSection />
      <EngineeringApproachSection />
      <EducationPreviewSection />
      <ContactSection />
    </>
  )
}
