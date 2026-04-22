/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0807',
        'bg-secondary': '#120e0b',
        'bg-card': '#1a1512',
        'bg-input': '#181410',
        'text-primary': '#faf6f3',
        'text-secondary': '#e8ddd5',
        'text-muted': '#947a6b',
        'accent': '#e85d04',
        'accent-light': '#ff8c42',
        'accent-gradient-start': '#c2410c',
        'accent-gradient-mid': '#9a3412',
        'accent-gradient-end': '#e85d04',
        'border-subtle': '#2a1f18',
        'border-accent': '#4a2e18',
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
        'glow-accent': '0 0 30px rgba(232,93,4,0.3)',
        'glow-card': 'inset 0 0 60px rgba(232,93,4,0.05)',
        'glow-card-hover': 'inset 0 0 60px rgba(232,93,4,0.1)',
        'card-lift': '0 8px 40px rgba(232,93,4,0.08)',
        'card-lift-lg': '0 12px 48px rgba(232,93,4,0.06)',
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
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
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
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
