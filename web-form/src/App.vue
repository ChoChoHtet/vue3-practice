<script>
import SignUpForm from "@/components/SignUpForm.vue";

export default {
  name: 'App',
  components: {SignUpForm}
}
</script>

<template>
  <SignUpForm/>
</template>
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
  width: 100%;
  height: 100%;
  background-color: #d9d7d7;
}
</style>

