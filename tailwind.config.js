// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A0DAD", // electric violet
        secondary: "#1E3A8A", // deep navy
        background: "#F5F5F5",
        surface: "#FFFFFF",
        accent: "#7C3AED",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444"
      },
      borderRadius: {
        DEFAULT: "0.5rem"
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.1)"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", ""],
        display: [""],
      }
    }
  },
  plugins: []
};
