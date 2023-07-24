const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    plugin(function({ addVariant }) {
      addVariant("child", "& > *")
    }),
    plugin(function({ addUtilities }) {
      const utils = {
        ".mobile-height-screen": { height: "100dvh" },
      }
      addUtilities(utils)
    }),
  ],
}
