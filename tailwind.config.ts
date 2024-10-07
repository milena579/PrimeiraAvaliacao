import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branco: "var(--white)",
        preto: "var(--black)",
        azul: "var(--menu)",
        amarelo1: "var(--amareloEscuro)",
        amarelo2: "var(--amareloMedio)",
        amarelo3: "var(--amareloClaro)"
      },
    },
  },
  plugins: [],
};
export default config;