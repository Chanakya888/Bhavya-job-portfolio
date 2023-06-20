/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#1b812c",
        secondaryBlue: "#0800F3",
        secondaryPurple: "#CF72EC",
        browserProjectBlue: "#487AFB",
        backgroundGray: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
