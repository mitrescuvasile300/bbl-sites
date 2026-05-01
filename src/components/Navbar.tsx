import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Servicii', to: '/servicii' },
    { label: 'Proces', to: '/proces' },
    { label: 'Portofoliu', to: '/portofoliu' },
    { label: 'Cine suntem', to: '/despre' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <>
      {/* Skip to content link pentru accesibilitate */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#002D21] focus:text-[#FAF9F5] focus:rounded-sm focus:text-micro">
        Sari la conținut
      </a>
      
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250,249,245,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <nav className="flex justify-between items-center w-full py-6 content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }} aria-label="Navigare principală">
          <Link to="/" className="flex items-center shrink-0" aria-label="BBL Sites - pagina principală">
            <img
              src="/bbl-logo.svg"
              alt="BBL Sites"
              loading="eager"
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-nav transition-colors duration-200 hover:text-accent-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D35400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F5] rounded px-1 py-0.5"
                style={{ color: 'rgba(0,45,33,0.6)' }}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002D21] focus-visible:ring-offset-2"
            style={{ padding: '12px 24px', fontSize: '0.65rem' }}
          >
            Solicită ofertă
          </Link>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D35400] rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-5 h-px bg-bg-green" aria-hidden="true" />
            <span className="block w-5 h-px bg-bg-green" aria-hidden="true" />
            <span className="block w-5 h-px bg-bg-green" aria-hidden="true" />
          </button>
        </nav>
        <div className="h-px w-full" style={{ backgroundColor: '#F4F4F0' }} />
      </header>

      {mobileOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden" style={{ backgroundColor: 'rgba(250,249,245,0.98)' }} role="dialog" aria-modal="true" aria-label="Meniu mobil">
          <button 
            onClick={() => setMobileOpen(false)} 
            className="absolute top-6 right-6 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D35400] rounded"
            aria-label="Închide meniul"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002D21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-h2 font-headline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D35400] rounded px-2" style={{ color: '#002D21' }} onClick={() => setMobileOpen(false)} aria-current={location.pathname === link.to ? 'page' : undefined}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4" onClick={() => setMobileOpen(false)}>Solicită ofertă</Link>
        </div>
      )}
    </>
  )
}
