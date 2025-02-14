import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorDarkHeading: "var(--color-dark-heading)",
      },
      fontFamily: {
        anybody: ["var(--fontFamily-anybody)"],
        armio: "var(--armio)",
      },
      backgroundImage: {
        bgRedV1: "var(--color-red-v1)",
        bgRedV2: "var(--color-red-v2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
