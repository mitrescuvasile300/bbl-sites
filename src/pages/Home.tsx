import { useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import ParticleNetwork from '../components/ParticleNetwork';
import CodeShowcase from '../components/CodeShowcase';

gsap.registerPlugin(ScrollTrigger);

/* ───────────────────────── Hero Section ───────────────────────── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background scale animation
      gsap.fromTo(
        bgRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 1.5, ease: 'expo.out' }
      );

      // Split text animation helper
      const animateText = (el: HTMLElement | null, delay: number) => {
        if (!el) return;
        const text = el.textContent || '';
        el.innerHTML = '';
        const chars = text.split('');
        chars.forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateY(80%)';
          el.appendChild(span);
        });

        gsap.to(el.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'expo.out',
          delay,
        });
      };

      animateText(line1Ref.current, 0.3);
      animateText(line2Ref.current, 0.5);

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', delay: 0.8 }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out', delay: 1.0 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '600px' }}
    >
      {/* Background gradient */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(150deg, #c2410c 0%, #0a0807 45%)',
          zIndex: 0,
        }}
      />
      {/* Glow orb */}
      <div
        className="absolute"
        style={{
          top: '20%',
          left: '15%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle at 30% 40%, rgba(232,93,4,0.12) 0%, transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Particle Network */}
      <ParticleNetwork />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full mx-auto"
        style={{
          maxWidth: '1400px',
          padding: '0 clamp(24px, 5vw, 80px)',
          paddingTop: '72px',
        }}
      >
        {/* Left: Headline */}
        <div className="flex flex-col justify-center flex-1">
          <div ref={line1Ref} className="text-display-1 text-text-primary" style={{ lineHeight: 0.9 }}>
            We Build
          </div>
          <div ref={line2Ref} className="text-display-2 text-text-primary" style={{ marginTop: '-0.1em' }}>
            the digital future
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4" style={{ marginTop: '48px' }}>
            <Link to="/services" className="btn-primary">
              VIEW OUR WORK
            </Link>
            <Link to="/process" className="btn-secondary">
              OUR PROCESS
            </Link>
          </div>
        </div>

        {/* Right: Description */}
        <div
          ref={descRef}
          className="flex flex-col justify-center mt-8 md:mt-0"
          style={{ maxWidth: '420px' }}
        >
          <p className="text-body-large text-text-secondary" style={{ lineHeight: 1.5 }}>
            Award-winning websites, interfaces and digital products. Built with obsessive craft.
          </p>
          <span className="text-micro text-text-muted" style={{ marginTop: '32px', letterSpacing: '0.1em' }}>
            BBL SITES
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Scrolling Marquee ─────────────────────── */
function MarqueeSection() {
  const items = [
    'WEB DESIGN',
    'WEB DEVELOPMENT',
    'BRANDING',
    'UI/UX DESIGN',
    'E-COMMERCE',
    'SEO',
    'DIGITAL STRATEGY',
  ];

  const content = items.map((item) => (
    <span key={item} className="flex items-center gap-6 shrink-0">
      <span
        className="uppercase whitespace-nowrap"
        style={{
          fontSize: 'clamp(3rem, 5vw, 4rem)',
          fontWeight: 400,
          color: 'var(--text-muted)',
          opacity: 0.6,
          letterSpacing: '-0.02em',
        }}
      >
        {item}
      </span>
      <span
        className="shrink-0"
        style={{
          width: '0.3em',
          height: '0.3em',
          backgroundColor: 'var(--text-muted)',
          opacity: 0.3,
          borderRadius: '50%',
        }}
      />
    </span>
  ));

  return (
    <section className="w-full overflow-hidden" style={{ padding: '60px 0' }}>
      <div className="flex animate-marquee">
        {content}
        {content}
        {content}
        {content}
      </div>
    </section>
  );
}

/* ──────────────────────── Logo Carousel ──────────────────────── */
function LogoCarouselSection() {
  const row1 = ['logo-replicant.svg', 'logo-mistral.svg', 'logo-flux.svg', 'logo-lmvr.svg', 'logo-sparknews.svg', 'logo-axiom.svg'];
  const row2 = ['logo-neural.svg', 'logo-prism.svg', 'logo-replicant.svg', 'logo-mistral.svg', 'logo-flux.svg', 'logo-lmvr.svg'];

  return (
    <section className="w-full overflow-hidden relative" style={{ padding: '80px 0' }}>
      {/* Decorative shape */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ opacity: 0.3, filter: 'blur(2px)', zIndex: 0 }}
      >
        <img src="/logo-shape-dark.svg" alt="" style={{ width: '120px', height: '120px' }} />
      </div>

      <div className="relative z-10">
        <p className="text-micro text-text-muted text-center" style={{ marginBottom: '48px' }}>
          TRUSTED BY INDUSTRY LEADERS
        </p>

        {/* Row 1: left to right */}
        <div className="flex overflow-hidden" style={{ marginBottom: '24px' }}>
          <div className="flex animate-carousel-row1">
            {[...row1, ...row1].map((logo, i) => (
              <div
                key={`r1-${i}`}
                className="flex items-center justify-center shrink-0"
                style={{ width: '180px', height: '40px' }}
              >
                <img
                  src={`/${logo}`}
                  alt=""
                  className="grayscale-logo"
                  style={{ width: '120px', height: '40px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: right to left */}
        <div className="flex overflow-hidden">
          <div className="flex animate-carousel-row2">
            {[...row2, ...row2].map((logo, i) => (
              <div
                key={`r2-${i}`}
                className="flex items-center justify-center shrink-0"
                style={{ width: '180px', height: '40px' }}
              >
                <img
                  src={`/${logo}`}
                  alt=""
                  className="grayscale-logo"
                  style={{ width: '120px', height: '40px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Dark Value Cards (Stacked) ──────────────────── */
function ValueCardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Card scroll animations
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
      cards.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { scale: 0.9, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 0.5,
            },
          }
        );

        const inner = card.querySelectorAll('.card-inner');
        gsap.fromTo(
          inner,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 60%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      num: '01',
      title: 'Design Excellence',
      body: 'Every pixel is placed with intention. We craft interfaces that are both beautiful and functional, turning complex requirements into intuitive digital experiences that users love.',
      cta: 'See our approach',
      link: '/process',
      ref: card1Ref,
    },
    {
      num: '02',
      title: 'Technical Mastery',
      body: 'From React and Next.js to custom WebGL experiences, we build with cutting-edge technology. Performance, accessibility, and scalability are built into every project from day one.',
      cta: 'Explore our tech stack',
      link: '/services',
      ref: card2Ref,
    },
    {
      num: '03',
      title: 'End-to-End Partnership',
      body: "We don't just deliver websites — we build lasting partnerships. From initial strategy through launch and beyond, we're invested in your success at every stage of the journey.",
      cta: 'Learn about our process',
      link: '/process',
      ref: card3Ref,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1400px',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        <h2 ref={headerRef} className="text-h2 text-text-primary text-center" style={{ marginBottom: '64px' }}>
          Why clients choose BBL Sites
        </h2>

        <div className="flex flex-col gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              ref={card.ref}
              className="relative"
              style={{
                position: 'sticky',
                top: '100px',
                background: 'linear-gradient(180deg, rgba(154,52,18,0.3) 0%, var(--bg-card) 100%)',
                border: '1px solid var(--border-subtle)',
                borderLeft: '2px solid var(--accent)',
                padding: 'clamp(32px, 4vw, 56px)',
                boxShadow: 'inset 0 0 60px rgba(232,93,4,0.05)',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--border-accent)';
                el.style.boxShadow = 'inset 0 0 60px rgba(232,93,4,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--border-subtle)';
                el.style.borderLeft = '2px solid var(--accent)';
                el.style.boxShadow = 'inset 0 0 60px rgba(232,93,4,0.05)';
              }}
            >
              {/* Large number */}
              <div
                className="absolute top-4 right-4 pointer-events-none select-none"
                style={{
                  fontSize: 'clamp(6rem, 12vw, 12rem)',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  opacity: 0.08,
                  lineHeight: 1,
                }}
              >
                {card.num}
              </div>

              <div className="relative z-10">
                <h3 className="card-inner text-h3 text-text-primary" style={{ marginBottom: '16px' }}>
                  {card.title}
                </h3>
                <p className="card-inner text-body text-text-secondary" style={{ maxWidth: '600px', marginBottom: '24px' }}>
                  {card.body}
                </p>
                <Link to={card.link} className="card-inner btn-ghost">
                  {card.cta} <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Showcase (Parallax Grid) ───────────────────── */
function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const midColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const leftCards = leftColRef.current?.querySelectorAll('.service-card') || [];
      const midCards = midColRef.current?.querySelectorAll('.service-card') || [];
      const rightCards = rightColRef.current?.querySelectorAll('.service-card') || [];

      gsap.fromTo(
        leftCards,
        { y: '30vh', opacity: 0.3, scale: 0.8 },
        {
          y: '-30vh',
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
            pin: true,
          },
        }
      );

      gsap.fromTo(
        midCards,
        { y: '-30vh', opacity: 0.3, scale: 0.8 },
        {
          y: '30vh',
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        rightCards,
        { y: '30vh', opacity: 0.3, scale: 0.8 },
        {
          y: '-30vh',
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leftServices = ['WEB DESIGN', 'DEVELOPMENT', 'UI/UX DESIGN'];
  const midServices = ['BRANDING', 'E-COMMERCE', 'SEO & GROWTH'];
  const rightServices = ['WEB APPS', 'DIGITAL STRATEGY', 'CONSULTING'];

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
    padding: 'clamp(24px, 3vw, 40px)',
    minHeight: '200px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  const accentBarStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '2px',
    height: '100%',
    backgroundColor: 'var(--accent)',
    transformOrigin: 'top',
  };

  return (
    <section ref={sectionRef} className="w-full relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Section header */}
      <div
        className="text-center"
        style={{
          padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
          paddingBottom: '40px',
        }}
      >
        <p className="text-h4 text-text-muted" style={{ marginBottom: '16px' }}>What we do</p>
        <h2 className="text-h2 text-text-primary">Crafting digital excellence</h2>
      </div>

      {/* Pinned container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{
          minHeight: '100dvh',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Background glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle at 50% 50%, rgba(232,93,4,0.06) 0%, transparent 60%)',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left column */}
          <div ref={leftColRef} className="flex flex-col gap-6" style={{ paddingTop: '10vh' }}>
            {leftServices.map((title, i) => (
              <div
                key={title}
                className="service-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(232,93,4,0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={accentBarStyle} />
                <h3 className="text-h3 text-text-primary" style={{ marginBottom: '8px' }}>{title}</h3>
                <p className="text-body text-text-secondary">
                  {i === 0 ? 'Stunning interfaces' : i === 1 ? 'Robust solutions' : 'User-centered design'}
                </p>
              </div>
            ))}
          </div>

          {/* Middle column */}
          <div ref={midColRef} className="flex flex-col gap-6" style={{ paddingTop: '5vh' }}>
            {midServices.map((title, i) => (
              <div
                key={title}
                className="service-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(232,93,4,0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={accentBarStyle} />
                <h3 className="text-h3 text-text-primary" style={{ marginBottom: '8px' }}>{title}</h3>
                <p className="text-body text-text-secondary">
                  {i === 0 ? 'Identity systems' : i === 1 ? 'Online stores' : 'Drive traffic'}
                </p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div ref={rightColRef} className="flex flex-col gap-6" style={{ paddingTop: '10vh' }}>
            {rightServices.map((title, i) => (
              <div
                key={title}
                className="service-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(232,93,4,0.08)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={accentBarStyle} />
                <h3 className="text-h3 text-text-primary" style={{ marginBottom: '8px' }}>{title}</h3>
                <p className="text-body text-text-secondary">
                  {i === 0 ? 'Custom applications' : i === 1 ? 'Growth planning' : 'Expert guidance'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Case Studies Grid + CTA ─────────────────── */
function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelector('.cs-header');
      const cards = sectionRef.current?.querySelectorAll('.cs-card');
      const cta = sectionRef.current?.querySelector('.cs-cta');

      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'expo.out',
            scrollTrigger: { trigger: header, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      }

      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: { trigger: cards[0], start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      }

      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'expo.out',
            scrollTrigger: { trigger: cta, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const caseStudies = [
    { title: 'Replicant', category: 'AI Platform', thumb: '/cs-replicant-thumb.jpg', brief: 'Next-generation AI platform interface with real-time model visualization.' },
    { title: 'Mistral', category: 'Cloud Infrastructure', thumb: '/cs-mistral-thumb.jpg', brief: 'Enterprise cloud dashboard with advanced monitoring capabilities.' },
    { title: 'Flux', category: 'Fintech App', thumb: '/cs-flux-thumb.jpg', brief: 'Digital payment experience with seamless transaction flows.' },
    { title: 'LMVR', category: 'Real Estate', thumb: '/cs-lmvr-thumb.jpg', brief: 'Immersive property showcase with virtual tour integration.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1400px',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Header */}
        <div className="cs-header">
          <p className="text-micro text-text-muted" style={{ marginBottom: '12px' }}>SELECTED WORK</p>
          <h2 className="text-h2 text-text-primary">Projects that define us</h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ marginTop: '64px' }}
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="cs-card group"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(232,93,4,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img
                  src={cs.thumb}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-400"
                  style={{ transitionDuration: '0.4s' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <p className="text-micro text-accent-light" style={{ marginBottom: '8px' }}>{cs.category}</p>
                <h3 className="text-h3 text-text-primary" style={{ marginBottom: '8px' }}>{cs.title}</h3>
                <p className="text-body text-text-secondary" style={{ marginBottom: '16px', fontSize: '0.9375rem' }}>{cs.brief}</p>
                <Link to="/services" className="btn-ghost" style={{ fontSize: '0.875rem' }}>
                  View project <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="cs-cta text-center" style={{ marginTop: '80px' }}>
          <h2 className="text-h2 text-text-primary" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Ready to build something extraordinary?
          </h2>
          <p className="text-body text-text-secondary" style={{ marginTop: '16px' }}>
            Let&apos;s discuss your next project.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Link to="/contact" className="btn-primary">
              START A PROJECT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Home Page ─────────────────────── */
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <LogoCarouselSection />
      <ValueCardsSection />
      <ShowcaseSection />
      <CodeShowcase />
      <CaseStudiesSection />
    </Layout>
  );
}
