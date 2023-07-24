const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.emerald,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    plugin(function({ addVariant }) {
      addVariant("child", "& > *")
    }),
    plugin(function({ addUtilities }) {
      const utils = {
        ".h-dynamic-screen": { height: "100dvh" },
        ".h-dynamic-80": { height: "80dvh" },
      }
      addUtilities(utils)
    }),
  ],
}
