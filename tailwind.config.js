/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}", // Nuxt 3 uses `app/`
    "./components/**/*.{vue,js,ts}", // in case you use `components/`
    "./layouts/**/*.{vue,js,ts}", // for layouts
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
