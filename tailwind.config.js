/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          "primary": "#FDE5C0",
          "secondary": "#6C3ECF",
          "accent": "#F07F23",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      // "light", // Default DaisyUI light theme
      // "dark",  // Default DaisyUI dark theme
    ],
  },
}

