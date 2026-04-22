import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Check,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Toaster, toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  EASING CONSTANTS                                                   */
/* ------------------------------------------------------------------ */

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  SECTION 1 — PAGE HEADER                                            */
/* ------------------------------------------------------------------ */

function PageHeader() {
  const headline = "LET'S TALK";
  const chars = headline.split('');

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center"
      style={{
        minHeight: '50vh',
        background: 'linear-gradient(150deg, #c2410c 0%, #0a0807 45%)',
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
        GET IN TOUCH
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
          maxWidth: '560px',
          marginTop: '24px',
          lineHeight: 1.5,
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.5 }}
      >
        Have a project in mind? We&apos;d love to hear about it. Drop us a message
        and we&apos;ll get back within 24 hours.
      </motion.p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — CONTACT FORM + INFO                                    */
/* ------------------------------------------------------------------ */

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitState('sending');
    setTimeout(() => {
      setSubmitState('sent');
      toast.success('Message sent! We\'ll be in touch within 24 hours.');
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      setTimeout(() => setSubmitState('idle'), 3000);
    }, 1500);
  };

  const inputBaseStyles: React.CSSProperties = {
    backgroundColor: 'var(--bg-input)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '0px',
    padding: '16px',
    color: 'var(--text-primary)',
    width: '100%',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <div>
      <h3
        style={{
          fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
          fontWeight: 400,
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
          marginBottom: '32px',
        }}
      >
        SEND US A MESSAGE
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '24px' }}>
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0 }}
        >
          <Label
            className="text-micro uppercase"
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            Name
          </Label>
          <Input
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => {
              setFormData((p) => ({ ...p, name: e.target.value }));
              if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
            }}
            style={{
              ...inputBaseStyles,
              borderColor: errors.name ? 'rgba(255,80,80,0.6)' : undefined,
            }}
            className="focus-visible:ring-0 focus-visible:border-[var(--accent)]"
          />
          {errors.name && (
            <p className="text-xs mt-1" style={{ color: 'rgba(255,80,80,0.8)' }}>
              {errors.name}
            </p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.08 }}
        >
          <Label
            className="text-micro uppercase"
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            Email
          </Label>
          <Input
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => {
              setFormData((p) => ({ ...p, email: e.target.value }));
              if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
            }}
            style={{
              ...inputBaseStyles,
              borderColor: errors.email ? 'rgba(255,80,80,0.6)' : undefined,
            }}
            className="focus-visible:ring-0 focus-visible:border-[var(--accent)]"
          />
          {errors.email && (
            <p className="text-xs mt-1" style={{ color: 'rgba(255,80,80,0.8)' }}>
              {errors.email}
            </p>
          )}
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.16 }}
        >
          <Label
            className="text-micro uppercase"
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            Company
          </Label>
          <Input
            placeholder="Your company (optional)"
            value={formData.company}
            onChange={(e) =>
              setFormData((p) => ({ ...p, company: e.target.value }))
            }
            style={inputBaseStyles}
            className="focus-visible:ring-0 focus-visible:border-[var(--accent)]"
          />
        </motion.div>

        {/* Budget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.24 }}
        >
          <Label
            className="text-micro uppercase"
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            Budget
          </Label>
          <Select
            value={formData.budget}
            onValueChange={(value) =>
              setFormData((p) => ({ ...p, budget: value }))
            }
          >
            <SelectTrigger
              className="w-full focus-visible:ring-0 focus-visible:border-[var(--accent)]"
              style={inputBaseStyles}
            >
              <SelectValue placeholder="Project budget" />
            </SelectTrigger>
            <SelectContent
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0px',
              }}
            >
              <SelectItem value="under-5k">Under $5,000</SelectItem>
              <SelectItem value="5k-10k">$5,000 – $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 – $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 – $50,000</SelectItem>
              <SelectItem value="50k+">$50,000+</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.32 }}
        >
          <Label
            className="text-micro uppercase"
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            Message
          </Label>
          <Textarea
            placeholder="Tell us about your project..."
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData((p) => ({ ...p, message: e.target.value }));
              if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
            }}
            style={{
              ...inputBaseStyles,
              borderColor: errors.message ? 'rgba(255,80,80,0.6)' : undefined,
              resize: 'vertical',
            }}
            className="focus-visible:ring-0 focus-visible:border-[var(--accent)]"
          />
          {errors.message && (
            <p className="text-xs mt-1" style={{ color: 'rgba(255,80,80,0.8)' }}>
              {errors.message}
            </p>
          )}
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.4 }}
        >
          <button
            type="submit"
            disabled={submitState !== 'idle'}
            className="btn-primary w-full"
            style={{
              marginTop: '24px',
              opacity: submitState === 'sending' ? 0.7 : 1,
              borderColor:
                submitState === 'sent'
                  ? 'rgba(80, 200, 120, 0.5)'
                  : undefined,
              color:
                submitState === 'sent'
                  ? 'rgba(80, 200, 120, 1)'
                  : undefined,
              transition: 'all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
            }}
          >
            {submitState === 'idle' && 'SEND MESSAGE'}
            {submitState === 'sending' && 'SENDING...'}
            {submitState === 'sent' && (
              <span className="flex items-center justify-center gap-2">
                MESSAGE SENT <Check className="w-4 h-4" />
              </span>
            )}
          </button>
        </motion.div>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT INFO                                                       */
/* ------------------------------------------------------------------ */

const contactItems = [
  {
    label: 'EMAIL',
    value: 'hello@bblsites.com',
    icon: <Mail className="w-4 h-4" />,
    href: 'mailto:hello@bblsites.com',
  },
  {
    label: 'PHONE',
    value: '+1 (555) 123-4567',
    icon: <Phone className="w-4 h-4" />,
    href: 'tel:+15551234567',
  },
  {
    label: 'LOCATION',
    value: 'San Francisco, CA',
    icon: <MapPin className="w-4 h-4" />,
  },
  {
    label: 'HOURS',
    value: 'Mon–Fri, 9am–6pm PST',
    icon: <Clock className="w-4 h-4" />,
  },
];

const socialLinks = [
  { label: 'GitHub', icon: <Github className="w-4 h-4" />, href: '#' },
  { label: 'Twitter / X', icon: <Twitter className="w-4 h-4" />, href: '#' },
  { label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: '#' },
  { label: 'Dribbble', icon: <Dribbble className="w-4 h-4" />, href: '#' },
];

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.3 }}
    >
      <span
        className="block text-micro uppercase"
        style={{
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          marginBottom: '32px',
        }}
      >
        CONTACT INFO
      </span>

      <div className="flex flex-col">
        {contactItems.map((item, i) => (
          <div
            key={item.label}
            style={{
              padding: i > 0 ? '24px 0' : '0 0 24px 0',
              borderBottom:
                i < contactItems.length - 1
                  ? '1px solid var(--border-subtle)'
                  : 'none',
            }}
          >
            <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{item.icon}</span>
              <span
                className="text-micro uppercase"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
              >
                {item.label}
              </span>
            </div>
            {item.href ? (
              <a
                href={item.href}
                className="text-body hover:text-[var(--accent-light)] transition-colors duration-300"
                style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
              >
                {item.value}
              </a>
            ) : (
              <span className="text-body" style={{ color: 'var(--text-primary)' }}>
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div style={{ marginTop: '48px' }}>
        <span
          className="block text-micro uppercase"
          style={{
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            marginBottom: '16px',
          }}
        >
          FOLLOW US
        </span>
        <div className="flex flex-wrap items-center" style={{ gap: '16px' }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                toast('Coming soon!');
              }}
              className="group inline-flex items-center gap-2 transition-colors duration-300"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
            >
              <span style={{ color: 'var(--text-muted)' }}>{link.icon}</span>
              <span className="group-hover:text-[var(--text-primary)] transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ContactFormAndInfo() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-5"
        style={{
          maxWidth: '1400px',
          padding: '0 clamp(24px, 5vw, 80px)',
          gap: 'clamp(40px, 6vh, 80px)',
        }}
      >
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — MAP PLACEHOLDER  (GSAP — isolated)                     */
/* ------------------------------------------------------------------ */

function MapPlaceholder() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const gridLines = containerRef.current.querySelectorAll<HTMLDivElement>('.grid-line');

    gsap.fromTo(
      gridLines,
      { opacity: 0 },
      {
        opacity: 0.3,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.02,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  // Generate grid lines
  const gridLines = [];
  for (let i = 0; i < 20; i++) {
    gridLines.push(
      <div
        key={`h-${i}`}
        className="grid-line absolute left-0 w-full"
        style={{
          top: `${i * 5}%`,
          height: '1px',
          backgroundColor: 'var(--border-subtle)',
          opacity: 0,
        }}
      />
    );
  }
  for (let i = 0; i < 20; i++) {
    gridLines.push(
      <div
        key={`v-${i}`}
        className="grid-line absolute top-0 h-full"
        style={{
          left: `${i * 5}%`,
          width: '1px',
          backgroundColor: 'var(--border-subtle)',
          opacity: 0,
        }}
      />
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        height: '400px',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      {/* Top gradient blend */}
      <div
        className="absolute top-0 left-0 w-full z-10 pointer-events-none"
        style={{
          height: '60px',
          background: 'linear-gradient(to bottom, var(--bg-secondary) 0%, transparent 100%)',
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0">{gridLines}</div>

      {/* Center pin + label */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--accent)',
            animation: 'pinPulse 2s ease-in-out infinite',
          }}
        >
          <MapPin className="w-5 h-5" style={{ color: '#ffffff' }} />
        </div>
        <span
          className="text-micro uppercase"
          style={{
            color: 'var(--text-primary)',
            letterSpacing: '0.1em',
            marginTop: '12px',
          }}
        >
          San Francisco, CA
        </span>
      </div>

      {/* Bottom gradient blend */}
      <div
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
        style={{
          height: '60px',
          background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)',
        }}
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — CTA                                                    */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 0.95,
            color: 'var(--text-primary)',
          }}
        >
          Prefer to email directly?
        </h2>

        <a
          href="mailto:hello@bblsites.com"
          style={{
            fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
            color: 'var(--accent)',
            marginTop: '16px',
            textDecoration: 'none',
          }}
          className="hover:text-[var(--accent-light)] transition-colors duration-300"
        >
          hello@bblsites.com
        </a>

        <p
          className="text-body"
          style={{
            color: 'var(--text-secondary)',
            marginTop: '16px',
          }}
        >
          We typically respond within a few hours during business days.
        </p>

        {/* Decorative line */}
        <div
          style={{
            width: '200px',
            height: '1px',
            backgroundColor: 'var(--border-subtle)',
            margin: '48px auto',
          }}
        />

        <p
          className="text-body"
          style={{ color: 'var(--text-secondary)' }}
        >
          Or schedule a call
        </p>

        <Link
          to="#"
          className="btn-secondary inline-block"
          style={{ marginTop: '16px' }}
          onClick={(e) => {
            e.preventDefault();
            toast('Booking feature coming soon!');
          }}
        >
          BOOK A CALL
        </Link>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  KEYFRAME STYLES (injected)                                         */
/* ------------------------------------------------------------------ */

function ContactKeyframeStyles() {
  return (
    <style>{`
      @keyframes pinPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
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

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
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
      <ContactKeyframeStyles />
      <PageHeader />
      <ContactFormAndInfo />
      <MapPlaceholder />
      <CTASection />
    </motion.main>
  );
}
