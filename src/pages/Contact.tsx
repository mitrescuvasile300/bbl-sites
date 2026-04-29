import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.2 })
      gsap.fromTo('.contact-hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.35 })
      gsap.fromTo('.contact-hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.55 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full" style={{ paddingTop: '140px', paddingBottom: '60px', backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="contact-hero-badge flex items-center gap-3 mb-8">
          <span className="text-micro px-3 py-1 rounded-sm" style={{ backgroundColor: '#FFDBCD', color: '#481800' }}>Contact</span>
          <div className="h-px w-12" style={{ backgroundColor: '#C4C6CD' }} />
          <span className="text-micro" style={{ color: '#74777D' }}>44.4268° N, 26.1025° E</span>
        </div>
        <h1 className="contact-hero-title text-display-1 mb-6" style={{ color: '#002D21' }}>
          Hai să <span style={{ color: '#D35400' }}>discutăm</span> proiectul tău.
        </h1>
        <p className="contact-hero-desc text-body-lg" style={{ maxWidth: '500px', color: '#43474C' }}>
          Completează formularul sau trimite-ne un email. Răspundem în maxim 24 de ore.
        </p>
      </div>
    </section>
  )
}

function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [gdprConsent, setGdprConsent] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-form', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } })
      gsap.fromTo('.contact-info', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, ease: 'expo.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!gdprConsent) return

    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      // Trimite către Formspree (serviciu gratuit pentru formulare)
      // Utilizatorul trebuie să înlocuiască YOUR_FORM_ID cu ID-ul real de la formspree.io
      const response = await fetch('https://formspree.io/f/xnqevwdr', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        e.currentTarget.reset()
        setGdprConsent(false)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#F4F4F0' }}>
      <div className="content-max-width grid grid-cols-1 md:grid-cols-12 gap-12" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="md:col-span-7 contact-form">
          <form onSubmit={handleSubmit} className="space-y-6" style={{ backgroundColor: '#FAF9F5', padding: '40px', border: '1px solid #E3E2DF' }}>
            {status === 'success' && (
              <div className="p-4 mb-4" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }} role="status" aria-live="polite">
                <p className="font-headline font-bold">Mulțumim! Te contactăm în 24 de ore.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 mb-4" style={{ backgroundColor: '#BA1A1A', color: '#FAF9F5' }} role="alert" aria-live="assertive">
                <p className="font-headline font-bold">A apărut o eroare. Te rugăm să încerci din nou sau să ne trimiți email direct.</p>
              </div>
            )}
            {status === 'sending' && (
              <div className="p-4 mb-4 text-center" style={{ backgroundColor: '#F4F4F0' }}>
                <div className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin mx-auto" style={{ borderColor: '#D35400', borderTopColor: 'transparent' }} />
                <p className="text-micro mt-2" style={{ color: '#74777D' }}>Se trimite...</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="text-micro block mb-2" style={{ color: '#74777D' }}>NUME *</label>
                <input id="contact-name" name="name" type="text" required className="w-full p-4 text-body outline-none transition-colors" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF', color: '#1B1C1A' }} placeholder="Numele tău" onFocus={(e) => e.currentTarget.style.borderColor = '#002D21'} onBlur={(e) => e.currentTarget.style.borderColor = '#E3E2DF'} />
              </div>
              <div>
                <label htmlFor="contact-company" className="text-micro block mb-2" style={{ color: '#74777D' }}>COMPANIE</label>
                <input id="contact-company" name="company" type="text" className="w-full p-4 text-body outline-none transition-colors" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF', color: '#1B1C1A' }} placeholder="Numele firmei" onFocus={(e) => e.currentTarget.style.borderColor = '#002D21'} onBlur={(e) => e.currentTarget.style.borderColor = '#E3E2DF'} />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="text-micro block mb-2" style={{ color: '#74777D' }}>EMAIL *</label>
              <input id="contact-email" name="email" type="email" required className="w-full p-4 text-body outline-none transition-colors" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF', color: '#1B1C1A' }} placeholder="office@firma.ro" onFocus={(e) => e.currentTarget.style.borderColor = '#002D21'} onBlur={(e) => e.currentTarget.style.borderColor = '#E3E2DF'} />
            </div>
            <div>
              <label htmlFor="contact-project" className="text-micro block mb-2" style={{ color: '#74777D' }}>TIP PROIECT</label>
              <select id="contact-project" name="project_type" className="w-full p-4 text-body outline-none transition-colors" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF', color: '#1B1C1A' }} onFocus={(e) => e.currentTarget.style.borderColor = '#002D21'} onBlur={(e) => e.currentTarget.style.borderColor = '#E3E2DF'}>
                <option>Site de prezentare</option>
                <option>Magazin online</option>
                <option>Platformă web</option>
                <option>Redesign site existent</option>
                <option>Altceva</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="text-micro block mb-2" style={{ color: '#74777D' }}>MESAJ</label>
              <textarea id="contact-message" name="message" rows={5} className="w-full p-4 text-body outline-none transition-colors resize-none" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF', color: '#1B1C1A' }} placeholder="Spune-ne despre proiectul tău..." onFocus={(e) => e.currentTarget.style.borderColor = '#002D21'} onBlur={(e) => e.currentTarget.style.borderColor = '#E3E2DF'} />
            </div>
            <div className="flex items-start gap-3">
              <input id="gdpr-consent" type="checkbox" required className="mt-1 shrink-0 w-4 h-4" checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)} />
              <label htmlFor="gdpr-consent" className="text-micro" style={{ color: '#74777D', lineHeight: 1.6 }}>
                Sunt de acord cu <Link to="/privacy" className="underline hover:no-underline" style={{ color: '#D35400' }}>politica de confidențialitate</Link> și prelucrarea datelor personale în scopul contactării. *
              </label>
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center" style={{ padding: '18px 36px', opacity: status === 'sending' ? 0.6 : 1 }}>
              {status === 'sending' ? 'Se trimite...' : 'Programează o discuție'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </form>
        </div>
        <div className="md:col-span-5 contact-info space-y-8">
          <div>
            <p className="text-micro mb-3" style={{ color: '#D35400' }}>EMAIL</p>
            <a href="mailto:office@bblsites.ro" className="font-headline font-bold text-xl" style={{ color: '#002D21' }}>office@bblsites.ro</a>
          </div>
          <div>
            <p className="text-micro mb-3" style={{ color: '#D35400' }}>TELEFON</p>
            <a href="tel:+40723456789" className="font-headline font-bold text-xl" style={{ color: '#002D21' }}>+40 723 456 789</a>
          </div>
          <div>
            <p className="text-micro mb-3" style={{ color: '#D35400' }}>ADRESĂ</p>
            <p className="text-body" style={{ color: '#43474C' }}>Bulevardul Unirii 12<br/>Sector 3, București<br/>România</p>
          </div>
          <div>
            <p className="text-micro mb-3" style={{ color: '#D35400' }}>SOCIAL</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/bblsites" target="_blank" rel="noopener noreferrer" className="text-micro transition-colors hover:text-accent-orange" style={{ color: '#74777D' }}>LinkedIn</a>
              <a href="https://instagram.com/bblsites" target="_blank" rel="noopener noreferrer" className="text-micro transition-colors hover:text-accent-orange" style={{ color: '#74777D' }}>Instagram</a>
              <a href="https://behance.net/bblsites" target="_blank" rel="noopener noreferrer" className="text-micro transition-colors hover:text-accent-orange" style={{ color: '#74777D' }}>Behance</a>
            </div>
          </div>
          <div className="p-6" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
            <p className="text-micro mb-2" style={{ color: '#FF854A' }}>RĂSPUNS RAPID</p>
            <p className="text-body text-sm">Răspundem la toate mesajele în maxim 24 de ore în zilele lucrătoare.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#FAF9F5' }}>
      <main>
        <ContactHero />
        <ContactForm />
      </main>
    </div>
  )
}
