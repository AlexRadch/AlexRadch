<template>
  <div ref="scene" style="position: relative;
      box-sizing: border-box; margin: 0px; width: calc(100% * 1.2); padding: calc(33% * 1.2);
      overflow: hidden; "
    :class="{ [HappyNewYearG.night] : BellOfHappiness_playState,  [HappyNewYearG.day] : !BellOfHappiness_playState, }"
  >
    <Transition>
      <LottieAnimation ref="HeartFlyPartical" :animationData="HeartFlyPartical_Json" loop style="position: absolute;
          width: 100%; left: 0%; top: 0%; "
        :speed="0.2"
        v-show="!BellOfHappiness_playState"
      />    
    </Transition>
    <Transition>
      <LottieAnimation ref="SnowFlakes" :animationData="SnowFlakes_Json" loop style="position: absolute;
          width: 125%; left: 0%; top: 0%; "
        v-show="BellOfHappiness_playState"
      />
    </Transition>
    <LottieAnimation ref="FirePlace" :animationData="FirePlace_Json" loop style="position: absolute;
        width: 40%; left: -3%; top: -10%; "
    />
    <LottieAnimation ref="SantaSleigh" :animationData="SantaSleigh_Json" loop style="position: absolute;
        width: 200%; left: 0%; top: -55%; "
        :speed="0.5"
    />
    <Transition>
      <LottieAnimation ref="RocketLaunches" :animationData="RocketLaunches_Json" loop style="position: absolute;
          width: 50%; right: -14%; top: 0%; "
        v-show="BellOfHappiness_playState"
        :pauseAnimation="!BellOfHappiness_playState && DayEntered"
      />
    </Transition>
    <Transition>
      <LottieAnimation ref="WebDev" :animationData="WebDev_Json" loop style="position: absolute;
          width: 50%; left: 0%; bottom: 0%; "
        v-show="!BellOfHappiness_playState"
        @loopComplete="webDev_LoopComplete"
      />
    </Transition>
    <Transition>
      <LottieAnimation ref="DrawingWoman" :animationData="DrawingWoman_Json" loop style="position: absolute;
          width: 40%; left: 40%; top: 0%; "
        v-show="!BellOfHappiness_playState"
      />
    </Transition>
    <LottieAnimation ref="ChristmasTree" :animationData="ChristmasTree_Json" loop style="position: absolute;
        width: 60%; right: -7%; bottom: -8%; "
        @loopComplete="christmasTree_LoopComplete"
    />
    <Transition>
      <LottieAnimation ref="CatLoader" :animationData="CatLoader_Json" loop style="position: absolute;
          width: 20%; right: -3%; bottom: -6%; "
        v-show="!BellOfHappiness_playState"
      />
    </Transition>
    <Transition>
      <LottieAnimation ref="AnimationSuccessBack" :animationData="AnimationSuccessBack_Json" loop style="position: absolute;
          width: 70%; left: 0%; bottom: -5%; "
        v-show="BellOfHappiness_playState"
      />
    </Transition>
    <LottieAnimation ref="Lights" :animationData="Lights_Json" loop style="position: absolute;
        width: 50%; left: -2%; top: -30%; "
    />
    <Transition>
      <LottieAnimation ref="MerryChristmas" :animationData="MerryChristmas_Json" loop style="position: absolute;
          width: 60%; left: 40%; top: -30%; "
        v-show="BellOfHappiness_playState"
      />
    </Transition>
    <Transition @before-enter="night_BeforeEnter" @after-enter="night_AfterEnter" @after-leave="night_AfterLeave">
      <LottieAnimation ref="RabbitRunning" :animationData="RabbitRunning_Json" loop style="position: absolute;
          width: 30%; left: -6%; bottom: -10%; "
        v-show="BellOfHappiness_playState"
      />
    </Transition>
    <LottieAnimation ref="BellOfHappiness" :animationData="BellOfHappiness_Json" loop style="position: absolute;
        width: 20%; top: -5%; right: -3%; "
      :autoPlay="BellOfHappiness_playState"
      @click="bellOfHappiness_OnClick"
    />    
  </div>
</template>

<script>
// import { LottieAnimation } from 'lottie-web-vue'

