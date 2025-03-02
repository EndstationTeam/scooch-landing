/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#151818",
        white: "#fff",
        gainsboro: "#dadada",
        orange: "#fbb031",
        grey: "#e9ecec",
        blue: "#54c5d4",
        green: "#a8cf38",
        gold: "#ffd200",
        "grey-2": "#888",
      },
      spacing: {},
      fontFamily: {
        h2: "Poppins, sans-serif",
        sans: "Poppins, sans-serif",
      },
      borderRadius: {
        xl: "20px",
        "27xl": "46px",
        "2xs": "11px",
        "25xl": "44px",
        "28xl": "47px",
        "21xl": "40px",
        "192xl": "211px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      "21xl": "40px",
      "13xl": "32px",
      xs: "12px",
      "2xs": "11px",
      smi: "13px",
      xl: "20px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
