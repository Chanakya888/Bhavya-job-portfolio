/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "14px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px", "36px"],
      "4xl": ["36px", "40px"],
      "5xl": ["48px", "1"],
      "8xl": ["96px", "1"],
    },
    extend: {
      fontSize: {
        "3.5xl": "32px",
      },
      padding: {
        18: "72px",
      },
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
        backgroundGray: "#F1F1F1",
        homePurple: "#CE72EF",
        homeYellow: "#FFF175",
        cream: "#F3E7D2",
        pincodeYellow: "#FFFDAA",
        transparentPincodeYellow: "#F7F5A0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
