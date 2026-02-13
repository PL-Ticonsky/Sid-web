import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://pl-ticonsky.github.io",
  base: "/sid-web/",
  output: "static",
});

