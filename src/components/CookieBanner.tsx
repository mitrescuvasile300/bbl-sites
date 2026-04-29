import { useState, useEffect } from 'react'

const CONSENT_KEY = 'bbl-gdpr-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
      <div className="content-max-width flex flex-col md:flex-row items-center justify-between gap-4" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <p className="text-micro" style={{ color: 'rgba(250,249,245,0.9)', lineHeight: 1.6 }}>
          Utilizăm cookie-uri pentru a îmbunătăți experiența ta pe site. Prin continuarea navigării, ești de acord cu utilizarea cookie-urilor.
          <a href="#/privacy" className="underline ml-1" style={{ color: '#FF854A' }}>Află mai multe</a>.
        </p>
        <button onClick={accept} className="btn-primary shrink-0" style={{ padding: '10px 24px', fontSize: '0.7rem', backgroundColor: '#FAF9F5', color: '#002D21' }}>
          Accept
        </button>
      </div>
    </div>
  )
}
