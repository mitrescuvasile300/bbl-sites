import { useLocation } from 'react-router-dom'

export default function JsonLd() {
  const location = useLocation()

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BBL Sites',
    url: 'https://bblsites.ro',
    logo: 'https://bblsites.ro/logo-bbl-nav.png',
    description: 'Web design strategic si dezvoltare website-uri pentru IMM-uri.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bulevardul Unirii 12, Sector 3',
      addressLocality: 'Bucuresti',
      addressCountry: 'RO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40-723-456-789',
      contactType: 'customer service',
      email: 'office@bblsites.ro',
      availableLanguage: ['Romanian', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/bblsites',
      'https://www.instagram.com/bblsites',
      'https://www.behance.net/bblsites',
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design si Dezvoltare',
    provider: {
      '@type': 'Organization',
      name: 'BBL Sites',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design Strategic',
            description: 'UI/UX Design custom, wireframe-uri, prototyping, branding digital.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dezvoltare Performanta',
            description: 'WordPress custom, React/Next.js, optimizare Core Web Vitals, securitate.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultanta Digitala',
            description: 'Strategie digitala, audit SEO, copywriting, optimizare conversii.',
          },
        },
      ],
    },
  }

  const schemas: any[] = [baseSchema]
  if (location.pathname === '/servicii') {
    schemas.push(serviceSchema)
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) }}
    />
  )
}
