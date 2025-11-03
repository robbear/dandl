// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';
const speedInsights = IS_PRODUCTION ? "/_vercel/speed-insights/script.js" : "";
const insights = IS_PRODUCTION ? "/_vercel/insights/script.js" : "";

// https://astro.build/config
export default defineConfig({
  site: "https://decencyandlearning.com",
  integrations: [
    starlight({
      title: "Decency and Learning",
      favicon: "/dandl.svg",
      logo: {
        src: "./src/assets/dandl.svg",
      },
      components: {
        // Override the default Pagination component.
        Pagination: "./src/components/starlight/Pagination.astro",
      },
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-Q36800T3QX",
          },
        },
        {
          tag: "script",
          content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q36800T3QX');
      `,
        },
        {
          tag: "script",
          content: `window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };`,
        },
        {
          tag: "script",
          attrs: {
            src: speedInsights,
            async: true,
          },
        },
        {
          tag: "script",
          content: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
        },
        {
          tag: "script",
          attrs: {
            src: insights,
            async: true,
          },
        },
      ],
      social: [],
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
