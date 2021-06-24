<template>
  <base-card>
    <div class="btn-tab">
      <base-button @click="getMovies(1)" :mode="val == 1 ? null : 'flat'"
        >Top Rated Movies</base-button
      >
      <base-button @click="getMovies(2)" :mode="val == 2 ? null : 'flat'"
        >Upcomming Movies</base-button
      >
    </div>
  </base-card>
  <div class="container" v-if="!moviesData.length">
    <div class="spinner-border"></div>
  </div>

  <component
    :is="'movie-container'"
    v-if="moviesData.length"
    :moviesList="moviesData"
  ></component>
</template>

<script>
import MovieContainer from "./MovieContainer.vue";
import movieService from "../../services/movies";

export default {
  components: {
    MovieContainer,
  },
  data() {
    return {
      selectedTab: "top-rated",
      moviesData: [],
      val: 1,
    };
  },
  provide() {
    return {
      moviesList: ["hello"],
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies(inp = 1) {
      this.moviesData = [];
      this.val = inp;
      if (this.val == 1) {
        this.moviesData = await movieService.topRatedMovies();
      } else {
        this.moviesData = await movieService.upcommingMovies();
      }
    },
  },
};
</script>

<style scoped>
.btn-tab {
  display: flex;
  justify-content: space-around;
}
.container {
  text-align: center;
}
.spinner-border {
  width: 5rem;
  height: 5rem;
}
</style>