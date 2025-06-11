/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // If you have an App.tsx/App.js directly in your project root, keep this line:
    // "./App.{js,jsx,ts,tsx}",
    // This line is CRUCIAL for your Expo Router files in the 'app' directory:
    "./app/**/*.{js,jsx,ts,tsx}",
    // Keep this if you have a separate components folder:
    "./components/**/*.{js,jsx,ts,tsx}",
    // Add any other specific paths where you use Tailwind classes
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
