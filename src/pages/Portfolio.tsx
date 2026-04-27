import { useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────── Hero ─────────────── */
function PortfolioHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.2 });
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.35 });
      gsap.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.55 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ paddingTop: '140px', paddingBottom: '80px', backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div ref={badgeRef} className="flex items-center gap-3 mb-8">
          <span className="text-micro px-3 py-1 rounded-sm" style={{ backgroundColor: '#FFDBCD', color: '#481800' }}>Arhivă Proiecte</span>
          <div className="h-px w-12" style={{ backgroundColor: '#C4C6CD' }} />
          <span className="text-micro" style={{ color: '#74777D' }}>24 de proiecte livrate</span>
        </div>
        <h1 ref={titleRef} className="text-display-1 mb-6" style={{ color: '#002D21' }}>
          Proiecte care vorbesc <span style={{ color: '#D35400' }}>de la sine</span>.
        </h1>
        <p ref={descRef} className="text-body-lg" style={{ maxWidth: '600px', color: '#43474C' }}>
          Fiecare website din portofoliul nostru a fost construit cu un obiectiv clar: să transforme vizitatorii în clienți.
        </p>
      </div>
    </section>
  );
}

/* ─────────────── Projects Grid ─────────────── */
function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.project-card'),
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Flux Fintech',
      category: 'Fintech • App Design',
      desc: 'Platformă de management financiar pentru IMM-uri cu dashboard real-time și integrare bancară.',
      tags: ['UI/UX', 'React', 'API Banking'],
      image: '/portofoliu-flux.jpg',
      size: 'large',
    },
    {
      title: 'LMVR Properties',
      category: 'Real Estate • Website',
      desc: 'Website de prezentare pentru dezvoltator imobiliar cu catalog interactiv de proprietăți.',
      tags: ['WordPress', 'CRM', 'SEO'],
      image: '/portofoliu-lmvr.jpg',
      size: 'medium',
    },
    {
      title: 'MedConnect',
      category: 'Healthcare • Platformă',
      desc: 'Sistem de programări online pentru clinici private cu notificări automate și istoric medical.',
      tags: ['Next.js', 'PostgreSQL', 'Twilio'],
      image: '/portofoliu-med.jpg',
      size: 'medium',
    },
    {
      title: 'LogisticCore',
      category: 'Logistics • Dashboard',
      desc: 'Dashboard intern pentru tracking flotă, rutare optimă și raportare KPI-uri în timp real.',
      tags: ['Vue.js', 'Maps API', 'Analytics'],
      image: '/portofoliu-logistic.jpg',
      size: 'large',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#F4F4F0' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card group cursor-pointer"
              style={{
                backgroundColor: '#FAF9F5',
                border: '1px solid #E3E2DF',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#002D21';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,45,33,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E3E2DF';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: project.size === 'large' ? '16/10' : '4/3' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'grayscale(0.2)' }}
                />
              </div>
              <div style={{ padding: '32px' }}>
                <p className="text-micro mb-3" style={{ color: '#D35400' }}>{project.category}</p>
                <h3 className="font-headline font-bold text-2xl mb-3" style={{ color: '#002D21' }}>{project.title}</h3>
                <p className="text-body text-sm mb-6" style={{ color: '#43474C' }}>{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-micro px-3 py-1"
                      style={{ backgroundColor: '#F4F4F0', color: '#74777D' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="btn-ghost group-hover:text-accent-orange">
                  Vezi detalii <span className="arrow">&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Stats ─────────────── */
function PortfolioStats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.stat-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { num: '24+', label: 'Proiecte livrate' },
    { num: '98%', label: 'Satisfacție clienți' },
    { num: '3.2s', label: 'Timp mediu de încărcare' },
    { num: '12', label: 'Industrii acoperite' },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="font-headline font-bold text-5xl md:text-6xl mb-2" style={{ color: '#FF854A' }}>{stat.num}</div>
              <p className="text-micro" style={{ color: 'rgba(250,249,245,0.6)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ─────────────── */
function PortfolioCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width text-center" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <h2 className="text-h1 mb-6" style={{ color: '#002D21' }}>
          Vrei să apari în portofoliul nostru?
        </h2>
        <p className="text-body-lg mb-8" style={{ color: '#43474C', maxWidth: '500px', margin: '0 auto 32px' }}>
          Haide să construim împreună următorul proiect de succes.
        </p>
        <Link to="/contact" className="btn-primary" style={{ padding: '18px 36px' }}>
          Discută proiectul tău
        </Link>
      </div>
    </section>
  );
}

/* ─────────────── Page ─────────────── */
export default function Portfolio() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#FAF9F5' }}>
      <Navbar />
      <main>
        <PortfolioHero />
        <ProjectsGrid />
        <PortfolioStats />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  );
}
