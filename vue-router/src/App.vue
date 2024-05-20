<script>
export default {
  components: {},
  methods: {
    redirect() {
      this.$router.push({name: 'home'});
    },
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.go(1)
    },
  }
}
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink :to="{name:'jobs'}">Jobs</RouterLink>
    </nav>
    <button @click="redirect">Redirect</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>
    <RouterView/>
  </div>
</template>

<style scoped>

button {
  margin: 5px;
  border: none;
  padding: 10px 16px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
