import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  themeConfig: {
    sidebar: {
      '/': [{
        text: 'Challenge specification',
        items: [
          {
            text: 'Overview',
            link: '/challenge/',
          }
        ]
      }]
    }
  }
})
