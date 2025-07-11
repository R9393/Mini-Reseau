module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Thème Reddit-like
        'reddit-dark': '#1a1a1b',
        'reddit-light': '#f6f7f8',
        'reddit-orange': '#ff4500',
        'reddit-gray': '#818384',
        'reddit-blue': '#0079d3',
      },
    },
  },
  plugins: [],
}