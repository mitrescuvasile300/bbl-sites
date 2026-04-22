import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Process', to: '/process' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          height: '72px',
          backgroundColor: scrolled ? 'rgba(10,8,7,0.9)' : 'rgba(10,8,7,0.5)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="flex items-center justify-between h-full mx-auto" style={{ maxWidth: '1400px', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logos/logo-1-premium.png"
              alt="BBL SITES"
              style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-nav text-text-primary hover:text-accent-light transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-secondary"
              style={{ padding: '12px 24px', fontSize: '0.75rem' }}
            >
              LET&apos;S TALK
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-px bg-text-primary transition-transform duration-300"
              style={{
                transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-px bg-text-primary transition-opacity duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-text-primary transition-transform duration-300"
              style={{
                transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{
            backgroundColor: 'rgba(10,8,7,0.98)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-h2 text-text-primary hover:text-accent-light transition-colors duration-300"
              style={{
                animationDelay: `${i * 0.08}s`,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            LET&apos;S TALK
          </Link>
        </div>
      )}
    </>
  );
}
