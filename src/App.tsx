import { Header } from './components'
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from './pages'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header name="Abdelrahman Aziz" />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
