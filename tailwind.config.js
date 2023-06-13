/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#87d673",
      secondary: "#e6e6e6",
      gray: "#adadad",
      "gray-dark": "#d9d9d9",
      dark: "#1d1d1d",
      danger: "#df8080",
      "danger-active": "#ec6464",
      white: "#ffffff",
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ['"Fira Sans"', "sans-serif"],
    },
    textColor: {
      "dark-70": "rgba(29, 29, 29, 0.7)",
    },
  },
  plugins: [],
};
