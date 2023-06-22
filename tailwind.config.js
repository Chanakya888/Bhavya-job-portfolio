/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      colors: {
        primaryGreen: "#1b812c",
        secondaryBlue: "#0800F3",
        secondaryPurple: "#CF72EC",
        browserProjectBlue: "#487AFB",
        backgroundGray: "#FBFBFB",
        homePurple: "#CE72EF",
        homeYellow: "#FFF175",
      },
    },
  },
  plugins: [],
};
