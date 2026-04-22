import { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

/* ── data ─────────────────────────────────────────────── */
const phases = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We immerse ourselves in your world. Through in-depth research, stakeholder interviews, and competitive analysis, we uncover the insights that will drive every design decision.',
    deliverables: [
      'Stakeholder Interviews',
      'Competitive Analysis',
      'User Research & Personas',
      'Technical Audit',
      'Project Roadmap',
    ],
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Ideas take shape. We move from wireframes to high-fidelity prototypes, testing every interaction and refining every pixel until the experience feels effortless.',
    deliverables: [
      'Wireframes & User Flows',
      'Visual Design System',
      'Interactive Prototypes',
      'Usability Testing',
      'Design Handoff Documentation',
    ],
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Clean, performant code brings designs to life. We build with modern frameworks, rigorous testing, and obsessive attention to the details that users feel but never see.',
    deliverables: [
      'Frontend Development',
      'CMS Integration',
      'Performance Optimization',
      'Accessibility Compliance',
      'Cross-Browser Testing',
    ],
  },
  {
    num: '04',
    title: 'Deliver',
    desc: "Launch is just the beginning. We handle deployment, monitoring, and optimization — then partner with you to evolve and improve your digital presence over time.",
    deliverables: [
      'Deployment & Launch',
      'Analytics Setup',
      'Training & Documentation',
      'Ongoing Support',
      'Growth Strategy',
    ],
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope. A standard website takes 6–10 weeks from kickoff to launch. Complex web applications may take 12–16 weeks. We provide detailed timelines during our discovery phase.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'We offer project-based pricing tailored to your specific needs. After our initial consultation, we provide a detailed proposal with transparent pricing. Most projects range from €8,000 to €50,000+.',
  },
  {
    q: 'Do you work with clients internationally?',
    a: 'Absolutely. We work with clients across Europe, North America, and beyond. Our process is designed for seamless remote collaboration with regular video calls and async updates.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'Our core stack includes React, Next.js, TypeScript, and Tailwind CSS. For CMS, we work with Sanity, Contentful, and WordPress. We\'re also experienced with WebGL, Three.js, and GSAP for advanced interactions.',
  },
  {
    q: 'Will I be able to update the website myself?',
    a: 'Yes. We build every site with a user-friendly CMS that lets you manage content without touching code. We also provide training documentation and a handoff session.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'We offer monthly maintenance packages that include hosting, security updates, performance monitoring, and priority support. Most clients choose to stay with us long-term.',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support' },
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

