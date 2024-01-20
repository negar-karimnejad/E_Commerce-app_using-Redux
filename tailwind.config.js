/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      headingFirst: "#010f1c",
      headingSecondary: "#021d35",
    },
  },
  fontFamily: {
    primary: "Poppins",
    secondary: "Pacifico",
  },
};
export const plugins = [];
