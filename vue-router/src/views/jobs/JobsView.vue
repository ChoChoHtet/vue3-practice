<script>
export default {
  name: "JobsView",
  data() {
    return {
      jobs: [
        {id: 1, title: "Software Engineer", description: "Hello Software Engineer"},
        {id: 2, title: "Mobile Engineer", description: "Hello Software Engineer"},
        {id: 3, title: "Frontend Engineer", description: "Hello Software Engineer"}
      ]
    }
  }
}
</script>

<template>
  <div class="jobs-view">
    <h1>Jobs Position</h1>
    <div v-for="job in jobs" :key="job.id">
      <RouterLink :to="{name:'jobDetail',params:{id:job.id}}">
        <h2>{{ job.title }}</h2>
      </RouterLink>
    </div>
  </div>

</template>

<style scoped>

</style>