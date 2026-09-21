import { Navigate, Route, Routes } from 'react-router'
import { Header } from './components'
import { ScrollToTop } from './components/common/ScrollToTop'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectDetails } from './pages/ProjectDetails'
import { Education } from './pages/Education'
import { Footer } from './pages/Footer'

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
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
