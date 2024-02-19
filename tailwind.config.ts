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
        dragonfruit:
          'url("https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        pineapple:
          'url("https://images.pexels.com/photos/137141/pexels-photo-137141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        avocado:
          'url("https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        pinkSmoothie:
          'url("https://plus.unsplash.com/premium_photo-1676642615413-e18b508a0ff3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21vb3RoaWV8ZW58MHwwfDB8fHww")',
        multiColorSmoothie:
          'url("https://images.pexels.com/photos/8215110/pexels-photo-8215110.jpeg")',
        strawSmoothie:
          'url("https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtb290aGllfGVufDB8MHwwfHx8MA%3D%3D")',
      },
    },
  },
  plugins: [],
};
export default config;
