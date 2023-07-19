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
        "hero-image": "url('/hero.png')",
        "contact-image": "url('/contact.png')",
      },
      listStyleImage: {
        polygon: "url('/list_image.png')",
      },
    },
  },
  plugins: [],
};
