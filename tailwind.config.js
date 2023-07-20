/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Montserrat"],
      hero: ["Raleway"],
      secondary: ["Jost"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/hero.webp')",
        "contact-image": "url('/contact.webp')",
      },
      listStyleImage: {
        polygon: "url('/list_image.png')",
      },
    },
  },
  plugins: [],
};
