import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleOnMount?: boolean;
  scrambleOnHover?: boolean;
  duration?: number;
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({
  text,
  className = '',
  scrambleOnMount = true,
  scrambleOnHover = false,
  duration = 1200,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number>(0);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number }[]>([]);
  const frameCounter = useRef(0);
  const isAnimating = useRef(false);

  const scramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const length = text.length;
    queueRef.current = [];

    for (let i = 0; i < length; i++) {
      const from = displayText[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * (duration / 16));
      const end = start + Math.floor(Math.random() * (duration / 16));
      queueRef.current.push({ from, to, start, end });
    }

    frameCounter.current = 0;
    cancelAnimationFrame(frameRef.current);

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i];
        let char = from;

        if (frameCounter.current >= end) {
          complete++;
          char = to;
        } else if (frameCounter.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        output += char;
      }

      setDisplayText(output);
      frameCounter.current++;

      if (complete === queueRef.current.length) {
        isAnimating.current = false;
      } else {
        frameRef.current = requestAnimationFrame(update);
      }
    };

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    if (scrambleOnMount) {
      scramble();
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
      style={{ fontFamily: "'Space Grotesk', monospace" }}
    >
      {displayText}
    </span>
  );
}
