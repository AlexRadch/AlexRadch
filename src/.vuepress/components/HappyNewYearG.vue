<template>
  <div style="position: relative;
      box-sizing: border-box; margin: 0px; width: 100%; padding: 33%;
      overflow: hidden;
      background-color: transparent;"
  >
    <Vue3Lottie ref="ChristmasTree" :animationData="ChristmasTree_Json" style="position: absolute;
        width: 50%; right: -7%; bottom: -8%; "
        direction="alternate"
    />
    <Vue3Lottie ref="BellOfHappiness" :animationData="BellOfHappiness_Json" style="position: absolute;
        width: 10%; top: 0%; right: 0%; "
        :autoPlay="BellOfHappiness_playState"
        :pauseAnimation="!BellOfHappiness_playState"
      @click="bellOfHappiness_OnClick"
    />
  </div>
</template>

<script>
//import { Vue3Lottie } from 'vue3-lottie'
//import 'vue3-lottie/dist/style.css'
import ChristmasTree_Json from './HappyNewYear/lotties/41812-christmas-tree.json'
import BellOfHappiness_Json from './HappyNewYear/lotties/131384-bell-of-happiness.json'
import BingCrosbyJingleBells_mp3 from './HappyNewYear/sounds/Bing Crosby--Jingle Bells (1943).mp3'

var audio = new Audio(BingCrosbyJingleBells_mp3);
audio.loop = true;

export default {
  name: 'HappyNewYearG',
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      ChristmasTree_Json,

      BellOfHappiness_Json,
      BellOfHappiness_playState: false,
      }
  },
  methods: {
    bellOfHappiness_OnClick() {
      this.BellOfHappiness_playState = !this.BellOfHappiness_playState;
      if (this.BellOfHappiness_playState)
        audio.play();
      else
      {
        audio.pause();
      }
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
