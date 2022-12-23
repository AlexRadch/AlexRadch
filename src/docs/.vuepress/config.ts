import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

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
          '/ForTheBeloved/HappyNewYear/'
        ],
      }
    ],
    sidebar: {
      '/ForTheBeloved/': [
        {
          text: 'Привет 👋, Любимая 💕',
          link: '/ForTheBeloved/',
          children: [
            '/ForTheBeloved/HappyNewYear/'
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

  plugins: [
    registerComponentsPlugin({
      components: {
        LottieAnimation: 'lottie-web-vue'
      }
    })
  ]
})