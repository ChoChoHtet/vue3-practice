<script>
export default {
  name: "JobsView",
  data() {
    return {
      jobs: [
      ]
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
        .then(res => res.json())
        .then(data => this.jobs = data)
        .then(error => console.log(error))
  }
}
</script>

<template>
  <div v-if="jobs.length" class="jobs-view">
    <h1>Jobs Position</h1>
    <div v-for="job in jobs" :key="job.id">
      <RouterLink :to="{name:'jobDetail',params:{id:job.id}}">
        <h2>{{ job.title }}</h2>
      </RouterLink>
    </div>
  </div>
  <div v-else>
    <p>Loading Jobs .....</p>
  </div>

</template>

<style scoped>

</style>
