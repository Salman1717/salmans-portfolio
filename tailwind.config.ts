// tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "Inter", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        // big hero sizes (useable classes: text-7xl, text-8xl etc or custom)
        "display-1": ["96px", { lineHeight: "0.98", fontWeight: "700", letterSpacing: "-0.02em" }],
        "display-2": ["72px", { lineHeight: "1.0", fontWeight: "600" }],
      },
      spacing: {
        hero: "6.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "2.5rem",
          xl: "4rem",
        },
      },
      colors: {
        // keep your var-based colors; your file already has this mapping
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
