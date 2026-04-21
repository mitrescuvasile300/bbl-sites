import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1400px',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center">
              <img
                src="/logos/logo-1-premium.png"
                alt="BBL SITES"
                className="h-8 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-body text-text-secondary" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
              Award-winning websites, interfaces and digital products. Built with obsessive craft.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-micro text-text-muted">Services</h4>
            <div className="flex flex-col gap-3">
              {['Web Design', 'Web Development', 'Branding', 'UI/UX Design', 'E-Commerce', 'SEO'].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-micro text-text-muted">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About', to: '/about' },
                { label: 'Process', to: '/process' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-micro text-text-muted">Social</h4>
            <div className="flex flex-col gap-3">
              {['Twitter', 'LinkedIn', 'Dribbble', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-6"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p className="text-micro text-text-muted">
            &copy; {new Date().getFullYear()} BBL Sites. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-micro text-text-muted hover:text-text-primary transition-colors duration-300 uppercase"
            style={{ letterSpacing: '0.1em' }}
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
