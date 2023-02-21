/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
    colors: {
      light: withOpacityValue("--color-light"),
      dark: withOpacityValue("--color-dark"),
      accent: withOpacityValue("--color-accent"),
    },
    fontFamily: {
      //Setup custom fonts..
      // akira: "Akira, sans-serif",
      // acumin: "acumin-pro, sans-serif",
      // "acumin-extra-condensed": "acumin-pro-extra-condensed, sans-serif",
      //Can also just set a default font on the sans like so..
      sans: [
        [
          "Satoshi-Variable",
          "Helvetica Neue",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      ],
    },

    boxShadow: {
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.2);",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.3);",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.5);;",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.6);",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.2)",
      none: "0 0 #0000;",
    },
  },
  plugins: [],
};
