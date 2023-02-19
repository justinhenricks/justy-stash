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
  },
  plugins: [],
};
