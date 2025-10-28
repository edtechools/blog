import { defineConfig } from 'vitepress'

import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import {
  InlineLinkPreviewElementTransform
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人记录",
  description: "记录📝",
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-inline-link-preview/client',
      ],
    },
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-inline-link-preview',
      ],
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux 配置', link: '/linux' }
    ],

    sidebar: calculateSidebar([
      'linux',
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks())
      md.use(InlineLinkPreviewElementTransform)
    },
  },
})
