module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
