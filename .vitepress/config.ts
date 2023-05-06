import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Haxagon',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/haxagoncz/docs/tree/main/:path',
    },
    siteTitle: 'Haxagon',
    sidebar: {
      '/': [{
        text: 'Challenge specification',
        items: [
          {
            text: 'Overview',
            link: '/challenge/',
          },
          {
            text: 'Description formatting',
            link: '/challenge/formatting',
          },
        ]
      }]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/haxagoncz',
      },
    ],
  }
})
