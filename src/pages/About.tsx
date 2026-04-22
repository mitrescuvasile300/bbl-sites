import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* ── data ─────────────────────────────────────────────── */
const pillars = [
  {
    num: '01',
    title: 'Obsessive Craft',
    desc: 'We sweat the details others skip. Every animation timing, every color value, every line of code is chosen with purpose. Good enough is never good enough.',
  },
  {
    num: '02',
    title: 'User-First Thinking',
    desc: 'Technology serves people, not the other way around. We design for the humans who will use our work — their needs, their contexts, their emotions.',
  },
  {
    num: '03',
    title: 'Radical Transparency',
    desc: 'No hidden costs, no surprise delays, no jargon. We communicate clearly, collaborate openly, and build trust through honesty at every step.',
  },
];

const techStack = [
  { icon: 'devicon-react-original', name: 'React', color: '#61DAFB' },
  { icon: 'devicon-nextjs-original', name: 'Next.js', color: '#ffffff' },
  { icon: 'devicon-typescript-plain', name: 'TypeScript', color: '#3178C6' },
  { icon: 'devicon-tailwindcss-original', name: 'Tailwind CSS', color: '#38BDF8' },
  { icon: 'devicon-javascript-plain', name: 'JavaScript', color: '#F7DF1E' },
  { icon: 'devicon-nodejs-plain', name: 'Node.js', color: '#339933' },
  { icon: 'devicon-figma-plain', name: 'Figma', color: '#F24E1E' },
  { icon: 'devicon-threejs-original', name: 'Three.js', color: '#ffffff' },
  { icon: 'devicon-git-plain', name: 'Git', color: '#F05032' },
  { icon: 'devicon-docker-plain', name: 'Docker', color: '#2496ED' },
  { icon: 'devicon-graphql-plain', name: 'GraphQL', color: '#E10098' },
  { icon: 'devicon-vscode-plain', name: 'VS Code', color: '#007ACC' },
];

const storyStats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 6, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

/* ── CharacterReveal (GSAP-only, isolated) ────────────── */
function CharacterReveal({
  text,
  className,
  stagger = 0.02,
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('.char');
    gsap.set(chars, { opacity: 0, y: '80%' });
    gsap.to(chars, {
      opacity: 1,
      y: '0%',
      duration: 0.8,
      stagger,
      delay,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="char inline-block"
          style={{ whiteSpace: ch === ' ' ? 'pre' : undefined }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}

/* ── AnimatedCounter (GSAP-only, isolated) ────────────── */
function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current || !numRef.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 1.5,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.val) + suffix;
        }
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="flex flex-col">
      <span ref={numRef} className="text-h2" style={{ color: 'var(--accent)' }}>
        0{suffix}
      </span>
      <span className="text-micro text-text-muted mt-1">{label}</span>
    </div>
  );
}

