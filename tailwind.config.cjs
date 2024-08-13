const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

/** @type {import("tailwindcss").Config} */
const colorsThemePreset = {
  preset: [],
  darkMode: "class",
  theme: {
    colors: {
      background: {
        DEFAULT: "oklch(97% 0 235 / <alpha-value>)",
        dark: "oklch(30% 0.020 235 / <alpha-value>)",
      },
      error: {
        DEFAULT: "oklch(70.00%  0.30 13 / <alpha-value>)",
        dark: "oklch(69.00% 0.16 13 / <alpha-value>)",
      },
      neutral: {
        "50": "oklch(99.00% 0.00 235 / <alpha-value>)",
        "100": "oklch(94.00% 0.002 235 / <alpha-value>)",
        "200": "oklch(86.00% 0.004 235 / <alpha-value>)",
        "300": "oklch(80.00% 0.004 235 / <alpha-value>)",
        "400": "oklch(70.00% 0.006 235 / <alpha-value>)",
        "500": "oklch(60.00% 0.006 235 / <alpha-value>)",
        "600": "oklch(50.00% 0.006 235 / <alpha-value>)",
        "700": "oklch(40.00% 0.006 235 / <alpha-value>)",
        "800": "oklch(30.00% 0.006 235 / <alpha-value>)",
        "900": "oklch(25.00% 0.006 235 / <alpha-value>)",
        "950": "oklch(19.60% 0.006 235 / <alpha-value>)",
      },

      primary: {
        "50": "oklch(95.00% 0.02 235 / <alpha-value>)",
        "100": "oklch(91.00% 0.04 235 / <alpha-value>)",
        "200": "oklch(88.00% 0.07 235 / <alpha-value>)",
        "300": "oklch(84.0% 0.11 235 / <alpha-value>)",
        "400": "oklch(70.00% 0.15 235 / <alpha-value>)",
        "500": "oklch(59.00% 0.16 235 / <alpha-value>)",
        "600": "oklch(55.00% 0.15 235 / <alpha-value>)",
        "700": "oklch(50.00% 0.12 235 / <alpha-value>)",
        "800": "oklch(44.00% 0.10 235 / <alpha-value>)",
        "900": "oklch(37.00% 0.09 235 / <alpha-value>)",
        "950": "oklch(30.00% 0.06 235 / <alpha-value>)",
      },
      secondary: {
        "50": "oklch(95.00% 0.02 190 / <alpha-value>)",
        "100": "oklch(91.00% 0.05 190 / <alpha-value>)",
        "200": "oklch(88.00% 0.07 190 / <alpha-value>)",
        "300": "oklch(84.0% 0.11 190 / <alpha-value>)",
        "400": "oklch(70.00% 0.15 190 / <alpha-value>)",
        "500": "oklch(59.00% 0.13 190 / <alpha-value>)",
        "600": "oklch(55.00% 0.10 190 / <alpha-value>)",
        "700": "oklch(50.00% 0.08 190 / <alpha-value>)",
        "800": "oklch(44.00% 0.075 190 / <alpha-value>)",
        "900": "oklch(37.00% 0.06 190 / <alpha-value>)",
        "950": "oklch(30.00% 0.06 190 / <alpha-value>)",
      },
      danger: {
        "50": "oklch(95.00% 0.0293 13 / <alpha-value>)",
        "100": "oklch(91.00% 0.05 13 / <alpha-value>)",
        "200": "oklch(88.00% 0.07 13 / <alpha-value>)",
        "300": "oklch(84.0% 0.09 13 / <alpha-value>)",
        "400": "oklch(70.00% 0.18 13 / <alpha-value>)",
        "500": "oklch(59.00% 0.23 13 / <alpha-value>)",
        "600": "oklch(55.00% 0.21 13 / <alpha-value>)",
        "700": "oklch(50.00% 0.18 13 / <alpha-value>)",
        "800": "oklch(44.00% 0.14 13 / <alpha-value>)",
        "900": "oklch(37.00% 0.10 13 / <alpha-value>)",
        "950": "oklch(30.00% 0.08 13 / <alpha-value>)",
      },
      success: {
        "50": "oklch(95.00% 0.02 150 / <alpha-value>)",
        "100": "oklch(91.00% 0.07 150 / <alpha-value>)",
        "200": "oklch(88.00% 0.12 150 / <alpha-value>)",
        "300": "oklch(84.0% 0.14 150 / <alpha-value>)",
        "400": "oklch(70.00% 0.17 150 / <alpha-value>)",
        "500": "oklch(59.00% 0.19 150 / <alpha-value>)",
        "600": "oklch(55.00% 0.15 150 / <alpha-value>)",
        "700": "oklch(50.00% 0.13 150 / <alpha-value>)",
        "800": "oklch(44.00% 0.12 150 / <alpha-value>)",
        "900": "oklch(37.00% 0.09 150 / <alpha-value>)",
        "950": "oklch(30.00% 0.08 150 / <alpha-value>)",
      },
      white: colors.white,
      transparent: colors.transparent,
      current: colors.current,
      hue: {
        "50": "oklch(var(--hue-50) / <alpha-value>)",
        "100": "oklch(var(--hue-100) / <alpha-value>)",
        "200": "oklch(var(--hue-200) / <alpha-value>)",
        "300": "oklch(var(--hue-300) / <alpha-value>)",
        "400": "oklch(var(--hue-400) / <alpha-value>)",
        "500": "oklch(var(--hue-500) / <alpha-value>)",
        "600": "oklch(var(--hue-600) / <alpha-value>)",
        "700": "oklch(var(--hue-700) / <alpha-value>)",
        "800": "oklch(var(--hue-800) / <alpha-value>)",
        "900": "oklch(var(--hue-900) / <alpha-value>)",
        "950": "oklch(var(--hue-950) / <alpha-value>)",
      },
    },
  },
}

