/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        lightCyan: "hsl(180, 31%, 95%)",
        darkCyan2: "hsl(180, 8%, 52%)",
        darkCyan3: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
