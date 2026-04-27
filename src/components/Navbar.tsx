import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Servicii', to: '/#servicii' },
    { label: 'Proces', to: '/proces' },
    { label: 'Portofoliu', to: '/portofoliu' },
    { label: 'Cine suntem', to: '/despre' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250,249,245,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <nav className="flex justify-between items-center w-full py-6 content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo-bbl-nav.png"
              alt="BBL Sites"
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-nav transition-colors duration-200 hover:text-accent-orange"
                style={{ color: 'rgba(0,45,33,0.6)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.65rem' }}
          >
            Proiect Nou
          </Link>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Meniu"
          >
            <span className="block w-5 h-px bg-bg-green" />
            <span className="block w-5 h-px bg-bg-green" />
            <span className="block w-5 h-px bg-bg-green" />
          </button>
        </nav>
        <div className="h-px w-full" style={{ backgroundColor: '#F4F4F0' }} />
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden" style={{ backgroundColor: 'rgba(250,249,245,0.98)' }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-h2 font-headline" style={{ color: '#002D21' }} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4" onClick={() => setMobileOpen(false)}>Proiect Nou</Link>
        </div>
      )}
    </>
  );
}