/* ── PhaseSection (GSAP-only, isolated) ───────────────── */
function PhaseSection({
  phase,
  index,
}: {
  phase: (typeof phases)[number];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const num = el.querySelector('.phase-number');
    const titleChars = el.querySelectorAll('.title-char');
    const desc = el.querySelector('.phase-desc');
    const items = el.querySelectorAll('.deliverable-item');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 70%',
        once: true,
      },
    });

    if (num) {
      tl.fromTo(
        num,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' },
        0
      );
    }

    if (titleChars.length) {
      gsap.set(titleChars, { opacity: 0, y: '80%' });
      tl.to(
        titleChars,
        { opacity: 1, y: '0%', duration: 0.7, stagger: 0.02, ease: 'expo.out' },
        0.1
      );
    }

    if (desc) {
      tl.fromTo(
        desc,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' },
        0.3
      );
    }

    if (items.length) {
      tl.fromTo(
        items,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'expo.out' },
        0.4
      );
    }
  }, { scope: sectionRef });

  const bgClass = index % 2 === 0 ? 'bg-[#0a0807]' : 'bg-[#120e0b]';

  return (
    <section
      ref={sectionRef}
      id={`phase-${phase.num}`}
      className={`min-h-[100dvh] flex items-center ${bgClass}`}
      style={{ scrollMarginTop: '72px' }}
    >
      <div
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        style={{
          maxWidth: '1400px',
          padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Left column */}
        <div className="flex flex-col">
          <span
            className="phase-number block font-normal leading-[0.85] select-none"
            style={{
              fontSize: 'clamp(8rem, 20vw, 16rem)',
              color: 'var(--accent)',
              opacity: 0.1,
            }}
          >
            {phase.num}
          </span>
          <h2 className="text-h2 text-text-primary -mt-8 relative z-10">
            {phase.title.split('').map((ch, i) => (
              <span key={i} className="title-char inline-block" style={{ whiteSpace: ch === ' ' ? 'pre' : undefined }}>
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </h2>
          <p className="phase-desc text-body-large text-text-secondary mt-6 max-w-[540px]">
            {phase.desc}
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {phase.deliverables.map((item, i) => (
            <div
              key={i}
              className="deliverable-item flex items-center gap-3 text-h4 text-text-secondary"
            >
              <span style={{ color: 'var(--accent)' }}>—</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        ref={numRef}
        className="text-h2"
        style={{ color: 'var(--accent)' }}
      >
        0{suffix}
      </span>
      <span className="text-micro text-text-muted mt-2">{label}</span>
    </div>
  );
}

/* ── Main Process Page ────────────────────────────────── */
export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  /* header entrance */
  useGSAP(() => {
    if (!headerRef.current) return;
    const label = headerRef.current.querySelector('.header-label');
    const headline = headerRef.current.querySelector('.header-headline');
    const sub = headerRef.current.querySelector('.header-sub');
    const circles = headerRef.current.querySelectorAll('.phase-circle');

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
      tl.fromTo(sub, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 0.6);
    }

    if (circles.length) {
      tl.fromTo(
        circles,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'expo.out' },
        0.7
      );
    }
  }, { scope: headerRef });

  /* strip sticky + active phase tracking */
  useGSAP(() => {
    if (!stripRef.current) return;

    ScrollTrigger.create({
      trigger: stripRef.current,
      start: 'top 72px',
      endTrigger: '#phase-04',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
    });

    phases.forEach((phase, i) => {
      ScrollTrigger.create({
        trigger: `#phase-${phase.num}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActivePhase(i),
        onEnterBack: () => setActivePhase(i),
      });
    });
  }, { scope: stripRef });

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

  const scrollToPhase = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-[#0a0807]">
      {/* ── Section 1: Page Header ── */}
      <section
        ref={headerRef}
        className="flex flex-col items-center justify-center text-center bg-[#0a0807]"
        style={{ minHeight: '70vh', padding: '0 clamp(24px, 5vw, 80px)' }}
      >
        <span className="header-label text-micro text-text-muted">HOW WE WORK</span>

        <h1 className="header-headline text-h1 text-text-primary mt-4" aria-label="OUR PROCESS">
          {'OUR PROCESS'.split('').map((ch, i) => (
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
          className="header-sub text-body-large text-text-secondary mt-6"
          style={{ maxWidth: '600px' }}
        >
          A battle-tested methodology refined over 50+ projects. Four phases. One goal:
          extraordinary results.
        </p>

        <div className="flex items-center gap-4 mt-12">
          {phases.map((p, i) => (
            <button
              key={p.num}
              onClick={() => scrollToPhase(`phase-${p.num}`)}
              className="phase-circle w-12 h-12 rounded-full flex items-center justify-center text-micro transition-all duration-300"
              style={{
                border:
                  i === 0
                    ? '2px solid var(--accent)'
                    : '1px solid var(--border-accent)',
                color: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
                background: i === 0 ? 'rgba(111,0,255,0.1)' : 'transparent',
                cursor: 'pointer',
              }}
            >
              {p.num}
            </button>
          ))}
        </div>
      </section>

      {/* ── Section 2: Sticky Overview Strip ── */}
      <div
        ref={stripRef}
        className="w-full bg-[#120e0b] z-30"
        style={{ padding: '0 clamp(24px, 5vw, 80px)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="mx-auto flex items-center" style={{ maxWidth: '1400px' }}>
          {phases.map((p, i) => (
            <button
              key={p.num}
              onClick={() => scrollToPhase(`phase-${p.num}`)}
              className="relative flex-1 flex items-center justify-center gap-3 transition-all duration-300"
              style={{
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '24px 0',
              }}
            >
              <span
                className="text-micro transition-colors duration-300"
                style={{ color: activePhase === i ? 'var(--accent)' : 'var(--text-muted)' }}
              >
                {p.num}
              </span>
              <span
                className="text-body transition-colors duration-300 hidden sm:inline"
                style={{
                  color: activePhase === i ? 'var(--text-primary)' : 'var(--text-muted)',
                }}
              >
                {p.title.toUpperCase()}
              </span>
              <span
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--accent)',
                  width: activePhase === i ? '100%' : '0%',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Section 3: Four Phase Sections ── */}
      {phases.map((phase, i) => (
        <PhaseSection key={phase.num} phase={phase} index={i} />
      ))}

      {/* ── Section 4: Stats ── */}
      <section
        className="w-full bg-[#120e0b]"
        style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}
      >
        <div
          className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ maxWidth: '1000px' }}
        >
          {stats.map((s) => (
            <AnimatedCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </section>

      {/* ── Section 5: FAQ ── */}
      <section
        className="w-full bg-[#0a0807]"
        style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}
      >
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <span className="text-micro text-text-muted block text-center">
            FREQUENTLY ASKED
          </span>
          <h2 className="text-h2 text-text-primary text-center mb-16">
            <CharacterReveal text="Common questions" stagger={0.03} />
          </h2>

          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-0"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <AccordionTrigger
                  className="text-h3 text-text-primary hover:no-underline hover:text-accent-light transition-colors duration-300 py-5"
                  style={{ padding: '20px 0', textAlign: 'left' }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-body text-text-secondary pb-5" style={{ maxWidth: '800px' }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section
        className="w-full bg-[#120e0b]"
        style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)' }}
      >
        <div ref={ctaRef} className="flex flex-col items-center text-center">
          <h2 className="text-h2 text-text-primary">
            <CharacterReveal text="Ready to start?" stagger={0.04} />
          </h2>
          <p className="text-body-large text-text-secondary mt-4">
            Let's bring your vision to life.
          </p>
          <Link to="/contact" className="btn-primary mt-8 inline-block">
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
}
