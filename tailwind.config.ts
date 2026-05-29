import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        "bg-1": "#0f0f11",
        "bg-2": "#161619",
        "bg-3": "#1c1c20",
        border: "rgba(255,255,255,0.08)",
        "border-2": "rgba(255,255,255,0.14)",
        fg: "#f5f5f7",
        "fg-muted": "rgba(255,255,255,0.56)",
        "fg-subtle": "rgba(255,255,255,0.40)",
        blue: "#0099ff",
        "blue-bright": "#38b6ff",
        violet: "#6366f1",
        purple: "#a855f7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm2: "10px",
        DEFAULT: "14px",
        lg2: "20px",
      },
      boxShadow: {
        soft: "0 25px 50px -12px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.4)",
      },
      maxWidth: {
        site: "1120px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
