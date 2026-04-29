import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#104436', color: '#FAF9F5' }}>
      <div className="content-max-width flex flex-col md:flex-row justify-between items-end w-full py-16 gap-8" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <Link to="/" className="shrink-0">
            <img
              src="/logo-bbl-nav.png"
              alt="BBL Sites Logo"
              loading="lazy"
              style={{ height: '28px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
          </Link>
          <p className="text-micro max-w-xs" style={{ color: 'rgba(250,249,245,0.5)', lineHeight: 1.8 }}>
            Construim website-uri pentru IMM-uri. Design strategic, dezvoltare performantă, rezultate măsurabile.
          </p>
          <div className="flex gap-6 mt-4">
            <a href="https://linkedin.com/company/bblsites" target="_blank" rel="noopener noreferrer" className="text-micro transition-opacity hover:opacity-100" style={{ color: 'rgba(250,249,245,0.5)' }} aria-label="LinkedIn BBL Sites">
              LinkedIn
            </a>
            <a href="https://instagram.com/bblsites" target="_blank" rel="noopener noreferrer" className="text-micro transition-opacity hover:opacity-100" style={{ color: 'rgba(250,249,245,0.5)' }} aria-label="Instagram BBL Sites">
              Instagram
            </a>
            <a href="https://behance.net/bblsites" target="_blank" rel="noopener noreferrer" className="text-micro transition-opacity hover:opacity-100" style={{ color: 'rgba(250,249,245,0.5)' }} aria-label="Behance BBL Sites">
              Behance
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 text-right">
          <div className="flex flex-col gap-4">
            <span className="text-micro font-bold" style={{ color: '#FF854A' }}>Link-uri</span>
            <Link to="/" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>Acasă</Link>
            <Link to="/servicii" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>Servicii</Link>
            <Link to="/portofoliu" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>Portofoliu</Link>
            <Link to="/proces" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>Proces</Link>
            <Link to="/despre" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>Cine suntem</Link>
            <Link to="/contact" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-micro font-bold" style={{ color: '#FF854A' }}>Localizare</span>
            <span className="text-micro" style={{ color: 'rgba(250,249,245,0.5)' }}>București, România</span>
            <a href="mailto:office@bblsites.ro" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>office@bblsites.ro</a>
            <a href="tel:+40723456789" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>+40 723 456 789</a>
            <Link to="/privacy" className="text-micro transition-opacity hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF854A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#104436] rounded" style={{ color: 'rgba(250,249,245,0.5)' }}>Politica de confidențialitate</Link>
          </div>
        </div>
      </div>

      <div className="content-max-width flex justify-between items-center pb-12" style={{ padding: '0 clamp(24px, 5vw, 80px)', opacity: 0.3 }}>
        <div className="text-micro">© 2025 BBL Sites. Toate drepturile rezervate.</div>
        <div className="text-micro">Construit cu grijă în București</div>
      </div>
    </footer>
  )
}
