/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      FFFF: "#FFF",
      222: "#222",
      "7C5DFA": "#7C5DFA",
      "5F6FAB": "#5F6FAB",
      "343b4a": "#343b4a",
      "00aecb": "#00aecb",
      "5FB4A2": "#5FB4A2",
      "203A4C": "#203A4C",
      "5964E0": "#5964E0",
      F7CE5B: "#F7CE5B",
      D87D4A: "#D87D4A",
      AD1FEA: "#AD1FEA",
      F43030: "#F43030",
      EAEAEB: "#EAEAEB",
      FAFAFA: "#FAFAFA",
    },
    fontFamily: {
      jost: "Jost, sans-serif",
      poppins: "Poppins, sans-serif",
      neon: "Neoneon,sans-serif",
      Philosopher: "Philosopher",
      monoton: "Monoton, cursive",
      IBM: "IBM Plex Mono",
    },
    fontSize: {
      "heading-1": [
        "54px",
        { lineHeight: "35px", letterSpacing: "-1px", fontWeight: "bold" },
      ],
      "heading-2": [
        "34px",
        { lineHeight: "32px", letterSpacing: "-0.5px", fontWeight: "bold" },
      ],
      "heading-3": [
        "26px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.38px",
          fontWeight: "bold",
        },
      ],
      "body-1": ["18px", { lineHeight: "35px", letterSpacing: "-0.25px" }],
      "body-2": ["11px", { lineHeight: "18px", letterSpacing: "-0.23px" }],
    },

    extend: {
      width: {
        141: "141px",
      },
      height: {
        34: "34px",
        48: "48px",
      },
      padding: {
        "6px": "6px",
      },
      borderRadius: {
        "20px": "20px",
      },
      margin: {
        157: "157px",
        202: "202px",
      },
    },
    screens: {
      sm: "640px",
      tablet: "768px",
      laptop: "1024px",
      xl: "1280px",
      desktop: "1440px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
