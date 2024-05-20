<template>
  <div>
    <h1>Reaction timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @endTimer="endGame"/>
    <Results v-if="isShowingResult" :score="score"/>
  </div>
</template>
<script>
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";

export default {
  name: 'App',
  components: {Block, Results},
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      isShowingResult: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true
      this.isShowingResult = false
      console.log("Delay: " + this.delay)
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.isShowingResult = true
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

body {
  background-color: white;
}

button {
  background: green;
  color: white;
  border: 10px solid green;
  border-radius: 10px;
  padding: 2px 20px;
  cursor: pointer ;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>