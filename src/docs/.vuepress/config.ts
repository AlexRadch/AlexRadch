import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/AlexRadch/',
  dest: 'docs',

  lang: 'en-US',
  title: 'Alexander Radchenko GitHub site',
  description: 'Just playing around',

  theme: defaultTheme({
    navbar: [
      {
        text: 'Любимой 💕',
        link: '/ForTheBeloved/',
        children: [
          '/ForTheBeloved/',
          '/ForTheBeloved/HappyNewYear.md'
        ],
      }
    ],
    sidebar: {
      '/ForTheBeloved/': [
        {
          text: 'Привет 👋, Любимая 💕',
          link: '/ForTheBeloved/',
          children: [
            '/ForTheBeloved/HappyNewYear.md'
          ]
        }
      ]
    }
    // [
    //   {
    //     text: 'Привет 👋, Любимая 💕',
    //     link: '/ForTheBeloved/',
    //     children: [
    //       '/ForTheBeloved/HappyNewYear.md'
    //     ]
    //   }
    // ]
  }),
})