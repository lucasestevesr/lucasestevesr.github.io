import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

/**
 * Para GitHub Pages:
 * - `SITE_URL` -> domínio principal (ex.: https://usuario.github.io)
 * - `BASE_PATH` -> caminho do repositório (ex.: /repositorio/)
 *   Se publicar em https://usuario.github.io/ (sem repo), use "/".
 */
const site = process.env.SITE_URL ?? "https://usuario.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark"
      },
      wrap: false
    }
  }
});
