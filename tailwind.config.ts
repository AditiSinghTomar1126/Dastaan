import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
 
    extend: {
         fontFamily: {
  heading: ["var(--font-heading)"],
  body: ["var(--font-body)"],
},
      colors: {
       
        primary: "#ff6b2c", //rgba(255,107,44,)
        secondary: "#120d0a",
        accent: "#F3A953",
        dark: "#120d0a",
        light: "#f5efe8",
        background:"#191716" 
      },
    },
  },
  plugins: [],
};

export default config;
