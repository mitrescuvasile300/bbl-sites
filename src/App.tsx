import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'

const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Process = lazy(() => import('./pages/Process'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Privacy = lazy(() => import('./pages/Privacy'))

function LoadingFallback() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: '#D35400', borderTopColor: 'transparent' }} />
        <p className="text-micro" style={{ color: '#74777D' }}>Se incarca...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portofoliu" element={<Portfolio />} />
            <Route path="/proces" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/despre" element={<About />} />
            <Route path="/servicii" element={<Services />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
