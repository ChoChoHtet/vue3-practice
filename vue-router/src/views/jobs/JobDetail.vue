<script>
export default {
  name: "JobDetail",
  props: ["id"]
  /*data() {
    return {
      id: this.$route.params.id,
    }
  }*/
}
</script>

<template>
  <div class="job-detail">
    <h1>Job Detail Page</h1>
    <p>this job id is {{ id }}</p>
  </div>

</template>

<style scoped>

</style>