module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      colors: {
        // Configure your color palette here
        transparent: "transparent",
        light: {
          100: "#F8FAFC",
          200: "#ECEBF0",
          300: "#D5D6DF",
          400: "#878998",
          500: "#7A7D89",
          600: "#696977",
        },
        dark: {
          100: "#575968",
          200: "#525365",
          300: "#404254",
          400: "#3F424D",
          500: "#383B47",
          600: "#323542",
        },
        blue: {
          100: "#6CCCFF",
          200: "#6E7BF9",
          300: "#182FFE",
        },
      },
      fontSize: {
        "2xs": "0.6rem",
      },
      dropShadow: {
        "3xl": "5px 5px 15px rgb(0 0 0 / 75%)",
      },
    },
  },
  plugins: [],
};