import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'Analiză & Cercetare',
    desc: 'Începem prin a înțelege afacerea ta, publicul țintă și obiectivele reale. Analizăm concurența, identificăm oportunitățile și definim KPI-urile proiectului.',
    deliverables: ['Audit competițional', 'Persona client', 'Matrice obiective', 'Brief creativ'],
    duration: '3-5 zile',
  },
  {
    num: '02',
    title: 'Blueprint',
    subtitle: 'Arhitectură & Wireframes',
    desc: 'Creăm structura informațională și wireframe-urile fiecărei pagini. Fiecare element are un scop clar: să ghideze utilizatorul către conversie.',
    deliverables: ['Sitemap', 'Wireframe-uri', 'User flow', 'Content plan'],
    duration: '5-7 zile',
  },
  {
    num: '03',
    title: 'Design',
    subtitle: 'Identitate Vizuală',
    desc: 'Design-ul nu e doar estetic — e funcțional. Fiecare culoare, font și spațiere este ales pentru a transmite încredere și a ghida acțiunea.',
    deliverables: ['UI Kit', 'Mockup-uri complete', 'Prototype interactiv', 'Ghid de brand'],
    duration: '7-10 zile',
  },
  {
    num: '04',
    title: 'Development',
    subtitle: 'Dezvoltare Tehnică',
    desc: 'Cod curat, optimizat pentru viteză și SEO. Construim pe platforme scalabile cu panou de administrare intuitiv pentru echipa ta.',
    deliverables: ['Frontend', 'CMS integrat', 'Optimizare SEO', 'Testare responsive'],
    duration: '10-14 zile',
  },
  {
    num: '05',
    title: 'Launch',
    subtitle: 'Lansare & Monitorizare',
    desc: 'Lansare controlată cu teste de performanță, training pentru echipa ta și monitorizare post-lansare pentru primele 30 de zile.',
    deliverables: ['Deployment', 'Documentație', 'Training', 'Suport 30 zile'],
    duration: '3-5 zile',
  },
];

/* ─────────────── Hero ─────────────── */
function ProcessHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.2 });
      gsap.fromTo('.process-hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.35 });
      gsap.fromTo('.process-hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.55 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ paddingTop: '140px', paddingBottom: '60px', backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="process-hero-badge flex items-center gap-3 mb-8">
          <span className="text-micro px-3 py-1 rounded-sm" style={{ backgroundColor: '#FFDBCD', color: '#481800' }}>Metodologie</span>
          <div className="h-px w-12" style={{ backgroundColor: '#C4C6CD' }} />
          <span className="text-micro" style={{ color: '#74777D' }}>5 pași structurali</span>
        </div>
        <h1 className="process-hero-title text-display-1 mb-6" style={{ color: '#002D21' }}>
          De la idee la <span style={{ color: '#D35400' }}>site live</span>.
        </h1>
        <p className="process-hero-desc text-body-lg" style={{ maxWidth: '560px', color: '#43474C' }}>
          Un proces transparent, fără surprize. Fiecare etapă are livrabile clare și un termen estimat.
        </p>
      </div>
    </section>
  );
}

/* ─────────────── Steps ─────────────── */
function ProcessSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.process-step-card'),
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#F4F4F0' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="process-step-card grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              style={{
                padding: '40px 0',
                borderTop: i > 0 ? '1px solid #E3E2DF' : 'none',
              }}
            >
              <div className="md:col-span-2">
                <span className="font-headline font-bold text-7xl" style={{ color: 'rgba(196,198,205,0.3)' }}>{step.num}</span>
              </div>
              <div className="md:col-span-5">
                <p className="text-micro mb-2" style={{ color: '#D35400' }}>{step.subtitle}</p>
                <h3 className="font-headline font-bold text-3xl mb-4" style={{ color: '#002D21' }}>{step.title}</h3>
                <p className="text-body" style={{ color: '#43474C' }}>{step.desc}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-micro mb-3 font-bold" style={{ color: '#74777D' }}>LIVRABILE</p>
                <ul className="space-y-2">
                  {step.deliverables.map((d) => (
                    <li key={d} className="text-body text-sm flex items-center gap-2" style={{ color: '#43474C' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D35400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 text-right">
                <p className="text-micro mb-2 font-bold" style={{ color: '#74777D' }}>DURATĂ</p>
                <p className="font-headline font-bold text-lg" style={{ color: '#002D21' }}>{step.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Timeline ─────────────── */
function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-bar', { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: 'expo.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <h2 className="font-headline font-bold text-3xl mb-12 text-center">Durata medie: 4-6 săptămâni</h2>
        <div className="relative">
          <div className="timeline-bar h-1 w-full absolute top-1/2 -translate-y-1/2" style={{ backgroundColor: 'rgba(250,249,245,0.1)', transformOrigin: 'left' }} />
          <div className="grid grid-cols-5 gap-4 relative">
            {['Discovery', 'Blueprint', 'Design', 'Dev', 'Launch'].map((phase, i) => (
              <div key={phase} className="text-center">
                <div className="w-4 h-4 rounded-full mx-auto mb-4" style={{ backgroundColor: i < 4 ? '#FF854A' : 'rgba(250,249,245,0.3)' }} />
                <p className="text-micro" style={{ color: i < 4 ? '#FAF9F5' : 'rgba(250,249,245,0.5)' }}>{phase}</p>
                <p className="text-micro mt-1" style={{ color: 'rgba(250,249,245,0.4)' }}>Săpt. {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FAQ ─────────────── */
function ProcessFAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.faq-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const faqs = [
    { q: 'Cât durează un proiect tipic?', a: 'Majoritatea proiectelor sunt livrate în 4-6 săptămâni. Proiectele complexe (e-commerce, platforme custom) pot dura 8-10 săptămâni.' },
    { q: 'Cât costă un website?', a: 'Prețurile încep de la 3.500 EUR pentru un site de prezentare profesional. Oferim un deviz transparent după faza de Discovery.' },
    { q: 'Oferiți hosting și mentenanță?', a: 'Da. Oferim pachete de hosting performant pe servere românești și mentenanță lunară cu update-uri de securitate.' },
    { q: 'Pot modifica conținutul singur?', a: 'Absolut. Toate site-urile includ un panou de administrare intuitiv. Oferim și training pentru echipa ta.' },
    { q: 'Cum începem?', a: 'Programează un call de 30 minute. Discutăm despre afacerea ta și îți propunem o soluție personalizată.' },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 mb-12 text-center" style={{ color: '#002D21' }}>Întrebări frecvente</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="faq-item p-6"
                style={{ backgroundColor: '#F4F4F0', borderLeft: '3px solid #D35400' }}
              >
                <h4 className="font-headline font-bold text-lg mb-2" style={{ color: '#002D21' }}>{faq.q}</h4>
                <p className="text-body text-sm" style={{ color: '#43474C' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Page ─────────────── */
export default function Process() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#FAF9F5' }}>
      <Navbar />
      <main>
        <ProcessHero />
        <ProcessSteps />
        <ProcessTimeline />
        <ProcessFAQ />
      </main>
      <Footer />
    </div>
  );
}
