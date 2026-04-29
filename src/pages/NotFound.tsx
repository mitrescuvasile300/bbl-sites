import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center" style={{ backgroundColor: '#FAF9F5', paddingTop: '100px' }}>
      <div className="text-center max-w-md px-6">
        <h1 className="text-display-1 mb-4" style={{ color: '#002D21' }}>404</h1>
        <p className="text-h2 mb-6" style={{ color: '#43474C' }}>Pagina nu a fost gasita</p>
        <p className="text-body mb-8" style={{ color: '#74777D' }}>
          Se pare ca pagina pe care o cauti nu exista sau a fost mutata.
        </p>
        <Link to="/" className="btn-primary" style={{ padding: '14px 28px' }}>
          Inapoi la prima pagina
        </Link>
      </div>
    </div>
  )
}
