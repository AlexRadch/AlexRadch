<template>
  <div style="position: relative; box-sizing: border-box; margin: 0px;
      width: calc(100% * 1.2); padding: calc(33% * 1.2); overflow: hidden;"
    :class="{ [HappyNewYearG.night] : BellOfHappiness_playState,  [HappyNewYearG.day] : !BellOfHappiness_playState, }"
  >
    <Transition>
      <LottieAnimation ref="HeartFlyPartical" :animationData="HeartFlyPartical_Json" loop style="position: absolute;
          width: 100%; left: 0%; top: 0%; "
        :speed="0.2"
        v-show="!BellOfHappiness_playState"
        :autoPlay="!BellOfHappiness_playState"
      />    
    </Transition>
    <Transition>
      <LottieAnimation ref="SnowFlakes" :animationData="SnowFlakes_Json" loop style="position: absolute;
          width: 125%; left: 0%; top: 0%; "
        v-show="BellOfHappiness_playState"
        :autoPlay="BellOfHappiness_playState"
      />
    </Transition>
    <LottieAnimation :animationData="FirePlace_Json" loop style="position: absolute;
        width: 40%; left: -3%; top: -10%; "
    />
    <LottieAnimation :animationData="SantaSleigh_Json" loop style="position: absolute;
        width: 200%; left: 0%; top: -55%; "
        :speed="0.5"
    />
    <Transition>
      <LottieAnimation ref="RocketLaunches" :animationData="RocketLaunches_Json" loop style="position: absolute;
          width: 50%; right: -14%; top: 0%; "
        v-show="BellOfHappiness_playState"
        :autoPlay="BellOfHappiness_playState"
      />
    </Transition>
    <Transition>
      <LottieAnimation ref="WebDev" :animationData="WebDev_Json" loop style="position: absolute;
          width: 50%; left: 0%; bottom: 0%; "
        v-show="!BellOfHappiness_playState"
        :autoPlay="!BellOfHappiness_playState"
        @loopComplete="webDev_LoopComplete"
      />
    </Transition>
    <Transition>
      <LottieAnimation ref="DrawingWoman" :animationData="DrawingWoman_Json" loop style="position: absolute;
          width: 40%; left: 40%; top: 0%; "
        v-show="!BellOfHappiness_playState"
        :autoPlay="!BellOfHappiness_playState"
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
        :autoPlay="!BellOfHappiness_playState"
      />
    </Transition>
    <Transition>
      <LottieAnimation ref="AnimationSuccessBack" :animationData="AnimationSuccessBack_Json" loop style="position: absolute;
          width: 70%; left: 0%; bottom: -5%; "
        v-show="BellOfHappiness_playState"
        :autoPlay="BellOfHappiness_playState"
      />
    </Transition>
    <LottieAnimation :animationData="Lights_Json" loop style="position: absolute;
        width: 50%; left: -2%; top: -30%; "
    />
    <Transition>
      <LottieAnimation ref="MerryChristmas" :animationData="MerryChristmas_Json" loop style="position: absolute;
          width: 60%; left: 40%; top: -30%; "
        v-show="BellOfHappiness_playState"
        :autoPlay="BellOfHappiness_playState"
      />
    </Transition>
    <Transition @before-enter="night_BeforeEnter" @after-enter="night_AfterEnter" @before-leave="day_BeforeEnter" @after-leave="day_AfterLeave">
      <LottieAnimation ref="RabbitRunning" :animationData="RabbitRunning_Json" loop style="position: absolute;
          width: 30%; left: -6%; bottom: -10%; "
        :autoPlay="BellOfHappiness_playState"
        v-show="BellOfHappiness_playState"
      />
    </Transition>
    <LottieAnimation ref="BellOfHappiness" :animationData="BellOfHappiness_Json" loop style="position: absolute;
        width: 20%; right: -3%; top: -5%; "
      :autoPlay="BellOfHappiness_playState"
      @click="bellOfHappiness_OnClick"
    />    
    <audio ref="Audio" hidden="true" loop><source src="@components/HappyNewYear/sounds/Disco_Crash--New_Year.mp3" type="audio/mpeg"></audio>
  </div>
</template>

<script lang="ts">
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
</script>

<script setup lang="ts">
import { ref } from 'vue'

const HeartFlyPartical = ref();
const SnowFlakes = ref();
const RocketLaunches = ref();
const WebDev = ref();
const DrawingWoman = ref();
const ChristmasTree = ref();
const CatLoader = ref();
const AnimationSuccessBack = ref();
const MerryChristmas = ref();
const RabbitRunning = ref();
const BellOfHappiness = ref();

const Audio = ref();
const BellOfHappiness_playState = ref(false);

function bellOfHappiness_OnClick() {
  BellOfHappiness_playState.value = !BellOfHappiness_playState.value;
  stateChanged();
}

let webDev_Direction = 1;
function webDev_LoopComplete() {
  webDev_Direction = -webDev_Direction;

  WebDev.value.pause();
  WebDev.value.setDirection(webDev_Direction);
  if (webDev_Direction > 0)
    WebDev.value.goToAndPlay(0, true);
  else
    WebDev.value.goToAndPlay(WebDev.value.getDuration(true), true);
}

let christmasTree_Direction = 1;
function christmasTree_LoopComplete() {
  christmasTree_Direction = -christmasTree_Direction;

  ChristmasTree.value.pause();
  ChristmasTree.value.setDirection(christmasTree_Direction);
  if (christmasTree_Direction > 0)
    ChristmasTree.value.goToAndPlay(0, true);
  else
    ChristmasTree.value.goToAndPlay(ChristmasTree.value.getDuration(true), true);
}

let DayEntered = true;
let NightEntered = false;

function night_BeforeEnter() {
  NightEntered = false;
  DayEntered = false;
  stateChanged();
}

function night_AfterEnter() {
  NightEntered = true;
  stateChanged();
}
    
function day_BeforeEnter() {
  NightEntered = false;
  DayEntered = false;
  stateChanged();
}

function day_AfterLeave() {
  DayEntered = true;
  stateChanged();
}

function stateChanged() {
  if (BellOfHappiness_playState.value)
  {
    Audio.value.play();
    BellOfHappiness.value.play();
  }
  else
  {
    Audio.value.pause();
    BellOfHappiness.value.pause();
  }

  if (BellOfHappiness_playState.value && NightEntered)
  {
    HeartFlyPartical.value.pause();
    WebDev.value.pause();
    DrawingWoman.value.pause();
    CatLoader.value.pause();
  }
  else
  {
    HeartFlyPartical.value.play();
    WebDev.value.play();
    DrawingWoman.value.play();
    CatLoader.value.play();
  }

  if (!BellOfHappiness_playState.value && DayEntered)
  {
    SnowFlakes.value.pause();
    RocketLaunches.value.pause();
    AnimationSuccessBack.value.pause();
    MerryChristmas.value.pause();
  }
  else
  {
    SnowFlakes.value.play();
    RocketLaunches.value.play();
    AnimationSuccessBack.value.play();
    MerryChristmas.value.play();
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
