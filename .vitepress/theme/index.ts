import DefaultTheme from 'vitepress/theme'

import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import type { Theme as ThemeConfig } from 'vitepress'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  enhanceApp({ app }) { 
    app.use(NolebaseInlineLinkPreviewPlugin) 
  }, 
}

export default Theme