import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Palette,
  Code2,
  Layers,
  Fingerprint,
  ShoppingCart,
  TrendingUp,
  Check,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Web Design',
    description:
      'Custom website design that captures your brand essence. We create visually stunning, conversion-focused interfaces that make lasting first impressions.',
    features: [
      'Custom Design Systems',
      'Responsive Layouts',
      'Prototyping & Wireframes',
      'Animation & Motion',
      'Design Reviews',
    ],
    icon: <Palette className="w-5 h-5" />,
  },
  {
    number: '02',
    title: 'Web Development',
    description:
      'Production-grade frontend development with clean, maintainable code. We build fast, scalable, and accessible websites using modern frameworks.',
    features: [
      'React / Next.js / Vue',
      'Performance Optimization',
      'CMS Integration',
      'API Development',
      'CI/CD Pipelines',
    ],
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'User-centered design that balances beauty with usability. We research, prototype, and validate every interaction to ensure intuitive experiences.',
    features: [
      'User Research',
      'Information Architecture',
      'Interaction Design',
      'Usability Testing',
      'Design Systems',
    ],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    number: '04',
    title: 'Branding & Identity',
    description:
      'Complete brand identity systems that tell your story. From logo design to comprehensive brand guidelines, we craft memorable visual identities.',
    features: [
      'Logo Design',
      'Brand Strategy',
      'Visual Guidelines',
      'Marketing Collateral',
      'Brand Refresh',
    ],
    icon: <Fingerprint className="w-5 h-5" />,
  },
  {
    number: '05',
    title: 'E-Commerce',
    description:
      'End-to-end online store development. We build shopping experiences that convert visitors into customers with seamless checkout flows.',
    features: [
      'Shopify / WooCommerce',
      'Custom Stores',
      'Payment Integration',
      'Inventory Systems',
      'Conversion Optimization',
    ],
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    number: '06',
    title: 'SEO & Digital Growth',
    description:
      'Data-driven growth strategies that increase visibility and drive qualified traffic. We optimize every touchpoint for measurable results.',
    features: [
      'Technical SEO',
      'Content Strategy',
      'Analytics Setup',
      'CRO',
      'Performance Marketing',
    ],
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

const testimonials = [
  {
    quote:
      'BBL Sites transformed our digital presence completely. The attention to detail is unlike anything we\'ve experienced.',
    author: 'Marcus Chen',
    company: 'Replicant AI',
  },
  {
    quote:
      'Working with BBL felt like having an in-house design team. They understood our vision from day one.',
    author: 'Sarah Lindqvist',
    company: 'Mistral Cloud',
  },
  {
    quote:
      'The website they built increased our conversion rate by 340%. The investment paid for itself in the first month.',
    author: 'David Okonkwo',
    company: 'Flux Fintech',
  },
  {
    quote:
      'Professional, creative, and technically brilliant. BBL Sites is our go-to partner for all things digital.',
    author: 'Elena Volkov',
    company: 'LMVR Group',
  },
];

const galleryItems = [
  'WEB DESIGN',
  'DEVELOPMENT',
  'UI/UX',
  'BRANDING',
  'E-COMMERCE',
  'SEO',
];

/* ------------------------------------------------------------------ */
/*  EASING CONSTANTS                                                   */
/* ------------------------------------------------------------------ */

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  SECTION 1 — PAGE HEADER                                            */
/* ------------------------------------------------------------------ */

function PageHeader() {
  const headline = 'FULL-CYCLE DIGITAL PARTNERSHIP';
  const chars = headline.split('');

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center"
      style={{
        minHeight: '60vh',
        background: 'linear-gradient(150deg, #3806b9 0%, #03020f 45%)',
        paddingTop: '72px',
      }}
    >
      <motion.span
        className="text-micro uppercase"
        style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        WHAT WE OFFER
      </motion.span>

      <h1
        className="overflow-hidden"
        style={{
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          lineHeight: 0.92,
          color: 'var(--text-primary)',
          marginTop: '16px',
        }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: '80%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: easeOutExpo,
              delay: 0.1 + i * 0.02,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        style={{
          fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
          color: 'var(--text-secondary)',
          maxWidth: '640px',
          marginTop: '24px',
          lineHeight: 1.5,
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.8 }}
      >
        From concept to launch and beyond — everything your digital presence needs.
      </motion.p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — SERVICE ACCORDION                                      */
/* ------------------------------------------------------------------ */

function ServiceAccordion({ service, isOpen, onToggle }: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid',
        borderColor: isOpen ? 'var(--border-accent)' : 'var(--border-subtle)',
        borderLeftWidth: '2px',
        borderLeftColor: isOpen ? 'var(--accent)' : 'transparent',
        borderRadius: '0px',
      }}
      onMouseEnter={(e) => {
        if (!isOpen) {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-accent)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isOpen) {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)';
        }
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
        style={{ padding: '24px 32px' }}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6">
          <span
            style={{
              fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
              fontWeight: 400,
              color: 'var(--accent)',
              opacity: 0.5,
              letterSpacing: '-0.01em',
              minWidth: '36px',
            }}
          >
            {service.number}
          </span>
          <span
            className="flex items-center gap-3"
            style={{
              fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            <span style={{ color: 'var(--text-muted)' }}>{service.icon}</span>
            {service.title}
          </span>
        </div>
        <motion.span
          className="block"
          style={{
            color: 'var(--text-muted)',
            fontSize: '24px',
            lineHeight: 1,
          }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
        >
          +
        </motion.span>
      </button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="overflow-hidden"
          >
            <div
              style={{
                padding: '0 32px 32px 80px',
              }}
            >
              <p
                className="text-body"
                style={{
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                style={{ marginTop: '24px' }}
              >
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <Check
                      className="w-4 h-4 shrink-0"
                      style={{ color: 'var(--accent)' }}
                    />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className="group inline-flex items-center gap-2 transition-colors duration-300"
                style={{
                  marginTop: '24px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                }}
                onClick={() => toast('Coming soon — contact us for details!')}
              >
                <span className="group-hover:text-[var(--text-primary)] transition-colors duration-300">
                  Learn more
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-secondary)',
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
        <motion.span
          className="block text-micro uppercase"
          style={{
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            marginBottom: '48px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          OUR SERVICES
        </motion.span>

        <div className="flex flex-col" style={{ gap: '12px' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: easeOutExpo,
                delay: i * 0.08,
              }}
            >
              <ServiceAccordion
                service={service}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — ANIMATED SERVICE GALLERY  (GSAP — isolated)            */
/* ------------------------------------------------------------------ */

function ServiceGalleryGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll<HTMLDivElement>('.gallery-item');

    items.forEach((item, index) => {
      const chars = item.querySelectorAll<HTMLSpanElement>('.gallery-char');
      const underline = item.querySelector<HTMLDivElement>('.gallery-underline');

      gsap.set(chars, {
        opacity: 0,
        y: '100%',
        rotateX: -45,
      });

      if (underline) {
        gsap.set(underline, { width: '0%' });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true,
        },
      });

      tl.to(chars, {
        opacity: 1,
        y: '0%',
        rotateX: 0,
        duration: 0.6,
        ease: 'expo.out',
        stagger: {
          each: 0.015,
          from: index % 2 === 0 ? 'start' : 'end',
        },
      });

      if (underline) {
        tl.to(
          underline,
          {
            width: '100%',
            duration: 0.5,
            ease: 'expo.out',
          },
          '-=0.3'
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <div
        ref={containerRef}
        className="mx-auto grid grid-cols-1 md:grid-cols-2"
        style={{
          maxWidth: '1400px',
          padding: '0 clamp(24px, 5vw, 80px)',
          gap: 'clamp(40px, 6vh, 80px)',
        }}
      >
        {galleryItems.map((name) => (
          <div
            key={name}
            className="gallery-item relative overflow-hidden"
            style={{ paddingBottom: '16px' }}
          >
            <div
              style={{
                perspective: '1000px',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 400,
                lineHeight: 1,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
              }}
            >
              {name.split('').map((char, j) => (
                <span
                  key={j}
                  className="gallery-char inline-block"
                  style={{
                    display: 'inline-block',
                    whiteSpace: char === ' ' ? 'pre' : undefined,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
            <div
              className="gallery-underline"
              style={{
                height: '2px',
                backgroundColor: 'var(--accent)',
                marginTop: '12px',
                opacity: 0.5,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — TESTIMONIALS LOOP + CTA                                */
/* ------------------------------------------------------------------ */

const TestimonialCard = React.memo(function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className="shrink-0"
      style={{
        width: '400px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        padding: '32px',
        position: 'relative',
      }}
    >
      <Quote
        className="absolute"
        style={{
          top: '16px',
          left: '24px',
          width: 'clamp(3rem, 5vw, 4rem)',
          height: 'clamp(3rem, 5vw, 4rem)',
          color: 'var(--accent)',
          opacity: 0.2,
        }}
      />
      <p
        className="italic"
        style={{
          color: 'var(--text-secondary)',
          fontSize: '1.125rem',
          lineHeight: 1.6,
          marginTop: '48px',
        }}
      >
        {testimonial.quote}
      </p>
      <p
        className="text-micro uppercase"
        style={{
          color: 'var(--text-primary)',
          letterSpacing: '0.1em',
          marginTop: '24px',
        }}
      >
        {testimonial.author}
      </p>
      <p
        className="text-micro"
        style={{
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          marginTop: '4px',
        }}
      >
        {testimonial.company}
      </p>
    </div>
  );
});

function TestimonialsLoop() {
  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          gap: '24px',
          animation: 'marquee-testimonials 40s linear infinite',
          width: 'max-content',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running';
        }}
      >
        {duplicated.map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

function TestimonialsAndCTA() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <TestimonialsLoop />

      {/* CTA Block */}
      <motion.div
        className="flex flex-col items-center text-center"
        style={{ marginTop: '80px' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: easeOutExpo }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 0.95,
            color: 'var(--text-primary)',
            padding: '0 clamp(24px, 5vw, 80px)',
          }}
        >
          Let&apos;s build your next project together
        </h2>
        <p
          className="text-body"
          style={{
            color: 'var(--text-secondary)',
            marginTop: '16px',
            padding: '0 clamp(24px, 5vw, 80px)',
          }}
        >
          Every great website starts with a conversation.
        </p>
        <Link
          to="/contact"
          className="btn-primary inline-block"
          style={{ marginTop: '32px' }}
        >
          GET IN TOUCH
        </Link>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  KEYFRAME STYLES                                                    */
/* ------------------------------------------------------------------ */

function ServicesKeyframeStyles() {
  return (
    <style>{`
      @keyframes marquee-testimonials {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
    `}</style>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      <ServicesKeyframeStyles />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
          },
        }}
      />
      <PageHeader />
      <ServicesSection />
      <ServiceGalleryGSAP />
      <TestimonialsAndCTA />
    </motion.main>
  );
}
