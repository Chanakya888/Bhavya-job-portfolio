/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
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
