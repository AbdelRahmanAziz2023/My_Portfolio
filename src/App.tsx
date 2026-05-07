import { Header } from './components'
import {
  HeroSection,
  HighlightsSection,
  AboutSection,
  ProjectsSection,
  ProcessSection,
  ContactSection,
  Footer,
} from './pages'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface text-on-surface">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-surface" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(103, 80, 164, 0.22), transparent 55%)',
        }}
        aria-hidden
      />
      <Header name="Abdelrahman Aziz" />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