/** @type {import("tailwindcss").Config} */
const customPreset = {
  presets: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--custom-font)"],
      },
      borderColor: {
        DEFAULT: "oklch(86.00% 0.004 235 / <alpha-value>)",
      },
      ringWidth: {
        DEFAULT: "2px",
      },
      ringOffsetColor: {
        DEFAULT: colors.transparent,
      },
      padding: {
        "page-default": "min(2rem, min(4vw, 4vh))",
        "navbar-default": "min(1rem, min(2vw, 2vh))",
      },
      margin: {
        "page-default": "min(2rem, min(4vw, 4vh))",
      },
      height: {
        40: "2.66rem",
        96: "6rem",
        128: "8rem",
        256: "16rem",
      },
      maxHeight: {
        96: "6rem",
        128: "8rem",
        256: "16rem",
      },
      animation: {
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        "rolling": "rolling 2s infinite ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        rolling: {
          from: { transform: "translateX(-100%) scaleX(0.5)" },
          to: { transform: "translateX(100%) scaleX(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [
    customPreset,
    colorsThemePreset,
  ],
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    plugin(function({ addVariant }) {
      addVariant("child-header", "& > :is(h1,h2,h3,h4,h5)")
    }),
    plugin(function({ addUtilities }) {
      const utils = {
        ".writing-vertical": { writingMode: "vertical-lr" },
        ".writing-horizontal": { writingMode: "horizontal-lr" },
      }
      addUtilities(utils)
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "h-dynamic-screen": value => ({
          height: `${value}dvh`,
        }),
      }, {
        values: {
          0: "0",
          25: "25",
          50: "50",
          75: "75",
          100: "100",
        },
      })
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "typography": value => ({
          color: `oklch(20% 0.039 235 / ${value})`,
        }),
      }, {
        values: {
          body: "0.70",
          header: "0.85",
          caption: "0.6",
        },
      })
      matchUtilities({
        "typography-dark": value => ({
          color: `oklch(95% 0.01 235 / ${value})`,
        }),
      }, {
        values: {
          body: "0.85",
          header: "0.95",
          caption: "0.7",
        },
      })
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "grid-fit": value => ({
          gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
        "grid-fill": value => ({
          gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
      }, {
        values: {
          15: "15rem",
          20: "20rem",
          25: "25rem",
          30: "30rem",
          35: "35rem",
          40: "40rem",
        },
      })
    }),
    plugin(function({ matchVariant }) {
      matchVariant("not", (value) => `&:not(${value})`)
    }),
  ],
}
