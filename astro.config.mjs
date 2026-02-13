import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://pl-ticonsky.github.io",
  base: "/Sid-web/",
  output: "static",
});
import { defineConfig } from "astro/config";

