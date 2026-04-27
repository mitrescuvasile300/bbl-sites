import { useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────── Hero ─────────────── */
function ServicesHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.serv-hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.2 });
      gsap.fromTo('.serv-hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.35 });
      gsap.fromTo('.serv-hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.55 });
      gsap.fromTo('.serv-hero-img', { opacity: 0, scale: 0.95, x: 40 }, { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: 'expo.out', delay: 0.4 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ paddingTop: '140px', paddingBottom: '60px', backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width grid grid-cols-1 md:grid-cols-12 gap-12 items-center" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="md:col-span-6">
          <div className="serv-hero-badge flex items-center gap-3 mb-8">
            <span className="text-micro px-3 py-1 rounded-sm" style={{ backgroundColor: '#FFDBCD', color: '#481800' }}>Servicii Complete</span>
            <div className="h-px w-12" style={{ backgroundColor: '#C4C6CD' }} />
            <span className="text-micro" style={{ color: '#74777D' }}>3 domenii de expertiză</span>
          </div>
          <h1 className="serv-hero-title text-display-1 mb-6" style={{ color: '#002D21' }}>
            Ce <span style={{ color: '#D35400' }}>oferim</span> pentru afacerea ta
          </h1>
          <p className="serv-hero-desc text-body-lg" style={{ maxWidth: '480px', color: '#43474C' }}>
            Fiecare serviciu e construit cu aceeași rigurozitate pe care am învățat-o în proiecte enterprise. Zero compromisuri.
          </p>
        </div>
        <div className="md:col-span-6 serv-hero-img">
          <div className="overflow-hidden rounded-sm" style={{ aspectRatio: '16/10' }}>
            <img src="/services-hero.jpg" alt="Web design process" className="w-full h-full object-cover" style={{ filter: 'grayscale(0.15)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Service Detail Cards ─────────────── */
function ServiceDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.service-detail'),
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      num: '01',
      tag: 'DESIGN',
      title: 'Web Design Strategic',
      shortDesc: 'Interfețe care nu doar plac ochiului, ci ghidează utilizatorul către acțiune.',
      fullDesc: 'Design-ul nu e despre frumusețe — e despre funcție. Creăm interfețe care ghidează vizitatorul pas cu pas către conversie, folosind principii de UX validate științific.',
      features: [
        'UI/UX Design custom — fără template-uri',
        'Wireframe-uri și prototype interactiv',
        'Design responsive pentru toate dispozitivele',
        'Branding digital consistent',
        'Testare A/B pentru optimizare continuă',
        'Accesibilitate WCAG 2.1 AA',
      ],
      deliverables: ['UI Kit', 'Mockup-uri Figma', 'Prototype', 'Ghid de brand'],
      accent: '#D35400',
    },
    {
      num: '02',
      tag: 'DEVELOPMENT',
      title: 'Dezvoltare Performantă',
      shortDesc: 'Cod curat, viteză de încărcare optimă și panou de administrare intuitiv.',
      fullDesc: 'Construim pe platforme scalabile cu arhitectură solidă. Fiecare linie de cod e scrisă pentru performanță, securitate și mentenabilitate pe termen lung.',
      features: [
        'WordPress custom sau headless CMS',
        'Next.js / React pentru aplicații complexe',
        'Optimizare Core Web Vitals (99+ score)',
        'Securitate la nivel enterprise',
        'Panou de administrare intuitiv',
        'API-uri REST și integrări third-party',
      ],
      deliverables: ['Cod sursă', 'Documentație API', 'Deployment', 'Training'],
      accent: '#002D21',
    },
    {
      num: '03',
      tag: 'STRATEGY',
      title: 'Consultanță & Strategie',
      shortDesc: 'Te ajutăm să definești clar cine e clientul tău și ce vrei să facă pe site.',
      fullDesc: 'Un site fără strategie e doar o pagină frumoasă. Analizăm piața, concurența și comportamentul utilizatorilor pentru a crea un plan care generează rezultate măsurabile.',
      features: [
        'Analiză competitivă detaliată',
        'Definirea persona-ului clientului ideal',
        'Arhitectură informațională și sitemap',
        'Copywriting strategic și SEO on-page',
        'Funnel de conversie optimizat',
        'Analytics și raportare KPI-uri',
      ],
      deliverables: ['Strategie digitală', 'Audit SEO', 'Content plan', 'Raport analiză'],
      accent: '#D35400',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#F4F4F0' }}>
      <div className="content-max-width space-y-20" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        {services.map((service) => (
          <div
            key={service.num}
            className="service-detail grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
          >
            {/* Left: Number + Title */}
            <div className="md:col-span-4">
              <div className="sticky top-28">
                <span className="text-micro mb-4 block" style={{ color: service.accent }}>{service.num} / {service.tag}</span>
                <h2 className="font-headline font-bold text-3xl mb-4" style={{ color: '#002D21' }}>{service.title}</h2>
                <p className="text-body" style={{ color: '#43474C' }}>{service.shortDesc}</p>
                <div className="mt-8">
                  <p className="text-micro mb-3 font-bold" style={{ color: '#74777D' }}>LIVRABILE</p>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((d) => (
                      <span key={d} className="text-micro px-3 py-1" style={{ backgroundColor: '#FAF9F5', color: '#74777D', border: '1px solid #E3E2DF' }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="md:col-span-8">
              <div className="p-10" style={{ backgroundColor: '#FAF9F5', border: '1px solid #E3E2DF' }}>
                <p className="text-body mb-8" style={{ color: '#43474C' }}>{service.fullDesc}</p>
                <div className="space-y-4">
                  {service.features.map((feature, fi) => (
                    <div
                      key={feature}
                      className="flex items-start gap-4"
                      style={{ padding: '16px 0', borderTop: fi === 0 ? 'none' : '1px solid #E3E2DF' }}
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: service.accent === '#D35400' ? 'rgba(211,84,0,0.1)' : 'rgba(0,45,33,0.1)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={service.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-body" style={{ color: '#1B1C1A' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Pricing ─────────────── */
function ServicePricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.price-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: 'Start',
      price: 'de la 3.500 €',
      desc: 'Site de prezentare profesional pentru afaceri aflate la început',
      features: ['Până la 5 pagini', 'Design custom', 'Responsive', 'SEO de bază', 'Panou admin', '1 lună suport'],
      popular: false,
    },
    {
      name: 'Business',
      price: 'de la 6.500 €',
      desc: 'Soluție completă pentru IMM-uri care vor să crească online',
      features: ['Până la 15 pagini', 'Design premium + animații', 'Blog / Știri', 'Integrare CRM', 'Analytics avansat', '3 luni suport', 'Optimizare viteză'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Platformă complexă sau magazin online cu funcționalități avansate',
      features: ['Pagini nelimitate', 'Arhitectură custom', 'E-commerce / Platformă', 'API-uri & integrări', 'Multi-language', '6 luni suport', 'Training echipă'],
      popular: false,
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="text-center mb-16">
          <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Investiție</span>
          <h2 className="text-h1 mb-4" style={{ color: '#002D21' }}>Pachete & Prețuri</h2>
          <p className="text-body" style={{ color: '#74777D', maxWidth: '500px', margin: '0 auto' }}>
            Prețuri transparente. Fără costuri ascunse. Fără compromisuri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="price-card relative p-10 flex flex-col h-full"
              style={{
                backgroundColor: plan.popular ? '#002D21' : '#F4F4F0',
                border: plan.popular ? '2px solid #002D21' : '1px solid #E3E2DF',
                color: plan.popular ? '#FAF9F5' : '#1B1C1A',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-micro font-bold" style={{ backgroundColor: '#D35400', color: '#FAF9F5' }}>
                  CEL MAI ALES
                </div>
              )}
              <p className="text-micro mb-2" style={{ color: plan.popular ? '#FF854A' : '#74777D' }}>{plan.name.toUpperCase()}</p>
              <p className="font-headline font-bold text-3xl mb-3" style={{ color: plan.popular ? '#FAF9F5' : '#002D21' }}>{plan.price}</p>
              <p className="text-body text-sm mb-8" style={{ color: plan.popular ? 'rgba(250,249,245,0.7)' : '#43474C' }}>{plan.desc}</p>
              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? '#FF854A' : '#D35400'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm" style={{ color: plan.popular ? 'rgba(250,249,245,0.9)' : '#43474C' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary w-full justify-center" style={{
                padding: '14px 24px',
                backgroundColor: plan.popular ? '#FAF9F5' : '#002D21',
                color: plan.popular ? '#002D21' : '#FAF9F5',
              }}>
                Solicită ofertă
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ─────────────── */
function ServicesCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
      <div className="content-max-width text-center" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <h2 className="text-h1 mb-6">Nu ești sigur ce ai nevoie?</h2>
        <p className="text-body-lg mb-8" style={{ color: 'rgba(250,249,245,0.7)', maxWidth: '500px', margin: '0 auto 32px' }}>
          Programează un call gratuit de 30 minute și îți spunem exact ce ți se potrivește.
        </p>
        <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#FAF9F5', color: '#002D21' }}>
          Programează call gratuit
        </Link>
      </div>
    </section>
  );
}

/* ─────────────── Page ─────────────── */
export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#FAF9F5' }}>
      <Navbar />
      <main>
        <ServicesHero />
        <ServiceDetails />
        <ServicePricing />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
