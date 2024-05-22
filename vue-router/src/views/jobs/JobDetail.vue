<script>
export default {
  name: "JobDetail",
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      job: null
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .then(error => console.log(error))
  }
}
</script>

<template>
  <div v-if="job" class="job-detail">
    <h1>{{ job.title }}</h1>
    <p>this job id is {{ id }}</p>
    <p> {{ job.description }}</p>
  </div>

</template>

<style scoped>

</style>
