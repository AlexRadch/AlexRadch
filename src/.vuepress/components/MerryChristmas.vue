<template>
  <div style="position: relative;
      box-sizing: border-box; container-type: size; margin: 0px; width: calc(100% * 1.2); padding: calc(33% * 1.2); padding-top: 100%;
      overflow: hidden; background-color: darkgreen; background-image: url(@components/MerryChristmas/images/noise-2x.png)"
  >
  <!-- :style="{ backgroundImage: 'url(' + '@components/MerryChristmas/images/noise-2x.png' + ')' }" -->
    <LottieAnimation :animationData="ChristmasSleigh_Json" loop style="position: absolute;
        width: 100%; left: 0%; top: 0%"
    /> <!-- bottom: -53.7%; -->
    <img src="@components/MerryChristmas/images/bell.png" style="position: absolute; user-select: none;
      width: 5%; right: 4%; top: 2%;"
      :class="{[MerryChristmas.animationPaused]: !audio_PlayState, [MerryChristmas.bell]: true, }"
      @click="audio_PlayPause"
    />
    <img src="@components/MerryChristmas/images/hand_with_a_candy_stick_angle.png" style="position: absolute; user-select: none;
      width: 15%; left: 1%; top: 25%; rotate: 0deg;"
    />
    <img src="@components/MerryChristmas/images/hand_with_lollypop_angle.png" style="position: absolute; user-select: none;
      width: 15%; left: 1%; top: 45%; rotate: 0deg;"
    />
    <img src="@components/MerryChristmas/images/snowman_angle.png" style="position: absolute; user-select: none;
      width: 40%; right: -6%; top: 25%;"
    />
    <!-- <img src="@components/MerryChristmas/images/santa_with_black_glasses.png" style="position: absolute; user-select: none;
      width: 40%; left: 30%; top: 20%;"
    /> -->
    <div style="position: absolute;
      left: 20%; top: 20%;"
      :class="[MerryChristmas.text]"
    >
      <p>
        Пусть ночь искрится волшебством, <br />
        Несётся ввысь снежинок стая. <br />
        Я поздравляю с Рождеством, <br />
        Тебя любимая, родная.
      </p>
      <p>
        Поток божественной любви <br />
        Струится пусть чудесным светом, <br />
        И нас Господь благословит <br />
        Здоровьем, счастьем и успехом!
      </p>
    </div>
    <audio ref="Audio" hidden="true" loop><source src="@components/MerryChristmas/sounds/Love_to_Sing--We_Wish_You_a_Merry_Christmas.mp3" type="audio/mpeg" /></audio>
  </div>
</template>

<script lang="ts">
import ChristmasSleigh_Json from './MerryChristmas/lotties/131399-christmas-sleigh.json'
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { $ref } from 'vue/macros'

const Audio = $ref<any>();
let audio_PlayState = $ref(false);

function audio_PlayPause() {
  audio_PlayState = !audio_PlayState;

  if (audio_PlayState)
  {
    Audio.play();
  }
  else
  {
    Audio.pause();
  }
}
</script>

<style module="MerryChristmas">
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');

.bell {
  animation-name: bellAnimation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transform-origin: top center;
}

@keyframes bellAnimation {
  from {
    rotate: -45deg;
  }
  to {
    rotate: 45deg;
  }
}

.animationPaused {
  animation-play-state: paused;
}

.animationRunning {
  animation-play-state: running;
}

.text {
  font-family: 'Marck Script', cursive;
  font-size: 34px;
  font-size: 4vw;
  font-size: calc(var(--content-width) * 0.046);
  font-size: 11.2cqw;
      
  color: yellowgreen; 
  text-shadow: 1px 1px 2px black, 0 0 5px whitesmoke;
  animation: textGlow 1s ease-in-out infinite alternate;
}

@keyframes textGlow {
  from {
    text-shadow:
      1px 1px 2px black,
      0 0 5px whitesmoke;
  }
  to {
    text-shadow:
      1px 1px 2px black,
      0 0 11px whitesmoke;
  }
}

</style>
