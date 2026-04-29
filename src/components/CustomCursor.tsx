import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  // Use refs for hover state so we don't re-create listeners on state change
  const hoveringRef = useRef(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    hoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }
    };

    const onMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };
    const onMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    // Track interactive elements — store handlers so we can clean them up
    const hoverEnterHandler = () => {
      hoveringRef.current = true;
      setIsHovering(true);
    };
    const hoverLeaveHandler = () => {
      hoveringRef.current = false;
      setIsHovering(false);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .tilt-card, .magnetic-btn');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', hoverEnterHandler);
        el.addEventListener('mouseleave', hoverLeaveHandler);
      });
    };

    const removeHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .tilt-card, .magnetic-btn');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', hoverEnterHandler);
        el.removeEventListener('mouseleave', hoverLeaveHandler);
      });
    };

    let rafId: number;
    const raf = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px)`;
      }
      if (dot) {
        dot.style.transform = `translate(${targetRef.current.x - 4}px, ${targetRef.current.y - 4}px)`;
      }

      rafId = requestAnimationFrame(raf);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      removeHoverListeners();
    };
  }, []); // Run once on mount — no dependency re-runs

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(232, 93, 4, 0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s',
          opacity: isVisible ? 1 : 0,
          mixBlendMode: 'difference',
        }}
        className={isHovering ? '!w-16 !h-16 !border-accent !bg-accent/10' : ''}
      />
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#e85d04',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
