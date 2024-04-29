const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      '2xsm': '310px',
      'xsm': '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    "colors": {
      "Background": "#2C0076",
      "Sec": "#7916ff",
      'white': '#ffffff',
      "transparent": "transparent",
      "Primary": {
        "P50": "#f3f1ff",
        "P75": "#f3f1ff",
        "P100": "#d9ceff",
        "P200": "#d9ceff",
        "P300": "#bea6ff",
        "P400": "#9f75ff",
        "P500": "#843dff"
      },
      "Danger": {
        "D50": "#fee7e7",
        "D75": "#fb9d9d",
        "D100": "#fa7474",
        "D200": "#f83939",
        "D300": "#f61010",
        "D400": "#ac0b0b",
        "D500": "#960a0a"
      },
      "Warning": {
        "W50": "#fff9e8",
        "W75": "#fde89f",
        "W100": "#fcdf77",
        "W200": "#fbd13c",
        "W300": "#fac714",
        "W400": "#af8b0e",
        "W500": "#99790c"
      },
      "Success": {
        "S50": "#e8fbf1",
        "S75": "#9fedc5",
        "S100": "#78e6ad",
        "S200": "#3edb8a",
        "S300": "#16d472",
        "S400": "#0f9450",
        "S500": "#0d8146"
      },
      "Black": {
        "B0": "#ffffff",
        "B10": "#fafafa",
        "B20": "#f5f5f5",
        "B30": "#ebebeb",
        "B40": "#dedede",
        "B50": "#bfbfbf",
        "B60": "#b0b0b0",
        "B70": "#a3a3a3",
        "B80": "#949494",
        "B90": "#858585",
        "B100": "#757575",
        "B200": "#666666",
        "B300": "#575757",
        "B400": "#4a4a4a",
        "B500": "#3b3b3b",
        "B600": "#2e2e2e",
        "B700": "#1c1c1c",
        "B800": "#0d0d0d",
        "B900": "#000000"
      }
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.9375rem",
      "base": "1.125rem",
      "lg": "1.25rem",
      "xl": "1.375rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.625rem",
      "6xl": "3.375rem"
    },
    "fontFamily": {
      "montserrat": "Montserrat"
    },
    "borderRadius": {
      "none": "0",
      "xs": "0.0625rem",
      "sm": "0.125rem",
      "default": "0.25rem",
      "lg": "0.3125rem",
      "xl": "0.375rem",
      "2xl": "0.4375rem",
      "3xl": "0.625rem",
      "4xl": "0.75rem",
      "5xl": "1.25rem",
      "6xl": "1.375rem",
      "7xl": "1.625rem",
      "8xl": "1.875rem",
      "9xl": "2.5rem",
      "10xl": "4.375rem",
      "11xl": "4.75rem"
    },
  },
  plugins: [],
}