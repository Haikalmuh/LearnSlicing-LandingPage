import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // penting! pastikan semua file TSX masuk sini
  ],
  theme: {
    extend: {
      spacing: {
        "221": "221px",
        "202": "202px",
        "60": "60px",
      },
      colors: {
        brand: "#16a34a", // hijau utama
        "brand-dark": "#15803d", // hover
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // padding kiri-kanan default
        sm: "1rem",
        md: "2rem",
        lg: "3rem", // di layar besar padding agak lebih luas
        xl: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px", // custom biar sesuai figma
      },
    },
  },
  plugins: [],
};

export default config;
