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
          'url("https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg")',
        pineapple:
          'url("https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        avocado:
          'url("https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        pinkSmoothie:
          'url("https://plus.unsplash.com/premium_photo-1676642615413-e18b508a0ff3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21vb3RoaWV8ZW58MHwwfDB8fHww")',
        multiColorSmoothie:
          'url("https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        strawSmoothie:
          'url("https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtb290aGllfGVufDB8MHwwfHx8MA%3D%3D")',
        berries:
          'url("https://images.pexels.com/photos/1120575/pexels-photo-1120575.jpeg")',
      },
    },
  },
  plugins: [],
};
export default config;
