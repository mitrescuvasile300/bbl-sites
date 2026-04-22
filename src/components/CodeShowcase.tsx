import { useEffect, useRef, useState } from 'react';

const CODE_SNIPPETS = [
  {
    label: 'React Component',
    lang: 'tsx',
    code: `import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedCard = ({ 
  title, 
  children 
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // GSAP-powered entrance animation
  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8,
        ease: 'power3.out' }
    );
  }, []);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: -5 
      }}
      className="glass-card"
    >
      <h3 className="text-gradient-warm">
        {title}
      </h3>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};`,
  },
  {
    label: 'CSS Animation',
    lang: 'css',
    code: `@layer components {
  .hero-gradient {
    background: 
      radial-gradient(
        ellipse at 20% 20%,
        rgba(232, 93, 4, 0.2) 0%,
        transparent 50%
      ),
      linear-gradient(
        150deg,
        #c2410c 0%,
        #0a0807 45%
      );
    animation: gradient-shift 8s ease infinite;
  }

  .glow-border::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: conic-gradient(
      from var(--angle),
      #e85d04,
      #ff8c42,
      #f5c542,
      #e85d04
    );
    animation: spin 4s linear infinite;
    border-radius: inherit;
    z-index: -1;
  }
}`,
  },
  {
    label: 'Custom Hook',
    lang: 'ts',
    code: `export const useMousePosition = () => {
  const [position, setPosition] = useState(
    { x: 0, y: 0 }
  );
  const [normalized, setNormalized] = useState(
    { x: 0.5, y: 0.5 }
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      setPosition({ x: e.clientX, y: e.clientY });
      setNormalized({ x, y });
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener(
      'mousemove', handler
    );
  }, []);

  return { position, normalized };
};`,
  },
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect for code
  useEffect(() => {
    if (!isVisible) return;

    const lines = CODE_SNIPPETS[activeTab].code.split('\n');
    setDisplayedLines([]);
    let lineIndex = 0;

    const typeLine = () => {
      if (lineIndex < lines.length) {
        setDisplayedLines(prev => [...prev, lines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(intervalRef.current);
      }
    };

    intervalRef.current = setInterval(typeLine, 80);

    return () => clearInterval(intervalRef.current);
  }, [activeTab, isVisible]);

  const highlightSyntax = (line: string) => {
    // Keywords
    line = line.replace(/\b(import|export|from|const|let|var|return|if|else|useState|useEffect)\b/g, '<span class="code-keyword">$1</span>');
    // Functions
    line = line.replace(/\b([a-z][a-zA-Z0-9]*)\(/g, '<span class="code-function">$1</span>(');
    // Strings
    line = line.replace(/('.*?'|".*?"|`[\s\S]*?`)/g, '<span class="code-string">$1</span>');
    // Comments
    line = line.replace(/(\/\/.*$)/g, '<span class="code-comment">$1</span>');
    // JSX tags
    line = line.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)/g, '$1<span class="code-tag">$2</span>');
    // Attributes
    line = line.replace(/\b(className|onClick|onHover|whileHover|initial|animate|exit|src|alt|href)\b/g, '<span class="code-attr">$1</span>');
    // Numbers
    line = line.replace(/\b(\d+(\.\d+)?)\b/g, '<span style="color: #f5c542">$1</span>');
    // Types
    line = line.replace(/\b(CardProps|MouseEvent|HTMLDivElement|boolean)\b/g, '<span style="color: #ff8c42">$1</span>');
    return line;
  };

  return (
    <section ref={sectionRef} className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl" />
      </div>

      <div className="content-max-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-micro text-accent block mb-4">
            CRAFTED WITH CODE
          </span>
          <h2 className="text-h2 text-gradient-warm mb-6">
            Clean Code, Stunning Results
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            Every animation, every interaction, every pixel is meticulously 
            coded. No shortcuts. No templates. Just pure frontend craftsmanship.
          </p>
        </div>

        {/* Code Editor */}
        <div className="max-w-4xl mx-auto">
          {/* Editor Header */}
          <div className="code-block rounded-t-lg border-b-0 flex items-center gap-3 px-4 py-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex gap-1 ml-4">
              {CODE_SNIPPETS.map((snippet, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 cursor-none ${
                    i === activeTab
                      ? 'bg-accent/20 text-accent border-b-2 border-accent'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {snippet.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code Content */}
          <div className="code-block rounded-b-lg overflow-hidden">
            <div className="flex">
              {/* Line numbers */}
              <div className="select-none py-4 px-4 text-right text-xs text-text-muted/50 border-r border-border-subtle bg-bg-secondary/50">
                {displayedLines.map((_, i) => (
                  <div key={i} className="leading-7">{i + 1}</div>
                ))}
              </div>

              {/* Code */}
              <div className="flex-1 py-4 px-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm">
                  {displayedLines.map((line, i) => (
                    <div
                      key={`${activeTab}-${i}`}
                      className="leading-7"
                      style={{
                        animation: 'fadeInLeft 0.3s ease forwards',
                        animationDelay: `${i * 0.02}s`,
                        opacity: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || '&nbsp;' }}
                    />
                  ))}
                  {/* Cursor */}
                  {displayedLines.length === CODE_SNIPPETS[activeTab].code.split('\n').length && (
                    <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-0.5 align-middle" />
                  )}
                </pre>
              </div>
            </div>

            {/* Status bar */}
            <div className="border-t border-border-subtle px-4 py-2 flex items-center justify-between text-xs text-text-muted">
              <div className="flex gap-4">
                <span>{CODE_SNIPPETS[activeTab].lang.toUpperCase()}</span>
                <span>UTF-8</span>
              </div>
              <div className="flex gap-4">
                <span>{CODE_SNIPPETS[activeTab].code.split('\n').length} lines</span>
                <span className="text-accent"> handcrafted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js', 'Next.js', 'Vite'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-xs tracking-wider uppercase border border-border-subtle text-text-secondary hover:border-accent hover:text-accent hover:shadow-glow-accent transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
