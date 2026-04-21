/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#03020f',
        'bg-secondary': '#0a0918',
        'bg-card': '#11102a',
        'bg-input': '#0f0e23',
        'text-primary': '#f5f3ff',
        'text-secondary': '#c9c5e8',
        'text-muted': '#6b6694',
        'accent': '#6f00ff',
        'accent-light': '#a855f7',
        'accent-gradient-start': '#3806b9',
        'accent-gradient-mid': '#440877',
        'accent-gradient-end': '#6f00ff',
        'border-subtle': '#1a1835',
        'border-accent': '#2a2059',
        'white': '#ffffff',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      spacing: {
        'nav': '72px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'glow-violet': '0 0 30px rgba(111,0,255,0.3)',
        'glow-card': 'inset 0 0 60px rgba(111,0,255,0.05)',
        'glow-card-hover': 'inset 0 0 60px rgba(111,0,255,0.1)',
        'card-lift': '0 8px 40px rgba(111,0,255,0.08)',
        'card-lift-lg': '0 12px 48px rgba(111,0,255,0.06)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "carousel-row1": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "carousel-row2": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "carousel-row1": "carousel-row1 40s linear infinite",
        "carousel-row2": "carousel-row2 45s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
