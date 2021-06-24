<template>
  <the-header :title="'Movie App'" />
  <movie-tab />
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import MovieTab from "./components/movie-resources/MovieTab.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    MovieTab,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
}

html {
  font-family: "Roboto", sans-serif;
}
</style>
