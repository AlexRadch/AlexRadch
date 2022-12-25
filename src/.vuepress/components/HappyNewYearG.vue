<template>
  <div ref="scene" style="position: relative;
      box-sizing: border-box; margin: 0px; width: calc(100% * 1.2); padding: calc(33% * 1.2);
      overflow: hidden;
      background-color: lightblue;"
  >
  <Vue3Lottie ref="FirePlace" :animationData="FirePlace_Json" style="position: absolute;
        width: 40%; left: -3%; top: -10%; "
    />
    <Vue3Lottie ref="SantaSleigh" :animationData="SantaSleigh_Json" style="position: absolute;
        width: 200%; left: 0%; top: -55%; "
    />
    <Vue3Lottie ref="RocketLaunches" :animationData="RocketLaunches_Json" style="position: absolute;
        width: 50%; right: -14%; top: 0%; "
      v-show="BellOfHappiness_playState"
    />
    <Vue3Lottie ref="WebDev" :animationData="WebDev_Json" style="position: absolute;
        width: 50%; left: 0%; bottom: 0%; "
      direction="alternate"
      v-show="!BellOfHappiness_playState"
    />
    <Vue3Lottie ref="DrawingWoman" :animationData="DrawingWoman_Json" style="position: absolute;
        width: 40%; left: 40%; top: 0%; "
      v-show="!BellOfHappiness_playState"
    />
    <Vue3Lottie ref="ChristmasTree" :animationData="ChristmasTree_Json" style="position: absolute;
        width: 60%; right: -7%; bottom: -8%; "
      direction="alternate"
    />
    <Vue3Lottie ref="CatLoader" :animationData="CatLoader_Json" style="position: absolute;
        width: 20%; right: -3%; bottom: -6%; "
      v-show="!BellOfHappiness_playState"
    />
    <Vue3Lottie ref="AnimationSuccessBack" :animationData="AnimationSuccessBack_Json" style="position: absolute;
        width: 70%; left: 0%; bottom: -5%; "
      v-show="BellOfHappiness_playState"
    />
    <Vue3Lottie ref="Lights" :animationData="Lights_Json" style="position: absolute;
        width: 50%; left: -2%; top: -30%; "
    />
    <Vue3Lottie ref="RabbitRunning" :animationData="RabbitRunning_Json" style="position: absolute;
        width: 30%; left: -6%; bottom: -10%; "
      v-show="BellOfHappiness_playState"
    />
    <Vue3Lottie ref="BellOfHappiness" :animationData="BellOfHappiness_Json" style="position: absolute;
        width: 20%; top: -5%; right: -3%; "
      :autoPlay="BellOfHappiness_playState"
      :pauseAnimation="!BellOfHappiness_playState"
      @click="bellOfHappiness_OnClick"
    />
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
//import 'vue3-lottie/dist/style.css'

import SantaSleigh_Json from './HappyNewYear/lotties/128055-santa-sleigh.json'
import FirePlace_Json from './HappyNewYear/lotties/129654-fire-place.json'
import ChristmasTree_Json from './HappyNewYear/lotties/41812-christmas-tree.json'
import AnimationSuccessBack_Json from './HappyNewYear/lotties/125505-animation-success-back.json'
import CatLoader_Json from './HappyNewYear/lotties/76266-cat-loader.json'
import RocketLaunches_Json from './HappyNewYear/lotties/131381-the-rocket-launches-with-the-adorable-orange.json'
import RabbitRunning_Json from './HappyNewYear/lotties/106450-rabbit-running.json'
import Lights_Json from './HappyNewYear/lotties/129650-lights.json'
import WebDev_Json from './HappyNewYear/lotties/125754-web-dev.json'
import DrawingWoman_Json from './HappyNewYear/lotties/101450-women-doing-painting.json'
import BellOfHappiness_Json from './HappyNewYear/lotties/131384-bell-of-happiness.json'

//import BingCrosby_JingleBells_mp3 from './HappyNewYear/sounds/Bing Crosby--Jingle Bells (1943).mp3'
import DiscoCrash_NewYear_mp3 from './HappyNewYear/sounds/Дискотека Авария--Новогодняя.mp3'

var audio = new Audio(DiscoCrash_NewYear_mp3);
audio.loop = true;

export default {
  name: 'HappyNewYearG',
  components: {
    Vue3Lottie
  },
  data() {
    return {
      SantaSleigh_Json,
      FirePlace_Json,
      ChristmasTree_Json,
      AnimationSuccessBack_Json,
      CatLoader_Json,
      RocketLaunches_Json,
      RabbitRunning_Json,
      Lights_Json,
      WebDev_Json,
      DrawingWoman_Json,
      BellOfHappiness_Json,

      BellOfHappiness_playState: false,
    }
  },
  methods: {
    bellOfHappiness_OnClick() {
      this.BellOfHappiness_playState = !this.BellOfHappiness_playState;
      if (this.BellOfHappiness_playState)
      {
        audio.play();

        // var WebDev = this.$refs.WebDev;
        // WebDev.pause();
        // //WebDev.direction = 'reverse';
        // WebDev.setDirection = 'reverse';
        // WebDev.play();
      }
      else
      {
        audio.pause();

        // var WebDev = this.$refs.WebDev;
        // WebDev.play();
      }
    },
    webDev_OnLoopComplete() {
      // if (this.BellOfHappiness_playState)
      // {
      //   var WebDev = this.$refs.WebDev;
      //   WebDev.pause();
      //   WebDev.goToAndStop(0);
      // }
    }
  },
  mounted () {
    if (this.BellOfHappiness_playState)
    {
      audio.play();
    }
  },
  unmounted () {
    audio.pause();
  }
}
</script>
