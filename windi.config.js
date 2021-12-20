import { defineConfig } from "windicss/helpers";

const config = defineConfig({
  extract: {
    include: ["src/**/*.{html,vue,jsx,tsx,svelte,ejs}"],
  },
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
    },
  },
  /* ... */
});

export default config;
