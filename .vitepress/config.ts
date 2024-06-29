import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Haxagon docs',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/haxagoncz/docs/tree/main/:path',
    },
    siteTitle: 'Haxagon',
    sidebar: {
      '/en': [{
        text: 'Challenge specification',
        items: [
          {
            text: 'Overview',
            link: '/en/challenge/',
          },
          {
            text: 'Description formatting',
            link: '/en/challenge/formatting',
          },
        ]
      }],
      '/cs': [

      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/haxagoncz',
      },
    ],
    i18nRouting: true,
    outline: [1, 4],
    search: {
      provider: 'algolia',
      options: {
        appId: 'K6FMB17OQF',
        apiKey: '0a71b1c308643ed1bb70d2d8f5a4161a',
        indexName: 'haxagon'
      }
    }
  },
  locales: {
    /*en: {
      label: 'English (US)',
      lang: 'en'
    },*/
    root: {
      label: 'Čeština',
      lang: 'cs',
    }
  },
})
