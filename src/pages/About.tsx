import { useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────── Hero ─────────────── */
function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.2 });
      gsap.fromTo('.about-hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.35 });
      gsap.fromTo('.about-hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.55 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ paddingTop: '140px', paddingBottom: '80px', backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="about-hero-badge flex items-center gap-3 mb-8">
          <span className="text-micro px-3 py-1 rounded-sm" style={{ backgroundColor: '#FFDBCD', color: '#481800' }}>Cine suntem</span>
          <div className="h-px w-12" style={{ backgroundColor: '#C4C6CD' }} />
          <span className="text-micro" style={{ color: '#74777D' }}>Echipa din spatele BBL Sites</span>
        </div>
        <h1 className="about-hero-title text-display-1 mb-6" style={{ color: '#002D21' }}>
          Doi <span style={{ color: '#D35400' }}>programatori</span> cu experiență reală.
        </h1>
        <p className="about-hero-desc text-body-lg" style={{ maxWidth: '640px', color: '#43474C' }}>
          Nu suntem o agenție cu 50 de oameni. Suntem doi full-stack developeri care au construit sisteme enterprise și acum pun aceeași rigurozitate în fiecare website.
        </p>
      </div>
    </section>
  );
}

/* ─────────────── Story ─────────────── */
function AboutStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.story-animate'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#F4F4F0' }}>
      <div className="content-max-width grid grid-cols-1 md:grid-cols-2 gap-16 items-center" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="story-animate">
          <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Povestea Noastră</span>
          <h2 className="text-h1 mb-6" style={{ color: '#002D21' }}>
            De la sistem enterprise la website-uri pentru afaceri locale
          </h2>
          <p className="text-body mb-4" style={{ color: '#43474C' }}>
            Am lucrat ani de zile în dezvoltarea de aplicații enterprise — sisteme complexe cu arhitectură microservicii, 
            milioane de utilizatori și cerințe de securitate și performanță extrem de ridicate.
          </p>
          <p className="text-body" style={{ color: '#43474C' }}>
            Am decis să canalizăm această expertiză către un segment nedeservit: IMM-urile românești care au nevoie de 
            prezență digitală de calitate, dar nu își permit agenții scumpe și nici nu vor soluții de duzină.
          </p>
        </div>
        <div className="story-animate relative">
          <div className="overflow-hidden rounded-sm" style={{ aspectRatio: '4/3' }}>
            <img
              src="/architecture-abstract.jpg"
              alt="Abstract architecture"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(0.3)' }}
            />
          </div>
          <div
            className="absolute -bottom-6 -right-6 p-6 shadow-xl"
            style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}
          >
            <div className="font-headline font-bold text-3xl mb-1" style={{ color: '#FF854A' }}>28+</div>
            <p className="text-micro" style={{ color: 'rgba(250,249,245,0.7)' }}>ani de experiență cumulată</p>
          </div>
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
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: 'Vasile Mitrescu',
      years: '12 ani de experiență',
      focus: 'Java • Spring Boot • Angular',
      bio: '12 ani de experiență în dezvoltarea de aplicații enterprise. Specializare pe arhitectură backend cu Java și Spring Boot, plus frontend modern cu Angular. A construit sisteme care procesează milioane de requesturi zilnic.',
      skills: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'AWS'],
      avatar: '/team-1.jpg',
    },
    {
      name: 'Bogdan Lungu',
      years: '16 ani de experiență',
      focus: 'Full Stack • Enterprise • Cloud',
      bio: '16 ani de experiență în programare. Background solid în dezvoltarea full-stack pentru corporații mari, cu expertiză în arhitectură cloud, microservicii și integrări complexe. Acum aplică aceeași rigurozitate pentru fiecare client.',
      skills: ['Java', 'Spring Boot', 'Angular', 'React', 'Shopify', 'WordPress'],
      avatar: '/team-2.jpg',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="text-center mb-16">
          <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Echipa</span>
          <h2 className="text-h1" style={{ color: '#002D21' }}>Cine construiește site-urile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card"
              style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="sm:col-span-1 overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(0.2)' }}
                  />
                </div>
                <div className="sm:col-span-2 p-8 flex flex-col justify-center">
                  <p className="text-micro mb-2" style={{ color: '#D35400' }}>{member.years}</p>
                  <h3 className="font-headline font-bold text-2xl mb-2" style={{ color: '#002D21' }}>{member.name}</h3>
                  <p className="text-micro mb-4" style={{ color: '#74777D' }}>{member.focus}</p>
                  <p className="text-body text-sm mb-5" style={{ color: '#43474C' }}>{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-micro px-3 py-1"
                        style={{ backgroundColor: '#FAF9F5', color: '#74777D', border: '1px solid #E3E2DF' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Tech Stack ─────────────── */
function AboutTech() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.tech-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const enterpriseTech = ['Java', 'Spring Boot', 'Angular', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure'];
  const cmsTech = ['WordPress', 'Shopify', 'WooCommerce', 'Elementor', 'Custom Themes', 'PHP', 'MySQL'];

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#002D21', color: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="text-center mb-16">
          <span className="text-micro mb-4 block" style={{ color: '#FF854A' }}>Stack Tehnologic</span>
          <h2 className="text-h1" style={{ color: '#FAF9F5' }}>Enterprise-grade, scalabil</h2>
          <p className="text-body mt-4" style={{ color: 'rgba(250,249,245,0.7)', maxWidth: '500px', margin: '16px auto 0' }}>
            Folosim aceleași tehnologii ca în proiectele enterprise, adaptate la nevoile fiecărui client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-micro mb-6 font-bold" style={{ color: '#FF854A' }}>ENTERPRISE & CUSTOM</p>
            <div className="flex flex-wrap gap-3">
              {enterpriseTech.map((tech) => (
                <span
                  key={tech}
                  className="tech-item text-micro px-4 py-2"
                  style={{ backgroundColor: 'rgba(250,249,245,0.08)', color: '#FAF9F5', border: '1px solid rgba(250,249,245,0.15)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-micro mb-6 font-bold" style={{ color: '#FF854A' }}>CMS & SHOPIFY</p>
            <div className="flex flex-wrap gap-3">
              {cmsTech.map((tech) => (
                <span
                  key={tech}
                  className="tech-item text-micro px-4 py-2"
                  style={{ backgroundColor: 'rgba(250,249,245,0.08)', color: '#FAF9F5', border: '1px solid rgba(250,249,245,0.15)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Projects We Love ─────────────── */
function AboutProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.project-love'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="content-max-width" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <div className="text-center mb-16">
          <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Proiecte Personale</span>
          <h2 className="text-h1" style={{ color: '#002D21' }}>Nu doar la muncă</h2>
          <p className="text-body mt-4" style={{ color: '#43474C', maxWidth: '600px', margin: '16px auto 0' }}>
            Avem proiecte personale active în e-commerce și platforme SaaS, ceea ce ne ține la curent cu cele mai noi tendințe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="project-love p-8" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF' }}>
            <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0,45,33,0.06)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002D21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>e-meniu.ro</h3>
            <p className="text-body text-sm" style={{ color: '#43474C' }}>Platformă de meniu digital pentru restaurante și cafenele, construită pe WordPress cu WooCommerce.</p>
          </div>
          <div className="project-love p-8" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF' }}>
            <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0,45,33,0.06)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002D21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>Shopify Stores</h3>
            <p className="text-body text-sm" style={{ color: '#43474C' }}>Magazine online pe Shopify cu teme customizate, integrări de plată și automatizări de marketing.</p>
          </div>
          <div className="project-love p-8" style={{ backgroundColor: '#F4F4F0', border: '1px solid #E3E2DF' }}>
            <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0,45,33,0.06)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002D21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>SaaS Platforms</h3>
            <p className="text-body text-sm" style={{ color: '#43474C' }}>Proiecte personale de platforme web cu arhitectură modernă, autentificare, dashboards și API-uri REST.</p>
          </div>
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
        <h2 className="text-h1 mb-6">Vrei să lucram împreună?</h2>
        <p className="text-body-lg mb-8" style={{ color: 'rgba(250,249,245,0.7)', maxWidth: '500px', margin: '0 auto 32px' }}>
          Hai să vedem cum putem aplica experiența noastră enterprise pentru proiectul tău.
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
      <main>
        <AboutHero />
        <AboutStory />
        <AboutTeam />
        <AboutTech />
        <AboutProjects />
        <AboutCTA />
      </main>
    </div>
  );
}
