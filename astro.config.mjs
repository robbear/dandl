// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Decency and Learning",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Ethics",
          autogenerate: { directory: "ethics" },
        },
        {
          label: "Government",
          autogenerate: { directory: "government" },
        },
        {
          label: "Science",
          autogenerate: { directory: "science" },
        },
      ],
    }),
  ],

  adapter: vercel(),
});
