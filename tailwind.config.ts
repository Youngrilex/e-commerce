import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        // You can add more font families as needed
      },
      colors: {
        primary: "#f08916", // Change this to your chosen primary color
        secondary: "#6C757D", // Change this to your chosen secondary color
        accent: "#fff5d6", // Change this to your chosen accent color
      },
    },
  },
  plugins: [],
};
export default config;
