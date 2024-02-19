import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        strawberry:
          'url("https://images.pexels.com/photos/566888/pexels-photo-566888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        banana:
          'url("https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      },
    },
  },
  plugins: [],
};
export default config;
