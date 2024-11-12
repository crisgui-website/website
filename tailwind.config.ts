import type { Config } from "tailwindcss";

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
    backgroundImage: {
      "hero-home": "url('/hero-home.svg')",
      "hero-company": "url('/hero-company.svg')",
      "hero-products": "url('/hero-products.svg')",
      ctaVector: "url('/cta-vector.svg')",
      product1: "url('/images/main-products/product-1.svg')",
      product2: "url('/images/main-products/product-2.svg')",
      product3: "url('/images/main-products/product-3.svg')",
      product4: "url('/images/main-products/product-4.svg')",
    },
    colors: {
      white: {
        100: "#F3F3F6",
      },
      orange: {
        50: "#FEF5EE",
        100: "#FDE9D7",
        200: "#FBCEAD",
        300: "#F7AC7A",
        400: "#F38044",
        500: "#F06124",
        600: "#E14415",
        700: "#BB3113",
        800: "#942918",
        900: "#782416",
      },
      blue: {
        50: "#F4F6FA",
        100: "#E5E8F4",
        200: "#D1D7EC",
        300: "#B2BDDE",
        400: "#8D9BCD",
        500: "#5F66B1",
        600: "#5456A1",
        700: "#494984",
        800: "#3E3F6A",
        900: "#2F2F4C",
      },
      gray: {
        0: "#FFFFFF",
        100: "#EEEEF0",
        200: "#D8DADF",
        300: "#B6B9C3",
        400: "#8F93A1",
        500: "#717686",
        600: "#5B5F6E",
        700: "#4A4C5A",
        800: "#383942",
        900: "#25262C",
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
