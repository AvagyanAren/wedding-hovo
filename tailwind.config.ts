import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#F0F3ED",
        sageSoft: "#D8E0CF",
        sage: "#A9B79D",
        sageDeep: "#7E8D72",
        olive: "#8C9A6E",
        leaf: "#6D7D58",
        blush: "#E9C8CC",
        stone: "#6B6E66",
        charcoal: "#3E4338",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-serif)", "serif"],
        script: ["var(--font-script)", "var(--font-display)", "cursive"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
