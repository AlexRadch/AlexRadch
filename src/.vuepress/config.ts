import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/AlexRadch/',
  dest: 'docs',

  lang: 'en-US',
  title: 'Alexander Radchenko GitHub site',
  description: 'Just playing around',
  
  locales: {
    // '/ForTheBeloved/': {
    //   lang: 'ru-RU',
    // },
  },

  theme: defaultTheme({
    repo: 'AlexRadch/AlexRadch',
    //repoLabel: 'GitHub',
    docsDir: 'src',

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
      componentsDir: path.resolve(__dirname, './components/'),
      components: {
        LottieAnimation: 'lottie-web-vue',
        Vue3Lottie: 'vue3-lottie',
      }
    })
  ],

  alias: {
    '@components': path.resolve(__dirname, './components/'),
  },  
})