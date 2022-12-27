import { defineClientConfig } from '@vuepress/client'

//import { Vue3Lottie } from 'vue3-lottie'
//import 'vue3-lottie/dist/style.css'
import { LottieAnimation } from 'lottie-web-vue'

export default defineClientConfig({
  enhance({ app }) {
    //app.component('Vue3Lottie', Vue3Lottie);
    app.component('LottieAnimation', LottieAnimation);
  },
  setup() {},
  rootComponents: [],
})