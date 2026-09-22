import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Header } from './components'
import { JsonLd } from './components/common/JsonLd'
import { ScrollToTop } from './components/common/ScrollToTop'
import { Home } from './pages/Home'
import { Footer } from './pages/Footer'
import { siteGraphNodes } from './utils/structuredData'

// Route-level code splitting: Home stays in the entry chunk; secondary
// routes (and their galleries/certificate viewers) download on demand.
const Projects = lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })))
const ProjectDetails = lazy(() =>
  import('./pages/ProjectDetails').then((m) => ({ default: m.ProjectDetails })),
)
const Education = lazy(() => import('./pages/Education').then((m) => ({ default: m.Education })))

function RouteFallback() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <p className="badge-label text-secondary">Loading…</p>
    </div>
  )
}

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
      {/* Site-wide structured data (WebSite + Person), refreshed per route below. */}
      <JsonLd nodes={siteGraphNodes()} slot="site" />
      {/* Focus target for route changes (see ScrollToTop); tabIndex -1 enables
          programmatic focus without adding the landmark to the tab order. */}
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
