import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════
   BBL SITES — Single Page Website (Design 1)
   ═══════════════════════════════════════════════ */

/* ───────────────────── Hero ───────────────────── */
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.2 });
      gsap.fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.35 });
      gsap.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.55 });
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out', delay: 0.7 });
      gsap.fromTo(imgRef.current, { opacity: 0, scale: 0.95, x: 30 }, { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: 'expo.out', delay: 0.4 });
      gsap.fromTo(statRef.current, { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.8 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100dvh', paddingTop: '100px', backgroundColor: '#FAF9F5' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)', minHeight: 'calc(100dvh - 100px)' }}>
        <div className="md:col-span-7 space-y-8 relative z-10">
          <div ref={badgeRef}>
            <div className="flex items-center gap-3">
              <span className="text-micro px-3 py-1 rounded-sm" style={{ backgroundColor: '#FFDBCD', color: '#481800' }}>
                Digital Craft Studio
              </span>
              <div className="h-px w-12" style={{ backgroundColor: '#C4C6CD' }} />
              <span className="text-micro" style={{ color: '#74777D' }}>44.4268° N, 26.1025° E</span>
            </div>
          </div>

          <h1 ref={headlineRef} className="text-display-1" style={{ color: '#002D21' }}>
            Website-uri care ajută IMM-urile să{' '}
            <span style={{ color: '#D35400' }}>inspire încredere</span>.
          </h1>

          <p ref={descRef} className="text-body-lg" style={{ maxWidth: '520px', color: '#43474C' }}>
            Construim pagini de prezentare și website-uri de business care explică clar ce oferi, arată profesionist pe orice dispozitiv și transformă traficul în conversații reale.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="btn-primary" style={{ padding: '18px 36px' }}>
              Solicită o ofertă gratuită
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <a href="#proces" className="btn-secondary" style={{ padding: '18px 36px' }}>
              Vezi cum lucrăm
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative" style={{ minHeight: '400px' }}>
          <div ref={imgRef} className="relative w-full h-full" style={{ minHeight: '500px' }}>
            <div className="absolute inset-0 rounded-sm" style={{ backgroundColor: '#104436', transform: 'rotate(2deg)', opacity: 0.1 }} />
            <img
              src="/hero-workspace.jpg"
              alt="Workspace BBL Sites"
              className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl"
              style={{ filter: 'grayscale(0.3)' }}
            />
            <div
              ref={statRef}
              className="absolute -bottom-6 -left-6 p-8 shadow-xl max-w-[240px]"
              style={{ backgroundColor: '#FAF9F5', border: '1px solid #E3E2DF' }}
            >
              <div className="font-headline font-bold text-4xl mb-1" style={{ color: '#D35400' }}>98%</div>
              <p className="text-micro" style={{ color: '#74777D' }}>Rată de satisfacție parteneri IMM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Trust Bar ───────────────────── */
function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (sectionRef.current ? Array.from(sectionRef.current.querySelectorAll('.trust-logo')) : []),
        { opacity: 0, y: 20 },
        {
          opacity: 0.4,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const clients = ['LOGISTIC CORE', 'BUILD RO', 'TECH FUSION', 'MED CONNECT', 'ECO SYSTEM'];

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#F4F4F0', padding: '60px 0' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div key={client} className="trust-logo flex justify-center font-headline font-bold text-lg tracking-tighter italic" style={{ color: '#1B1C1A', opacity: 0.4 }}>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Problem & Opportunity ───────────── */
function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (sectionRef.current ? Array.from(sectionRef.current.querySelectorAll('.problem-animate')) : []),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="problem-animate inline-flex flex-col">
            <span className="text-micro mb-4" style={{ color: '#D35400' }}>Analiză Strategică</span>
            <h2 className="text-h1" style={{ color: '#002D21' }}>
              De ce majoritatea site-urilor de business eșuează?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="problem-animate flex gap-6">
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded" style={{ backgroundColor: 'rgba(186,26,26,0.08)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BA1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg mb-2" style={{ color: '#1B1C1A' }}>Abordarea Generică</h4>
                <p className="text-body text-sm" style={{ color: '#43474C' }}>
                  Template-uri cumpărate care nu spun nimic despre afacerea ta și se pierd în mulțime.
                </p>
              </div>
            </div>

            <div className="problem-animate flex gap-6">
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded" style={{ backgroundColor: 'rgba(0,45,33,0.06)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#002D21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg mb-2" style={{ color: '#1B1C1A' }}>Metoda BBL Sites</h4>
                <p className="text-body text-sm" style={{ color: '#43474C' }}>
                  Arhitectură informațională bazată pe comportamentul clientului tău real și identitate vizuală proprie.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-animate relative p-12 overflow-hidden" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(127,177,158,0.15)', marginTop: '-40px', marginRight: '-40px' }} />
          <div className="relative z-10 space-y-6">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF854A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-4a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p className="text-2xl font-headline font-medium leading-snug" style={{ color: '#FAF9F5' }}>
              "Un site care doar 'arată bine' e o cheltuială. Un site care explică valoarea ta e o investiție care lucrează 24/7."
            </p>
            <div className="h-px w-full" style={{ backgroundColor: 'rgba(250,249,245,0.1)' }} />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: 'rgba(250,249,245,0.15)' }} />
              <div className="text-micro" style={{ color: 'rgba(250,249,245,0.5)' }}>Direcția Strategică BBL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Services Grid ─────────────────── */
function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (sectionRef.current ? Array.from(sectionRef.current.querySelectorAll('.service-card')) : []),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      num: '01 / DESIGN',
      title: 'Web Design Strategic',
      desc: 'Interfețe care nu doar plac ochiului, ci ghidează utilizatorul către acțiune prin UX psihologic.',
      items: ['UI / UX Design', 'Responsive Layouts', 'Branding Digital'],
    },
    {
      num: '02 / DEV',
      title: 'Dezvoltare Performantă',
      desc: 'Cod curat, viteză de încărcare optimă și panou de administrare intuitiv pentru echipa ta.',
      items: ['Custom WordPress', 'Core Web Vitals Opt.', 'Securitate Avansată'],
    },
    {
      num: '03 / STRAT',
      title: 'Consultanță & Strategie',
      desc: 'Te ajutăm să definești clar cine este clientul tău și ce vrei să facă acesta pe site.',
      items: ['Copywriting Strategic', 'Audit Prezență Digitală', 'Optimizare Conversii'],
    },
  ];

  return (
    <section ref={sectionRef} id="servicii" className="section-padding" style={{ backgroundColor: '#F4F4F0' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Arhitectură Digitală</span>
            <h2 className="text-h1" style={{ color: '#002D21' }}>Servicii Adaptate IMM-urilor</h2>
          </div>
          <div className="text-micro text-right hidden md:block" style={{ color: '#74777D' }}>
            Design · Dev · Strategie
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="service-card p-10 md:p-12 relative flex flex-col h-full group cursor-pointer text-[#002D21] hover:text-white"
              style={{
                backgroundColor: '#FAF9F5',
                border: '1px solid #E3E2DF',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#002D21';
                e.currentTarget.style.borderColor = '#002D21';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FAF9F5';
                e.currentTarget.style.borderColor = '#E3E2DF';
              }}
            >
              <span className="text-micro mb-10 block text-[#D35400] group-hover:text-[#FF854A] transition-colors duration-500">
                {s.num}
              </span>
              <h3 className="font-headline font-bold text-2xl mb-5 group-hover:text-white transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-body text-sm mb-10 text-[#43474C] group-hover:text-white/70 transition-colors duration-500">
                {s.desc}
              </p>
              <div className="mt-auto pt-8 border-t border-[#E3E2DF] group-hover:border-white/10 transition-colors duration-500">
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-micro text-[#1B1C1A] group-hover:text-white/80 transition-colors duration-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Process Roadmap (Premium) ─────────────── */
function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.process-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      
      // Timeline bar animation
      gsap.fromTo(
        '.timeline-progress',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.5, ease: 'expo.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' },
        }
      );
      
      // Steps stagger
      gsap.fromTo(
        (sectionRef.current ? Array.from(sectionRef.current.querySelectorAll('.process-step')) : []),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { 
      num: '01', 
      title: 'Discovery', 
      desc: 'Analizăm afacerea, concurența și obiectivele reale pe care vrei să le atingi.',
      image: '/process-discovery.jpg',
    },
    { 
      num: '02', 
      title: 'Blueprint', 
      desc: 'Creăm arhitectura site-ului și structura paginilor înainte de orice linie de cod.',
      image: '/process-blueprint.jpg',
    },
    { 
      num: '03', 
      title: 'Execution', 
      desc: 'Design-ul vizual și dezvoltarea tehnică merg mână în mână pentru precizie.',
      image: '/process-execution.jpg',
    },
    { 
      num: '04', 
      title: 'Launch', 
      desc: 'Lansare controlată, teste de performanță și training pentru echipa ta.',
      image: '/process-launch.jpg',
    },
  ];

  return (
    <section ref={sectionRef} id="proces" className="section-padding relative overflow-hidden" style={{ backgroundColor: '#FAF9F5' }}>
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(#002D21 1px, transparent 1px), linear-gradient(90deg, #002D21 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="content-max-width relative z-10" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        {/* Header */}
        <div className="process-header text-center mb-20">
          <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Wayfinding</span>
          <h2 className="text-h1 mb-4" style={{ color: '#002D21' }}>Procesul Nostru Structurat</h2>
          <p className="text-body" style={{ color: '#74777D', maxWidth: '500px', margin: '0 auto' }}>
            Fiecare pas are livrabile clare și un termen estimat. Fără surprize.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div ref={stepsRef} className="relative">
          {/* Connecting horizontal line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px]" style={{ backgroundColor: '#E3E2DF' }}>
            <div className="timeline-progress h-full origin-left" style={{ backgroundColor: '#D35400', width: '100%' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="process-step group"
              >
                {/* Step number circle */}
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-[120px] h-[120px] rounded-full flex items-center justify-center mb-6 relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ 
                      backgroundColor: '#FAF9F5', 
                      border: '2px solid #E3E2DF',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                    {/* Number badge */}
                    <div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-headline font-bold text-sm"
                      style={{ backgroundColor: '#D35400', color: '#FAF9F5' }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 max-w-[240px]">
                    <h4 className="font-headline font-bold text-xl transition-colors duration-500 group-hover:text-[#D35400]" style={{ color: '#002D21' }}>
                      {step.title}
                    </h4>
                    <p className="text-body text-sm leading-relaxed" style={{ color: '#74777D' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow connector (mobile) */}
                {i < 3 && (
                  <div className="flex justify-center my-6 md:hidden">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D35400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Duration bar */}
          <div className="mt-16 flex justify-center">
            <div 
              className="inline-flex items-center gap-4 px-8 py-4"
              style={{ backgroundColor: '#002D21', color: '#FAF9F5', borderRadius: '2px' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF854A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="text-micro font-bold" style={{ color: '#FAF9F5' }}>DURATĂ TOTALĂ ESTIMATĂ: 4-6 SĂPTĂMÂNI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Testimonials ───────────────── */
function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (sectionRef.current ? Array.from(sectionRef.current.querySelectorAll('.testimonial-animate')) : []),
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding overflow-hidden" style={{ backgroundColor: '#104436', color: '#FAF9F5' }}>
      <div className="content-max-width relative" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none select-none hidden md:block">
          <span className="font-headline font-bold text-[180px] -tracking-widest">QUOTE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="testimonial-animate">
              <span className="text-micro mb-4 block" style={{ color: '#7FB19E' }}>Feedback Parteneri</span>
              <h2 className="font-headline font-bold text-4xl" style={{ color: '#FAF9F5' }}>
                Ce spun cei cu care am lucrat
              </h2>
            </div>
            <div className="testimonial-animate hidden md:block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF854A" stroke="none">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="testimonial-animate p-10 md:p-12" style={{ backgroundColor: 'rgba(0,45,33,0.4)', borderLeft: '4px solid #FF854A' }}>
              <p className="text-2xl md:text-3xl font-headline font-light leading-relaxed mb-8" style={{ color: '#FAF9F5' }}>
                "BBL Sites nu ne-au oferit doar un site, ci o nouă perspectivă asupra business-ului nostru digital. Au înțeles rapid nevoile specifice ale domeniului nostru tehnic."
              </p>
              <div className="flex items-center gap-6">
                <img
                  src="/testimonial-avatar.jpg"
                  alt="Mihai Ionescu"
                  className="w-16 h-16 rounded-full object-cover"
                  style={{ filter: 'grayscale(0.3)' }}
                />
                <div>
                  <h5 className="font-bold text-lg" style={{ color: '#FAF9F5' }}>Mihai Ionescu</h5>
                  <p className="text-micro" style={{ color: '#7FB19E' }}>Director General, BuildRO Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Final CTA ─────────────── */
function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        (sectionRef.current ? Array.from(sectionRef.current.querySelectorAll('.cta-animate')) : []),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div
          className="p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
          style={{ backgroundColor: '#F4F4F0' }}
        >
          <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#D35400' }} />

          <div className="max-w-2xl relative z-10">
            <h2 className="cta-animate text-h1 mb-6" style={{ color: '#002D21' }}>
              Pregătit să transformi prezența ta digitală?
            </h2>
            <p className="cta-animate text-body-lg" style={{ color: '#43474C' }}>
              Hai să discutăm despre cum putem face afacerea ta să strălucească online.
            </p>
          </div>

          <div className="relative z-10 cta-animate">
            <a href="mailto:office@bblsites.ro" className="btn-primary" style={{ padding: '20px 40px', fontSize: '0.75rem' }}>
              Solicită o ofertă
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#002D21" strokeWidth="0.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Home Page ─────────────────── */
export default function Home() {
  return (
    <div className="relative min-h-[100dvh]" style={{ backgroundColor: '#FAF9F5' }}>
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}
