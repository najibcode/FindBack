export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',    // Clean white
        surface: '#F7F5FF',       // Light purple-tinted
        border: '#2A2733',
        divider: '#DDD6F5',       // Soft purple divider
        primary: '#6A1B9A',       // Rajalakshmi Purple
        'primary-hover': '#5A1582',
        accent: '#D97706',        // Gold accent
        'accent-hover': '#B45309',
        text: {
          primary: '#1C1830',     // Near-black with purple undertone
          muted: '#6B6780',       // Muted grey-purple
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


