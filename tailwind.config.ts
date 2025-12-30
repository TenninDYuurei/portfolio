import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-black":"#19171b",
        "secondary-black":"#2f2921",
        "primary-gold":"#9e8123",
        "secondary-gold":"#563a17",
        "dark-black":"#252628",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
 
export default config;