<template>
  <div style="container-type: size;">
    <div style="position: relative;
        box-sizing: border-box; container-type: size; margin: 0px; width: calc(100% * 1.2); padding: calc(33% * 1.2); padding-top: 100%;
        overflow: hidden; background-color: darkgreen; background-image: url(@components/MerryChristmas/images/noise-2x.png)"
        :class="[MerryChristmas.text]"
    >
      <!-- :style="{ backgroundImage: 'url(' + '@components/MerryChristmas/images/noise-2x.png' + ')' }" -->
      <!-- <img src="@components/MerryChristmas/images/santa_with_black_glasses.png" style="position: absolute; user-select: none;
        width: 20%; left: 15%; top: 0%;"
        :style="{animationDelay: random01 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      /> -->
      <img src="@components/MerryChristmas/images/santa_flying.png" style="position: absolute; user-select: none;
        width: 20%; left: 20%; top: -1%;"
        :style="{animationDelay: random02 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      />
      <img src="@components/MerryChristmas/images/hand_with_gift_angle.png" style="position: absolute; user-select: none;
        width: 25%; right: 20%; top: 1%;"
        :style="{animationDelay: random03 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      />
      <LottieAnimation :animationData="ChristmasSleigh_Json" loop style="position: absolute;
          width: 100%; left: 0%; top: 0%"
      /> <!-- bottom: -53.7%; -->
      <img src="@components/MerryChristmas/images/bell.png" style="position: absolute; user-select: none;
        width: 5%; right: 4%; top: 2%;"
        class="noZoom"
        :class="{animationPaused: !audio_PlayState, animationRunning: audio_PlayState, [MerryChristmas.bell]: true, }"
        @click="audio_PlayPause"
      />
      <img src="@components/MerryChristmas/images/ginger_breadman_angle.png" style="position: absolute; user-select: none;
        width: 15%; left: 2%; top: 58%; rotate: 10deg;"
        :style="{animationDelay: random06 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      />
      <img src="@components/MerryChristmas/images/hand_with_lollypop_angle.png" style="position: absolute; user-select: none;
        width: 15%; left: 1%; top: 40%; rotate: 10deg;"
        :style="{animationDelay: random05 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      />
      <img src="@components/MerryChristmas/images/hand_with_a_candy_stick_angle.png" style="position: absolute; user-select: none;
        width: 15%; left: 1%; top: 25%; rotate: 10deg;"
        :style="{animationDelay: random04 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      />
      <img src="@components/MerryChristmas/images/snowman_angle.png" style="position: absolute; user-select: none;
        width: 40%; right: -6%; top: 25%;"
        :style="{animationDelay: random07 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      />
      <LottieAnimation ref="ChristmasTree" :animationData="ChristmasTree_Json" loop style="position: absolute;
          width: 60%; right: -7%; bottom: -5.5%; "
          @loopComplete="christmasTree_LoopComplete"
      />
      <LottieAnimation :animationData="CatLoader_Json" loop style="position: absolute;
          width: 20%; right: -3%; bottom: -4.4%; "
      />
      <div style="position: absolute;
        left: 20%; top: 20%;"
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
      <img src="@components/MerryChristmas/images/santa_sleds_with_deers.png" style="position: absolute; user-select: none;
        width: 45%; left: 5%; bottom: 4%; rotate: -5deg;"
        :style="{animationDelay: random08 * 8 - 8 + 's', }"
        class="noZoom"
        :class="[MerryChristmas.flying]"
      />
      <img src="@components/MerryChristmas/images/santa_on_the_ground.png" style="position: absolute; user-select: none;
        width: 30%; right: 20%; bottom: 0%;"
        class="noZoom"
      />
      <audio ref="Audio" hidden="true" loop><source src="@components/MerryChristmas/sounds/Love_to_Sing--We_Wish_You_a_Merry_Christmas.mp3" type="audio/mpeg" /></audio>
  </div>
  </div>
</template>

<script lang="ts">
import ChristmasSleigh_Json from './MerryChristmas/lotties/131399-christmas-sleigh.json'
import ChristmasTree_Json from './HappyNewYear/lotties/41812-christmas-tree.json'
import CatLoader_Json from './HappyNewYear/lotties/76266-cat-loader.json'
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { $ref } from 'vue/macros'

const ChristmasTree = $ref<any>();

const random01 = ref(Math.random());
const random02 = ref(Math.random());
const random03 = ref(Math.random());
const random04 = ref(Math.random());
const random05 = ref(Math.random());
const random06 = ref(Math.random());
const random07 = ref(Math.random());
const random08 = ref(Math.random());

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

let christmasTree_Direction = 1;
function christmasTree_LoopComplete() {
  christmasTree_Direction = -christmasTree_Direction;

  ChristmasTree.pause();
  ChristmasTree.setDirection(christmasTree_Direction);
  if (christmasTree_Direction > 0)
    ChristmasTree.goToAndPlay(0, true);
  else
    ChristmasTree.goToAndPlay(ChristmasTree.getDuration(true), true);
}
</script>

<style module="MerryChristmas">
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');

.bell {
  filter: drop-shadow(4.5px 4.5px 9px black);
 	animation: bell 1s ease-in-out infinite alternate ;
  transform-origin: top center;
}

@keyframes bell {
  from {
    rotate: 45deg;
    filter: drop-shadow(6px 6px 12px black);
  }
  to {
    rotate: -45deg;
    filter: drop-shadow(3px 3px 6px black);
  }
}

.text {
  font-family: 'Marck Script', cursive;
  font-size: 34px;
  font-size: calc(var(--content-width) * 0.046);
  font-size: 2vw;
  font-size: 4.6cqw;
      
  color: yellowgreen; 
  text-shadow: 
    1px 1px 2px black,
    3px 3px 6px black;
  animation: textGlow 1s ease-in-out infinite alternate;
}

@keyframes textGlow {
  from {
    color: yellowgreen; 
    text-shadow:
      1px 1px 2px black,
      3px 3px 6px black;
  }
  to {
    color: yellowgreen; 
    text-shadow:
      1px 1px 2px black,
      6px 6px 12px black;
  }
}

.flying {
  filter: drop-shadow(4.5px 4.5px 9px black);
	animation: flying 5s ease-in-out infinite alternate;
}

@keyframes flying {
  0% {
    transform: translateY(-1em) rotate(-5deg);;
    filter: drop-shadow(6px 6px 12px black);
  }
  100% {
    transform: translateY(1em) rotate(5deg);
    filter: drop-shadow(3px 3px 6px black);
  }
}

</style>

<style>

.animationPaused {
  animation-play-state: paused;
}

.animationRunning {
  animation-play-state: running;
}

</style>