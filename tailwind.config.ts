const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#800020",
          light: "#A52A2A",
          dark: "#4C0013",
        },
        "midnight-blue": {
          DEFAULT: "#191970",
          light: "#1C1C3C",
          dark: "#121230",
        },
        silver: "#C0C0C0",
        emerald: {
          DEFAULT: "#2E8B57",
          dark: "#22543D",
        },
        gold: "#FFD700",
        plum: {
          DEFAULT: "#4B0082",
          dark: "#36006A",
        },
        lavender: "#E6E6FA",
        rust: {
          DEFAULT: "#B7410E",
          dark: "#8B2D0B",
        },
        cream: "#FFFDD0",
        teal: {
          DEFAULT: "#008080",
          dark: "#004D4D",
        },
        coral: {
          DEFAULT: "#FF7F50",
          dark: "#CC663D",
        },
        charcoal: {
          DEFAULT: "#333333",
          dark: "#1A1A1A",
        },
        copper: "#B87333",
        navy: {
          DEFAULT: "#000080",
          dark: "#00004D",
        },
        "forest-green": {
          DEFAULT: "#228B22",
          dark: "#186618",
        },
        ivory: "#FFFFF0",
        "blush-pink": "#FFC0CB",
        "slate-gray": {
          DEFAULT: "#708090",
          dark: "#4A5666",
        },
        "electric-blue": "#7DF9FF",
        maroon: {
          DEFAULT: "#800000",
          dark: "#4D0000",
        },
        "rose-gold": "#B76E79",
        olive: {
          DEFAULT: "#556B2F",
          dark: "#3B4A1E",
        },
        mustard: "#FFDB58",
        chocolate: {
          DEFAULT: "#7B3F00",
          dark: "#522A00",
        },
        champagne: "#F7E7CE",
        indigo: {
          DEFAULT: "#4B0082",
          dark: "#2D004F",
        },
        mint: {
          green: "#98FF98",
        },
        "dark-purple": {
          DEFAULT: "#301934",
          dark: "#1E1120",
        },
        "light-gold": "#FFD700",
        sapphire: {
          DEFAULT: "#0F52BA",
          dark: "#0B3A7C",
        },
        taupe: {
          DEFAULT: "#483C32",
          dark: "#2E2820",
        },
        rose: "#FF007F",
        // Vibrant Orange
        "vibrant-orange": "#FF4500",
        "vibrant-orange-hover": "rgb(255, 123, 0)",
        // New vibrant orange color added
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
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 8s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  variants: {},
};

export default config;