/* ── Main About Page ──────────────────────────────────── */
export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  /* hero entrance */
  useGSAP(() => {
    if (!heroRef.current) return;
    const label = heroRef.current.querySelector('.hero-label');
    const headline = heroRef.current.querySelector('.hero-headline');
    const sub = heroRef.current.querySelector('.hero-sub');

    const tl = gsap.timeline({ delay: 0.2 });

    if (label) {
      tl.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 0);
    }

    if (headline) {
      const chars = headline.querySelectorAll('.h-char');
      gsap.set(chars, { opacity: 0, y: '80%' });
      tl.to(chars, { opacity: 1, y: '0%', duration: 0.8, stagger: 0.02, ease: 'expo.out' }, 0.2);
    }

    if (sub) {
      tl.fromTo(sub, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 0.5);
    }
  }, { scope: heroRef });

  /* story section animations */
  useGSAP(() => {
    if (!storyRef.current) return;
    const leftEls = storyRef.current.querySelectorAll('.story-left > *');
    const image = storyRef.current.querySelector('.story-image');

    if (leftEls.length) {
      gsap.fromTo(
        leftEls,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );
    }

    if (image) {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );
    }
  }, { scope: storyRef });

  /* philosophy section */
  useGSAP(() => {
    if (!philosophyRef.current) return;
    const statement = philosophyRef.current.querySelector('.philosophy-statement');
    const cards = philosophyRef.current.querySelectorAll('.pillar-card');

    if (statement) {
      const words = statement.querySelectorAll('.word');
      gsap.set(words, { opacity: 0, y: 40 });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: statement,
          start: 'top 80%',
          once: true,
        },
      });
    }

    if (cards.length) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 80%',
            once: true,
          },
        }
      );

      /* border-top draw animation */
      cards.forEach((card) => {
        const border = card.querySelector('.pillar-border') as HTMLElement;
        if (border) {
          gsap.fromTo(
            border,
            { width: '0%' },
            {
              width: '100%',
              duration: 0.6,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                once: true,
              },
            }
          );
        }
      });
    }
  }, { scope: philosophyRef });

  /* tech grid stagger */
  useGSAP(() => {
    if (!techRef.current) return;
    const items = techRef.current.querySelectorAll('.tech-item');
    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: techRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );
  }, { scope: techRef });

  /* CTA entrance */
  useGSAP(() => {
    if (!ctaRef.current) return;
    gsap.fromTo(
      ctaRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, { scope: ctaRef });

  const philosophyText =
    'We believe great design is invisible. It works so well, feels so natural, that users never have to think about it.';

  return (
    <div className="bg-[#0a0807]">
      {/* ── Section 1: Hero ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: '70vh' }}
      >
        {/* background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/about-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* dark overlay gradient */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,8,7,0.7) 0%, rgba(10,8,7,0.85) 100%)',
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center"
          style={{ padding: '0 clamp(24px, 5vw, 80px)' }}
        >
          <span className="hero-label text-micro text-text-muted">ABOUT US</span>
          <h1 className="hero-headline text-h1 text-text-primary mt-4" aria-label="WE ARE BBL SITES">
            {'WE ARE BBL SITES'.split('').map((ch, i) => (
              <span
                key={i}
                className="h-char inline-block"
                style={{ whiteSpace: ch === ' ' ? 'pre' : undefined }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </h1>
          <p
            className="hero-sub text-body-large text-text-secondary mt-6"
            style={{ maxWidth: '640px' }}
          >
            A tight-knit team of designers and engineers building the next generation of
            web experiences. Based in Europe, working worldwide.
          </p>
        </div>
      </section>

      {/* ── Section 2: Company Story ── */}
      <section
        ref={storyRef}
        className="w-full bg-[#120e0b]"
        style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}
      >
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start"
          style={{ maxWidth: '1400px' }}
        >
          {/* Left column */}
          <div className="story-left flex flex-col">
            <span className="text-micro text-text-muted">OUR STORY</span>
            <h2 className="text-h2 text-text-primary mt-4">
              <CharacterReveal text="Crafting digital experiences since day one" stagger={0.025} />
            </h2>
            <p className="text-body text-text-secondary mt-6">
              BBL Sites was founded with a simple belief: the web should be beautiful, fast, and
              accessible to everyone. What started as a one-person studio has grown into a
              collaborative team of designers, developers, and strategists who share an obsession
              with craft.
            </p>
            <p className="text-body text-text-secondary mt-4">
              We've partnered with startups, enterprises, and everything in between — helping them
              build digital products that users love and businesses rely on. Every project is an
              opportunity to push boundaries and set new standards.
            </p>
            <div className="flex flex-wrap gap-10 mt-12">
              {storyStats.map((s) => (
                <AnimatedCounter
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="story-image relative overflow-hidden" style={{ border: '1px solid var(--border-subtle)' }}>
            <img
              src="/about-hero.jpg"
              alt="BBL Sites creative workspace"
              className="w-full object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: Philosophy ── */}
      <section
        ref={philosophyRef}
        className="w-full bg-[#0a0807]"
        style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}
      >
        <div className="mx-auto" style={{ maxWidth: '1400px' }}>
          <span className="text-micro text-text-muted block text-center mb-16">
            OUR PHILOSOPHY
          </span>

          {/* Typography statement */}
          <p
            className="philosophy-statement text-text-primary text-center mx-auto mb-20"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              maxWidth: '1000px',
            }}
          >
            {philosophyText.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </p>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((p) => (
              <div key={p.num} className="pillar-card relative pt-8">
                <div
                  className="pillar-border absolute top-0 left-0 h-0.5"
                  style={{ backgroundColor: 'var(--accent)', width: '0%' }}
                />
                <span className="text-micro text-accent block mb-3">{p.num}</span>
                <h3 className="text-h3 text-text-primary mb-3">{p.title}</h3>
                <p className="text-body text-text-secondary">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Tech Stack ── */}
      <section
        ref={techRef}
        className="w-full bg-[#120e0b]"
        style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}
      >
        <div className="mx-auto" style={{ maxWidth: '1000px' }}>
          <span className="text-micro text-text-muted block text-center">
            OUR TOOLKIT
          </span>
          <h2 className="text-h2 text-text-primary text-center mb-16">
            <CharacterReveal text="Technologies we master" stagger={0.03} />
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="tech-item flex items-center gap-3 transition-all duration-300 hover:scale-105 group"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: '20px 24px',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
                }}
              >
                <i
                  className={`${tech.icon} text-[32px] transition-transform duration-300 group-hover:scale-110`}
                  style={{ color: tech.color }}
                />
                <span className="text-body text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section
        className="w-full bg-[#0a0807]"
        style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}
      >
        <div ref={ctaRef} className="flex flex-col items-center text-center">
          <h2 className="text-h2 text-text-primary">
            <CharacterReveal text="Want to work with us?" stagger={0.04} />
          </h2>
          <p className="text-body text-text-secondary mt-4" style={{ maxWidth: '600px' }}>
            We're always looking for interesting projects and great people to work with.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Link to="/contact" className="btn-primary">
              START A PROJECT
            </Link>
            <Link to="/contact" className="btn-secondary">
              JOIN THE TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
