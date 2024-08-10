<template>
  <b-container class="d-flex flex-column align-items-center my-5">
    <b-row>
      <b-col class="text-center">
        <h1 class="display-4 text-primary">Welcome to the Unicorn Weather Forecast</h1>
        <p class="lead text-secondary">
          Ever wondered what the weather is like in magical places like Rainbowville, Sparkle Town, or Glitter Peak? Here you get the weather forecast.
        </p>
        <p class="text-secondary">
          Log in to get the latest weather updates from some really funny places.
        </p>
        <router-link to="/login">
          <b-button variant="primary" class="mt-3">Log in to See the Forecast</b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
</style>
