import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        "bg-sunken": "var(--bg-sunken)",
        "bg-elevated": "var(--bg-elevated)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-subtle": "var(--fg-subtle)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        "accent-ghost": "var(--accent-ghost)",
        "status-live": "var(--status-live)",
        "status-progress": "var(--status-progress)",
        "status-beta": "var(--status-beta)",
        "status-rd": "var(--status-rd)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-instrument)", "serif"],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.025em",
        tight: "-0.015em",
      },
      animation: {
        "grid-drift": "gridDrift 30s linear infinite",
        "glow-float": "glowFloat 12s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "bar-fill": "barFill 3s ease-out infinite",
        "loader-pulse": "loaderPulse 1.2s ease-in-out infinite",
        "loader-ring": "loaderRing 1.6s ease-out infinite",
      },
      keyframes: {
        gridDrift: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "56px 56px" },
        },
        glowFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, 30px) scale(1.05)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        barFill: {
          "0%": { width: "20%" },
          "50%": { width: "85%" },
          "100%": { width: "20%" },
        },
        loaderPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        loaderRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
