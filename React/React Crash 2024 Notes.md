# To Create React Project with Vite

- navigate to folder "npm create vite@latest project-name"
- in vite.config.js change the default port to 3000, add a server object to defineConfig (server: {port: 3000,})
- run npm install
- change title in index.html
- delete App.css (using index.css, which you should clear)
- remove content in App.jsx

## Installing Tailwind

- follow instructions on https://tailwindcss.com/docs/installation/using-vite
- in tailwind config, the code should be **note, on new version there is no longer a tailwind.config.js, so need to figure out how to do this otherwise:

<!-- `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};` -->




