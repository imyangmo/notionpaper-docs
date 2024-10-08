import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "NOTIONPAPER",
      social: {
        github: "https://github.com/imyangmo/notionpaper",
      },
      // Set English as the default language for this site.
      defaultLocale: "root",
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: "English",
          lang: "en",
        },
        // Simplified Chinese docs in `src/content/docs/zh-cn/`
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      sidebar: [
        // {
        // 	label: 'Usage',
        // 	translations: {
        // 		'zh-cn': '使用',
        // 	  },
        // 	items: [
        // 		// Each item here is one entry in the navigation menu.
        // 		{ label: 'Example Guide', slug: 'guides/example' },
        // 	],
        // },
        {
          label: "Usage Guide",
          translations: {
            "zh-CN": "使用教程",
          },
          autogenerate: { directory: "0usage" },
        },
        {
          label: "Development",
          translations: {
            "zh-CN": "开发",
          },
          autogenerate: { directory: "1dev" },
        },
      ],
    }),
  ],
});
