import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#104436', color: '#FAF9F5' }}>
      <div className="content-max-width flex flex-col md:flex-row justify-between items-end w-full py-16 gap-8" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <div className="font-headline font-bold text-2xl">BBL Sites</div>
          <p className="text-micro max-w-xs" style={{ color: 'rgba(250,249,245,0.5)', lineHeight: 1.8 }}>
            Doi programatori full-stack cu 28+ ani de experiență cumulată, construind website-uri pentru IMM-uri.
          </p>
          <div className="flex gap-6 mt-4">
            {['LinkedIn', 'Instagram', 'Behance'].map((social) => (
              <a key={social} href="#" className="text-micro transition-opacity hover:opacity-100" style={{ color: 'rgba(250,249,245,0.5)' }}>
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-12 text-right">
          <div className="flex flex-col gap-4">
            <span className="text-micro font-bold" style={{ color: '#D35400' }}>Link-uri</span>
            <Link to="/" className="text-micro transition-opacity hover:text-white" style={{ color: 'rgba(250,249,245,0.5)' }}>Acasă</Link>
            <Link to="/portofoliu" className="text-micro transition-opacity hover:text-white" style={{ color: 'rgba(250,249,245,0.5)' }}>Portofoliu</Link>
            <Link to="/proces" className="text-micro transition-opacity hover:text-white" style={{ color: 'rgba(250,249,245,0.5)' }}>Proces</Link>
            <Link to="/despre" className="text-micro transition-opacity hover:text-white" style={{ color: 'rgba(250,249,245,0.5)' }}>Cine suntem</Link>
            <Link to="/contact" className="text-micro transition-opacity hover:text-white" style={{ color: 'rgba(250,249,245,0.5)' }}>Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-micro font-bold" style={{ color: '#D35400' }}>Localizare</span>
            <span className="text-micro" style={{ color: 'rgba(250,249,245,0.5)' }}>București, România</span>
            <span className="text-micro" style={{ color: 'rgba(250,249,245,0.5)' }}>office@bblsites.ro</span>
            <span className="text-micro" style={{ color: 'rgba(250,249,245,0.5)' }}>+40 723 456 789</span>
          </div>
        </div>
      </div>

      <div className="content-max-width flex justify-between items-center pb-12" style={{ padding: '0 clamp(24px, 5vw, 80px)', opacity: 0.3 }}>
        <div className="text-micro">© 2025 BBL Sites. Toate drepturile rezervate.</div>
        <div className="text-micro">Crafted with care in Bucharest</div>
      </div>
    </footer>
  );
}
