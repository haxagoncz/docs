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
  }
})
