import { Seo } from '../components/common/Seo'
import { pageMeta } from '../data/siteMeta'
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
      <Seo title={pageMeta.home.title} description={pageMeta.home.description} path="/" />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
