<template>
  <div ref="scene" style="position: relative;
      box-sizing: border-box; margin: 0px; width: calc(100% * 1.2); padding: calc(33% * 1.2);
      overflow: hidden; "
      :class="{ night : BellOfHappiness_playState,  day : !BellOfHappiness_playState, }"
  >
    <!-- <Vue3Lottie ref="BellOfHappiness" :animationData="BellOfHappiness_Json" style="position: absolute;
        width: 20%; top: -5%; right: -3%; "
      :autoPlay="BellOfHappiness_playState"
      :pauseAnimation="!BellOfHappiness_playState"
      @click="bellOfHappiness_OnClick"
    /> -->
    <LottieAnimation ref="BellOfHappiness" :animationData="BellOfHappiness_Json"  :loop="true" style="position: absolute;
        width: 20%; top: -5%; right: -3%; "
      :autoPlay="BellOfHappiness_playState"
      @click="bellOfHappiness_OnClick"
    />    
  </div>
</template>

<style>
  .day {
    background-color: lightblue;
    transition: all 3s ease;
  }  
  .night {
    background-color: darkorchid;
    transition: all 3s linear;
  }  

  .v-enter-active,
  .v-leave-active {
    transition: opacity 3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>

<script>
//import { Vue3Lottie } from 'vue3-lottie'
//import 'vue3-lottie/dist/style.css'
import { LottieAnimation } from 'lottie-web-vue'

import BellOfHappiness_Json from './HappyNewYear/lotties/131384-bell-of-happiness.json'

//import BingCrosby_JingleBells_mp3 from './HappyNewYear/sounds/Bing_Crosby--Jingle_Bells_(1943).mp3'
import DiscoCrash_NewYear_mp3 from './HappyNewYear/sounds/Disco_Crash--New Year.mp3'

var audio = new Audio(DiscoCrash_NewYear_mp3);
audio.loop = true;

export default {
  name: 'LottieAnimationExample',
  components: {
    //Vue3Lottie,
    LottieAnimation,
  },
  data() {
    return {
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

        this.$refs.BellOfHappiness.play();
      }
      else
      {
        audio.pause();

        // var WebDev = this.$refs.WebDev;
        // WebDev.play();

        this.$refs.BellOfHappiness.pause();
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
