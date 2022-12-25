<template>
  <div>
    <div>
      <Vue3Lottie
        ref="customControl"
        :animationData="CountdownJSON"
        :height="200"
        :width="200"
      />
      <div>
        <div>
          <button @click="play">Play</button>
          <button @click="pause">Pause</button>
          <button @click="stop">Stop</button>
        </div>
        <div>
          <button @click="toggleDirection">Reverse</button>
          <button @click="getFrameCount"># of frames</button>
          <button @click="getTimeCount"># of seconds</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import CountdownJSON from './HappyNewYear/lotties/41812-christmas-tree.json'

export default {
  name: 'CustomControlsExample',
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      CountdownJSON,
      count: 0,
      direction: 'forward',
    }
  },
  methods: {
    play() {
      this.$refs['customControl'].play()
    },
    pause() {
      this.$refs['customControl'].pause()
    },
    stop() {
      this.$refs['customControl'].stop()
    },
    toggleDirection() {
      if (this.direction === 'forward') {
        this.pause()
        this.$refs['customControl'].setDirection('reverse')
        this.play()
        this.direction = 'reverse'
      } else {
        this.pause()
        this.$refs['customControl'].setDirection('forward')
        this.play()
        this.direction = 'forward'
      }
    },
    getFrameCount() {
      alert(
        `This animation has ${this.$refs['customControl'].getDuration(
          true,
        )} frames`,
      )
    },
    getTimeCount() {
      alert(
        `This animation takes ${this.$refs['customControl'].getDuration(
          false,
        )} seconds`,
      )
    },
  },
}
</script>
