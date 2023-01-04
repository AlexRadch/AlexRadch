<template>
  <div style="position: relative;
      box-sizing: border-box; margin: 0px; width: calc(100% * 1.2); padding: calc(30.47% * 1.2);
      overflow: hidden; background-color: red; "
  >
    <img src="@components/Ussr100/images/Union_of_Soviet_Socialist_Republics_(orthographic_projection).svg" 
      style="position: absolute; width: 60.7%; right: 0%; top: 0%;" />
    <LottieAnimation :animationData="SovietSputnik_Json" loop style="position: absolute;
        width: 60%; right: 0%; top: 10%;"
    /> 
    <LottieAnimation :animationData="GlorySovietScience_Json" loop style="position: absolute;
        width: 61%; left: -11.7%; top: 0%;"
    /> 
    <LottieAnimation ref="Star" :animationData="Star_Json" loop style="position: absolute;
        width: 35%; right: -12%; top: -19%;"
      :autoPlay="Hymn_playState"
      @click="hymnButton_OnClick"
    />
    <audio ref="Audio" hidden="true" loop><source src="@components/Ussr100/sounds/gimn_sssr_-_gimn_sssr_(z2.fm).mp3" type="audio/mpeg"></audio>
  </div>
</template>

<script lang="ts">
import SovietSputnik_Json from './Ussr100/lotties/102147-soviet-sputnik.json'
import GlorySovietScience_Json from './Ussr100/lotties/102148-glory-soviet-science.json'
import Star_Json from './Ussr100/lotties/1643-exploding-star.json'
</script>

<script setup lang="ts">
import { $ref } from 'vue/macros'

let Hymn_playState = false;

const Star = $ref<any>();
const Audio = $ref<any>();

function hymnButton_OnClick() {
  Hymn_playState = !Hymn_playState;

  if (Hymn_playState)
  {
    Audio.play();
    Star.play();
  }
  else
  {
    Audio.pause();
    Star.pause();
    Star.goToAndStop(0, true);
  }
}
</script>

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
