import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import JsonLd from './JsonLd'
import CookieBanner from './CookieBanner'

interface LayoutProps {
  children: ReactNode
}

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'BBL Sites — Website-uri pentru IMM-uri | Web Design & Dezvoltare',
    description: 'Construim website-uri si pagini de prezentare care ajuta IMM-urile sa inspire incredere. Web design strategic, dezvoltare performanta, consultanta digitala.',
  },
  '/servicii': {
    title: 'Servicii Web Design & Dezvoltare | BBL Sites',
    description: 'Servicii complete de web design strategic, dezvoltare performanta si consultanta digitala pentru IMM-uri.',
  },
  '/proces': {
    title: 'Procesul Nostru de Lucru | BBL Sites',
    description: 'Descopera cum lucram: Discovery, Blueprint, Execution, Launch. Proces structurat pentru fiecare proiect.',
  },
  '/portofoliu': {
    title: 'Portofoliu Proiecte | BBL Sites',
    description: 'Vezi proiectele noastre: website-uri pentru restaurante, magazine online, clinici medicale si platforme SaaS.',
  },
  '/despre': {
    title: 'Despre Noi — Echipa BBL Sites',
    description: 'Doi programatori full-stack cu 28+ ani experienta cumulata, construind website-uri enterprise-grade pentru IMM-uri.',
  },
  '/contact': {
    title: 'Contact | BBL Sites — Hai sa discutam proiectul tau',
    description: 'Contacteaza-ne pentru un site nou, redesign sau consultanta digitala. Raspundem in 24 de ore.',
  },
  '/privacy': {
    title: 'Politica de Confidentialitate | BBL Sites',
    description: 'Politica de confidentialitate si prelucrare a datelor personale BBL Sites.',
  },
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 0.5,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/']
    document.title = meta.title
    
    let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!descTag) {
      descTag = document.createElement('meta')
      descTag.setAttribute('name', 'description')
      document.head.appendChild(descTag)
    }
    descTag.setAttribute('content', meta.description)

    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', meta.title)

    // Update OG description
    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', meta.description)
  }, [location.pathname])

  return (
    <div className="relative min-h-[100dvh] flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <CustomCursor />
      <JsonLd />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
