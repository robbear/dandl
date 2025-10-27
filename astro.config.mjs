// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://decencyandlearning.com",
  integrations: [
    starlight({
      title: "Decency and Learning",
      favicon: "/dandl.png",
      logo: {
        src: "./src/assets/dandl.svg",
      },
      components: {
        // Override the default Pagination component.
        Pagination: './src/components/starlight/Pagination.astro',
      },
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
          label: "Science",
          autogenerate: { directory: "science" },
        },
        {
          label: "U.S. Constitution",
          autogenerate: { directory: "constitution" },
        },
      ],
    }),
  ],

  adapter: vercel(),
});
