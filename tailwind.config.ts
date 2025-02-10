import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white":"#FBFBFC",
        "gray-10":"#EFF0F0",
        "gray-20":"#BCBEBD",
        "gray-30": "#6B7271",
        "green-bg": "#ECF4E9",
        "green-light": "#BBF49C",
        "green-dark": "#1E4841",
        black: "currentColor",
      },
    },
  },
  plugins: [],
} satisfies Config;
