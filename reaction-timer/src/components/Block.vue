<script>
export default {
  name: "Block",
  props: ['delay'],
  data() {
    return {
      isShowing: false,
      timer: null,
      reactionTime: 0
    }
  },
  //this will trigger when component is mounted to the DOM
  mounted() {
    console.log("Component mounted.")
    /**
     * will display block view after waiting a certain amount of time
     */
    setTimeout(() => {
      this.isShowing = true
      this.startTimer()
    }, this.delay)
  },
  updated() {
    console.log("Component updated")
  },
  unmounted() {
    console.log("Component unmounted.")
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer)
      console.log("Timer " + this.reactionTime)
      //Custom event Data
      this.$emit('endTimer', this.reactionTime)
    }
  }
}
</script>

<template>
  <div class="block" v-if="isShowing" @click="stopTimer">
    Click me
  </div>
</template>

<style>
.block {
  width: 400px;
  background: #0faf87;
  border-radius: 10px;
  margin: 40px auto;
  padding: 100px 0;
  text-align: center;
}

</style>