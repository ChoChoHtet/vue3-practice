<script>
export default {
  name: "Results",
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 1000) {
      return this.rank = "Normal"
    } else if (this.score < 2000) {
      return this.rank = "Good"
    } else {
      return this.rank = "Great"
    }
  }
}
</script>

<template>
  <div class="result">
    <p>Reaction Time: {{ score }} milliseconds</p>
    <p> {{ rank }}</p>
  </div>
</template>

<style>
.result {
  text-align: center;
  margin: 16px auto;
  color: green;
  font-weight: bold;
}

</style>