import { useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────── Hero ─────────────── */
function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.2 });
      gsap.fromTo('.about-hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.35 });
      gsap.fromTo('.about-hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.55 });
      gsap.fromTo('.about-hero-img', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out', delay: 0.4 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ paddingTop: '140px', paddingBottom: '80px', backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width grid grid-cols-1 md:grid-cols-12 gap-12 items-center" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="md:col-span-7">
          <div className="about-hero-badge flex items-center gap-3 mb-8">
            <span className="text-micro px-3 py-1 rounded-sm" style={{ backgroundColor: '#FFDBCD', color: '#481800' }}>Despre Noi</span>
            <div className="h-px w-12" style={{ backgroundColor: '#C4C6CD' }} />
            <span className="text-micro" style={{ color: '#74777D' }}>Digital Craft Studio</span>
          </div>
          <h1 className="about-hero-title text-display-1 mb-6" style={{ color: '#002D21' }}>
            Credem că un site bun e un <span style={{ color: '#D35400' }}>investitor</span>, nu o cheltuială.
          </h1>
          <p className="about-hero-desc text-body-lg" style={{ maxWidth: '520px', color: '#43474C' }}>
            BBL Sites e un studio de web design din București, specializat în website-uri pentru IMM-uri care vor să crească online. Nu facem template-uri. Facem arhitectură digitală.
          </p>
        </div>
        <div className="md:col-span-5 about-hero-img">
          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: '4/3' }}>
            <img
              src="/hero-workspace.jpg"
              alt="Workspace BBL Sites"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(0.2)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Values ─────────────── */
function AboutValues() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.value-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const values = [
    { title: 'Transparență', desc: 'Fără costuri ascunse, fără termeni ambigui. Fiecare etapă are un livrabil clar și un preț fix.' },
    { title: 'Calitate', desc: 'Nu livrăm rapid și prost. Livrăm bine și la timp. Fiecare pixel are un scop.' },
    { title: 'Parteneriat', desc: 'Nu suntem doar furnizori. Suntem parteneri în creșterea afacerii tale digitale.' },
    { title: 'Inovație', desc: 'Urmărim constant cele mai bune practici în web design, UX și performanță tehnică.' },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#F4F4F0' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="value-card p-10"
              style={{ backgroundColor: '#FAF9F5', border: '1px solid #E3E2DF', transition: 'all 0.4s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#002D21';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E3E2DF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 className="font-headline font-bold text-2xl mb-4" style={{ color: '#002D21' }}>{v.title}</h3>
              <p className="text-body" style={{ color: '#43474C' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Team ─────────────── */
function AboutTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.team-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const team = [
    { name: 'Andrei Popescu', role: 'Founder & Lead Designer', bio: '8 ani de experiență în UX/UI. Fost designer la agenții internaționale din Amsterdam.' },
    { name: 'Maria Dumitrescu', role: 'Front-end Developer', bio: 'Specialist React și Next.js. Pasionată de performanță web și accesibilitate.' },
    { name: 'Victor Stancu', role: 'SEO Strategist', bio: 'Certificat Google. A crescut traficul organic cu 300% pentru clienți din retail și SaaS.' },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="text-center mb-16">
          <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Echipa</span>
          <h2 className="text-h1" style={{ color: '#002D21' }}>Cine suntem</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card p-8 text-center"
              style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF' }}
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-6" style={{ backgroundColor: '#002D21' }} />
              <h3 className="font-headline font-bold text-xl mb-1" style={{ color: '#002D21' }}>{member.name}</h3>
              <p className="text-micro mb-4" style={{ color: '#D35400' }}>{member.role}</p>
              <p className="text-body text-sm" style={{ color: '#43474C' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ─────────────── */
function AboutCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
      <div className="content-max-width text-center" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <h2 className="text-h1 mb-6">Vrei să ne cunoști mai bine?</h2>
        <p className="text-body-lg mb-8" style={{ color: 'rgba(250,249,245,0.7)', maxWidth: '500px', margin: '0 auto 32px' }}>
          Programează un call de 30 minute. Fără pitch agresiv, doar o discuție despre obiectivele tale.
        </p>
        <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#FAF9F5', color: '#002D21' }}>
          Programează un call
        </Link>
      </div>
    </section>
  );
}

/* ─────────────── Page ─────────────── */
export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ backgroundColor: '#FAF9F5' }}>
      <Navbar />
      <main>
        <AboutHero />
        <AboutValues />
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