import HeartFlyPartical_Json from './HappyNewYear/lotties/43296-heart-fly-partical-transparent-bg-ver2.json'
import SnowFlakes_Json from './HappyNewYear/lotties/130377-snowflakes.json'
import FirePlace_Json from './HappyNewYear/lotties/129654-fire-place.json'
import SantaSleigh_Json from './HappyNewYear/lotties/128055-santa-sleigh.json'
import RocketLaunches_Json from './HappyNewYear/lotties/131381-the-rocket-launches-with-the-adorable-orange.json'
import WebDev_Json from './HappyNewYear/lotties/125754-web-dev.json'
import DrawingWoman_Json from './HappyNewYear/lotties/101450-women-doing-painting.json'
import ChristmasTree_Json from './HappyNewYear/lotties/41812-christmas-tree.json'
import CatLoader_Json from './HappyNewYear/lotties/76266-cat-loader.json'
import AnimationSuccessBack_Json from './HappyNewYear/lotties/125505-animation-success-back.json'
import Lights_Json from './HappyNewYear/lotties/129650-lights.json'
import MerryChristmas_Json from './HappyNewYear/lotties/88762-merry-christmas.json'
import RabbitRunning_Json from './HappyNewYear/lotties/106450-rabbit-running.json'
import BellOfHappiness_Json from './HappyNewYear/lotties/131384-bell-of-happiness.json'

import DiscoCrash_NewYear_mp3 from './HappyNewYear/sounds/Disco_Crash--New Year.mp3'

var audio;
var webDev_Direction = 1;
var christmasTree_Direction = 1;

export default {
  name: 'HappyNewYearG',

  // components: {
  //   //LottieAnimation,
  // },

  data() {
    return {
      HeartFlyPartical_Json,
      SnowFlakes_Json,
      FirePlace_Json,
      SantaSleigh_Json,
      RocketLaunches_Json,
      WebDev_Json,
      DrawingWoman_Json,
      ChristmasTree_Json,
      CatLoader_Json,
      AnimationSuccessBack_Json,
      Lights_Json,
      MerryChristmas_Json,
      RabbitRunning_Json,
      BellOfHappiness_Json,

      BellOfHappiness_playState: false,
      DayEntered: true,
      NightEntered: false,
    }
  },
  
  methods: {
    bellOfHappiness_OnClick() {
      this.BellOfHappiness_playState = !this.BellOfHappiness_playState;
      this.stateChanged();
    },

    webDev_LoopComplete() {
      webDev_Direction = -webDev_Direction;

      this.$refs.WebDev.pause();
      this.$refs.WebDev.setDirection(webDev_Direction);
      if (webDev_Direction > 0)
        this.$refs.WebDev.goToAndPlay(0, true);
      else
        this.$refs.WebDev.goToAndPlay(this.$refs.WebDev.getDuration(true), true);
    },

    christmasTree_LoopComplete() {
      christmasTree_Direction = -christmasTree_Direction;

      this.$refs.ChristmasTree.pause();
      this.$refs.ChristmasTree.setDirection(christmasTree_Direction);
      if (christmasTree_Direction > 0)
        this.$refs.ChristmasTree.goToAndPlay(0, true);
      else
        this.$refs.ChristmasTree.goToAndPlay(this.$refs.ChristmasTree.getDuration(true), true);
    },

    night_BeforeEnter() {
      this.NightEntered = false;
      this.DayEntered = false;
      this.stateChanged();
    },

    night_AfterEnter() {
      this.NightEntered = true;
      this.stateChanged();
    },
    
    night_BeforeLeave() {
      this.NightEntered = false;
      this.DayEntered = false;
      this.stateChanged();
    },

    night_AfterLeave() {
      this.DayEntered = true;
      this.stateChanged();
    },

    stateChanged() {
      if (this.BellOfHappiness_playState)
      {
        audio.play();
        this.$refs.BellOfHappiness.play();
      }
      else
      {
        audio.pause();
        this.$refs.BellOfHappiness.pause();
      }

      if (this.BellOfHappiness_playState && this.NightEntered)
      {
        this.$refs.HeartFlyPartical.pause();
        this.$refs.WebDev.pause();
        this.$refs.DrawingWoman.pause();
        this.$refs.CatLoader.pause();
      }
      else
      {
        this.$refs.HeartFlyPartical.play();
        this.$refs.WebDev.play();
        this.$refs.DrawingWoman.play();
        this.$refs.CatLoader.play();
      }

      if (!this.BellOfHappiness_playState && this.DayEntered)
      {
        this.$refs.SnowFlakes.pause();
        this.$refs.RocketLaunches.pause();
        this.$refs.AnimationSuccessBack.pause();
        this.$refs.MerryChristmas.pause();
      }
      else
      {
        this.$refs.SnowFlakes.play();
        this.$refs.RocketLaunches.play();
        this.$refs.AnimationSuccessBack.play();
        this.$refs.MerryChristmas.play();
      }
    },
  },

  mounted () {
    audio = new Audio(DiscoCrash_NewYear_mp3);
    audio.loop = true;

    this.stateChanged();
  },

  unmounted () {
    audio.pause();
    audio = null;
  }
}
</script>

<style module="HappyNewYearG">
  .day {
    background-color: lightblue;
    transition: all 3s ease;
  }  
  .night {
    background-color: darkorchid;
    transition: all 3s ease;
  }  
</style>

<style>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
